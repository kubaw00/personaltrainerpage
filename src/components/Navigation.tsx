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
        className="fixed z-[1000] flex h-[90px] w-full items-center bg-transparent p-3 opacity-100 transition-opacity duration-500 md:hidden"
        style={{
          borderBottom: "1px solid",
          borderImageSource:
            "linear-gradient(to right, transparent, #DC252A 90%)",
          borderImageSlice: 1,
        }}
      >
        <div className="container mx-auto flex h-auto max-w-6xl items-center justify-between text-white">
          <Image
            src="/logo.png"
            alt="Logo Trener Personalny Kraków - Łukasz Moczkodan"
            width={100}
            height={100}
            className="ml-3 object-cover"
            aria-label="Strona główna - Trener Personalny Kraków"
          />
          <div className="w-100px ml-4 hidden items-center justify-center sm:flex sm:flex-col md:hidden">
            <h2 className="text-xl font-bold">ŁUKASZ MOCZKODAN </h2>
            <p className="text-[12px] font-medium">TRENER PERSONALNY</p>
          </div>
          <HamburgerButton ariaLabel="Otwórz menu nawigacji" />
        </div>
      </nav>

      {/* DESKTOP NAV */}
      <nav
        className={`fixed z-[1000] hidden h-[120px] w-full items-center bg-transparent p-5 transition-all duration-700 md:flex ${
          desktopVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } `}
        style={{
          borderBottom: "1px solid",
          borderImageSource:
            "linear-gradient(to right, transparent, #DC252A 90%)",
          borderImageSlice: 1,
        }}
      >
        <div className="container mx-auto flex h-auto max-w-6xl items-center justify-between text-black">
          <Image
            src="/logo.png"
            alt="Logo Trener Personalny Kraków - Łukasz Moczkodan"
            width={100}
            height={100}
            className="ml-3 object-cover"
            aria-label="Strona główna - Trener Personalny Kraków"
          />
          <div className="items-left ml-4 flex w-[140px] flex-col justify-center text-white">
            <h2 className="text-xl font-bold">ŁUKASZ MOCZKODAN </h2>
            <p className="text-[12px] font-medium whitespace-nowrap">
              TRENER PERSONALNY
            </p>
          </div>
          <ul className="ml-10 flex grow-1 items-center justify-around gap-7">
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
                  className="group active:[#DC252A] relative inline-flex cursor-pointer items-center justify-center text-base font-bold tracking-wide text-black transition-all duration-200 hover:text-[#DC252A]"
                  aria-label={item.text}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  <span className="px-2 text-white uppercase">{item.text}</span>
                  <span className="animate-fade-in absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#DC252A] transition-all duration-300 group-hover:left-0 group-hover:w-1/2"></span>
                  <span className="animate-fade-in absolute right-1/2 bottom-0 h-[2px] w-0 bg-[#DC252A] transition-all duration-300 group-hover:right-0 group-hover:w-1/2"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
