import type { ContactForm } from "./api.types";

const sum = (a: number, b: number) => {
  return a + b;
};

const submitForm = async (contactForm: ContactForm, isTest?: boolean) => {
  return await new Promise<{ success: boolean; message: string }>((resolve) => {
    console.log("Submitting form:", { ...contactForm });
    const success = Math.random() > 0.2;
    // test mode skips the timeout
    if (isTest) {
      resolve({
        success,
        message: success
          ? "Form submitted successfully"
          : "Failed to submit form",
      });
    }
    // simulate network delay
    setTimeout(() => {
      resolve({
        success,
        message: success
          ? "Form submitted successfully"
          : "Failed to submit form",
      });
    }, 3000);
  });
};

export { sum, submitForm };
