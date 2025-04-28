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

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
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
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder=" "
          className="w-full rounded-md bg-[#181818] border border-white p-5 pr-12 focus:ring-2 focus:ring-white focus:outline-none peer"
        />
        <label
          htmlFor="name"
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-white bg-transparent"
        >
          Imię
        </label>
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
          placeholder=" "
          className="w-full rounded-md bg-[#181818] border border-white p-5 pr-12 focus:ring-2 focus:ring-white focus:outline-none peer"
        />
        <label
          htmlFor="email"
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-white bg-transparent"
        >
          Email
        </label>
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
          placeholder=" "
          className="w-full rounded-md bg-[#181818] border border-white  p-5 pr-12 focus:ring-2 focus:ring-white focus:outline-none peer"
        />
        <label
          htmlFor="phone"
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-white bg-transparent"
        >
          Telefon
        </label>
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
          placeholder=" "
          className="w-full p-5 rounded-md bg-[#181818] border border-white pr-12 focus:ring-2 focus:ring-white focus:outline-none peer resize-none"
        />
        <label
          htmlFor="message"
          className="absolute left-5 top-6 text-gray-400 text-base pointer-events-none transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-white bg-transparent"
        >
          Wiadomość
        </label>
        <span className="absolute right-4 top-6 flex items-center h-6  border-white text-white pointer-events-none">
          <FaEnvelope />
        </span>
      </div>

      <SubmitButton />
    </form>
  );
}
