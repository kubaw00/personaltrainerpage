import { useState } from "react";
import AnimationOnScroll from "./Observer";

export function FaqAccordion({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-4 md:hidden">
      {faqs.map((faq, idx) => (
        <AnimationOnScroll
          key={idx} // Moved key here
          classNameInView="animate-fade-left opacity-100"
          classNameNotInView="opacity-0"
        >
          <div className="cursor-pointer rounded-xl bg-[#181818] shadow-lg">
            <button
              className="flex w-full cursor-pointer items-center justify-between p-4 text-left font-bold text-gray-200 focus:outline-none"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              aria-expanded={openIdx === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              {faq.question}
              <span className="ml-2 text-xl text-[#DC252A]">
                {openIdx === idx ? "-" : "+"}
              </span>
            </button>
            {openIdx === idx && (
              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                className="animate-fade-in cursor-pointer p-4 pt-0 text-left break-words hyphens-auto text-gray-200"
              >
                {faq.answer}
              </div>
            )}
          </div>
        </AnimationOnScroll>
      ))}
    </div>
  );
}
