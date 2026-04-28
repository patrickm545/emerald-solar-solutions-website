import { appendFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  normalizeContactFormValues,
  validateContactForm,
} from "@/lib/contact-form";
import { enforceRateLimit } from "@/lib/rate-limit";

const MAX_REQUESTS_PER_WINDOW = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const storageDirectory = join(process.cwd(), "storage");
const storageFile = join(storageDirectory, "contact-requests.jsonl");
const noStoreHeaders = {
  "Cache-Control": "no-store",
};

export const runtime = "nodejs";

type StoredContactFormValues = Omit<
  ReturnType<typeof normalizeContactFormValues>,
  "consentCheck"
>;

type ContactSubmissionRecord = {
  submittedAt: string;
  ipAddress: string;
  userAgent: string | null;
  source: "emerald-solar-solutions-website";
  values: StoredContactFormValues;
};

export async function POST(request: NextRequest) {
  const ipAddress = getClientIpAddress(request);
  const rateLimit = enforceRateLimit(
    ipAddress,
    MAX_REQUESTS_PER_WINDOW,
    RATE_LIMIT_WINDOW_MS,
  );

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        error:
          "Too many requests have been sent from this address. Please wait a few minutes and try again.",
      },
      {
        status: 429,
        headers: {
          ...noStoreHeaders,
          "Retry-After": String(rateLimit.retryAfterSeconds),
        },
      },
    );
  }

  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      {
        error: "Unsupported request format.",
      },
      {
        status: 415,
        headers: noStoreHeaders,
      },
    );
  }

  try {
    const body = await request.json();
    const values = normalizeContactFormValues(body);
    const fieldErrors = validateContactForm(values);

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        {
          error: "Please correct the highlighted fields and try again.",
          fieldErrors,
        },
        {
          status: 400,
          headers: noStoreHeaders,
        },
      );
    }

    if (values.consentCheck) {
      return NextResponse.json(
        {
          ok: true,
        },
        {
          headers: noStoreHeaders,
        },
      );
    }

    const submission: ContactSubmissionRecord = {
      submittedAt: new Date().toISOString(),
      ipAddress,
      userAgent: request.headers.get("user-agent"),
      source: "emerald-solar-solutions-website",
      values: {
        name: values.name,
        company: values.company,
        email: values.email,
        phone: values.phone,
        website: values.website,
        message: values.message,
      },
    };

    await deliverSubmission(submission);

    return NextResponse.json(
      {
        ok: true,
      },
      {
        headers: noStoreHeaders,
      },
    );
  } catch {
    return NextResponse.json(
      {
        error:
          "We could not process your request right now. Please try again in a moment.",
      },
      {
        status: 500,
        headers: noStoreHeaders,
      },
    );
  }
}

async function deliverSubmission(submission: ContactSubmissionRecord) {
  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL?.trim();

  if (webhookUrl) {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };
    const bearerToken = process.env.CONTACT_FORM_WEBHOOK_BEARER_TOKEN?.trim();

    if (bearerToken) {
      headers.Authorization = `Bearer ${bearerToken}`;
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(submission),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Upstream contact form delivery failed.");
    }

    return;
  }

  await mkdir(storageDirectory, { recursive: true });
  await appendFile(storageFile, `${JSON.stringify(submission)}\n`, "utf8");
}

function getClientIpAddress(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    const [firstAddress] = forwardedFor.split(",");

    if (firstAddress) {
      return firstAddress.trim();
    }
  }

  const realIp = request.headers.get("x-real-ip");

  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}
