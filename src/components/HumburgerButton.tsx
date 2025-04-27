"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { scrollToSection } from "../utils/scrollToSection";

export default function HamburgerButton() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenMenu]);

  const onClick = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <>
      <button
        className="animate-jump cursor-pointer animate-twice animate-duration-500 animate-delay-500 mr-4 animate-ease-in-out flex md:hidden items-center justify-center bg-transparent w-14 h-14 z-50"
        onClick={onClick}
      >
        <div className="relative flex flex-col justify-between w-[40px] h-[40px]">
          <div
            className={`relative w-full h-[5%] transition-all duration-400 ${
              isOpenMenu ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"
            }`}
          >
            <span className="absolute left-0 bg-white w-full h-full"></span>
          </div>

          <div
            className={`relative w-full h-[5%] transition-all duration-400 ${
              isOpenMenu ? "translate-x-1/2 opacity-0" : " "
            }`}
          >
            <span className="absolute left-0 bg-white w-full h-full"></span>
          </div>

          <div
            className={`relative bg-white w-full h-[5%] transition-all duration-400 ${
              isOpenMenu ? "-rotate-45 -top-1/2 translate-y-1/2 " : "bottom-0"
            }`}
          >
            <span className="absolute left-0 bg-white w-full h-full"></span>
          </div>
        </div>
      </button>
      {isOpenMenu && (
        <>
          <div
            className=" md:hidden fixed inset-0 backdrop-blur-md z-40 transition-opacity "
            onClick={() => setIsOpenMenu(false)}
          ></div>
          <div
            className="md:hidden  animate-fade-right animate-once animate-duration-400  animate-ease-in-out fixed top-0 left-0 h-full w-4/5 bg-slate-950 z-100 shadow-lg transition-all duration-500"
            style={{
              transform: isOpenMenu ? "translateX(0)" : "translateX(-100%)",
            }}
            aria-hidden={!isOpenMenu}
            role="dialog"
          >
            <ul className="p-6 space-y-6 text-center mt-20 text-xl h-full flex flex-col items-center justify-start">
              {/* Pozwól na interakcje z linkami */}
              {[
                { text: "O mnie", href: "#about" },
                { text: "Treningi personalne", href: "#trainings" },
                { text: "Najczęstsze pytania (FAQ)", href: "#questions" },
                {
                  text: "Umów się na trening",
                  href: "#contact",
                  className:
                    "text-amber-300 animate-bounce animate-duration-700",
                },
              ].map((item, index) => (
                <li key={index} className="w-full pointer-events-auto">
                  <Link
                    href={item.href}
                    scroll={false}
                    className={`block py-3  hover:font-bold transition-colors duration-200 ${
                      item.className || ""
                    }`}
                    onClick={() => {
                      setIsOpenMenu(false);
                      scrollToSection(item.href);
                    }}
                    aria-label={item.text}
                  >
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
