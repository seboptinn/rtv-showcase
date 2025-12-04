import type { ContactForm } from "./api.types";

const sum = (a: number, b: number) => {
  return a + b;
};

const submitForm = async (contactForm: ContactForm) => {
  return await new Promise<{ success: boolean; message: string }>((resolve) => {
    console.log("Submitting form:", { ...contactForm });
    const success = Math.random() > 0.2;
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
