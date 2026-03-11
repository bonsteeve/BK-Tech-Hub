"use server";

export type BookCallState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialBookCallState: BookCallState = {
  status: "idle",
  message: "",
};

export async function submitBookCall(
  _prevState: BookCallState,
  formData: FormData,
): Promise<BookCallState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const businessName = String(formData.get("businessName") ?? "").trim();
  const projectGoal = String(formData.get("projectGoal") ?? "").trim();

  if (!name || !email || !businessName || !projectGoal) {
    return {
      status: "error",
      message: "Please complete all required fields.",
    };
  }

  const payload = {
    name,
    email,
    businessName,
    websiteUrl: String(formData.get("websiteUrl") ?? "").trim(),
    projectGoal,
    budgetRange: String(formData.get("budgetRange") ?? "").trim(),
  };

  try {
    console.info("Book call payload", payload);

    return {
      status: "success",
      message:
        "Thanks. We received your booking request and will confirm a call slot within one business day.",
    };
  } catch {
    return {
      status: "error",
      message: "Booking request failed. Please try again or email hello@bktechhub.com.",
    };
  }
}
