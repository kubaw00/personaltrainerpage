"use client";

import Image from "next/image";
import HamburgerButton from "./HumburgerButton";
import { scrollToSection } from "@/utils/scrollToSection";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  // Stan do animacji desktopowego nav po wejściu w md
  const [desktopVisible, setDesktopVisible] = useState(false);
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setDesktopVisible(true);
      else setDesktopVisible(false);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* MOBILE NAV */}
      <nav
        className="block md:hidden w-full flex items-center h-[90px] z-[1000] fixed p-3 transition-opacity duration-500 opacity-100 bg-black"
        style={{
          borderBottom: "1px solid",
          borderImageSource:
            "linear-gradient(to right, transparent, #DC252A 90%)",
          borderImageSlice: 1,
        }}
      >
        <div className="container h-auto max-w-6xl mx-auto text-white flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="Logo Trener Personalny Kraków - Łukasz Moczkodan"
            width={100}
            height={100}
            className="object-cover ml-3 "
            aria-label="Strona główna - Trener Personalny Kraków"
          />
          <div className="hidden sm:flex md:hidden ml-4 w-100px sm:flex-col items-center justify-center">
            <h2 className="text-xl font-bold">ŁUKASZ MOCZKODAN </h2>
            <p className="text-[12px] font-medium ">TRENER PERSONALNY</p>
          </div>
          <HamburgerButton ariaLabel="Otwórz menu nawigacji" />
        </div>
      </nav>

      {/* DESKTOP NAV */}
      <nav
        className={`hidden md:flex w-full  items-center h-[120px] z-[1000] fixed p-5 transition-all duration-700
          bg-transparent
          ${
            desktopVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }
        `}
        style={{
          borderBottom: "1px solid",
          borderImageSource:
            "linear-gradient(to right, transparent, #DC252A 90%)",
          borderImageSlice: 1,
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
          <div className="ml-4 w-100px text-white flex flex-col items-left justify-center">
            <h2 className="text-xl font-bold">ŁUKASZ MOCZKODAN </h2>
            <p className="text-[12px] font-medium">TRENER PERSONALNY</p>
          </div>
          <ul className="ml-10 flex justify-center w-full space-x-8 items-center">
            {[
              { text: "O\u00A0mnie", href: "#about" },
              { text: "Co oferuję", href: "#trainings" },
              { text: "Najczęstsze pytania (FAQ)", href: "#questions" },
              { text: "Kontakt", href: "#contact" },
            ].map((item, index) => (
              <li key={index} className="pointer-events-auto">
                <Link
                  href={item.href}
                  scroll={false}
                  className="group relative inline-flex items-center justify-center text-black text-base font-bold tracking-wide transition-all duration-200 hover:text-[#DC252A] active:[#DC252A] cursor-pointer"
                  aria-label={item.text}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  <span className="px-2 uppercase text-white">{item.text}</span>
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#DC252A] transition-all duration-300 group-hover:w-1/2 group-hover:left-0 animate-fade-in"></span>
                  <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-[#DC252A] transition-all duration-300 group-hover:w-1/2 group-hover:right-0 animate-fade-in"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
