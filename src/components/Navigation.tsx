"use client";

import Image from "next/image";
import HamburgerButton from "./HumburgerButton";
import { scrollToSection } from "@/utils/scrollToSection";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-[90px] md:h-[120px] z-1000 fixed p-3 md:p-5 border-b-0 transition-transform duration-500 ${
        scrolled ? "bg-[#0c101c]" : "bg-[#1B1B25]/10"
      }`}
      style={{
        borderBottom: "1px solid",
        borderImage: !scrolled
          ? "linear-gradient(to right, #000, #bfa000 90%) 1"
          : undefined,
        background: scrolled ? "#0c101c" : undefined,
      }}
    >
      <div className="container h-auto max-w-6xl mx-auto text-white flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={49}
          height={49}
          style={{ width: "auto", height: "auto" }}
          className="object-contain ml-3"
        />
        <div className="hidden ml-4 w-100px sm:flex flex-col sm:items-center justify-center md:items-start">
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
                className="group relative inline-flex items-center justify-center md:mr-4 text-white text-base font-bold tracking-wide transition-all duration-200 hover:text-amber-400 active:text-amber-400 cursor-pointer"
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
                <span className="px-2 uppercase">{item.text}</span>

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
