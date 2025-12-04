import { useEffect, useState } from "react";
import type {
  ApiResponse,
  ContactForm as ContactFormType,
} from "../utils/api.types";
import { submitForm } from "../utils/api";
import Loader from "./Loader/Loader";
import Status from "./Status/Status";

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormType>();
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<ApiResponse>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData) {
      submitForm(formData)
        .then((response) => {
          setApiResponse(response);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(
      (prevData) =>
        ({
          ...prevData,
          [name]: value,
        }) as ContactFormType
    );

    setApiResponse(undefined);
  };

  useEffect(() => {
    console.log(" is loading ", isLoading);
  }, [isLoading]);

  return (
    <form
      className="flex flex-col gap-4 border p-4 rounded-md"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleInputChange} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Melding:</label>
        <textarea
          id="message"
          name="message"
          onChange={handleInputChange}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md"
        disabled={isLoading || apiResponse?.success}
      >
        Send inn {isLoading && <Loader />}
      </button>

      {apiResponse && <Status apiResponse={apiResponse} />}
    </form>
  );
};

export default ContactForm;
