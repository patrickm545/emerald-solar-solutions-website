"use client";

import type { FormEvent, HTMLAttributes } from "react";
import { useState } from "react";

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  website: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const websitePattern =
  /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[^\s]*)?$/i;

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.company.trim()) errors.company = "Please enter your company.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) errors.phone = "Please enter your phone number.";

  if (!values.website.trim()) {
    errors.website = "Please enter your website.";
  } else if (!websitePattern.test(values.website)) {
    errors.website = "Please enter a valid website URL.";
  }

  if (!values.message.trim()) {
    errors.message = "Please tell us a little about your goals.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please add a bit more detail so we can prepare.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsSubmitted(false);
      return;
    }

    const payload = {
      ...values,
      submittedAt: new Date().toISOString(),
      source: "emerald-solar-solutions-demo-form",
    };

    console.info("Emerald Solar Solutions demo request", payload);
    setIsSubmitted(true);
    setErrors({});
    setValues(initialValues);
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
            We have logged the form safely in your browser for now and can wire
            this to email, CRM, or a booking flow later.
          </p>
        </div>
      ) : null}

      <form className="mt-6 space-y-5" noValidate onSubmit={handleSubmit}>
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
              errors.message
                ? "border-rose-300/70"
                : "border-white/10"
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
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            type="submit"
          >
            Request Demo
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
  name: keyof FormValues;
  onChange: (field: keyof FormValues, value: string) => void;
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
