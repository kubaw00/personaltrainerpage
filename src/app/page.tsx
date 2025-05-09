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
    <div className="flex flex-col items-center min-h-screen bg-black">
      <div className="w-full fixed top-0 left-0 z-50 ">
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
          className="w-full overflow-hidden min-h-screen pt-[90px] md:pt-[120px] mt-0 relative bg-black"
          style={{ height: "calc(var(--vh) - 90px)" }}
        >
          <div className="z-20 hidden lg:absolute  lg:block top-[40%] right-[-400px]  xl:right-[-10%] lg:top-[15%]">
            <Image alt="arrow" src="/arrow.png" height={300} width={900} />
          </div>
          <div className="z-20  hidden   lg:absolute lg:block lg:left-[-45%] xl:left-[-30%] lg:bottom-[5%]">
            <Image alt="arrow" src="/arrow.png" height={300} width={900} />
          </div>
          <div
            className="absolute h-screen inset-0 z-0"
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
          <div className="relative sm:landscape:w-[40vw] md:landscape:w-[50vw] lg:landscape:w-[60vw] max-w-[800px] w-[90vw] md:w-[70vw] aspect-square  overflow-hidden pointer-events-none select-none">
            <Image
              src="/profilowe.jpg"
              alt="Łukasz Moczkodan - trener personalny Kraków, zdjęcie profilowe"
              fill
              className="object-cover rounded-br-full"
              priority
            />
          </div>
          <div className="z-30 sm:landscape:left-2/3 lg:landscape:left-1/2  absolute top-2/3 left-1/2 md:left-2/3 transform -translate-x-1/2 -translate-y-1/2 m  lg:-translate-x-1/6  flex flex-col px-1 py-16 md:py-0">
            <h1 className="text-[#DC252A] max-w-[400px] font-anton text-6xl md:text-7xl lg:text-8xl  font-bold xl:text-[120px] lg:leading-[1.2] tracking-wide animate-fade-left animate-duration-[400ms] animate-delay-100 animate-ease-linear mb-6 md:font-bold">
              ŁUKASZ MOCZKODAN
            </h1>
            <div className="relative">
              <h2 className="text-gray-200 p-2  animate-fade-left animate-duration-[500ms] animate-delay-400 animate-ease-linear text-balance text-lg  md:text-xl lg:text-3xl">
                &quot;Pomagam normalnym ludziom osiągać nienormalnie dobre
                efekty – bez stresu iliczenia kalorii&quot;
              </h2>
              <span
                className="absolute left-0 top-0 w-full h-[3px] block"
                style={{
                  background: "#DC252A",
                }}
              />
              <span
                className="absolute left-0 bottom-0 w-full h-[3px] block"
                style={{
                  background: "#DC252A",
                }}
              />
            </div>
          </div>
        </section>
      </AnimationOnScroll>

      <section
        id="trainings"
        role="region"
        aria-label="Treningi personalne"
        className="mt-20 py-10 px-4 w-full max-w-6xl mx-auto mb-12   flex flex-col relative overflow-hidden bg-black  md:py-15  "
      >
        <h2 className="text-5xl font-anton tracking-wide md:text-5xl lg:text-6xl font-extrabold text-center mb-20 text-white">
          CO <span style={{ color: "#DC252A" }}>OFERUJĘ?</span>
        </h2>

        <div className=" border-2 border-[#DC252A] bg-black/70 bg-blend-darken bg-[url('/cooferuje.jpg')] bg-cover bg-center  rounded-2xl shadow-2xl p-8 md:p-12 skew-y-[-3deg] relative  overflow-hidden">
          <div className="skew-y-[3deg]">
            <h3 className=" font-anton text-3xl md:text-4xl font-extrabold text-[#DC252A] mb-6 text-center uppercase tracking-wider">
              3-miesięczna przemiana sylwetki
            </h3>
            <p className="my-15  font-bold text-gray-200 text-lg md:text-xl text-center mb-8 max-w-2xl mx-auto">
              W&nbsp;90 dni poprowadzę Cię przez kompleksową zmianę w&nbsp;skład
              której wchodzą:
            </p>
            <ul className="space-y-4 max-w-2xl mx-auto mb-8  break-words hyphens-auto text-justify">
              <li className="flex items-start gap-3 text-lg md:text-xl ">
                <IoMdCheckmark
                  size="2em"
                  className="mt-1 shrink-0 text-[#DC252A] "
                />
                <span className="text-gray-100 ">
                  treningi precyzyjnie dobrane do&nbsp;Twojego celu, możliwości
                  i&nbsp;preferencji
                </span>
              </li>
              <li className="flex items-start gap-3 text-lg md:text-xl text-green-400">
                <IoMdCheckmark
                  size="2em"
                  className="mt-1 shrink-0 text-[#DC252A] "
                />
                <span className="text-gray-100">
                  plan żywieniowy będący wsparciem w&nbsp;osiąganiu Twoich
                  celów& -&nbsp;bez ciężaru i&nbsp;zbędnych wyrzeczeń
                </span>
              </li>
              <li className="flex items-start gap-3 text-lg md:text-xl text-green-400">
                <IoMdCheckmark
                  size="2em"
                  className="mt-1 shrink-0 text-[#DC252A] "
                />
                <span className="text-gray-100">
                  systematyczna analiza postępów i&nbsp;dostosowywanie planu
                  do&nbsp;Twoich aktualnych potrzeb
                </span>
              </li>
              <li className="flex items-start gap-3 text-lg md:text-xl text-green-400">
                <IoMdCheckmark
                  size="2em"
                  className="mt-1 shrink-0 text-[#DC252A] "
                />
                <span className="text-gray-100">
                  wsparcie mentalne -&nbsp;bo&nbsp;zmiana sylwetki zaczyna się
                  od&nbsp;zmiany sposobu myślenia
                </span>
              </li>
              <li className="flex items-start gap-3 text-lg md:text-xl text-green-400">
                <IoMdCheckmark
                  size="2em"
                  className="mt-1 shrink-0 text-[#DC252A] "
                />
                <span className="text-gray-100">
                  motywacja i&nbsp;narzędzia, które pomogą Ci wytrwać
                  i&nbsp;cieszyć się drogą, a nie tylko celem
                </span>
              </li>
            </ul>
            <p className="text-gray-200 text-lg md:text-xl text-justify hyphens-auto break-words max-w-2xl mx-auto">
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
          className=" md:flex-row mt-35 z-20 max-w-6xl md:mx-2 mx-auto text-white container  lg:flex-row bg-black text-lg text-montserrat transition-transform duration-700  rounded-2xl shadow-2xl overflow-hidden"
          style={{
            boxShadow: "0px -30px 100px 60px #DC252A",
          }}
        >
          <h2 className="text-5xl font-anton leading-[1.3] tracking-wide md:text-5xl lg:text-6xl m-10 font-extrabold text-center mb-12 text-white">
            CZYM SIĘ <span style={{ color: "#DC252A" }}>WYRÓŻNIAM?</span>
          </h2>

          <div className="flex flex-col md:flex-row md:justify-between w-full">
            <p className="break-words hyphens-auto text-justify leading-relaxed p-10 text-gray-200 lg:text-xl w-full md:w-1/2 flex-shrink-0">
              Nie jestem tu po&nbsp;to, żeby tylko rzeźbić sylwetki. Moją misją
              jest budowanie się ciała i&nbsp;głowy jednocześnie. Wiem,
              że&nbsp;wygląd to tylko część układanki - najważniejsze jest to,
              jak się czujesz na&nbsp;co dzień, jak postrzegasz siebie
              i&nbsp;jak wpływa to na&nbsp;Twoje życie. Na co&nbsp;dzień pracuję
              z&nbsp;osobami o&nbsp;różnorodnych celach - pomagam
              w&nbsp;redukcji tkanki tłuszczowej, budowie masy mięśniowej,
              poprawie sprawności, przygotowaniu
              do&nbsp;testów&nbsp;sprawnościowych czy&nbsp;powrocie
              do&nbsp;formy po&nbsp;urazach.Niezależnie od&nbsp;Twojego punktu
              wyjścia, znajdziemy najlepsze rozwiązanie dla Ciebie.
            </p>
            <div className="relative grow my-auto justify-center w-full h-[500px]">
              <Image
                alt="Trener personalny Kraków&nbsp;- zdjęcie w&nbsp;sekcji o mnie"
                src="/czymsiewyrozniam.jpg"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top w-full h-full rounded-none md:rounded-tl-2xl "
              />
            </div>
          </div>
        </section>
      </AnimationOnScroll>

      <section
        id="achieve"
        className="w-full mt-25 py-16 px-2 md:px-0 bg-black"
        role="region"
        aria-label="Co osiągniesz"
      >
        <h2 className="text-5xl leading-[1.3] font-anton tracking-wide mb-20 md:text-5xl lg:text-6xl font-extrabold text-center  text-white">
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
              Spersonalizowane plany żywieniowe i&nbsp;treningowe, dopasowane do
              Twoich unikalnych potrzeb, stanowią klucz do&nbsp;poprawy
              samopoczucia, wzmocnienia organizmu i&nbsp;podniesienia jakości
              codziennego życia
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
              nadprogramowych kilogramów i&nbsp;zbliżyć się do&nbsp;wymarzonego
              celu. Twoja idealna figura to nie tylko wygląd, ale nowy etap
              w&nbsp;życiu.
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
              Połączenie regularnej aktywności fizycznej z&nbsp;odpowiednio
              zbilansowaną dietą redukuje napięcie nerwowe, wzmacnia odporność
              na&nbsp;stres i&nbsp;przekłada się na&nbsp;lepszą koncentrację
              oraz wewnętrzną harmonię.
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
            <h3 className="font-bold text-xl mb-2">
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
            className="flex flex-col items-center text-center p-8 md:p-10 min-h-[260px]"
            style={{ background: "#000", color: "#fff" }}
          >
            <span className="mb-4 text-5xl animate-bounce animate-delay-800">
              <MdPublishedWithChanges />
            </span>
            <h3 className="font-bold text-xl mb-2">
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
            className="flex flex-col items-center text-center p-8 md:p-10 min-h-[260px]"
            style={{ background: "#FFFFFF", color: "#000" }}
          >
            <span className="mb-4 text-5xl animate-bounce animate-delay-1000">
              <CgArrowsExpandUpRight />
            </span>
            <h3 className="font-bold text-xl mb-2">
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

      <h2 className="text-5xl leading-[1.3] font-anton tracking-wide md:text-5xl lg:text-6xl m-5 mt-20 font-extrabold text-center mb-12 text-white">
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
                alt={`Trener personalny Kraków&nbsp;- zdjęcie z&nbsp;galerii numer ${
                  idx + 1
                }`}
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
        role="region"
        aria-label="Najczęstsze pytania (FAQ)"
        className="w-full py-10 md:mt-20 md:pt-10 max-w-3xl mx-auto mb-16 px-4 "
      >
        <h2 className="text-5xl leading-[1.3] font-anton tracking-wide md:text-5xl lg:text-6xl font-extrabold text-center mb-12 text-white">
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
          <div className="space-y-6 break-words hyphens-auto text-justify">
            <AnimationOnScroll
              classNameInView="animate-fade-up opacity-100"
              classNameNotInView="opacity-0"
            >
              <div
                className="bg-[#181818] rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
                tabIndex={0}
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-200 mb-2">
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
                className="bg-[#181818] rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
                tabIndex={0}
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-200 mb-2">
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
                className="bg-[#181818] rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
                tabIndex={0}
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-200 mb-2">
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
                className="bg-[#181818] rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
                tabIndex={0}
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-200 mb-2">
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
                className="bg-[#181818] rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
                tabIndex={0}
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-200 mb-2">
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
                className="bg-[#181818] rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
                tabIndex={0}
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-200 mb-2">
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
                className="bg-[#181818] rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
                tabIndex={0}
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-200 mb-2">
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
        className=" flex flex-col p-2  mx-auto my-12 relative   overflow-hidden bg-black py-10 md:py-20  w-full max-w-5xl  "
        role="region"
        aria-label="Lokalizacja treningów"
      >
        <div className=" bg-black/80 bg-blend-darken bg-[url('/gdzieprzeprowadzamtreningi.jpg')] bg-cover bg-center border-2 border-[#DC252A] rounded-2xl shadow-2xl p-8 md:p-12 skew-y-[-3deg] relative  overflow-hidden">
          <div className="skew-y-[3deg]">
            <h3 className="text-3xl font-anton tracking-wider md:text-4xl  lg:text-5xl font-extrabold text-[#DC252A] mb-10 text-center uppercase ">
              Gdzie przeprowadzam Treningi?
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
              <div className="flex-1 flex flex-col items-center">
                <p className="text-gray-200 text-lg md:text-xl font-bold text-center mb-4">
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
              <div
                className="flex-1 w-full min-w-[220px] max-w-full rounded-2xl overflow-hidden shadow-lg my-4 md:my-0 md:mx-4"
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
                  className="md:!h-[340px] !h-[440px]"
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
        className="w-full mb-25 flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#232323]/80 to-[#1a1a1a]/80 rounded-2xl shadow-2xl my-10 py-10 px-4 md:px-10 max-w-5xl mx-auto gap-8"
        role="region"
        aria-label="Kontakt - opis i zachęta"
      >
        <div className="relative w-full md:w-1/2 h-[350px] md:h-[400px] rounded-2xl overflow-hidden flex-shrink-0">
          <Image
            src="/zapraszamdokontaktu.jpg"
            alt="Trener personalny Kraków&nbsp;- kontakt, zdjęcie motywacyjne"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center rounded-2xl"
            priority={false}
          />
        </div>
        <div className="flex-1 text-justify flex flex-col  items-start gap-4 max-w-xl">
          <h2 className="text-3xl   font-anton tracking-wider md:text-4xl font-extrabold text-white mb-2">
            Zapraszam do&nbsp;kontaktu!
          </h2>
          <p className="text-gray-200 justify-center break-words hyphens-auto  text-lg md:text-xl leading-relaxed">
            Jeśli chcesz dowiedzieć się, jak możemy wspólnie poprawić Twoją
            sylwetkę, energię i&nbsp;zdrowie –&nbsp;napisz śmiało!
          </p>
          <p className="text-gray-200 justify-center break-words hyphens-auto  text-lg md:text-xl leading-relaxed">
            Odpowiem na&nbsp;każdą wiadomość i&nbsp;rozwieję Twoje wątpliwości.
            Zależy mi na&nbsp;indywidualnym podejściu i&nbsp;pełnym zrozumieniu
            Twoich potrzeb. Wspólnie ustalimy najlepszą drogę
            do&nbsp;osiągnięcia Twoich celów.
          </p>

          <ul className="list-disc pl-6 text-gray-300 text-base md:text-lg">
            <li>Odpowiadam zwykle w&nbsp;ciągu 24h</li>
            <li>Wszystkie dane są poufne</li>
            <li>Możesz napisać bez zobowiązań</li>
          </ul>
          <p className="text-gray-200 justify-center break-words hyphens-auto  text-lg md:text-xl leading-relaxed">
            Czas działać! Nie musisz być idealnie gotowy. Zmień swoje życie
            w&nbsp;3&nbsp;miesiące. Skontaktuj się ze mną za&nbsp;pomocą
            poniższego formularza!
          </p>
        </div>
      </section>

      <section
        id="contact"
        role="region"
        aria-label="Formularz kontaktowy"
        className="w-full mt-20 py-10  px-6 max-w-[800px] md:w-[700px] md:mx-6 sm:px-6 lg:px-8 mx-auto mb-10"
      >
        <h2 className="text-5xl leading-[1.3] font-anton tracking-wider md:text-5xl w-full  font-bold text-center mb-12 text-white">
          FORMULARZ <span style={{ color: "#DC252A" }}>KONTAKTOWY</span>
        </h2>
        <ContactForm />
      </section>

      <section
        id="social-media"
        className="w-full my-15 max-w-none bg-black/80  px-2 flex flex-col items-center relative overflow-x-visible overflow-y-visible"
      >
        <div className="absolute inset-0 w-full h-full bg-black/80 -z-10" />
        <h2 className="text-3xl font-anton  tracking-wider  md:text-4xl font-extrabold text-center mb-4">
          <span className="text-white  leading-[1.2]">
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
        <p className="text-gray-300 p-2  text-center max-w-2xl mx-auto mb-10">
          Zajrzyj na&nbsp;mojego Facebooka i&nbsp;Instagrama, gdzie
          na&nbsp;bieżąco publikuję wiele przydatnych wskazówek dotyczących
          treningu i&nbsp;diety przeznaczonej dla osób prowadzących aktywny styl
          życia
        </p>
        <div className="w-full flex flex-col md:flex-row gap-16 justify-center items-center px-0 md:px-16 lg:px-32 xl:px-64 overflow-visible">
          {/* Instagram */}
          <Link
            href="https://www.instagram.com/lukasz.moczkodan/"
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
            href="https://www.facebook.com/people/Trener-Personalny-%C5%81ukasz-Moczkodan/61566847799568/"
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
        id="footer"
        style={{ boxShadow: "0px 0px 80px 40px #000000" }}
        className="w-full mt-10 bg-[#f5f6f7] py-5 md:pt-10  px-4"
        role="contentinfo"
        aria-label="Stopka strony"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Logo i&nbsp;nazwa */}

          <div
            className=" font-bold font-anton  p-10 text-4xl md:text-5xl lg:text-6xl tracking-wider text-center"
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
              href="https://www.facebook.com/people/Trener-Personalny-%C5%81ukasz-Moczkodan/61566847799568/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              itemProp="sameAs"
            >
              <FaFacebook className="text-[#000000] text-2xl hover:text-[#DC252A] transition-colors" />
            </Link>
            <Link
              href="https://www.instagram.com/lukasz.moczkodan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              itemProp="sameAs"
            >
              <FaInstagram className="text-[#000000] text-2xl hover:text-[#DC252A] transition-colors" />
            </Link>
            <Link
              href="tel:511274140"
              aria-label="Telefon"
              itemProp="telephone"
            >
              <FaPhone className="text-[#000000] text-2xl hover:text-[#DC252A] transition-colors" />
            </Link>
          </div>
        </div>
        <div className="flex gap-4 justify-center mt-4 mb-2">
          <Link
            href="/privacy-policy"
            className="text-sm text-[#000000] hover:text-[#DC252A] transition-colors"
          >
            Polityka Prywatności
          </Link>
        </div>
        <p className="text-sm pt-5 text-center font-light text-grey-300">
          © 2025 Łukasz Moczkodan. All rights reserved. | Designed by Jakub
          Widurek
        </p>
      </footer>
    </div>
  );
}
