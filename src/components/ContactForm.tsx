"use client";

import { useFormStatus } from "react-dom";
import { sendEmail } from "@/actions/sendEmail";
import { useActionState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const initialState = {
  message: "",
  success: false,
};

function SubmitButton({ ariaLabel }: { ariaLabel: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      aria-label={ariaLabel}
      className={`w-full py-2 px-4 rounded-md font-bold transition duration-300 border-2
        bg-transparent
        border-white text-white
        hover:bg-white hover:text-black hover:border-black
        active:bg-white active:text-black active:border-black
        ${
          pending
            ? "border-gray-400 text-gray-400 cursor-not-allowed"
            : "cursor-pointer"
        }
      `}
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
      {/* Komunikaty o stanie wysyłki */}
      <div aria-live="polite" className="sr-only">
        {state.message}
      </div>

      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Imię"
          className="w-full rounded-md bg-[#181818] border border-white p-5 pr-12 focus:ring-2 focus:ring-white focus:outline-none peer"
        />

        <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center h-6 text-white pointer-events-none">
          <FaUser />
        </span>
      </div>

      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Twój adres e-mail"
          className="w-full rounded-md bg-[#181818] border border-white p-5 pr-12 focus:ring-2 focus:ring-white focus:outline-none peer"
        />

        <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center h-6 text-white pointer-events-none">
          <MdAlternateEmail />
        </span>
      </div>

      <div className="relative">
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="Telefon"
          className="w-full rounded-md bg-[#181818] border border-white  p-5 pr-12 focus:ring-2 focus:ring-white focus:outline-none peer"
        />

        <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center h-6 text-white pointer-events-none">
          <FaPhone />
        </span>
      </div>

      <div className="relative">
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Jaki efekt byłby dla Ciebie naprawdę satysfakcjonujący?"
          className="w-full p-5 rounded-md bg-[#181818] border border-white pr-12 focus:ring-2 focus:ring-white focus:outline-none peer resize-none"
        />

        <span className="absolute right-4 top-6 flex items-center h-6  border-white text-white pointer-events-none">
          <FaEnvelope />
        </span>
      </div>

      {/* Zgoda na przetwarzanie danych osobowych */}
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="rodoConsent"
          name="rodoConsent"
          required
          className="mt-1 accent-red-500"
        />
        <label
          htmlFor="rodoConsent"
          className="text-sm text-gray-300 select-none"
        >
          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
          odpowiedzi na przesłane zapytanie zgodnie z{" "}
          <a
            href="/privacy-policy"
            target="_blank"
            className="underline text-red-800"
          >
            polityką prywatności
          </a>
          .
        </label>
      </div>

      <SubmitButton ariaLabel="Wyślij wiadomość" />
    </form>
  );
}
