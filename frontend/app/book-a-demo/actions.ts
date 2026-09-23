"use server";

export type BookDemoState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialBookDemoState: BookDemoState = {
  status: "idle",
  message: "",
};

export async function submitBookDemo(
  _prevState: BookDemoState,
  formData: FormData,
): Promise<BookDemoState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const businessName = String(formData.get("businessName") ?? "").trim();
  const useCase = String(formData.get("useCase") ?? "").trim();

  if (!name || !email || !businessName || !useCase) {
    return {
      status: "error",
      message: "Please complete all required fields.",
    };
  }

  const payload = {
    name,
    email,
    businessName,
    whatsappNumber: String(formData.get("whatsappNumber") ?? "").trim(),
    useCase,
  };

  try {
    console.info("Book demo payload", payload);

    return {
      status: "success",
      message:
        "Thanks. We received your demo request and will confirm a slot within one business day.",
    };
  } catch {
    return {
      status: "error",
      message: "Demo request failed. Please try again or email info@bktechhub.com.",
    };
  }
}
