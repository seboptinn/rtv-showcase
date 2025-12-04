import { expect, test } from "vitest";
import { submitForm, sum } from "./api.ts";
import { contactFormSample1 } from "./data/api.test.data.ts";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Tests form submit functionality", async () => {
  const response = await submitForm(contactFormSample1, true);
  expect(response)?.toHaveProperty("success");
});

test("Should work 80%~ of the time", async () => {
  const response = await submitForm(contactFormSample1, true);
  expect(response?.success).toEqual(true);
});
