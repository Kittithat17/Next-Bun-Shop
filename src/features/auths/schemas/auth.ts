import { z } from "zod";

const MIN_PASSWORD_LENGTH = 6;
const SPECIAL_CHARS = '!@#$%^&*(),.?":{}|<>';
const MIN_NAME_LENGTH = 4;

const ERROR_MESSAGES = {
  name: `Name must be at least ${MIN_NAME_LENGTH} characters long`,
  email: {
    format: "Invalid email address",
    domain: "Email domain must be example.com",
  },
  password: {
    length: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`,
    specialChars: `Password must contain ${SPECIAL_CHARS} at least 1 special character`,
    uppercase: "Password must contain at least 1 uppercase letter",
    lowercase: "Password must contain at least 1 lowercase letter",
    number: "Password must contain at least 1 number",
  },
  comfirmPassword: "Passwords do not match",
};

const VALID_EMAIL = [
  'gmail.com',
  'hotmail.com',
  'outlook.com',
  'yahoo.com'
]

const isvalidemailDomain = (email: string) => {
  const domain = email ? email.split("@")[1].toLowerCase() : "";
  return VALID_EMAIL.includes(domain);
};

const passwordValidation = z
  .string()
  .regex(/[A-Z]/, { message: ERROR_MESSAGES.password.uppercase })
  .regex(/[a-z]/, { message: ERROR_MESSAGES.password.lowercase })
  .regex(/[0-9]/, { message: ERROR_MESSAGES.password.number })
  .min(MIN_PASSWORD_LENGTH, { message: ERROR_MESSAGES.password.length })
  .regex(new RegExp(`[${SPECIAL_CHARS}]`), {
    message: ERROR_MESSAGES.password.specialChars,
  });

export const signupschema = z
  .object({
    name: z
      .string()
      .optional()
      .refine((name) => !name || name.length >= MIN_NAME_LENGTH, {
        message: ERROR_MESSAGES.name,
      }),
    email: z
      .string()
      .email({ message: ERROR_MESSAGES.email.format })
      .refine((email) => isvalidemailDomain(email), {
        message: ERROR_MESSAGES.email.domain,
      }),
    password: passwordValidation,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: ERROR_MESSAGES.comfirmPassword,
    path: ["confirmPassword"],
  });
