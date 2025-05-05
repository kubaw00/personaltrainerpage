"use client";

import Image from "next/image";
import HamburgerButton from "./HumburgerButton";
import { scrollToSection } from "@/utils/scrollToSection";
import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="w-full flex items-center h-[90px] md:h-[120px] z-1000 fixed p-3 md:p-5  transition-transform duration-500 ${
       "
      style={{
        borderBottom: "1px solid",
        borderImage: "linear-gradient(to right, transparent, #DC252A 90%) 1",

        background:
          "linear-gradient(90deg,rgba(184, 184, 184, 1) 0%, rgba(255, 224, 224, 1) 100%)",
      }}
    >
      <div className="container h-auto max-w-6xl mx-auto text-black flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="Logo Trener Personalny Kraków - Łukasz Moczkodan"
          width={100}
          height={100}
          className="object-cover ml-3 "
          aria-label="Strona główna - Trener Personalny Kraków"
        />
        {/* <div className="hidden ml-4 w-100px sm:flex flex-col sm:items-center justify-center md:items-start">
          <h2 className="text-xl font-bold">ŁUKASZ MOCZKODAN </h2>
          <p className="text-[12px] font-medium">TRENER PERSONALNY</p>
        </div> */}

        <HamburgerButton ariaLabel="Otwórz menu nawigacji" />
        <ul className="hidden md:ml-10 lg:ml-30 md:flex md:justify-center lg:justify-around w-full justify-end space-x-5 lg:space-x-8 items-center">
          {[
            { text: "O\u00A0mnie", href: "#about" },
            { text: "Treningi personalne", href: "#trainings" },
            { text: "Najczęstsze pytania (FAQ)", href: "#questions" },
            { text: "Kontakt", href: "#contact" },
          ].map((item, index) => (
            <li key={index} className="pointer-events-auto">
              <Link
                href={item.href}
                scroll={false}
                className="group relative inline-flex items-center justify-center md:mr-4 text-black text-base font-bold tracking-wide transition-all duration-200 hover:text-[#DC252A] active:[#DC252A] cursor-pointer"
                aria-label={item.text}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                onTouchStart={(e) =>
                  e.currentTarget.classList.add("text-amber-400")
                }
                onTouchEnd={(e) =>
                  e.currentTarget.classList.remove("text-amber-400")
                }
                onMouseDown={(e) =>
                  e.currentTarget.classList.add("text-amber-400")
                }
                onMouseUp={(e) =>
                  e.currentTarget.classList.remove("text-amber-400")
                }
              >
                <span className="px-2 uppercase ">{item.text}</span>

                {/* kreska */}
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#DC252A] transition-all duration-300 group-hover:w-1/2 group-hover:left-0 animate-fade-in"></span>
                <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-[#DC252A] transition-all duration-300 group-hover:w-1/2 group-hover:right-0 animate-fade-in"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
