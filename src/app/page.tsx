"use client";

import Image from "next/image";
import Nav from "@/components/Navigation";
import { FaqAccordion } from "@/components/Accordion";

import {
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaHeartbeat,
  FaBrain,
} from "react-icons/fa";
import AnimationOnScroll from "@/components/Observer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { scrollToSection } from "@/utils/scrollToSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";
import {
  MdOutlineSportsGymnastics,
  MdPublishedWithChanges,
} from "react-icons/md";

import { CiBatteryFull } from "react-icons/ci";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import GlitchText from "@/components/GlitchText";

const sliderImages = [
  "/1_Easy-Resize.com (1)_Easy-Resize.com.jpg",
  "/2_Easy-Resize.com (4)_Easy-Resize.com.jpg",
  "/481682548_17873561865280084_5729706280772083147_n_Easy-Resize.com (1)_Easy-Resize.com.jpg",
  "/DSC00829_Easy-Resize.com_Easy-Resize.com.jpg",
  "/image00006_Easy-Resize.com.jpg",
  "/image00031_Easy-Resize.com_Easy-Resize.com.jpg",
  "/image00043_Easy-Resize.com_Easy-Resize.com.jpg",
  "/Messenger_creation_AE1B44C4-A954-4C11-B08A-B43258509316_Easy-Resize.com_Easy-Resize.com.jpg",
  "/Messenger_creation_F39F95DB-3554-41B8-9B41-32B8922C8825_Easy-Resize.com.jpg",
];

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        // Facebook gradient
        document.querySelectorAll("[data-fb-gradient]")?.forEach((span) => {
          const parent = span.closest(".group");
          if (parent) {
            parent.addEventListener("mouseenter", () => {
              (span as HTMLElement).style.opacity = "1";
              (span as HTMLElement).style.transform = "translate(0, 0)";
            });
            parent.addEventListener("mouseleave", () => {
              (span as HTMLElement).style.opacity = "0";
              (span as HTMLElement).style.transform = "translate(-100%, -100%)";
            });
            parent.addEventListener("mousedown", () => {
              (span as HTMLElement).style.opacity = "1";
              (span as HTMLElement).style.transform = "translate(0, 0)";
            });
            parent.addEventListener("mouseup", () => {
              (span as HTMLElement).style.opacity = "1";
              (span as HTMLElement).style.transform = "translate(0, 0)";
            });
          }
        });
        // Instagram gradient
        document.querySelectorAll("[data-ig-gradient]")?.forEach((span) => {
          const parent = span.closest(".group") as HTMLElement;
          if (parent) {
            parent.addEventListener("mouseenter", () => {
              (span as HTMLElement).style.opacity = "1";
              (span as HTMLElement).style.transform = "translate(0, 0)";
            });
            parent.addEventListener("mouseleave", () => {
              (span as HTMLElement).style.opacity = "0";
              (span as HTMLElement).style.transform = "translate(-100%, -100%)";
            });
            parent.addEventListener("mousedown", () => {
              (span as HTMLElement).style.opacity = "1";
              (span as HTMLElement).style.transform = "translate(0, 0)";
            });
            parent.addEventListener("mouseup", () => {
              (span as HTMLElement).style.opacity = "1";
              (span as HTMLElement).style.transform = "translate(0, 0)";
            });
          }
        });
      }, 0);
    }
  });

  return (
    <div className="flex flex-col items-center min-h-screen bg-black">
      <div className="w-full fixed top-0 left-0 z-50 ">
        <Nav />
      </div>

      <AnimationOnScroll
        classNameInView="animate-fade-right w-full opacity-100"
        classNameNotInView="opacity-0"
      >
        <section
          id="about"
          className="w-full relative transition-opacity duration-1000 bg-black min-h-screen"
          style={{
            background:
              "linear-gradient(90deg,rgba(0, 0, 16, 1) 0%, rgba(0, 0, 71, 1) 62%, rgba(0, 212, 255, 1) 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="absolute  inset-0 w-full h-full  lg:max-w-[1000px] pointer-events-none select-none z-0">
            <div className="absolute inset-0 bg-black opacity-0 z-10" />
            <Image
              src="/Adobe Express - file.png"
              alt="background"
              fill
              className="object-cover opacity-60  z-0"
              priority
            />
          </div>
          <div className="z-20 flex flex-col mt-[500px] md:mt-[400px]  w-full md:w-1/2  px-6 py-16 md:py-0 md:pl-16">
            <h1 className="text-gray-200 text-5xl font-extrabold  md:text-6xl  lg:text-7xl animate-fade-left animate-duration-[400ms] animate-delay-100 animate-ease-linear mb-6  lg:leading-15 md:font-bold">
              ŁUKASZ <span className="text-[#DC252A]">MOCZKODAN</span>
            </h1>
            <h2 className="text-gray-200 animate-fade-left animate-duration-[500ms]  animate-delay-400 animate-ease-linear text-balance sm:text-lg  md:font-lg md:text-xl lg:text-2xl">
              Pomagam osobom w kształtowaniu swojej sylwetki za pomącą treningu
              i zbilansowanej diety
              <br />
              Szczególnie do współpracy zachęcam osoby początkujące i traktujące
              aktywność fizyczną rekreacyjnie.
            </h2>
          </div>
        </section>
      </AnimationOnScroll>

      <section
        className=" md:flex-row  z-20 max-w-6xl md:mx-2  text-white container  lg:flex-row bg-black text-lg text-montserrat transition-transform duration-700  rounded-2xl shadow-2xl overflow-hidden"
        style={{
          boxShadow: "0px -30px 100px 60px #DC252A",
        }}
      >
        <h2 className="text-4xl m-10 font-extrabold text-center mb-12 text-white">
          CZYM SIĘ <span style={{ color: "#DC252A" }}>WYRÓŻNIAM?</span>
        </h2>

        <div className="flex flex-col md:flex-row md:justify-between w-full">
          <p className="leading-relaxed p-10 text-gray-200 lg:text-xl w-full md:w-1/2 flex-shrink-0">
            Nie jestem tu po to, żeby tylko rzeźbić sylwetki. Moją misją jest
            budowanie się ciała i głowy jednocześnie. Wiem, że wygląd to tylko
            część układanki - najważniejsze jest to, jak się czujesz na co
            dzień, jak postrzegasz siebie i jak wpływa to na Twoje życie. Na co
            dzień pracuję z osobami o różnorodnych celach — pomagam w redukcji
            tkanki tłuszczowej, budowie masy mięśniowej, poprawie sprawności,
            przygotowaniu do testów sprawnościowych czy powrocie do formy po
            urazach. Niezależnie od Twojego punktu wyjścia, znajdziemy najlepsze
            rozwiązanie dla Ciebie.
          </p>
          <div className="relative grow my-auto justify-center w-full h-[500px]">
            <Image
              alt="photo1"
              src="/Messenger_creation_A125B378-5B7A-4B5D-9CF4-33A85B91208E_Easy-Resize.com.jpg"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top w-full h-full rounded-none md:rounded-tl-2xl "
            />
          </div>
        </div>
      </section>

      <section
        id="trainings"
        className="md:mx-6 mt-30 max-w-6xl flex flex-col relative overflow-hidden bg-black py-10 md:py-20 px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
          CO <span style={{ color: "#DC252A" }}>OFERUJĘ?</span>
        </h2>

        <div className="relative max-w-6xl mx-auto bg-black rounded-2xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <div className="absolute left-0 top-0 w-full h-full" />
            <Image
              src="/victor-freitas-JbI04nYfaJk-unsplash.jpg"
              alt="trening-bg"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          {/* Kafelki z usługami */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 md:p-10">
            {/* Karta 1 */}
            <div className="group bg-gradient-to-br from-[#232323]/80 to-[#1a1a1a]/80 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#DC252A]/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-up [animation-delay:.1s] shadow-xl overflow-hidden relative">
              <Image
                src="/alexandra-tran-fS3tGOkp0xY-unsplash.jpg"
                alt="trening personalny"
                fill
                className="object-cover object-center absolute inset-0 w-full h-full opacity-30 group-hover:scale-105 transition-transform duration-500 z-0"
              />
              <div className="space-y-4 relative z-10">
                <h3 className="text-2xl font-extrabold text-white mb-3 drop-shadow-lg">
                  Indywidualny Trening Personalny
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg drop-shadow">
                  w profesjonalnym studiu treningowym
                </p>
              </div>
            </div>
            {/* Karta 2 */}
            <div className="group bg-gradient-to-br from-[#232323]/80 to-[#1a1a1a]/80 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#DC252A]/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-up [animation-delay:.3s] shadow-xl overflow-hidden relative">
              <Image
                src="/cyril-saulnier-TsVN31Dzyv4-unsplash.jpg"
                alt="plan treningowy"
                fill
                className="object-cover  object-center absolute inset-0 w-full h-full opacity-30 group-hover:scale-105 transition-transform duration-500 z-0"
              />
              <div className="space-y-4 relative z-10">
                <h3 className="text-2xl font-extrabold break-words text-white mb-3 drop-shadow-lg">
                  Spersonalizowany Plan Treningowy
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg drop-shadow">
                  tak byś miał efekty a także zachował energię na inne
                  aktywności
                </p>
              </div>
            </div>
            {/* Karta 3 */}
            <div className="group bg-gradient-to-br from-[#232323]/80 to-[#1a1a1a]/80 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#DC252A]/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-up [animation-delay:.5s] shadow-xl overflow-hidden relative">
              <Image
                src="/erica-steeves-PfQh55R0ZtE-unsplash.jpg"
                alt="plan dietetyczny"
                fill
                className="object-cover object-center absolute inset-0 w-full h-full opacity-30 group-hover:scale-105 transition-transform duration-500 z-0"
              />
              <div className="space-y-4 relative z-10">
                <h3 className="text-2xl font-extrabold text-white mb-3 drop-shadow-lg">
                  Elastyczny Plan Dietetyczny
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg drop-shadow">
                  dostosowany do Twoich potrzeb. Nie będziesz musiał się zmuszać
                  do jedzenia a jednocześnie nie będziesz chciał się przejadać.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-2 md:px-0 bg-black">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
          CO ZE MNĄ{" "}
          <span
            style={{
              color: "#DC252A",
            }}
          >
            OSIĄGNIESZ?
          </span>
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* 1 */}
          <div
            className="flex flex-col items-center text-center p-8 md:p-10 min-h-[260px]"
            style={{ background: "#000", color: "#fff" }}
          >
            <span className="mb-4 text-5xl animate-bounce ">
              <FaHeartbeat />
            </span>
            <h3 className="font-bold text-xl mb-2">
              Kompleksowa transformacja zdrowia
            </h3>
            <p className="text-base">
              Spersonalizowane plany żywieniowe i treningowe, dopasowane do
              Twoich unikalnych potrzeb, stanowią klucz do poprawy samopoczucia,
              wzmocnienia organizmu i podniesienia jakości codziennego życia
            </p>
          </div>
          {/* 2 */}
          <div
            className="flex flex-col items-center text-center p-8 md:p-10 min-h-[260px]"
            style={{ background: "#FFFFFF", color: "#000" }}
          >
            <span className="mb-4 text-5xl animate-bounce animate-delay-200">
              <MdOutlineSportsGymnastics />
            </span>
            <h3 className="font-bold text-xl mb-2">
              Sylwetka, o której marzysz
            </h3>
            <p className="text-base">
              Wspólnie wyrzeźbimy Twoje ciało – pomogę Ci pozbyć się
              nadprogramowych kilogramów i zbliżyć się do wymarzonego celu.
              Twoja idealna figura to nie tylko wygląd, ale nowy etap w życiu.
            </p>
          </div>
          {/* 3 */}
          <div
            className="flex flex-col items-center text-center p-8 md:p-10 min-h-[260px]"
            style={{ background: "#000", color: "#FFFFFF" }}
          >
            <span className="mb-4 text-5xl animate-bounce animate-delay-400">
              <FaBrain />
            </span>
            <h3 className="font-bold text-xl mb-2">Równowaga dla umysłu</h3>
            <p className="text-base">
              Połączenie regularnej aktywności fizycznej z odpowiednio
              zbilansowaną dietą redukuje napięcie nerwowe, wzmacnia odporność
              na stres i przekłada się na lepszą koncentrację oraz wewnętrzną
              harmonię.
            </p>
          </div>
          {/* 4 */}
          <div
            className="flex flex-col items-center text-center p-8 md:p-10 min-h-[260px]"
            style={{ background: "#FFFFFF", color: "#000" }}
          >
            <span className="mb-4 text-5xl animate-bounce animate-delay-600">
              <CiBatteryFull />
            </span>
            <h3 className="font-bold text-xl mb-2">Energia w każdym ruchu</h3>
            <p className="text-base">
              Dzięki dopasowanemu planowi żywieniowemu i indywidualnemu
              programowi treningowemu odzyskasz lekkość ciała, zwiększysz
              wytrzymałość i poczujesz się sprawniejszy w codziennych
              aktywnościach.
            </p>
          </div>
          {/* 5 */}
          <div
            className="flex flex-col items-center text-center p-8 md:p-10 min-h-[260px]"
            style={{ background: "#000", color: "#fff" }}
          >
            <span className="mb-4 text-5xl animate-bounce animate-delay-800">
              <MdPublishedWithChanges />
            </span>
            <h3 className="font-bold text-xl mb-2">
              Witalność na wysokim poziomie
            </h3>
            <p className="text-base">
              Chroniczne zmęczenie to sygnał, że organizm potrzebuje zmiany.
              Moja metoda łączy regenerujące posiłki z treningami, które nie
              tylko dodadzą Ci siły, ale też „naładują baterie” na cały dzień.
            </p>
          </div>
          {/* 6 */}
          <div
            className="flex flex-col items-center text-center p-8 md:p-10 min-h-[260px]"
            style={{ background: "#FFFFFF", color: "#000" }}
          >
            <span className="mb-4 text-5xl animate-bounce animate-delay-1000">
              <CgArrowsExpandUpRight />
            </span>
            <h3 className="font-bold text-xl mb-2">
              Harmonia w sferze intymnej
            </h3>
            <p className="text-base">
              Zmęczony organizm często traci ochotę na bliskość. Poprzez
              odpowiednio dobrane treningi i dietę wspieramy nie tylko formę
              fizyczną, ale też naturalne poczucie pewności siebie i satysfakcję
              z życia erotycznego.
            </p>
          </div>
        </div>
      </section>

      <h2 className="text-4xl m-5 font-extrabold text-center mb-12 text-white">
        JAK WYGLĄDAJĄ <span style={{ color: "#DC252A" }}>NASZE TRENINGI?</span>
      </h2>

      {/* SWIPER 3D SLIDER - FULL WIDTH, NAD FAQ */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        initialSlide={Math.floor(sliderImages.length / 2)}
        breakpoints={{
          0: { slidesPerView: 1 },
          350: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="w-full my-5 lg:!max-w-none lg:!px-0 lg:!mx-0 custom-swiper-nav"
      >
        {sliderImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-[370px] md:h-[450px] lg:h-[550px] flex items-center justify-center relative">
              <Image
                src={src}
                alt={`slider-img-${idx}`}
                fill
                className="object-cover rounded-2xl shadow-xl"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={idx === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* FAQ SECTION */}
      <section
        id="questions"
        className="w-full mt-15 max-w-3xl mx-auto mb-16 px-4 "
      >
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
          NAJCZĘSTSZE <span style={{ color: "#DC252A" }}>PYTANIA </span>
        </h2>
        {/* Accordion for mobile, normal view for md+ */}
        <FaqAccordion
          faqs={[
            {
              question: "Czy muszę mieć doświadczenie, żeby zacząć?",
              answer:
                "Nie! Treningi są dostosowane do Twojego poziomu — niezależnie od tego, czy dopiero zaczynasz, czy masz już za sobą pierwsze doświadczenia. Wszystkiego nauczysz się krok po kroku.",
            },
            {
              question: "Ile razy w tygodniu muszę trenować?",
              answer:
                "Jeśli zastanawiasz się nad częstotliwością treningów, spokojnie — wiele osób rozpoczyna od jednej sesji w tygodniu i to całkowicie wystarczający krok na start. Jeśli jednak zależy Ci na szybszych efektach, rekomenduję spotkania dwa razy w tygodniu — to optymalna częstotliwość, która daje najlepsze rezultaty przy zachowaniu balansu między treningiem a codziennym życiem. Jeśli masz bardzo ambitne cele lub chcesz przyspieszyć proces, istnieje także możliwość współpracy trzy razy w tygodniu, a dla najbardziej wymagających nawet cztery razy. Niczego jednak nie narzucam — dostosowujemy wszystko do Twoich możliwości i potrzeb.",
            },
            {
              question: "Czy dostosowujesz plan, jeśli coś mi nie pasuje?",
              answer:
                "Tak, każdy element współpracy — trening, plan żywieniowy czy nawet komunikacja — jest modyfikowany na bieżąco tak, żeby Ci służył, a nie przeszkadzał. Jesteśmy zespołem i słucham Twojego feedbacku.",
            },
            {
              question: "Co jeśli mam kontuzje lub ograniczenia zdrowotne?",
              answer:
                "W moim zespole współpracuję z doświadczonym fizjoterapeutą, dzięki czemu masz dostęp do kompleksowej opieki. Jeśli zajdzie potrzeba wykonania zabiegów, masaży czy specjalistycznych konsultacji, wszystko jesteśmy w stanie zorganizować w ramach współpracy. Twoje bezpieczeństwo i komfort są dla mnie priorytetem.",
            },
            {
              question: "Czy mogę trenować, jeśli mam napięty grafik?",
              answer:
                "Tak. Wspólnie znajdziemy rozwiązanie — możliwe są krótsze sesje, elastyczne godziny lub plan dostosowany do Twoich możliwości czasowych.",
            },
            {
              question: "Jak szybko zobaczę efekty?",
              answer:
                "Pierwsze zmiany — w energii, samopoczuciu i sile — możesz odczuć już po kilku tygodniach. Sylwetkowe zmiany stają się widoczne zwykle po 8–12 tygodniach regularnej pracy.",
            },
            {
              question: "Czy muszę stosować ścisłą dietę?",
              answer:
                "Nie. Otrzymasz plan żywieniowy, który ma być wsparciem, a nie utrudnieniem. Stawiamy na elastyczność i realne podejście — bez restrykcji, które odbierają radość z życia.",
            },
          ]}
        />
        <div className="hidden md:block">
          <div className="space-y-6">
            <AnimationOnScroll
              classNameInView="animate-fade-up opacity-100"
              classNameNotInView="opacity-0"
            >
              <div
                className="bg-[#181818] rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
                tabIndex={0}
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-200 mb-2">
                  Czy muszę mieć doświadczenie, żeby zacząć?
                </h3>
                <p className="text-gray-200">
                  Nie! Treningi są dostosowane do Twojego poziomu — niezależnie
                  od tego, czy dopiero zaczynasz, czy masz już za sobą pierwsze
                  doświadczenia. Wszystkiego nauczysz się krok po kroku.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              classNameInView="animate-fade-up opacity-100"
              classNameNotInView="opacity-0"
            >
              <div
                className="bg-[#181818] rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
                tabIndex={0}
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-200 mb-2">
                  Ile razy w tygodniu muszę trenować?
                </h3>
                <p className="text-gray-200">
                  Jeśli zastanawiasz się nad częstotliwością treningów,
                  spokojnie — wiele osób rozpoczyna od jednej sesji w tygodniu i
                  to całkowicie wystarczający krok na start. Jeśli jednak zależy
                  Ci na szybszych efektach, rekomenduję spotkania dwa razy w
                  tygodniu — to optymalna częstotliwość, która daje najlepsze
                  rezultaty przy zachowaniu balansu między treningiem a
                  codziennym życiem.
                  <br />
                  <br />
                  Jeśli masz bardzo ambitne cele lub chcesz przyspieszyć proces,
                  istnieje także możliwość współpracy trzy razy w tygodniu, a
                  dla najbardziej wymagających nawet cztery razy. Niczego jednak
                  nie narzucam — dostosowujemy wszystko do Twoich możliwości i
                  potrzeb.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              classNameInView="animate-fade-up opacity-100"
              classNameNotInView="opacity-0"
            >
              <div
                className="bg-[#181818] rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
                tabIndex={0}
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-200 mb-2">
                  Czy dostosowujesz plan, jeśli coś mi nie pasuje?
                </h3>
                <p className="text-gray-200">
                  Tak, każdy element współpracy — trening, plan żywieniowy czy
                  nawet komunikacja — jest modyfikowany na bieżąco tak, żeby Ci
                  służył, a nie przeszkadzał. Jesteśmy zespołem i słucham
                  Twojego feedbacku.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              classNameInView="animate-fade-up opacity-100"
              classNameNotInView="opacity-0"
            >
              <div
                className="bg-[#181818] rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
                tabIndex={0}
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-200 mb-2">
                  Co jeśli mam kontuzje lub ograniczenia zdrowotne?
                </h3>
                <p className="text-gray-200">
                  W moim zespole współpracuję z doświadczonym fizjoterapeutą,
                  dzięki czemu masz dostęp do kompleksowej opieki. Jeśli zajdzie
                  potrzeba wykonania zabiegów, masaży czy specjalistycznych
                  konsultacji, wszystko jesteśmy w stanie zorganizować w ramach
                  współpracy. Twoje bezpieczeństwo i komfort są dla mnie
                  priorytetem.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              classNameInView="animate-fade-up opacity-100"
              classNameNotInView="opacity-0"
            >
              <div
                className="bg-[#181818] rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
                tabIndex={0}
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-200 mb-2">
                  Czy mogę trenować, jeśli mam napięty grafik?
                </h3>
                <p className="text-gray-200">
                  Tak. Wspólnie znajdziemy rozwiązanie — możliwe są krótsze
                  sesje, elastyczne godziny lub plan dostosowany do Twoich
                  możliwości czasowych.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              classNameInView="animate-fade-up opacity-100"
              classNameNotInView="opacity-0"
            >
              <div
                className="bg-[#181818] rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
                tabIndex={0}
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-200 mb-2">
                  Jak szybko zobaczę efekty?
                </h3>
                <p className="text-gray-200">
                  Pierwsze zmiany — w energii, samopoczuciu i sile — możesz
                  odczuć już po kilku tygodniach. Sylwetkowe zmiany stają się
                  widoczne zwykle po 8–12 tygodniach regularnej pracy.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              classNameInView="animate-fade-up opacity-100"
              classNameNotInView="opacity-0"
            >
              <div
                className="bg-[#181818] rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
                tabIndex={0}
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-200 mb-2">
                  Czy muszę stosować ścisłą dietę?
                </h3>
                <p className="text-gray-200">
                  Nie. Otrzymasz plan żywieniowy, który ma być wsparciem, a nie
                  utrudnieniem. Stawiamy na elastyczność i realne podejście —
                  bez restrykcji, które odbierają radość z życia.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </section>
      {/* END FAQ SECTION */}

      <section className="w-full my-25 md:px-10  bg-gradient-to-br from-[#232323]/80 to-[#1a1a1a]/80  py-10 px-4    md:max-w-3xl lg:max-w-5xl  mx-auto my-10 bg-black/90 rounded-2xl shadow-2xl p-6 md:p-12 flex flex-col gap-12">
        <div className="flex justify-center space-x-2 text-[#DC252A] text-2xl">
          {[...Array(3)].map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
              className="inline-block"
            >
              <path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
            </svg>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl uppercase text-center font-bold text-white">
            3-miesięczna przemiana sylwetki
          </h2>
          <p className="text-gray-200 leading-relaxed">
            W 90 dni poprowadzę Cię przez kompleksową zmianę, w skład której
            wchodzą: treningi precyzyjnie dobrane do Twojego celu, możliwości i
            preferencji, plan żywieniowy będący wsparciem w osiąganiu Twoich
            celów - bez ciężaru i zbędnych wyrzeczeń, systematyczna analiza
            postępów i dostosowywanie planu do Twoich aktualnych potrzeb,
            wsparcie mentalne - bo zmiana sylwetki zaczyna się od zmiany sposobu
            myślenia, motywacja i narzędzia, które pomogą Ci wytrwać i cieszyć
            się drogą, a nie tylko celem. Nie ważne, czy Twoim marzeniem jest
            lepsza sylwetka, większa siła, sprawniejsze ciało czy po prostu
            codzienne lepsze samopoczucie - tutaj masz wszystko, czego
            potrzebujesz, żeby to osiągnąć.
          </p>
        </div>
        <div className="flex justify-center space-x-2 text-[#DC252A] text-2xl">
          {[...Array(3)].map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
              className="inline-block"
            >
              <path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
            </svg>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl uppercase text-center font-bold text-white">
            Gdzie przeprowadzam Treningi?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-5 items-center text-gray-200">
            <p className="font-bold max-w-[250px] text-center">
              Studio treningowe - Medical Training Studio
              <br />
              Iwona Odrowąża 26, Kraków
            </p>
            <a
              href="https://www.google.com/maps/dir//Medical+Training+Studio,+Iwona+Odrow%C4%85%C5%BCa+26,+30-009+Krak%C3%B3w/@50.0591081,19.9264005,13.46z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47165bab8a527da7:0x42ecff449136800d!2m2!1d19.9326814!2d50.0774607!3e0?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#DC252A] rounded-full px-6 py-2 bg-transparent text-[#DC252A] hover:bg-[#DC252A] hover:text-black transition-colors w-fit mt-2"
            >
              <svg
                viewBox="0 0 384 512"
                fill="currentColor"
                className="text-lg"
                height="1em"
                width="1em"
              >
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>
              Prowadź
            </a>
          </div>
        </div>
        <div className="flex justify-center space-x-2 text-[#DC252A] text-2xl">
          {[...Array(3)].map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
              className="inline-block"
            >
              <path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
            </svg>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl uppercase text-center font-bold text-white">
            Jaki jest koszt Treningu Personalnego?
          </h2>
          <p className="text-gray-200 leading-relaxed">
            To zależy kilku czynników, takich jak stopień zaawansowania i
            długość współpracy. Cennik ustalam osobiście z podopiecznym i jest
            to koszt od <span className="font-semibold">100 zł/h</span> w górę.
          </p>
        </div>
        <div className="h-96 w-full rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.674074145789!2d19.9626814!3d50.0774607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165bab8a527da7%3A0x42ecff449136800d!2sIwona%20Odrow%C4%85%C5%BCa%2026%2C%2030-009%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1714140000000!5m2!1spl!2spl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa - Medical Training Studio"
          ></iframe>
        </div>
      </section>

      <section
        style={{ boxShadow: "0px 10px 50px 30px #DC252A" }}
        className="w-full mb-25 flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#232323]/80 to-[#1a1a1a]/80 rounded-2xl shadow-2xl my-10 py-10 px-4 md:px-10 max-w-5xl mx-auto gap-8"
      >
        <div className="relative w-full md:w-1/2 h-[350px] md:h-[400px] rounded-2xl overflow-hidden flex-shrink-0">
          <Image
            src="/image00018_Easy-Resize.com.jpg"
            alt="Trener personalny - zdjęcie sekcji przed formularzem"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center rounded-2xl"
            priority={false}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start gap-4 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Zapraszam do kontaktu!
          </h2>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
            Jeśli masz pytania dotyczące współpracy, treningów lub diety –
            napisz śmiało! Odpowiem na każdą wiadomość i rozwieję Twoje
            wątpliwości. Zależy mi na indywidualnym podejściu i pełnym
            zrozumieniu Twoich potrzeb. Wspólnie ustalimy najlepszą drogę do
            osiągnięcia Twoich celów.
          </p>
          <ul className="list-disc pl-6 text-gray-300 text-base md:text-lg">
            <li>Odpowiadam zwykle w ciągu 24h</li>
            <li>Wszystkie dane są poufne</li>
            <li>Możesz napisać bez zobowiązań</li>
          </ul>
        </div>
      </section>

      <section
        id="contact"
        className="w-full mt-18 px-6 max-w-[800px] md:w-[600px] md:mx-6 sm:px-6 lg:px-8 mx-auto mb-10"
      >
        <h2 className="text-4xl  font-bold text-center mb-12 text-white">
          FORMULARZ <span style={{ color: "#DC252A" }}>KONTAKTOWY</span>
        </h2>
        <ContactForm />
      </section>

      <section className="w-full my-15 max-w-none bg-black/80  px-0 flex flex-col items-center relative overflow-x-visible overflow-y-visible">
        <div className="absolute inset-0 w-full h-full bg-black/80 -z-10" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          <span className="text-white">ZNAJDŹ MNIE NA PROFILACH </span>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                " radial-gradient(circle,rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)",
            }}
          >
            SPOŁECZNOŚCIOWYCH
          </span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
          Zajrzyj na mojego Facebooka i Instagrama, gdzie na bieżąco publikuję
          wiele przydatnych wskazówek dotyczących treningu i diety przeznaczonej
          dla osób prowadzących aktywny styl życia
        </p>
        <div className="w-full flex flex-col md:flex-row gap-16 justify-center items-center px-0 md:px-16 lg:px-32 xl:px-64 overflow-visible">
          {/* Instagram */}
          <Link
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[260px] max-w-md bg-black/80 rounded-xl flex flex-col items-center justify-center py-14 px-8 shadow-lg transition-transform hover:scale-105 group overflow-visible"
            onTouchStart={(e) => {
              const span = e.currentTarget.querySelector(
                "[data-ig-gradient]"
              ) as HTMLElement;
              if (span) {
                span.style.opacity = "1";
                span.style.transform = "translate(0, 0)";
              }
            }}
            onTouchEnd={(e) => {
              const span = e.currentTarget.querySelector(
                "[data-ig-gradient]"
              ) as HTMLElement;
              if (span) {
                span.style.opacity = "0";
                span.style.transform = "translate(-100%, -100%)";
              }
            }}
          >
            <div
              className="bg-white rounded-full w-28 h-28 flex items-center justify-center mb-6 relative overflow-hidden"
              style={{ boxShadow: "inset 0 0 0 2px #DC252A" }}
            >
              <span
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
                  borderRadius: "9999px",
                  opacity: 0,
                  transform: "translate(-100%, -100%)",
                  transition: "opacity 0.4s, transform 0.4s",
                }}
                data-ig-gradient
              ></span>
              <FaInstagram className="text-black text-5xl relative z-10" />
            </div>
            <span className="text-white font-extrabold text-xl tracking-wider">
              INSTAGRAM
            </span>
          </Link>
          {/* Facebook */}
          <Link
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[260px] max-w-md bg-black/80 rounded-xl flex flex-col items-center justify-center py-14 px-8 shadow-lg transition-transform hover:scale-105 group overflow-visible"
            onTouchStart={(e) => {
              const span = e.currentTarget.querySelector(
                "[data-fb-gradient]"
              ) as HTMLElement;
              if (span) {
                span.style.opacity = "1";
                span.style.transform = "translate(0, 0)";
              }
            }}
            onTouchEnd={(e) => {
              const span = e.currentTarget.querySelector(
                "[data-fb-gradient]"
              ) as HTMLElement;
              if (span) {
                span.style.opacity = "0";
                span.style.transform = "translate(-100%, -100%)";
              }
            }}
          >
            <div
              className="bg-white rounded-full w-28 h-28 flex items-center justify-center mb-6 relative overflow-hidden"
              style={{ boxShadow: "inset 0 0 0 2px #DC252A" }}
            >
              <span
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
                  borderRadius: "9999px",
                  opacity: 0,
                  transform: "translate(-100%, -100%)",
                  transition: "opacity 0.4s, transform 0.4s",
                }}
                data-fb-gradient
              ></span>
              <FaFacebook className="text-black text-5xl relative z-10" />
            </div>
            <span className="text-white font-extrabold text-xl tracking-wider">
              FACEBOOK
            </span>
          </Link>
        </div>
      </section>

      <footer
        style={{ boxShadow: "0px 0px 80px 40px #000000" }}
        className="w-full mt-10 bg-[#f5f6f7] py-15 px-4"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Logo i nazwa */}

          <GlitchText />

          {/* Nawigacja sekcji */}
          <nav className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 mb-8">
            {[
              { label: "O MNIE", section: "#about" },
              { label: "TRENINGI PERSONALNE", section: "#trainings" },
              { label: "NAJCZĘSTSZE PYTANIA (FAQ)", section: "#questions" },
              { label: "KONTAKT", section: "#contact" },
            ].map(({ label, section }) => (
              <button
                key={section}
                className="font-extrabold text-[#000000] text-base tracking-widest hover:text-[#DC252A] active:text-[#DC252A] transition-colors cursor-pointer"
                onClick={() => scrollToSection(section)}
                onMouseDown={(e) =>
                  e.currentTarget.classList.add("text-[#DC252A]")
                }
                onMouseUp={(e) =>
                  e.currentTarget.classList.remove("text-[#DC252A]")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("text-[#DC252A]")
                }
                onTouchStart={(e) =>
                  e.currentTarget.classList.add("text-[#DC252A]")
                }
                onTouchEnd={(e) =>
                  e.currentTarget.classList.remove("text-[#DC252A]")
                }
              >
                {label}
              </button>
            ))}
          </nav>
          {/* Ikony social media */}
          <div className="flex gap-8 items-center justify-center w-full mb-2">
            <Link
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-[#000000] text-2xl hover:text-[#DC252A] transition-colors" />
            </Link>
            <Link
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-[#000000] text-2xl hover:text-[#DC252A] transition-colors" />
            </Link>
            <Link href="tel:555900999" aria-label="Telefon">
              <FaPhone className="text-[#000000] text-2xl hover:text-[#DC252A] transition-colors" />
            </Link>
          </div>
        </div>
      </footer>
      {/* <style jsx global>{`
        .custom-swiper-nav .swiper-button-next,
        .custom-swiper-nav .swiper-button-prev {
          color: #dc252a;
          --swiper-navigation-color: #dc252a;
          filter: drop-shadow(0 2px 6px #0008);
        }
        .custom-swiper-nav .swiper-pagination-bullet {
          background: #dc252a;
          opacity: 0.5;
        }
        .custom-swiper-nav .swiper-pagination-bullet-active {
          background: #dc252a;
          opacity: 1;
          box-shadow: 0 0 0 2px #fff2;
        }
        .glitch-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: transparent;
        }
        .glitch {
          position: relative;
          font-size: 2.2rem;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: 5px;
          animation: shift 4s ease-in-out infinite alternate;
          z-index: 1;
        }
        .glitch:before {
          content: attr(data-glitch);
          position: absolute;
          top: 0;
          left: -2px;
          text-shadow: -1px 0 #00ffff;
          width: 100%;
          color: #dc252a;
          background: transparent;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
          animation: noise-before 3s infinite linear alternate-reverse;
        }
        .glitch:after {
          content: attr(data-glitch);
          position: absolute;
          top: 0;
          left: 2px;
          text-shadow: 1px 0 #dc252a;
          width: 100%;
          color: #dc252a;
          background: transparent;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
          animation: noise-after 2s infinite linear alternate-reverse;
        }
        @keyframes noise-before {
          0% {
            clip: rect(10px, 9999px, 20px, 0);
          }
          10% {
            clip: rect(30px, 9999px, 40px, 0);
          }
          20% {
            clip: rect(50px, 9999px, 60px, 0);
          }
          30% {
            clip: rect(70px, 9999px, 80px, 0);
          }
          40% {
            clip: rect(90px, 9999px, 100px, 0);
          }
          50% {
            clip: rect(110px, 9999px, 120px, 0);
          }
          60% {
            clip: rect(130px, 9999px, 140px, 0);
          }
          70% {
            clip: rect(150px, 9999px, 160px, 0);
          }
          80% {
            clip: rect(170px, 9999px, 180px, 0);
          }
          90% {
            clip: rect(190px, 9999px, 200px, 0);
          }
          100% {
            clip: rect(210px, 9999px, 220px, 0);
          }
        }
        @keyframes noise-after {
          0% {
            clip: rect(20px, 9999px, 30px, 0);
          }
          10% {
            clip: rect(40px, 9999px, 50px, 0);
          }
          20% {
            clip: rect(60px, 9999px, 70px, 0);
          }
          30% {
            clip: rect(80px, 9999px, 90px, 0);
          }
          40% {
            clip: rect(100px, 9999px, 110px, 0);
          }
          50% {
            clip: rect(120px, 9999px, 130px, 0);
          }
          60% {
            clip: rect(140px, 9999px, 150px, 0);
          }
          70% {
            clip: rect(160px, 9999px, 170px, 0);
          }
          80% {
            clip: rect(180px, 9999px, 190px, 0);
          }
          90% {
            clip: rect(200px, 9999px, 210px, 0);
          }
          100% {
            clip: rect(220px, 9999px, 230px, 0);
          }
        }
        @keyframes shift {
          0%,
          40%,
          44%,
          58%,
          61%,
          65%,
          69%,
          73%,
          100% {
            transform: skewX(0deg);
          }
          41% {
            transform: skewX(10deg);
          }
          42% {
            transform: skewX(-10deg);
          }
          59% {
            transform: skewX(40deg) skewY(10deg);
          }
          60% {
            transform: skewX(-40deg) skewY(-10deg);
          }
          63% {
            transform: skewX(10deg) skewY(-5deg);
          }
          70% {
            transform: skewX(-50deg) skewY(-20deg);
          }
          71% {
            transform: skewX(10deg) skewY(-10deg);
          }
        }
      `}</style> */}
    </div>
  );
}
