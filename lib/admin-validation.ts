export type AdminLoginValues = {
  password: string;
  username: string;
};

export type AdminLoginErrors = Partial<Record<keyof AdminLoginValues, string>>;

export function normalizeAdminLoginValues(value: unknown): AdminLoginValues {
  const source =
    typeof value === "object" && value !== null
      ? (value as Partial<Record<keyof AdminLoginValues, unknown>>)
      : {};

  return {
    password: normalizeText(source.password, 200),
    username: normalizeText(source.username, 120),
  };
}

export function validateAdminLogin(
  values: AdminLoginValues,
): AdminLoginErrors {
  const errors: AdminLoginErrors = {};

  if (!values.username) {
    errors.username = "Enter your username.";
  }

  if (!values.password) {
    errors.password = "Enter your password.";
  }

  return errors;
}

function normalizeText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}
