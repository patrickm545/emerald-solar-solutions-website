"use client";

import type { FormEvent, HTMLAttributes } from "react";
import { useState } from "react";
import {
  type ContactFormErrors,
  type ContactFormValues,
  type PublicContactFormField,
  emptyContactFormValues,
  mainInterestOptions,
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
            Software Demo Request
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Tell us about your installer company
          </h3>
        </div>
        <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-100 sm:block">
          Built for installers
        </div>
      </div>

      {isSubmitted ? (
        <div className="rounded-[1.5rem] border border-emerald-400/30 bg-emerald-500/10 p-5 text-emerald-50">
          <p className="text-lg font-semibold">Thanks, your demo request is in.</p>
          <p className="mt-2 text-sm leading-7 text-emerald-50/80">
            We received your installer software enquiry and will review your
            company details before getting back to you.
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
            error={errors.companyName}
            label="Company name"
            name="companyName"
            onChange={updateField}
            value={values.companyName}
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
          <Field
            error={errors.website}
            inputMode="url"
            label="Website, if you have one"
            name="website"
            onChange={updateField}
            placeholder="yourcompany.ie"
            value={values.website}
          />
          <Field
            error={errors.installsPerMonth}
            inputMode="numeric"
            label="Number of installs per month"
            name="installsPerMonth"
            onChange={updateField}
            placeholder="e.g. 10-20"
            value={values.installsPerMonth}
          />
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-100">
            Main interest
          </span>
          <select
            className={`w-full rounded-[1.2rem] border bg-slate-900 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-300 focus:bg-slate-900 ${
              errors.mainInterest ? "border-rose-300/70" : "border-white/10"
            }`}
            name="mainInterest"
            onChange={(event) => updateField("mainInterest", event.target.value)}
            value={values.mainInterest}
          >
            <option value="">Choose one</option>
            {mainInterestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.mainInterest ? (
            <span className="mt-2 block text-sm text-rose-200">
              {errors.mainInterest}
            </span>
          ) : null}
        </label>

        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-6 text-slate-300">
            This form is for solar installation companies enquiring about
            Emerald Solar Solutions software.
          </p>
          <button
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:bg-emerald-200"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Sending..." : "Book a Software Demo"}
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
