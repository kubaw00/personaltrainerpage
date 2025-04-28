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
            className=" md:hidden fixed inset-0 backdrop-blur-lg   transition-opacity "
            onClick={() => setIsOpenMenu(false)}
          ></div>
          <div
            className="md:hidden animate-fade-right animate-once animate-duration-400 animate-ease-in-out fixed top-0 left-0 h-full w-4/5 shadow-lg transition-all duration-500"
            style={{
              transform: isOpenMenu ? "translateX(0)" : "translateX(-100%)",
              background: `radial-gradient(27% 29% at right, #0000 83%,#392800 85% 99%,#0000 101%) calc(10px/2) 10px,
                radial-gradient(27% 29% at left, #0000 83%,#392800 85% 99%,#0000 101%) calc(10px/-2) 10px,
                radial-gradient(29% 27% at top, #0000 83%,#392800 85% 99%,#0000 101%) 0 calc(10px/2),
                radial-gradient(29% 27% at bottom, #0000 83%,#392800 85% 99%,#0000 101%) 0 calc(10px/-2),
                #000000`,
              backgroundSize: "20px 20px",
            }}
            aria-hidden={!isOpenMenu}
            role="dialog"
          >
            <ul className="p-6 h-full space-y-12 text-center mt-20 text-xl flex flex-col items-center justify-start">
              {[
                { text: "O mnie", href: "#about", className: "text-white" },
                {
                  text: "Treningi personalne",
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
                    "text-[#fcb045] font-bold animate-bounce animate-duration-700",
                },
              ].map((item, index) => (
                <li key={index} className="w-full pointer-events-auto">
                  <Link
                    href={item.href}
                    scroll={false}
                    className={`block py-3 transition-colors duration-200 ${
                      item.className || ""
                    } hover:text-[#fcb045]`}
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
                    <span className="text-xl uppercase font-bold">
                      {item.text}
                    </span>
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
