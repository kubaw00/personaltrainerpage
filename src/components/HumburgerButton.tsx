"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { scrollToSection } from "../utils/scrollToSection";

export default function HamburgerButton(props: { ariaLabel: string }) {
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
        aria-label={props.ariaLabel || "Otwórz menu nawigacji"}
        onTouchStart={(e) => e.currentTarget.classList.add("text-amber-400")}
        onTouchEnd={(e) => e.currentTarget.classList.remove("text-amber-400")}
        onMouseDown={(e) => e.currentTarget.classList.add("text-amber-400")}
        onMouseUp={(e) => e.currentTarget.classList.remove("text-amber-400")}
      >
        <div className="relative flex flex-col justify-between w-[40px] h-[40px]">
          <div
            className={`relative w-full h-[5%] transition-all duration-400 ${
              isOpenMenu ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"
            }`}
          >
            <span className="absolute left-0 bg-black w-full h-full"></span>
          </div>

          <div
            className={`relative w-full h-[5%] transition-all duration-400 ${
              isOpenMenu ? "translate-x-1/2 opacity-0" : " "
            }`}
          >
            <span className="absolute left-0  bg-black w-full h-full"></span>
          </div>

          <div
            className={`relative  bg-black w-full h-[5%] transition-all duration-400 ${
              isOpenMenu ? "-rotate-45 -top-1/2 translate-y-1/2 " : "bottom-0"
            }`}
          >
            <span className="absolute left-0  bg-black w-full h-full"></span>
          </div>
        </div>
      </button>
      {isOpenMenu && (
        <>
          <div
            className=" md:hidden fixed inset-0 backdrop-blur-xl transition-opacity transition-blur"
            onClick={() => setIsOpenMenu(false)}
          ></div>
          <div
            className={
              "md:hidden bg-black fixed top-0 left-0 h-full w-4/5 shadow-lg transition-all duration-500" +
              (isOpenMenu ? " animate-slide-in-left" : "")
            }
            style={{
              transform: isOpenMenu ? "translateX(0)" : "translateX(-100%)",

              backgroundSize: "20px 20px",
            }}
            aria-hidden={!isOpenMenu}
            role="dialog"
          >
            <ul className="p-6 h-full space-y-12 text-center mt-20 text-xl flex flex-col items-center justify-start">
              {[
                { text: "O mnie", href: "#about", className: "text-white" },
                {
                  text: "Co oferuję",
                  href: "#trainings",
                  className: "text-white",
                },
                {
                  text: "Najczęstsze pytania (FAQ)",
                  href: "#questions",
                  className: "text-white",
                },
                {
                  text: "Umów się na trening",
                  href: "#contact",
                  className:
                    "relative font-bold uppercase text-white px-6 py-2 bg-[#DC152A] skew-x-[-15deg] shadow-lg transition-all duration-200 hover:bg-[#8F0000] active:bg-[#8F0000] hover:text-white active:text-white border-none overflow-hidden group",
                  isSpecial: true,
                },
              ].map((item, index) => (
                <li key={index} className="w-full pointer-events-auto">
                  <Link
                    href={item.href}
                    scroll={false}
                    className={
                      item.isSpecial
                        ? `${item.className}`
                        : `block py-3 transition-transform duration-150 hover:-translate-y-1 active:-translate-y-1 ${
                            item.className || ""
                          } hover:font-extrabold`
                    }
                    style={
                      item.isSpecial
                        ? {
                            display: "inline-block",
                            borderRadius: 0,
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            boxShadow: "0 2px 12px 0 #DC252A",
                          }
                        : {}
                    }
                    onClick={() => {
                      setIsOpenMenu(false);
                      scrollToSection(item.href);
                    }}
                    aria-label={item.text}
                    onTouchStart={(e) =>
                      e.currentTarget.classList.add("font-bold")
                    }
                    onTouchEnd={(e) =>
                      e.currentTarget.classList.remove("font-bold")
                    }
                    onMouseDown={(e) =>
                      e.currentTarget.classList.add("font-bold")
                    }
                    onMouseUp={(e) =>
                      e.currentTarget.classList.remove("font-bold")
                    }
                  >
                    <span
                      className={
                        item.isSpecial
                          ? "skew-x-[15deg] block transition-transform duration-150 hover:translate-y-0.5 active:translate-y-0.5"
                          : "text-xl uppercase font-bold transition-transform duration-150 hover:translate-y-0.5 active:translate-y-0.5"
                      }
                    >
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      <style jsx global>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .transition-blur {
          transition: filter 200ms;
        }
      `}</style>
    </>
  );
}
