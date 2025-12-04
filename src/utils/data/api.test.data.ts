import type { ContactForm } from "../api.types";

export const contactFormSample1: ContactForm = {
  email: "alice@example.com",
  name: "Alice Johnson",
  message: "Hi — I would like more information about your services.",
};

export const contactFormSample2: ContactForm = {
  email: "bob.smith+test@gmail.com",
  name: "Bob Smith",
  message: "Please sign me up for the newsletter.",
};

export const contactFormSample3: ContactForm = {
  email: "soren.akesson@domain.dk",
  name: "Søren Åkesson",
  message: "Hei! Kan dere gi meg prisinformasjon?",
};

// A sample with a longer message. lorem-ipsum library could be used for more complex cases.
export const contactFormSample4: ContactForm = {
  email: "support@company.co.uk",
  name: "Company Support",
  message:
    "This is a longer message intended to test handling of larger payloads. "
      .repeat(6)
      .trim(),
};

export const contactFormEmptyMessage: ContactForm = {
  email: "no-reply@domain.com",
  name: "No Message",
  message: "",
};

export const contactFormFixtures: ContactForm[] = [
  contactFormSample1,
  contactFormSample2,
  contactFormSample3,
  contactFormSample4,
  contactFormEmptyMessage,
];
