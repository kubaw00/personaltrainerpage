"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { scrollToSection } from "../utils/scrollToSection";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

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
        className="animate-jump animate-twice animate-duration-500 animate-delay-500 animate-ease-in-out z-50 mr-4 flex h-14 w-14 cursor-pointer items-center justify-center bg-transparent md:hidden"
        onClick={onClick}
        aria-label={props.ariaLabel || "Otwórz menu nawigacji"}
        onTouchStart={(e) => e.currentTarget.classList.add("text-amber-400")}
        onTouchEnd={(e) => e.currentTarget.classList.remove("text-amber-400")}
        onMouseDown={(e) => e.currentTarget.classList.add("text-amber-400")}
        onMouseUp={(e) => e.currentTarget.classList.remove("text-amber-400")}
      >
        <div className="relative flex h-[40px] w-[40px] flex-col justify-between">
          <div
            className={`relative h-[5%] w-full transition-all duration-400 ${
              isOpenMenu ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
            }`}
          >
            <span className="absolute left-0 h-full w-full bg-white"></span>
          </div>

          <div
            className={`relative h-[5%] w-full transition-all duration-400 ${
              isOpenMenu ? "translate-x-1/2 opacity-0" : " "
            }`}
          >
            <span className="absolute left-0 h-full w-full bg-white"></span>
          </div>

          <div
            className={`relative h-[5%] w-full transition-all duration-400 ${
              isOpenMenu ? "-top-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
            }`}
          >
            <span className="absolute left-0 h-full w-full bg-white"></span>
          </div>
        </div>
      </button>
      {isOpenMenu && (
        <>
          <div
            className="transition-blur fixed inset-0 backdrop-blur-xl transition-opacity md:hidden"
            onClick={() => setIsOpenMenu(false)}
          ></div>
          <div
            className={
              "fixed top-0 left-0 h-full w-4/5 bg-black shadow-lg transition-all duration-500 md:hidden" +
              (isOpenMenu ? " animate-slide-in-left" : "")
            }
            style={{
              transform: isOpenMenu ? "translateX(0)" : "translateX(-100%)",

              backgroundSize: "20px 20px",
            }}
            aria-hidden={!isOpenMenu}
            role="dialog"
          >
            <ul className="mt-20 flex h-full flex-col items-center justify-start space-y-12 p-6 text-center text-xl">
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
                  text: "Ile to kosztuje?",
                  href: "#price",
                  className: "text-white",
                },
                {
                  text: "Skontaktuj się ze mną",
                  href: "#contact",
                  className:
                    "relative font-bold uppercase text-white px-6 py-2 bg-[#DC152A] skew-x-[-15deg] shadow-lg transition-all duration-200 hover:bg-[#8F0000] active:bg-[#8F0000] hover:text-white active:text-white border-none overflow-hidden group",
                  isSpecial: true,
                },
              ].map((item, index) => (
                <li key={index} className="pointer-events-auto w-full">
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
                          ? "block skew-x-[15deg] transition-transform duration-150 hover:translate-y-0.5 active:translate-y-0.5"
                          : "text-xl font-bold uppercase transition-transform duration-150 hover:translate-y-0.5 active:translate-y-0.5"
                      }
                    >
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="font-anton f absolute bottom-10 left-1/2 z-30 m-5 mx-auto flex w-full -translate-x-1/2 items-center justify-center gap-10 lg:hidden">
              <a
                href="mailto:lukasz.moczkodan@gmail.com"
                aria-label="Email"
                itemProp="email"
                target="_blank"
              >
                <button
                  className="flex cursor-pointer items-center gap-2 rounded-full border-none bg-[#DC252A] p-3 text-sm text-gray-300 shadow-lg transition duration-200 hover:bg-[#8F0000] hover:text-white active:bg-[#8F0000] active:text-white"
                  style={{ boxShadow: "0 2px 12px 0 #DC252A" }}
                >
                  <span>
                    <MdOutlineMailOutline size={18} />
                  </span>
                </button>
              </a>

              <a
                href="tel:511274140"
                aria-label="Telefon"
                itemProp="telephone"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button
                  className="flex cursor-pointer items-center gap-2 rounded-full border-none bg-[#DC252A] p-3 text-sm text-gray-300 shadow-lg transition duration-200 hover:bg-[#8F0000] hover:text-white active:bg-[#8F0000] active:text-white"
                  style={{ boxShadow: "0 2px 12px 0 #DC252A" }}
                >
                  <span>
                    <FaPhone size={12} />
                  </span>
                </button>
              </a>
            </div>
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
