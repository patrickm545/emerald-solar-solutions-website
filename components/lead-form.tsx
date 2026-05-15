"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import {
  type InterestLevel,
  type PropertyType,
  type RoofSpace,
  type ShadingLevel,
  quoteEstimate,
} from "@/lib/quote-estimate";

type LeadFormValues = {
  propertyType: PropertyType;
  location: string;
  monthlyBill: string;
  roofSpace: RoofSpace;
  shading: ShadingLevel;
  batteryInterest: InterestLevel;
  evChargerInterest: InterestLevel;
  hotWaterDiverterInterest: InterestLevel;
  name: string;
  email: string;
  phone: string;
  note: string;
  consentCheck: string;
};

type LeadFormErrors = Partial<Record<keyof LeadFormValues, string>>;

const initialValues: LeadFormValues = {
  propertyType: "home",
  location: "",
  monthlyBill: "",
  roofSpace: "unknown",
  shading: "unknown",
  batteryInterest: "maybe",
  evChargerInterest: "maybe",
  hotWaterDiverterInterest: "maybe",
  name: "",
  email: "",
  phone: "",
  note: "",
  consentCheck: "",
};

const propertyOptions: Array<{ label: string; value: PropertyType }> = [
  { label: "Home", value: "home" },
  { label: "Business", value: "business" },
  { label: "Farm", value: "farm" },
  { label: "Other", value: "other" },
];

const roofSpaceOptions: Array<{ label: string; value: RoofSpace }> = [
  { label: "Small roof", value: "small" },
  { label: "Medium roof", value: "medium" },
  { label: "Large roof", value: "large" },
  { label: "Not sure", value: "unknown" },
];

const shadingOptions: Array<{ label: string; value: ShadingLevel }> = [
  { label: "Little shading", value: "low" },
  { label: "Some shading", value: "some" },
  { label: "Heavy shading", value: "heavy" },
  { label: "Not sure", value: "unknown" },
];

const interestOptions: Array<{ label: string; value: InterestLevel }> = [
  { label: "Yes", value: "yes" },
  { label: "Maybe", value: "maybe" },
  { label: "No", value: "no" },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d()[\]\-\s]{7,24}$/;

export function LeadForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const estimate = useMemo(
    () =>
      quoteEstimate({
        propertyType: values.propertyType,
        monthlyBill: Number(values.monthlyBill),
        roofSpace: values.roofSpace,
        shading: values.shading,
        batteryInterest: values.batteryInterest,
        evChargerInterest: values.evChargerInterest,
        hotWaterDiverterInterest: values.hotWaterDiverterInterest,
      }),
    [values],
  );

  function updateField<Field extends keyof LeadFormValues>(
    field: Field,
    value: LeadFormValues[Field],
  ) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitError(null);
  }

  function goNext() {
    const nextErrors = validateStep(step, values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStep((current) => Math.min(current + 1, 2));
  }

  function goBack() {
    setErrors({});
    setStep((current) => Math.max(current - 1, 0));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateStep(2, values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
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
        body: JSON.stringify({
          name: values.name,
          projectType: `${labelFor(propertyOptions, values.propertyType)} solar quote`,
          email: values.email,
          phone: values.phone,
          location: values.location,
          message: buildLeadMessage(values, estimate),
          consentCheck: values.consentCheck,
        }),
      });

      const body = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        setSubmitError(
          body?.error ??
            "We could not send your quote request right now. Please try again in a moment.",
        );
        return;
      }

      setIsSubmitted(true);
      setValues(initialValues);
      setStep(0);
      setErrors({});
    } catch {
      setSubmitError(
        "We could not send your quote request right now. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <EstimatePanel estimate={estimate} />

      <form
        className="rounded-[2rem] border border-white/10 bg-slate-950 p-6 text-white shadow-[0_28px_80px_rgba(2,6,23,0.45)] sm:p-8"
        noValidate
        onSubmit={handleSubmit}
      >
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

        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Solar quote request
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              {step === 0
                ? "Property details"
                : step === 1
                  ? "System options"
                  : "Free survey callback"}
            </h2>
          </div>
          <div className="flex gap-2" aria-label="Quote form progress">
            {[0, 1, 2].map((item) => (
              <span
                className={`h-2.5 w-10 rounded-full ${
                  item <= step ? "bg-emerald-300" : "bg-white/15"
                }`}
                key={item}
              />
            ))}
          </div>
        </div>

        {isSubmitted ? (
          <div className="mt-6 rounded-[1.35rem] border border-emerald-400/30 bg-emerald-500/10 p-5 text-emerald-50">
            <p className="text-lg font-semibold">Thanks, your quote request is in.</p>
            <p className="mt-2 text-sm leading-7 text-emerald-50/80">
              Emerald Solar Solutions will review the estimate details and follow up
              about the best next step.
            </p>
          </div>
        ) : null}

        {submitError ? (
          <div className="mt-6 rounded-[1.35rem] border border-rose-300/40 bg-rose-500/10 p-5 text-rose-100">
            <p className="text-sm leading-7">{submitError}</p>
          </div>
        ) : null}

        <div className="mt-6">
          {step === 0 ? (
            <StepOne errors={errors} updateField={updateField} values={values} />
          ) : null}
          {step === 1 ? (
            <StepTwo updateField={updateField} values={values} />
          ) : null}
          {step === 2 ? (
            <StepThree errors={errors} updateField={updateField} values={values} />
          ) : null}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-slate-300">
            Indicative estimate only. Final quote requires survey. Grant subject
            to SEAI approval.
          </p>
          <div className="flex gap-3">
            {step > 0 ? (
              <button
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                onClick={goBack}
                type="button"
              >
                Back
              </button>
            ) : null}
            {step < 2 ? (
              <button
                className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-200"
                onClick={goNext}
                type="button"
              >
                Continue
              </button>
            ) : (
              <button
                className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-200 disabled:cursor-not-allowed disabled:bg-emerald-100"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Sending..." : "Book Free Survey"}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

function StepOne({
  errors,
  updateField,
  values,
}: {
  errors: LeadFormErrors;
  updateField: <Field extends keyof LeadFormValues>(
    field: Field,
    value: LeadFormValues[Field],
  ) => void;
  values: LeadFormValues;
}) {
  return (
    <div className="grid gap-5">
      <SegmentedControl
        label="Property type"
        options={propertyOptions}
        value={values.propertyType}
        onChange={(value) => updateField("propertyType", value)}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          error={errors.location}
          label="County or Eircode area"
          onChange={(value) => updateField("location", value)}
          placeholder="Dublin, Cork, Galway..."
          value={values.location}
        />
        <TextField
          error={errors.monthlyBill}
          inputMode="numeric"
          label="Typical monthly bill in EUR"
          onChange={(value) => updateField("monthlyBill", value)}
          placeholder="160"
          value={values.monthlyBill}
        />
      </div>
    </div>
  );
}

function StepTwo({
  updateField,
  values,
}: {
  updateField: <Field extends keyof LeadFormValues>(
    field: Field,
    value: LeadFormValues[Field],
  ) => void;
  values: LeadFormValues;
}) {
  return (
    <div className="grid gap-6">
      <SegmentedControl
        label="Available roof space"
        options={roofSpaceOptions}
        value={values.roofSpace}
        onChange={(value) => updateField("roofSpace", value)}
      />
      <SegmentedControl
        label="Shading"
        options={shadingOptions}
        value={values.shading}
        onChange={(value) => updateField("shading", value)}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <SegmentedControl
          label="Battery storage"
          options={interestOptions}
          value={values.batteryInterest}
          onChange={(value) => updateField("batteryInterest", value)}
        />
        <SegmentedControl
          label="EV charger"
          options={interestOptions}
          value={values.evChargerInterest}
          onChange={(value) => updateField("evChargerInterest", value)}
        />
      </div>
      <SegmentedControl
        label="Hot water diverter"
        options={interestOptions}
        value={values.hotWaterDiverterInterest}
        onChange={(value) => updateField("hotWaterDiverterInterest", value)}
      />
    </div>
  );
}

function StepThree({
  errors,
  updateField,
  values,
}: {
  errors: LeadFormErrors;
  updateField: <Field extends keyof LeadFormValues>(
    field: Field,
    value: LeadFormValues[Field],
  ) => void;
  values: LeadFormValues;
}) {
  return (
    <div className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          error={errors.name}
          label="Name"
          onChange={(value) => updateField("name", value)}
          value={values.name}
        />
        <TextField
          error={errors.phone}
          inputMode="tel"
          label="Phone"
          onChange={(value) => updateField("phone", value)}
          value={values.phone}
        />
      </div>
      <TextField
        error={errors.email}
        inputMode="email"
        label="Email"
        onChange={(value) => updateField("email", value)}
        type="email"
        value={values.email}
      />
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-100">
          Anything useful before the survey?
        </span>
        <textarea
          className="min-h-28 w-full rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white/10"
          onChange={(event) => updateField("note", event.target.value)}
          placeholder="Roof notes, timing, bills, battery questions, hot water diverter, or grant questions."
          value={values.note}
        />
      </label>
    </div>
  );
}

function EstimatePanel({
  estimate,
}: {
  estimate: ReturnType<typeof quoteEstimate>;
}) {
  const metrics = [
    ["System size", estimate.systemSizeRange],
    ["Panel count", estimate.panelCountRange],
    ["Potential savings", estimate.annualSavingsRange],
    ["Payback range", estimate.paybackRange],
  ];

  return (
    <aside className="rounded-[2rem] border border-emerald-200/10 bg-[#17353a] p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
        Indicative estimate
      </p>
      <div className="mt-6 grid gap-4">
        {metrics.map(([label, value]) => (
          <div
            className="rounded-[1.35rem] border border-white/10 bg-[#0f2529] p-5"
            key={label}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              {label}
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-[1.35rem] border border-amber-200/20 bg-amber-200/10 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
          Grant support
        </p>
        <p className="mt-2 text-sm font-semibold leading-7 text-white">
          {estimate.grantSupport}
        </p>
      </div>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
        {estimate.assumptions.map((assumption) => (
          <li key={assumption}>{assumption}</li>
        ))}
      </ul>
    </aside>
  );
}

function SegmentedControl<Option extends string>({
  label,
  onChange,
  options,
  value,
}: {
  label: string;
  onChange: (value: Option) => void;
  options: Array<{ label: string; value: Option }>;
  value: Option;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium text-slate-100">{label}</legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <button
            className={`rounded-full border px-4 py-3 text-sm font-semibold ${
              option.value === value
                ? "border-emerald-300 bg-emerald-300 text-slate-950"
                : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
            }`}
            key={option.value}
            onClick={() => onChange(option.value)}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function TextField({
  error,
  inputMode,
  label,
  onChange,
  placeholder,
  type = "text",
  value,
}: {
  error?: string;
  inputMode?: "email" | "tel" | "numeric";
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  value: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-100">
        {label}
      </span>
      <input
        className={`w-full rounded-[1.2rem] border bg-white/5 px-4 py-3 text-base text-white outline-none placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white/10 ${
          error ? "border-rose-300/70" : "border-white/10"
        }`}
        inputMode={inputMode}
        onChange={(event) => onChange(event.target.value)}
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

function validateStep(step: number, values: LeadFormValues) {
  const errors: LeadFormErrors = {};

  if (step === 0) {
    if (!values.location.trim()) {
      errors.location = "Please enter your county or Eircode area.";
    }

    const bill = Number(values.monthlyBill);

    if (!values.monthlyBill.trim()) {
      errors.monthlyBill = "Please add a rough monthly bill.";
    } else if (!Number.isFinite(bill) || bill <= 0) {
      errors.monthlyBill = "Please enter a valid bill amount.";
    }
  }

  if (step === 2) {
    if (!values.name.trim()) errors.name = "Please enter your name.";

    if (!values.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!emailPattern.test(values.email.trim().toLowerCase())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!values.phone.trim()) {
      errors.phone = "Please enter your phone number.";
    } else if (!phonePattern.test(values.phone.trim())) {
      errors.phone = "Please enter a valid phone number.";
    }
  }

  return errors;
}

function buildLeadMessage(
  values: LeadFormValues,
  estimate: ReturnType<typeof quoteEstimate>,
) {
  return [
    "Website solar quote enquiry",
    "",
    `Property type: ${labelFor(propertyOptions, values.propertyType)}`,
    `Location: ${values.location}`,
    `Monthly bill: EUR ${values.monthlyBill}`,
    `Roof space: ${labelFor(roofSpaceOptions, values.roofSpace)}`,
    `Shading: ${labelFor(shadingOptions, values.shading)}`,
    `Battery interest: ${labelFor(interestOptions, values.batteryInterest)}`,
    `EV charger interest: ${labelFor(interestOptions, values.evChargerInterest)}`,
    `Hot water diverter interest: ${labelFor(interestOptions, values.hotWaterDiverterInterest)}`,
    "",
    "Indicative estimate:",
    `System size: ${estimate.systemSizeRange}`,
    `Panel count: ${estimate.panelCountRange}`,
    `Potential savings: ${estimate.annualSavingsRange}`,
    `Payback range: ${estimate.paybackRange}`,
    `Grant support: ${estimate.grantSupport}`,
    "",
    values.note ? `Customer note: ${values.note}` : "Customer note: None added",
    "",
    "Estimate is indicative only. Final quote requires survey. Grant subject to SEAI approval.",
  ].join("\n");
}

function labelFor<Option extends string>(
  options: Array<{ label: string; value: Option }>,
  value: Option,
) {
  return options.find((option) => option.value === value)?.label ?? value;
}
