"use client";

import { useFormStatus } from "react-dom";
import { sendEmail } from "@/actions/sendEmail";
import { useActionState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";

const initialState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className={`w-full py-2 px-4 rounded-md transition duration-300 ${
        pending
          ? "bg-gray-500 text-gray-300 cursor-not-allowed"
          : "bg-amber-500 text-white hover:bg-amber-600 cursor-pointer"
      }`}
    >
      {pending ? "Wysyłanie..." : "Wyślij wiadomość"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendEmail, initialState);

  useEffect(() => {
    if (state.message) {
      toast.dismiss(); // Zamknij poprzedni toast
      if (state.success) {
        toast.success(state.message);
      } else {
        toast.error(state.message);
      }
    }
  }, [state.message, state.success]);

  return (
    <form action={formAction} className="w-full mx-auto space-y-4 text-white">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Imię
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Imię..."
          className="w-full rounded-md bg-gray-800 border border-gray-700 p-5 focus:ring-2 focus:ring-amber-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder=" np. twojmail@gmail.com"
          className="w-full rounded-md bg-gray-800 border border-gray-700 p-5 focus:ring-2 focus:ring-amber-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="Numer telefonu"
          className="w-full rounded-md bg-gray-800 border border-gray-700  p-5 focus:ring-2 focus:ring-amber-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Cel treningowy oraz preferowane godziny treningu"
          className="w-full p-5 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-amber-500 focus:outline-none"
        />
      </div>

      <SubmitButton />
    </form>
  );
}
