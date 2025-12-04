import { useState } from "react";
import type { ContactForm as ContactFormType } from "../utils/api.types";
import { submitForm } from "../utils/api";

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormType>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    if (formData) {
      submitForm(formData).then((response) => {
        alert(response.message);
      });
    }
    

  };

  return (
    <form className="flex flex-col gap-4 border p-4 rounded-md" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <p>Name:</p>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            } as ContactFormType)
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <p>Email:</p>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            } as ContactFormType)
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <p>Melding:</p>
        <textarea
          id="message"
          name="message"
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value,
            } as ContactFormType)
          }
        />
      </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Send inn
        </button>

    </form>
  );
};

export default ContactForm;
