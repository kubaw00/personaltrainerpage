import { useState } from "react";

export function FaqAccordion({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="md:hidden flex flex-col gap-4">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="bg-[#181818] rounded-xl shadow-lg cursor-pointer"
        >
          <button
            className="w-full text-left p-4 font-bold text-gray-200 focus:outline-none flex justify-between items-center cursor-pointer"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            aria-expanded={openIdx === idx}
          >
            {faq.question}
            <span className="ml-2 text-[#DC252A]">
              {openIdx === idx ? "-" : "+"}
            </span>
          </button>
          {openIdx === idx && (
            <div className="p-4  pt-0 text-gray-200 animate-fade-in cursor-pointer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
