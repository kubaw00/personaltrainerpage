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
      className={`w-full rounded-md border-2 border-white bg-transparent px-4 py-2 font-bold text-white transition duration-300 hover:border-black hover:bg-white hover:text-black active:border-black active:bg-white active:text-black ${
        pending
          ? "cursor-not-allowed border-gray-400 text-gray-400"
          : "cursor-pointer"
      } `}
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
    <form action={formAction} className="mx-auto w-full space-y-4 text-white">
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
          className="peer w-full rounded-md border border-white bg-[#181818] p-5 pr-12 focus:ring-2 focus:ring-white focus:outline-none"
        />

        <span className="pointer-events-none absolute top-1/2 right-4 flex h-6 -translate-y-1/2 items-center text-white">
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
          className="peer w-full rounded-md border border-white bg-[#181818] p-5 pr-12 focus:ring-2 focus:ring-white focus:outline-none"
        />

        <span className="pointer-events-none absolute top-1/2 right-4 flex h-6 -translate-y-1/2 items-center text-white">
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
          className="peer w-full rounded-md border border-white bg-[#181818] p-5 pr-12 focus:ring-2 focus:ring-white focus:outline-none"
        />

        <span className="pointer-events-none absolute top-1/2 right-4 flex h-6 -translate-y-1/2 items-center text-white">
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
          className="peer w-full resize-none rounded-md border border-white bg-[#181818] p-5 pr-12 focus:ring-2 focus:ring-white focus:outline-none"
        />

        <span className="pointer-events-none absolute top-6 right-4 flex h-6 items-center border-white text-white">
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
            className="text-red-800 underline"
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
