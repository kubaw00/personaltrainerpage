"use client";

import Image from "next/image";
import HamburgerButton from "./HumburgerButton";
import { scrollToSection } from "@/utils/scrollToSection";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full h-[90px] md:h-[120px] z-100 fixed  bg-[#1B1B25] p-3 md:p-5">
      <div className="container h-auto max-w-6xl mx-auto text-white    flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={49}
          height={49}
          style={{ width: "auto", height: "auto" }}
          className="object-contain ml-3"
        />
        <div className="hidden ml-4 w-100px sm:flex flex-col  sm:items-center justify-center md:items-start">
          <h2 className="text-lg">ŁUKASZ MOCZKODAN </h2>
          <p className="text-[10px]">TRENER PERSONALNY</p>
        </div>

        <HamburgerButton />
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
                className="group relative inline-flex items-center justify-center md:mr-4 text-white text-base font-normal tracking-wide transition-all duration-200"
                aria-label={item.text}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                <span className="px-2">{item.text}</span>

                {/* kreska */}
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-1/2 group-hover:left-0 animate-fade-in"></span>
                <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-1/2 group-hover:right-0 animate-fade-in"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
