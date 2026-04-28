"use client";

import type { FormEvent, HTMLAttributes } from "react";
import { useState } from "react";
import {
  type ContactFormErrors,
  type ContactFormValues,
  type PublicContactFormField,
  emptyContactFormValues,
  validateContactForm,
} from "@/lib/contact-form";

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyContactFormValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function updateField(field: keyof ContactFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setSubmitError(null);

    if (field === "consentCheck") {
      return;
    }

    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsSubmitted(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const body = (await response.json().catch(() => null)) as
        | {
            error?: string;
            fieldErrors?: ContactFormErrors;
          }
        | null;

      if (!response.ok) {
        if (body?.fieldErrors) {
          setErrors(body.fieldErrors);
        }

        setIsSubmitted(false);
        setSubmitError(
          body?.error ??
            "We could not process your request right now. Please try again in a moment.",
        );
        return;
      }

      setIsSubmitted(true);
      setErrors({});
      setValues(emptyContactFormValues);
    } catch {
      setIsSubmitted(false);
      setSubmitError(
        "We could not send your request right now. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-6 shadow-[0_28px_80px_rgba(2,6,23,0.55)] sm:p-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
            Demo Request
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Request a walkthrough
          </h3>
        </div>
        <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-100 sm:block">
          Response-ready lead system
        </div>
      </div>

      {isSubmitted ? (
        <div className="rounded-[1.5rem] border border-emerald-400/30 bg-emerald-500/10 p-5 text-emerald-50">
          <p className="text-lg font-semibold">Thanks, your request is in.</p>
          <p className="mt-2 text-sm leading-7 text-emerald-50/80">
            Your request was sent through our protected server-side form flow.
          </p>
        </div>
      ) : null}

      {submitError ? (
        <div className="mt-6 rounded-[1.5rem] border border-rose-300/40 bg-rose-500/10 p-5 text-rose-100">
          <p className="text-sm leading-7">{submitError}</p>
        </div>
      ) : null}

      <form className="mt-6 space-y-5" noValidate onSubmit={handleSubmit}>
        <label
          aria-hidden="true"
          className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        >
          Leave this field empty
          <input
            autoComplete="off"
            name="consentCheck"
            onChange={(event) => updateField("consentCheck", event.target.value)}
            tabIndex={-1}
            type="text"
            value={values.consentCheck}
          />
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            error={errors.name}
            label="Name"
            name="name"
            onChange={updateField}
            value={values.name}
          />
          <Field
            error={errors.company}
            label="Company"
            name="company"
            onChange={updateField}
            value={values.company}
          />
          <Field
            error={errors.email}
            inputMode="email"
            label="Email"
            name="email"
            onChange={updateField}
            type="email"
            value={values.email}
          />
          <Field
            error={errors.phone}
            inputMode="tel"
            label="Phone"
            name="phone"
            onChange={updateField}
            value={values.phone}
          />
        </div>

        <Field
          error={errors.website}
          inputMode="url"
          label="Website"
          name="website"
          onChange={updateField}
          placeholder="https://yourcompany.ie"
          value={values.website}
        />

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-100">
            Message
          </span>
          <textarea
            className={`min-h-36 w-full rounded-[1.2rem] border bg-white/5 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-300 focus:bg-white/10 ${
              errors.message ? "border-rose-300/70" : "border-white/10"
            }`}
            name="message"
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell us what counties you target, how many leads you want, or whether you need a full funnel or just the qualification form."
            value={values.message}
          />
          {errors.message ? (
            <span className="mt-2 block text-sm text-rose-200">
              {errors.message}
            </span>
          ) : null}
        </label>

        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-6 text-slate-300">
            This form is for demo requests only. It does not submit an official
            SEAI application or claim grant approval.
          </p>
          <button
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:bg-emerald-200"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Sending..." : "Request Demo"}
          </button>
        </div>
      </form>
    </div>
  );
}

type FieldProps = {
  error?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  label: string;
  name: PublicContactFormField;
  onChange: (field: keyof ContactFormValues, value: string) => void;
  placeholder?: string;
  type?: string;
  value: string;
};

function Field({
  error,
  inputMode,
  label,
  name,
  onChange,
  placeholder,
  type = "text",
  value,
}: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-100">
        {label}
      </span>
      <input
        className={`w-full rounded-[1.2rem] border bg-white/5 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white/10 ${
          error ? "border-rose-300/70" : "border-white/10"
        }`}
        inputMode={inputMode}
        name={name}
        onChange={(event) => onChange(name, event.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {error ? (
        <span className="mt-2 block text-sm text-rose-200">{error}</span>
      ) : null}
    </label>
  );
}
