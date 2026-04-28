export const publicContactFormFieldNames = [
  "name",
  "company",
  "email",
  "phone",
  "website",
  "message",
] as const;

export type PublicContactFormField = (typeof publicContactFormFieldNames)[number];

export type ContactFormValues = Record<PublicContactFormField, string> & {
  consentCheck: string;
};

export type ContactFormErrors = Partial<Record<PublicContactFormField, string>>;

export const emptyContactFormValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  website: "",
  message: "",
  consentCheck: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const websitePattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[^\s]*)?$/i;
const phonePattern = /^[+\d()[\]\-\s]{7,24}$/;

export function normalizeContactFormValues(
  value: unknown,
): ContactFormValues {
  const source =
    typeof value === "object" && value !== null
      ? (value as Partial<Record<keyof ContactFormValues, unknown>>)
      : {};

  return {
    name: normalizeText(source.name, 120),
    company: normalizeText(source.company, 160),
    email: normalizeText(source.email, 160).toLowerCase(),
    phone: normalizeText(source.phone, 40),
    website: normalizeText(source.website, 200),
    message: normalizeMultilineText(source.message, 4000),
    consentCheck: normalizeText(source.consentCheck, 120),
  };
}

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name) errors.name = "Please enter your name.";
  if (!values.company) errors.company = "Please enter your company.";

  if (!values.email) {
    errors.email = "Please enter your email.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone) {
    errors.phone = "Please enter your phone number.";
  } else if (!phonePattern.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.website) {
    errors.website = "Please enter your website.";
  } else if (!websitePattern.test(values.website)) {
    errors.website = "Please enter a valid website URL.";
  }

  if (!values.message) {
    errors.message = "Please tell us a little about your goals.";
  } else if (values.message.length < 20) {
    errors.message = "Please add a bit more detail so we can prepare.";
  }

  return errors;
}

function normalizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function normalizeMultilineText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\r\n/g, "\n").trim().slice(0, maxLength);
}
