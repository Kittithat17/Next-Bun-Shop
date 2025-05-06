"use server";

import { InnitailFormState } from "@/types/action";
import { signup } from "@/features/auths/db/auth";

export const authAction = async (
  _prevState: InnitailFormState,
  formData: FormData
) => {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  const result = await signup(rawData);
  return result && result.message
    ? { success: false, message: result.message, errors: result.error }
    : {
        success: true,
        message: rawData.confirmPassword
          ? "Account created successfully"
          : "Login successfully",
      };
};
