export const mainInterestOptions = [
  "AI lead generation",
  "quote generator",
  "SEAI grant workflow",
  "project management",
  "free website package",
  "full software package",
] as const;

export const publicContactFormFieldNames = [
  "name",
  "companyName",
  "email",
  "phone",
  "website",
  "installsPerMonth",
  "mainInterest",
] as const;

export type MainInterestOption = (typeof mainInterestOptions)[number];
export type PublicContactFormField = (typeof publicContactFormFieldNames)[number];

export type ContactFormValues = Record<PublicContactFormField, string> & {
  consentCheck: string;
};

export type ContactFormErrors = Partial<Record<PublicContactFormField, string>>;

export const emptyContactFormValues: ContactFormValues = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  website: "",
  installsPerMonth: "",
  mainInterest: "",
  consentCheck: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d()[\]\-\s]{7,24}$/;
const websitePattern =
  /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/[^\s]*)?$/i;

export function normalizeContactFormValues(
  value: unknown,
): ContactFormValues {
  const source =
    typeof value === "object" && value !== null
      ? (value as Partial<Record<keyof ContactFormValues, unknown>>)
      : {};

  return {
    name: normalizeText(source.name, 120),
    companyName: normalizeText(source.companyName, 160),
    email: normalizeText(source.email, 160).toLowerCase(),
    phone: normalizeText(source.phone, 40),
    website: normalizeText(source.website, 220),
    installsPerMonth: normalizeText(source.installsPerMonth, 80),
    mainInterest: normalizeText(source.mainInterest, 120),
    consentCheck: normalizeText(source.consentCheck, 120),
  };
}

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name) errors.name = "Please enter your name.";
  if (!values.companyName) errors.companyName = "Please enter your company name.";

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

  if (values.website && !websitePattern.test(values.website)) {
    errors.website = "Please enter a valid website or leave this blank.";
  }

  if (!values.installsPerMonth) {
    errors.installsPerMonth = "Please enter your approximate installs per month.";
  }

  if (!values.mainInterest) {
    errors.mainInterest = "Please choose your main interest.";
  } else if (!mainInterestOptions.includes(values.mainInterest as MainInterestOption)) {
    errors.mainInterest = "Please choose one of the listed interests.";
  }

  return errors;
}

function normalizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}
