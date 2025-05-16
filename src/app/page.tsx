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

import { MdLocationPin, MdOutlineMailOutline } from "react-icons/md";
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
import { IoMdCheckmark } from "react-icons/io";

const sliderImages = [
  "/pic1.jpg",
  "/pic2.jpg",
  "/pic3.jpg",
  "/pic4.jpg",
  "/pic5.jpg",
  "/pic6.jpg",
  "/pic7.jpg",
  "/pic8.jpg",
  "/pic9.jpg",
  "/pic10.jpg",
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
    <div className="flex min-h-screen flex-col items-center bg-black">
      <div className="fixed top-0 left-0 z-50 w-full">
        <Nav />
      </div>

      <AnimationOnScroll
        classNameInView="animate-fade-right w-full opacity-100"
        classNameNotInView="opacity-0"
      >
        <section
          id="hero"
          role="region"
          aria-label="hero"
          className="relative mt-0 min-h-screen w-full overflow-hidden bg-black pt-[90px] md:pt-[120px]"
          style={{ height: "calc(var(--vh) - 90px)" }}
        >
          <div className="top-[40%] right-[-400px] z-20 hidden lg:absolute lg:top-[15%] lg:block xl:right-[-10%]">
            <Image alt="arrow" src="/arrow.png" height={300} width={900} />
          </div>
          <div className="z-20 hidden lg:absolute lg:bottom-[5%] lg:left-[-45%] lg:block xl:left-[-30%]">
            <Image
              alt="Graficzny element ozdobny - strzałka wskazująca na trenera"
              src="/arrow.png"
              height={300}
              width={900}
            />
          </div>
          <div
            className="absolute inset-0 z-0 h-screen"
            style={{
              background:
                "repeating-conic-gradient(from 45deg, #171717 0% 25%, #000000 0% 50%)",
              backgroundSize: "25px 25px",
              backgroundColor: "#000000",
              WebkitMaskImage:
                "linear-gradient(to top, white 10%, transparent 60%)",
              maskImage: "linear-gradient(to top, white 10%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <div className="pointer-events-none relative aspect-square w-[90vw] max-w-[800px] overflow-hidden select-none md:w-[70vw] sm:landscape:w-[50vw] md:landscape:w-[60vw] lg:landscape:w-[60vw]">
            <Image
              src="/profilowe.jpg"
              alt="Łukasz Moczkodan - profesjonalny trener personalny z Krakowa w trakcie treningu"
              fill
              className="rounded-br-full object-cover"
              priority
            />
          </div>
          <div className="absolute top-2/3 left-1/2 z-30 flex -translate-x-1/2 -translate-y-2/3 transform flex-col px-1 py-16 md:left-2/3 md:py-0 lg:-translate-x-1/6 sm:landscape:left-2/3 lg:landscape:left-1/2">
            <h1 className="font-anton animate-fade-left animate-duration-[400ms] animate-delay-100 animate-ease-linear mb-6 max-w-[400px] text-6xl font-bold tracking-wide text-[#DC252A] md:text-7xl md:font-bold lg:text-8xl lg:leading-[1.2] [@media_(max-height:500px)_and_(orientation:landscape)]:text-4xl">
              ŁUKASZ MOCZKODAN
            </h1>
            <div className="relative">
              <h2 className="animate-fade-left animate-duration-[500ms] animate-delay-400 animate-ease-linear p-2 text-lg text-balance text-gray-200 md:text-xl lg:text-2xl [@media_(max-height:500px)_and_(orientation:landscape)]:text-sm">
                &quot;Pomagam normalnym ludziom osiągać nienormalnie dobre
                efekty – bez stresu i&nbsp;liczenia kalorii&quot;
              </h2>
              <span
                className="absolute top-0 left-0 block h-[3px] w-full"
                style={{
                  background: "#DC252A",
                }}
              />
              <span
                className="absolute bottom-0 left-0 block h-[3px] w-full"
                style={{
                  background: "#DC252A",
                }}
              />
            </div>
          </div>

          <div className="font-anton landscape absolute bottom-15 left-1/2 z-30 m-5 mx-auto flex w-full -translate-x-1/2 items-center justify-center gap-8 overflow-hidden [@media_(max-height:650px)_and_(orientation:landscape)]:hidden">
            <a
              href="#contact"
              aria-label="contact-form"
              itemProp="contact-form"
            >
              <button
                className="flex skew-x-[-15deg] cursor-pointer items-center gap-2 border-none bg-[#DC252A] p-3 text-sm text-gray-300 shadow-lg transition duration-200 hover:bg-[#8F0000] hover:text-white active:bg-[#8F0000] active:text-white"
                style={{ boxShadow: "0 2px 12px 0 #DC252A" }}
              >
                <span className="flex skew-x-[15deg] items-center gap-2">
                  Start bez zobowiązań <MdOutlineMailOutline size={18} />
                </span>
              </button>
            </a>

            <a
              href="tel:
              +48511274140"
              aria-label="Telefon"
              itemProp="telephone"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button
                className="flex skew-x-[-15deg] cursor-pointer items-center gap-2 border-none bg-[#DC252A] p-3 text-sm text-gray-300 shadow-lg transition duration-200 hover:bg-[#8F0000] hover:text-white active:bg-[#8F0000] active:text-white"
                style={{ boxShadow: "0 2px 12px 0 #DC252A" }}
              >
                <span className="flex skew-x-[15deg] items-center gap-2">
                  Zadzwoń <FaPhone size={12} />
                </span>
              </button>
            </a>
          </div>
        </section>
      </AnimationOnScroll>

      <section
        id="trainings"
        role="region"
        aria-label="Treningi personalne"
        className="relative mx-auto mt-20 mb-15 flex w-full max-w-6xl flex-col overflow-hidden bg-black px-4 py-10 md:py-15"
      >
        <h2 className="font-anton mb-20 text-center text-5xl font-extrabold tracking-wide text-white md:text-5xl lg:text-6xl">
          CO <span style={{ color: "#DC252A" }}>OFERUJĘ?</span>
        </h2>

        <div className="relative skew-y-[-3deg] overflow-hidden rounded-2xl border-2 border-[#DC252A] bg-black/70 bg-[url('/cooferuje.jpg')] bg-cover bg-center p-8 bg-blend-darken shadow-2xl md:p-12">
          <div className="skew-y-[3deg]">
            <h3 className="font-anton mb-6 text-center text-3xl font-extrabold tracking-wider text-[#DC252A] uppercase md:text-4xl">
              3-miesięczna przemiana sylwetki
            </h3>
            <p className="mx-auto my-15 mb-8 max-w-2xl text-center text-lg font-bold text-gray-200 md:text-xl">
              W&nbsp;90 dni poprowadzę Cię przez kompleksową zmianę w&nbsp;skład
              której wchodzą:
            </p>
            <ul className="mx-auto mb-8 max-w-2xl space-y-4 text-justify break-words hyphens-auto">
              <li className="flex items-start gap-3 text-lg md:text-xl">
                <IoMdCheckmark
                  size="2em"
                  className="mt-1 shrink-0 text-[#DC252A]"
                />
                <span className="text-gray-100">
                  treningi precyzyjnie dobrane do&nbsp;Twojego celu, możliwości
                  i&nbsp;preferencji
                </span>
              </li>
              <li className="flex items-start gap-3 text-lg text-green-400 md:text-xl">
                <IoMdCheckmark
                  size="2em"
                  className="mt-1 shrink-0 text-[#DC252A]"
                />
                <span className="text-gray-100">
                  plan żywieniowy będący wsparciem w&nbsp;osiąganiu Twoich
                  celów& -&nbsp;bez ciężaru i&nbsp;zbędnych wyrzeczeń
                </span>
              </li>
              <li className="flex items-start gap-3 text-lg text-green-400 md:text-xl">
                <IoMdCheckmark
                  size="2em"
                  className="mt-1 shrink-0 text-[#DC252A]"
                />
                <span className="text-gray-100">
                  systematyczna analiza postępów i&nbsp;dostosowywanie planu
                  do&nbsp;Twoich aktualnych potrzeb
                </span>
              </li>
              <li className="flex items-start gap-3 text-lg text-green-400 md:text-xl">
                <IoMdCheckmark
                  size="2em"
                  className="mt-1 shrink-0 text-[#DC252A]"
                />
                <span className="text-gray-100">
                  wsparcie mentalne -&nbsp;bo&nbsp;zmiana sylwetki zaczyna się
                  od&nbsp;zmiany sposobu myślenia
                </span>
              </li>
              <li className="flex items-start gap-3 text-lg text-green-400 md:text-xl">
                <IoMdCheckmark
                  size="2em"
                  className="mt-1 shrink-0 text-[#DC252A]"
                />
                <span className="text-gray-100">
                  motywacja i&nbsp;narzędzia, które pomogą Ci wytrwać
                  i&nbsp;cieszyć się drogą, a nie tylko celem
                </span>
              </li>
            </ul>
            <p className="mx-auto max-w-2xl text-justify text-lg break-words hyphens-auto text-gray-200 md:text-xl">
              Nie ważne, czy&nbsp;Twoim marzeniem jest lepsza sylwetka, większa
              siła, sprawniejsze ciało czy po&nbsp;prostu codzienne lepsze
              samopoczucie - tutaj masz wszystko, czego potrzebujesz, żeby
              to&nbsp;osiągnąć.
            </p>
          </div>
        </div>
      </section>

      <AnimationOnScroll
        classNameInView="animate-fade-up  opacity-100"
        classNameNotInView="opacity-0"
      >
        <section
          id="about"
          role="region"
          aria-label="Czym się wyróżniam"
          className="text-montserrat z-20 container mx-auto mt-5 max-w-6xl rounded-2xl bg-black pt-15 text-lg text-white shadow-2xl transition-transform duration-700 md:flex-row lg:flex-row"
          style={{
            boxShadow: "0px -30px 100px 60px #DC252A",
          }}
        >
          <h2 className="font-anton mx-5 mb-8 pt-10 text-center text-5xl leading-[1.3] font-extrabold tracking-wide text-white md:text-5xl lg:text-6xl">
            CZYM SIĘ <span style={{ color: "#DC252A" }}>WYRÓŻNIAM?</span>
          </h2>

          <div className="flex w-full flex-col md:flex-row md:justify-between">
            <div className="w-full p-10 md:w-1/2 md:max-w-[50%] md:flex-shrink-0">
              <p className="text-justify leading-relaxed break-words hyphens-auto text-gray-200 lg:text-xl">
                Nie jestem tu po&nbsp;to, żeby tylko rzeźbić sylwetki. Moją
                misją jest budowanie się ciała i&nbsp;głowy jednocześnie. Wiem,
                że&nbsp;wygląd to tylko część układanki - najważniejsze jest to,
                jak się czujesz na&nbsp;co dzień, jak postrzegasz siebie
                i&nbsp;jak wpływa to na&nbsp;Twoje życie. Na co&nbsp;dzień
                pracuję z&nbsp;osobami o&nbsp;różnorodnych celach - pomagam
                w&nbsp;redukcji tkanki tłuszczowej, budowie masy mięśniowej,
                poprawie sprawności, przygotowaniu
                do&nbsp;testów&nbsp;sprawnościowych czy&nbsp;powrocie
                do&nbsp;formy po&nbsp;urazach.Niezależnie od&nbsp;Twojego punktu
                wyjścia, znajdziemy najlepsze rozwiązanie dla Ciebie.
              </p>

              <div className="font-anton md m-5 mx-auto my-10 flex w-full items-center justify-around">
                <a
                  href="#contact"
                  aria-label="contact-form"
                  itemProp="contact-form"
                >
                  <button
                    className="flex skew-x-[-15deg] cursor-pointer items-center gap-2 border-none bg-[#DC252A] p-3 text-sm text-gray-300 shadow-lg transition duration-200 hover:bg-[#8F0000] hover:text-white active:bg-[#8F0000] active:text-white"
                    style={{ boxShadow: "0 2px 12px 0 #DC252A" }}
                  >
                    <span className="flex skew-x-[15deg] items-center gap-2">
                      {" "}
                      Start bez zobowiązań
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
                    className="flex skew-x-[-15deg] cursor-pointer items-center gap-2 border-none bg-[#DC252A] p-3 text-sm text-gray-300 shadow-lg transition duration-200 hover:bg-[#8F0000] hover:text-white active:bg-[#8F0000] active:text-white"
                    style={{ boxShadow: "0 2px 12px 0 #DC252A" }}
                  >
                    <span className="flex skew-x-[15deg] items-center gap-2">
                      Zadzwoń <FaPhone size={12} />
                    </span>
                  </button>
                </a>
              </div>
            </div>
            <div className="relative my-auto h-[550px] w-full md:flex-grow">
              <Image
                alt="Trener personalny Kraków - zdjęcie w sekcji o mnie"
                src="/czymsiewyrozniam.jpg"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-full w-full overflow-hidden rounded-none object-cover object-top"
              />
            </div>
          </div>
        </section>
      </AnimationOnScroll>

      <section
        id="achieve"
        className="mt-25 w-full bg-black px-2 py-16 md:px-0"
        role="region"
        aria-label="Co osiągniesz"
      >
        <h2 className="font-anton mb-20 text-center text-5xl leading-[1.3] font-extrabold tracking-wide text-white md:text-5xl lg:text-6xl">
          CO ZE MNĄ{" "}
          <span
            style={{
              color: "#DC252A",
            }}
          >
            OSIĄGNIESZ?
          </span>
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* 1 */}
          <div
            className="flex min-h-[260px] flex-col items-center p-8 text-center md:p-10"
            style={{ background: "#000", color: "#fff" }}
          >
            <span className="mb-4 animate-bounce text-5xl">
              <FaHeartbeat />
            </span>
            <h3 className="mb-2 text-xl font-bold">
              Kompleksowa transformacja zdrowia
            </h3>
            <p className="text-base">
              Spersonalizowane plany żywieniowe i&nbsp;treningowe, dopasowane do
              Twoich unikalnych potrzeb, stanowią klucz do&nbsp;poprawy
              samopoczucia, wzmocnienia organizmu i&nbsp;podniesienia jakości
              codziennego życia
            </p>
          </div>
          {/* 2 */}
          <div
            className="flex min-h-[260px] flex-col items-center p-8 text-center md:p-10"
            style={{ background: "#FFFFFF", color: "#000" }}
          >
            <span className="animate-delay-200 mb-4 animate-bounce text-5xl">
              <MdOutlineSportsGymnastics />
            </span>
            <h3 className="mb-2 text-xl font-bold">
              Sylwetka, o której marzysz
            </h3>
            <p className="text-base">
              Wspólnie wyrzeźbimy Twoje ciało – pomogę Ci pozbyć się
              nadprogramowych kilogramów i&nbsp;zbliżyć się do&nbsp;wymarzonego
              celu. Twoja idealna figura to nie tylko wygląd, ale nowy etap
              w&nbsp;życiu.
            </p>
          </div>
          {/* 3 */}
          <div
            className="flex min-h-[260px] flex-col items-center p-8 text-center md:p-10"
            style={{ background: "#000", color: "#FFFFFF" }}
          >
            <span className="animate-delay-400 mb-4 animate-bounce text-5xl">
              <FaBrain />
            </span>
            <h3 className="mb-2 text-xl font-bold">Równowaga dla umysłu</h3>
            <p className="text-base">
              Połączenie regularnej aktywności fizycznej z&nbsp;odpowiednio
              zbilansowaną dietą redukuje napięcie nerwowe, wzmacnia odporność
              na&nbsp;stres i&nbsp;przekłada się na&nbsp;lepszą koncentrację
              oraz wewnętrzną harmonię.
            </p>
          </div>
          {/* 4 */}
          <div
            className="flex min-h-[260px] flex-col items-center p-8 text-center md:p-10"
            style={{ background: "#FFFFFF", color: "#000" }}
          >
            <span className="animate-delay-600 mb-4 animate-bounce text-5xl">
              <CiBatteryFull />
            </span>
            <h3 className="mb-2 text-xl font-bold">
              Energia w&nbsp;każdym ruchu
            </h3>
            <p className="text-base">
              Dzięki dopasowanemu planowi żywieniowemu i&nbsp;indywidualnemu
              programowi treningowemu odzyskasz lekkość ciała, zwiększysz
              wytrzymałość i&nbsp;poczujesz się sprawniejszy w&nbsp;codziennych
              aktywnościach.
            </p>
          </div>
          {/* 5 */}
          <div
            className="flex min-h-[260px] flex-col items-center p-8 text-center md:p-10"
            style={{ background: "#000", color: "#fff" }}
          >
            <span className="animate-delay-800 mb-4 animate-bounce text-5xl">
              <MdPublishedWithChanges />
            </span>
            <h3 className="mb-2 text-xl font-bold">
              Witalność na&nbsp;wysokim poziomie
            </h3>
            <p className="text-base">
              Chroniczne zmęczenie to sygnał, że&nbsp;organizm potrzebuje
              zmiany. Moja metoda łączy&nbsp;regenerujące posiłki
              z&nbsp;treningami, które nie tylko dodadzą Ci siły, ale też
              „naładują baterie” na&nbsp;cały dzień.
            </p>
          </div>
          {/* 6 */}
          <div
            className="flex min-h-[260px] flex-col items-center p-8 text-center md:p-10"
            style={{ background: "#FFFFFF", color: "#000" }}
          >
            <span className="animate-delay-1000 mb-4 animate-bounce text-5xl">
              <CgArrowsExpandUpRight />
            </span>
            <h3 className="mb-2 text-xl font-bold">
              Harmonia w&nbsp;sferze intymnej
            </h3>
            <p className="text-base">
              Zmęczony organizm często traci ochotę na&nbsp;bliskość. Poprzez
              odpowiednio dobrane treningi i&nbsp;dietę wspieramy nie tylko
              formę fizyczną, ale też naturalne poczucie pewności siebie
              i&nbsp;satysfakcję z&nbsp;życia erotycznego.
            </p>
          </div>
        </div>
      </section>

      <h2 className="font-anton m-5 mt-20 mb-12 text-center text-5xl leading-[1.3] font-extrabold tracking-wide text-white md:text-5xl lg:text-6xl">
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
        className="custom-swiper-nav my-5 w-full lg:!mx-0 lg:!max-w-none lg:!px-0"
      >
        {sliderImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative flex h-[370px] w-full items-center justify-center md:h-[450px] lg:h-[550px]">
              <Image
                src={src}
                alt={`Trening personalny Kraków z trenerem Łukaszem Moczkodan - ${
                  idx === 0
                    ? "trening siłowy"
                    : idx === 1
                      ? "ćwiczenia funkcjonalne"
                      : idx === 2
                        ? "trening z hantlami"
                        : idx === 3
                          ? "ćwiczenia rozciągające"
                          : idx === 4
                            ? "trening cardio"
                            : idx === 5
                              ? "ćwiczenia stabilizacyjne"
                              : idx === 6
                                ? "trening obwodowy"
                                : idx === 7
                                  ? "ćwiczenia mobilności"
                                  : idx === 8
                                    ? "trening personalny dla kobiet"
                                    : "trening personalny dla mężczyzn"
                }`}
                fill
                className="rounded-2xl object-cover shadow-xl"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={idx === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section
        id="contact"
        role="region"
        aria-label="Formularz kontaktowy"
        className="mx-auto mt-20 mb-10 w-full max-w-[800px] px-6 py-10 sm:px-6 md:mx-6 md:w-[700px] lg:px-8"
      >
        <h2 className="font-anton mb-12 w-full text-center text-5xl leading-[1.3] font-bold tracking-wider text-white md:text-5xl">
          FORMULARZ <span style={{ color: "#DC252A" }}>KONTAKTOWY</span>
        </h2>
        <ContactForm />
      </section>

      {/* FAQ SECTION */}
      <section
        id="questions"
        role="region"
        aria-label="Najczęstsze pytania (FAQ)"
        className="mx-auto mb-16 w-full max-w-3xl px-4 py-10 md:mt-20 md:pt-10"
      >
        <h2 className="font-anton mb-12 text-center text-5xl leading-[1.3] font-extrabold tracking-wide text-white md:text-5xl lg:text-6xl">
          NAJCZĘSTSZE <span style={{ color: "#DC252A" }}>PYTANIA </span>
        </h2>
        {/* FAQ – dane strukturalne FAQ schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Czy&nbsp;muszę mieć doświadczenie, żeby zacząć?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nie! Treningi są dostosowane do&nbsp;Twojego poziomu — niezależnie od&nbsp;tego, czy&nbsp;dopiero zaczynasz, czy&nbsp;masz już za&nbsp;sobą pierwsze doświadczenia. Wszystkiego nauczysz się krok po&nbsp;kroku.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Ile razy w&nbsp;tygodniu muszę trenować?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Jeśli zastanawiasz się nad częstotliwością treningów, spokojnie — wiele osób rozpoczyna od&nbsp;jednej sesji w&nbsp;tygodniu i&nbsp;to całkowicie wystarczający krok na&nbsp;start. Jeśli jednak zależy Ci na&nbsp;szybszych efektach, rekomenduję spotkania dwa razy w&nbsp;tygodniu — to optymalna częstotliwość, która daje najlepsze rezultaty przy zachowaniu balansu między treningiem a codziennym życiem. Jeśli masz bardzo ambitne cele lub chcesz przyspieszyć proces, istnieje także&nbsp;możliwość współpracy trzy razy w&nbsp;tygodniu, a dla najbardziej wymagających nawet cztery razy. Niczego jednak nie narzucam — dostosowujemy wszystko do&nbsp;Twoich możliwości i&nbsp;potrzeb.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Czy&nbsp;dostosowujesz plan, jeśli coś mi nie pasuje?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Tak, każdy element współpracy — trening, plan żywieniowy czy&nbsp;nawet komunikacja — jest modyfikowany na&nbsp;bieżąco tak, żeby Ci służył, a nie przeszkadzał. Jesteśmy zespołem i&nbsp;słucham Twojego feedbacku.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Co jeśli mam kontuzje lub ograniczenia zdrowotne?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "W&nbsp;moim zespole współpracuję z&nbsp;doświadczonym fizjoterapeutą, dzięki czemu masz dostęp do&nbsp;kompleksowej opieki. Jeśli zajdzie potrzeba wykonania zabiegów, masaży czy&nbsp;specjalistycznych konsultacji, wszystko jesteśmy w&nbsp;stanie zorganizować w&nbsp;ramach współpracy. Twoje bezpieczeństwo i&nbsp;komfort są dla mnie priorytetem.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Czy&nbsp;mogę trenować, jeśli mam napięty grafik?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Tak. Wspólnie znajdziemy rozwiązanie — możliwe są krótsze sesje, elastyczne godziny lub plan dostosowany do&nbsp;Twoich możliwości czasowych.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Jak szybko zobaczę efekty?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pierwsze zmiany — w&nbsp;energii, samopoczuciu i&nbsp;sile — możesz odczuć już po&nbsp;kilku tygodniach. Sylwetkowe zmiany stają się widoczne zwykle po&nbsp;8–12 tygodniach regularnej pracy.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Czy&nbsp;muszę stosować ścisłą dietę?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nie. Otrzymasz plan żywieniowy, który ma być wsparciem, a nie utrudnieniem. Stawiamy na&nbsp;elastyczność i&nbsp;realne podejście — bez restrykcji, które odbierają radość z&nbsp;życia.",
                  },
                },
              ],
            }),
          }}
        />
        {/* Accordion for mobile, normal view for md+ */}
        <FaqAccordion
          faqs={[
            {
              question: "Czy muszę mieć doświadczenie, żeby zacząć?",
              answer:
                "Nie! Treningi są dostosowane do\u00A0Twojego poziomu - niezależnie od tego, czy dopiero zaczynasz, czy masz już za sobą pierwsze doświadczenia. Wszystkiego nauczysz się krok po\u00A0kroku.",
            },
            {
              question: "Ile razy w tygodniu muszę trenować?",
              answer:
                "Jeśli zastanawiasz się nad częstotliwością treningów, spokojnie - wiele osób rozpoczyna od jednej sesji w tygodniu i\u00A0to całkowicie wystarczający krok na start. Jeśli jednak zależy Ci na\u00A0szybszych efektach, rekomenduję spotkania dwa razy w\u00A0tygodniu - to\u00A0optymalna częstotliwość, która daje najlepsze rezultaty przy zachowaniu balansu między treningiem a\u00A0codziennym życiem. Jeśli masz bardzo ambitne cele lub chcesz przyspieszyć proces, istnieje także możliwość współpracy trzy razy w\u00A0tygodniu, a\u00A0dla najbardziej wymagających nawet cztery razy. Niczego jednak nie narzucam - dostosowujemy wszystko do\u00A0Twoich możliwości i\u00A0potrzeb.",
            },
            {
              question: "Czy dostosowujesz plan, jeśli coś mi nie pasuje?",
              answer:
                "Tak, każdy element współpracy - trening, plan żywieniowy czy nawet komunikacja - jest modyfikowany na\u00A0bieżąco tak, żeby Ci służył, a\u00A0nie przeszkadzał. Jesteśmy zespołem i\u00A0słucham Twojego feedbacku.",
            },
            {
              question: "Co jeśli mam kontuzje lub ograniczenia zdrowotne?",
              answer:
                "W moim zespole współpracuję z doświadczonym fizjoterapeutą, dzięki czemu masz dostęp do\u00A0kompleksowej opieki. Jeśli zajdzie potrzeba wykonania zabiegów, masaży czy specjalistycznych konsultacji, wszystko jesteśmy w\u00A0stanie zorganizować w\u00A0ramach współpracy. Twoje bezpieczeństwo i\u00A0komfort są dla mnie priorytetem.",
            },
            {
              question: "Czy mogę trenować, jeśli mam napięty grafik?",
              answer:
                "Tak. Wspólnie znajdziemy rozwiązanie -możliwe są krótsze sesje, elastyczne godziny lub plan dostosowany do\u00A0Twoich możliwości czasowych.",
            },
            {
              question: "Jak szybko zobaczę efekty?",
              answer:
                "Pierwsze zmiany - w\u00A0energii, samopoczuciu i\u00A0sile - możesz odczuć już po\u00A0kilku tygodniach. Sylwetkowe zmiany stają się widoczne zwykle po 8–12 tygodniach regularnej pracy.",
            },
            {
              question: "Czy muszę stosować ścisłą dietę?",
              answer:
                "Nie. Otrzymasz plan żywieniowy, który ma być wsparciem, a\u00A0nie utrudnieniem. Stawiamy na\u00A0elastyczność i\u00A0realne podejście - bez restrykcji, które odbierają radość z\u00A0życia.",
            },
          ]}
        />
        <div className="hidden md:block">
          <div className="space-y-6 text-justify break-words hyphens-auto">
            <AnimationOnScroll
              classNameInView="animate-fade-up opacity-100"
              classNameNotInView="opacity-0"
            >
              <div
                className="cursor-pointer rounded-xl bg-[#181818] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:-translate-y-2 focus:shadow-2xl active:-translate-y-2 active:shadow-2xl"
                tabIndex={0}
              >
                <h3 className="mb-2 text-lg font-bold text-gray-200 md:text-xl">
                  Czy&nbsp;muszę mieć doświadczenie, żeby zacząć?
                </h3>
                <p className="text-gray-200">
                  Nie! Treningi są dostosowane do&nbsp;Twojego poziomu -
                  niezależnie od&nbsp;tego, czy&nbsp;dopiero zaczynasz,
                  czy&nbsp;masz już za&nbsp;sobą pierwsze doświadczenia.
                  Wszystkiego nauczysz się krok po&nbsp;kroku.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              classNameInView="animate-fade-up opacity-100"
              classNameNotInView="opacity-0"
            >
              <div
                className="cursor-pointer rounded-xl bg-[#181818] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:-translate-y-2 focus:shadow-2xl active:-translate-y-2 active:shadow-2xl"
                tabIndex={0}
              >
                <h3 className="mb-2 text-lg font-bold text-gray-200 md:text-xl">
                  Ile razy w&nbsp;tygodniu muszę trenować?
                </h3>
                <p className="text-gray-200">
                  Jeśli zastanawiasz się nad częstotliwością treningów,
                  spokojnie - wiele osób rozpoczyna od&nbsp;jednej sesji
                  w&nbsp;tygodniu i&nbsp;to całkowicie wystarczający krok
                  na&nbsp;start. Jeśli jednak zależy Ci na&nbsp;szybszych
                  efektach, rekomenduję spotkania dwa razy w&nbsp;tygodniu
                  -&nbsp;to&nbsp; optymalna częstotliwość, która daje najlepsze
                  rezultaty przy zachowaniu balansu między treningiem
                  a&nbsp;codziennym życiem.
                  <br />
                  <br />
                  Jeśli masz bardzo ambitne cele lub chcesz przyspieszyć proces,
                  istnieje także&nbsp;możliwość współpracy trzy razy
                  w&nbsp;tygodniu, a&nbsp;dla najbardziej wymagających nawet
                  cztery razy. Niczego jednak nie narzucam -&nbsp;dostosowujemy
                  wszystko do&nbsp;Twoich możliwości i&nbsp;potrzeb.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              classNameInView="animate-fade-up opacity-100"
              classNameNotInView="opacity-0"
            >
              <div
                className="cursor-pointer rounded-xl bg-[#181818] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:-translate-y-2 focus:shadow-2xl active:-translate-y-2 active:shadow-2xl"
                tabIndex={0}
              >
                <h3 className="mb-2 text-lg font-bold text-gray-200 md:text-xl">
                  Czy&nbsp;dostosowujesz plan, jeśli coś mi nie pasuje?
                </h3>
                <p className="text-gray-200">
                  Tak, każdy element współpracy - trening, plan żywieniowy czy
                  nawet komunikacja - jest modyfikowany na&nbsp;bieżąco tak,
                  żeby Ci służył, a nie przeszkadzał. Jesteśmy zespołem
                  i&nbsp;słucham Twojego feedbacku.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              classNameInView="animate-fade-up opacity-100"
              classNameNotInView="opacity-0"
            >
              <div
                className="cursor-pointer rounded-xl bg-[#181818] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:-translate-y-2 focus:shadow-2xl active:-translate-y-2 active:shadow-2xl"
                tabIndex={0}
              >
                <h3 className="mb-2 text-lg font-bold text-gray-200 md:text-xl">
                  Co jeśli mam kontuzje lub ograniczenia zdrowotne?
                </h3>
                <p className="text-gray-200">
                  W&nbsp;moim zespole współpracuję z&nbsp;doświadczonym
                  fizjoterapeutą, dzięki czemu masz dostęp do&nbsp;kompleksowej
                  opieki. Jeśli zajdzie potrzeba wykonania zabiegów, masaży
                  czy&nbsp;specjalistycznych konsultacji, wszystko jesteśmy
                  w&nbsp;stanie zorganizować w&nbsp;ramach współpracy. Twoje
                  bezpieczeństwo i&nbsp;komfort są dla mnie priorytetem.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              classNameInView="animate-fade-up opacity-100"
              classNameNotInView="opacity-0"
            >
              <div
                className="cursor-pointer rounded-xl bg-[#181818] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:-translate-y-2 focus:shadow-2xl active:-translate-y-2 active:shadow-2xl"
                tabIndex={0}
              >
                <h3 className="mb-2 text-lg font-bold text-gray-200 md:text-xl">
                  Czy&nbsp;mogę trenować, jeśli mam napięty grafik?
                </h3>
                <p className="text-gray-200">
                  Tak. Wspólnie znajdziemy rozwiązanie - możliwe są krótsze
                  sesje, elastyczne godziny lub plan dostosowany do&nbsp;Twoich
                  możliwości czasowych.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              classNameInView="animate-fade-up opacity-100"
              classNameNotInView="opacity-0"
            >
              <div
                className="cursor-pointer rounded-xl bg-[#181818] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:-translate-y-2 focus:shadow-2xl active:-translate-y-2 active:shadow-2xl"
                tabIndex={0}
              >
                <h3 className="mb-2 text-lg font-bold text-gray-200 md:text-xl">
                  Jak szybko zobaczę efekty?
                </h3>
                <p className="text-gray-200">
                  Pierwsze zmiany - w&nbsp;energii, samopoczuciu i&nbsp;sile
                  -&nbsp;możesz odczuć już po&nbsp;kilku tygodniach. Sylwetkowe
                  zmiany stają się widoczne zwykle po&nbsp;8–12 tygodniach
                  regularnej pracy.
                </p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              classNameInView="animate-fade-up opacity-100"
              classNameNotInView="opacity-0"
            >
              <div
                className="cursor-pointer rounded-xl bg-[#181818] p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:-translate-y-2 focus:shadow-2xl active:-translate-y-2 active:shadow-2xl"
                tabIndex={0}
              >
                <h3 className="mb-2 text-lg font-bold text-gray-200 md:text-xl">
                  Czy&nbsp;muszę stosować ścisłą dietę?
                </h3>
                <p className="text-gray-200">
                  Nie. Otrzymasz plan żywieniowy, który ma być wsparciem,
                  a&nbsp;nie utrudnieniem. Stawiamy na&nbsp;elastyczność
                  i&nbsp;realne podejście -&nbsp;bez restrykcji, które odbierają
                  radość z&nbsp;życia.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </section>
      {/* END FAQ SECTION */}

      <section
        id="location"
        className="relative mx-auto my-12 flex w-full max-w-5xl flex-col overflow-hidden bg-black p-2 py-10 md:py-20"
        role="region"
        aria-label="Lokalizacja treningów"
      >
        <div className="relative skew-y-[-3deg] overflow-hidden rounded-2xl border-2 border-[#DC252A] bg-black/80 bg-[url('/gdzieprzeprowadzamtreningi.jpg')] bg-cover bg-center p-8 bg-blend-darken shadow-2xl md:p-12">
          <div className="skew-y-[3deg]">
            <h3 className="font-anton mt-10 mb-10 text-center text-3xl font-extrabold tracking-wider text-[#DC252A] uppercase md:text-4xl lg:text-5xl">
              Gdzie przeprowadzam Treningi?
            </h3>
            <div className="mb-8 flex flex-col items-center justify-center gap-8 md:flex-row">
              <div className="flex flex-1 flex-col items-center">
                <p className="mb-4 text-center text-lg font-bold text-gray-200 md:text-xl">
                  Studio treningowe - Medical Training Studio
                  <br />
                  Iwona Odrowąża 26, Kraków
                </p>
                <a
                  href="https://www.google.com/maps/dir//Medical+Training+Studio,+Iwona+Odrow%C4%85%C5%BCa+26,+30-009+Krak%C3%B3w/@50.0591081,19.9264005,13.46z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47165bab8a527da7:0x42ecff449136800d!2m2!1d19.9326814!2d50.0774607!3e0?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-anton mt-2 flex w-fit items-center gap-2 rounded-full border border-[#DC252A] bg-transparent px-6 py-2 text-[#DC252A] transition-colors hover:bg-[#DC252A] hover:text-black active:bg-[#DC252A] active:text-black"
                  style={{ boxShadow: "0 2px 12px 0 #DC252A" }}
                >
                  Prowadź <MdLocationPin />
                </a>
                <div className="font-anton m-5 mx-auto flex w-full flex-col items-center justify-around gap-5 sm:flex-row">
                  <a
                    href="#contact"
                    aria-label="contact-form"
                    itemProp="contact-form"
                  >
                    <button
                      className="mt-2 flex cursor-pointer items-center gap-2 rounded-full border border-[#DC252A] bg-transparent px-6 py-2 text-[#DC252A] transition-colors hover:bg-[#DC252A] hover:text-black active:bg-[#DC252A] active:text-black"
                      style={{ boxShadow: "0 2px 12px 0 #DC252A" }}
                    >
                      Start bez zobowiązań
                      <span>
                        <MdOutlineMailOutline size={18} />
                      </span>
                    </button>
                  </a>

                  <a
                    href="tel:+48511274140"
                    aria-label="Telefon"
                    itemProp="telephone"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button
                      className="mt-2 flex w-fit cursor-pointer items-center gap-2 rounded-full border border-[#DC252A] bg-transparent px-6 py-2 text-[#DC252A] transition-colors hover:bg-[#DC252A] hover:text-black active:bg-[#DC252A] active:text-black"
                      style={{ boxShadow: "0 2px 12px 0 #DC252A" }}
                    >
                      Zadzwoń
                      <span>
                        <FaPhone size={12} />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="my-4 w-full max-w-full min-w-[220px] flex-1 overflow-hidden rounded-2xl shadow-lg md:mx-4 md:my-0"
                style={{ height: "340px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.674074145789!2d19.9626814!3d50.0774607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165bab8a527da7%3A0x42ecff449136800d!2sIwona%20Odrow%C4%85%C5%BCa%2026%2C%2030-009%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1714140000000!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    minWidth: "180px",
                    borderRadius: "1rem",
                    margin: "0 auto",
                    display: "block",
                    height: "440px",
                  }}
                  className="!h-[440px] md:!h-[340px]"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa - Medical Training Studio"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="invitation"
        style={{ boxShadow: "0px 10px 50px 30px #DC252A" }}
        className="mx-auto my-10 mb-25 w-full max-w-5xl items-center justify-center rounded-2xl bg-gradient-to-br from-[#232323]/80 to-[#1a1a1a]/80 px-4 py-10 shadow-2xl md:px-10"
        role="region"
        aria-label="Kontakt - opis i zachęta"
      >
        <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row">
          <div className="relative h-[350px] w-full flex-shrink-0 overflow-hidden rounded-2xl md:h-[400px] md:w-1/2">
            <Image
              src="/zapraszamdokontaktu.jpg"
              alt="Trener personalny Kraków&nbsp;- kontakt, zdjęcie motywacyjne"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl object-cover object-center"
              priority={false}
            />
          </div>
          <div className="flex max-w-xl flex-1 flex-col items-start gap-4 text-justify">
            <h2 className="font-anton mb-2 text-3xl font-extrabold tracking-wider text-white md:text-4xl">
              Zapraszam do&nbsp;kontaktu!
            </h2>
            <p className="justify-center text-lg leading-relaxed break-words hyphens-auto text-gray-200 md:text-xl">
              Jeśli chcesz dowiedzieć się, jak możemy wspólnie poprawić Twoją
              sylwetkę, energię i&nbsp;zdrowie –&nbsp;napisz śmiało!
            </p>
            <p className="justify-center text-lg leading-relaxed break-words hyphens-auto text-gray-200 md:text-xl">
              Odpowiem na&nbsp;każdą wiadomość i&nbsp;rozwieję Twoje
              wątpliwości. Zależy mi na&nbsp;indywidualnym podejściu
              i&nbsp;pełnym zrozumieniu Twoich potrzeb. Wspólnie ustalimy
              najlepszą drogę do&nbsp;osiągnięcia Twoich celów.
            </p>

            <ul className="list-disc pl-6 text-base text-gray-300 md:text-lg">
              <li>Odpowiadam zwykle w&nbsp;ciągu 24h</li>
              <li>Wszystkie dane są poufne</li>
              <li>Możesz napisać bez zobowiązań</li>
            </ul>
            <p className="justify-center text-lg leading-relaxed break-words hyphens-auto text-gray-200 md:text-xl">
              Czas działać! Nie musisz być idealnie gotowy. Zmień swoje życie
              w&nbsp;3&nbsp;miesiące. Skontaktuj się ze mną za&nbsp;pomocą
              poniższego formularza!
            </p>
          </div>
        </div>
      </section>

      <section
        id="social-media"
        className="relative my-15 flex w-full max-w-none flex-col items-center overflow-x-visible overflow-y-visible bg-black/80 px-2"
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-black/80" />
        <h2 className="font-anton mb-4 text-center text-3xl font-extrabold tracking-wider md:text-4xl">
          <span className="leading-[1.2] text-white">
            ZNAJDŹ MNIE NA&nbsp;PROFILACH{" "}
          </span>
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
        <p className="mx-auto mb-10 max-w-2xl p-2 text-center text-gray-300">
          Zajrzyj na&nbsp;mojego Facebooka i&nbsp;Instagrama, gdzie
          na&nbsp;bieżąco publikuję wiele przydatnych wskazówek dotyczących
          treningu i&nbsp;diety przeznaczonej dla osób prowadzących aktywny styl
          życia
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-16 overflow-visible px-0 md:flex-row md:px-16 lg:px-32 xl:px-64">
          {/* Instagram */}
          <Link
            href="https://www.instagram.com/lukasz.moczkodan/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex max-w-md min-w-[260px] flex-1 flex-col items-center justify-center overflow-visible rounded-xl bg-black/80 px-8 py-14 shadow-lg transition-transform hover:scale-105"
            onTouchStart={(e) => {
              const span = e.currentTarget.querySelector(
                "[data-ig-gradient]",
              ) as HTMLElement;
              if (span) {
                span.style.opacity = "1";
                span.style.transform = "translate(0, 0)";
              }
            }}
            onTouchEnd={(e) => {
              const span = e.currentTarget.querySelector(
                "[data-ig-gradient]",
              ) as HTMLElement;
              if (span) {
                span.style.opacity = "0";
                span.style.transform = "translate(-100%, -100%)";
              }
            }}
          >
            <div
              className="relative mb-6 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-white"
              style={{ boxShadow: "inset 0 0 0 2px #DC252A" }}
            >
              <span
                className="pointer-events-none absolute inset-0 z-0"
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
              <FaInstagram className="relative z-10 text-5xl text-black" />
            </div>
            <span className="text-xl font-extrabold tracking-wider text-white">
              INSTAGRAM
            </span>
          </Link>
          {/* Facebook */}
          <Link
            href="https://www.facebook.com/people/Trener-Personalny-%C5%81ukasz-Moczkodan/61566847799568/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex max-w-md min-w-[260px] flex-1 flex-col items-center justify-center overflow-visible rounded-xl bg-black/80 px-8 py-14 shadow-lg transition-transform hover:scale-105"
            onTouchStart={(e) => {
              const span = e.currentTarget.querySelector(
                "[data-fb-gradient]",
              ) as HTMLElement;
              if (span) {
                span.style.opacity = "1";
                span.style.transform = "translate(0, 0)";
              }
            }}
            onTouchEnd={(e) => {
              const span = e.currentTarget.querySelector(
                "[data-fb-gradient]",
              ) as HTMLElement;
              if (span) {
                span.style.opacity = "0";
                span.style.transform = "translate(-100%, -100%)";
              }
            }}
          >
            <div
              className="relative mb-6 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-white"
              style={{ boxShadow: "inset 0 0 0 2px #DC252A" }}
            >
              <span
                className="pointer-events-none absolute inset-0 z-0"
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
              <FaFacebook className="relative z-10 text-5xl text-black" />
            </div>
            <span className="text-xl font-extrabold tracking-wider text-white">
              FACEBOOK
            </span>
          </Link>
        </div>
      </section>

      <footer
        id="footer"
        style={{ boxShadow: "0px 0px 80px 40px #000000" }}
        className="mt-10 w-full bg-[#f5f6f7] px-4 py-5 md:pt-10"
        role="contentinfo"
        aria-label="Stopka strony"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center">
          {/* Logo i&nbsp;nazwa */}

          <div
            className="font-anton p-10 text-center text-4xl font-bold tracking-wider md:text-5xl lg:text-6xl"
            data-glitch="ŁUKASZ MOCZKODAN"
            style={{ color: "#000000" }}
            itemScope
            itemType="http://schema.org/Person"
          >
            <span itemProp="name">
              ŁUKASZ <span className="text-[#000000]">MOCZKODAN</span>
            </span>
          </div>

          {/* Nawigacja sekcji */}
          <nav className="mb-8 flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-10">
            {[
              { label: "O MNIE", section: "#about" },
              { label: "CO OFERUJĘ", section: "#trainings" },
              { label: "NAJCZĘSTSZE PYTANIA (FAQ)", section: "#questions" },
              { label: "KONTAKT", section: "#contact" },
            ].map(({ label, section }) => (
              <button
                key={section}
                className="cursor-pointer text-base font-extrabold tracking-widest text-[#000000] transition-colors hover:text-[#DC252A] active:text-[#DC252A]"
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
          <div className="mb-2 flex w-full items-center justify-center gap-8">
            <Link
              href="https://www.facebook.com/people/Trener-Personalny-%C5%81ukasz-Moczkodan/61566847799568/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              itemProp="sameAs"
            >
              <FaFacebook className="text-2xl text-[#000000] transition-colors hover:text-[#DC252A]" />
            </Link>
            <Link
              href="https://www.instagram.com/lukasz.moczkodan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              itemProp="sameAs"
            >
              <FaInstagram className="text-2xl text-[#000000] transition-colors hover:text-[#DC252A]" />
            </Link>
            <Link
              href="tel:+48511274140"
              aria-label="Telefon"
              itemProp="telephone"
            >
              <FaPhone className="text-2xl text-[#000000] transition-colors hover:text-[#DC252A]" />
            </Link>
          </div>
          <div className="mt-4 mb-2 flex justify-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-grey-300 pt-5 text-center text-sm font-light transition-colors hover:text-[#DC252A] active:text-[#DC252A]"
            >
              Polityka Prywatności
            </Link>
          </div>
        </div>
        <p className="text-grey-300 pt-4 text-center text-sm font-light">
          © 2025 Łukasz Moczkodan. All rights reserved. | Designed by Jakub
          Widurek
        </p>
      </footer>
    </div>
  );
}
