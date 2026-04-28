"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type AdminLoginErrors = {
  password?: string;
  username?: string;
};

export function AdminLoginForm({ nextPath }: { nextPath?: string }) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<AdminLoginErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setErrors({});

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          username,
        }),
      });

      const body = (await response.json().catch(() => null)) as
        | {
            error?: string;
            fieldErrors?: AdminLoginErrors;
          }
        | null;

      if (!response.ok) {
        if (body?.fieldErrors) {
          setErrors(body.fieldErrors);
        }

        setSubmitError(
          body?.error ?? "Unable to sign in right now. Please try again.",
        );
        return;
      }

      const redirectTo = sanitizeRedirectTarget(nextPath);
      router.replace(redirectTo);
      router.refresh();
    } catch {
      setSubmitError("Unable to sign in right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="mt-8 space-y-5" noValidate onSubmit={handleSubmit}>
      <Field
        error={errors.username}
        label="Username"
        onChange={setUsername}
        type="text"
        value={username}
      />
      <Field
        error={errors.password}
        label="Password"
        onChange={setPassword}
        type="password"
        value={password}
      />

      {submitError ? (
        <div className="rounded-[1.2rem] border border-rose-300/40 bg-rose-500/10 p-4 text-sm text-rose-700">
          {submitError}
        </div>
      ) : null}

      <button
        className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-500"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}

type FieldProps = {
  error?: string;
  label: string;
  onChange: (value: string) => void;
  type: string;
  value: string;
};

function Field({ error, label, onChange, type, value }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-800">
        {label}
      </span>
      <input
        className={`w-full rounded-[1.2rem] border bg-slate-50 px-4 py-3 text-base text-slate-950 outline-none transition focus:border-emerald-500 ${
          error ? "border-rose-400" : "border-slate-200"
        }`}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        value={value}
      />
      {error ? (
        <span className="mt-2 block text-sm text-rose-700">{error}</span>
      ) : null}
    </label>
  );
}

function sanitizeRedirectTarget(value: string | null | undefined) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return "/";
  }

  if (value === "/admin/login") {
    return "/";
  }

  return value;
}
