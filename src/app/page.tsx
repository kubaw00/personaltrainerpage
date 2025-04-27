"use client";

import Navigation from "../components/Navigation";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";
import AnimationOnScroll from "@/components/Observer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { scrollToSection } from "@/utils/scrollToSection";

export default function Home() {
  return (
    <div className="flex  flex-col items-center min-h-screen bg-gray-900">
      <Navigation />
      <AnimationOnScroll
        classNameInView="animate-fade-right opacity-100"
        classNameNotInView="opacity-0"
      >
        <section
          id="about"
          className="md:mx-6 flex max-w-6xl md:pt-30 h-screen md:h-[650px] lg:h-[900px] flex-col bg-[url('/profilowe.jpg')] bg-center bg-cover bg-no-repeat md:bg-none md:flex-row relative transition-opacity duration-1000"
        >
          <div className="absolute md:hidden inset-0 z-0 bg-black opacity-40 md:opacity-0"></div>

          <div className="relative w-full h-auto md:h-[500px] md:w-[400px] lg:h-[700px] lg:w-[500px]   flex-shrink-0">
            <Image
              src="/profilowe.jpg"
              alt="profilowe"
              fill
              className="object-cover md:rounded-2xl"
            />
          </div>

          <div className="flex  z-51 flex-col mt-120  md:m-2  md:justify-center  px-10 backdrop-blur-xs md:text-black md:backdrop-blur-none ">
            <h1 className="text-white  text-5xl animate-fade-left animate-duration-[400ms] animate-delay-100 animate-ease-linear mb-6 md:text-3xl lg:text-5xl lg:leading-15  md:font-bold ">
              Treningi personalne w Krakowie
            </h1>

            <h2 className="text-white animate-fade-left animate-duration-[500ms] animate-delay-400 animate-ease-linear text-base sm:text-lg lg:text-xl md:font-medium md:text-base ">
              Miło, że tu trafiłeś. Nazywam się Łukasz Moczkodan. Jestem
              certyfikowanym Trenerem Personalnym z 3 letnim doświadczeniem,
              natomiast siłownia to moje hobby od prawie 10 lat
            </h2>
          </div>
        </section>
      </AnimationOnScroll>

      <section className="flex flex-col max-w-6xl md:mx-6 w-full text-white container mx-auto lg:flex-row  bg-gray-900 text-lg text-montserrat transition-transform duration-700">
        <div className="items-center   space-y-6 self-center p-8 md:p-10">
          <h2 className=" text-3xl font-bold text-center ">
            Czym się wyróżniam?
          </h2>
          <p className=" leading-relaxed lg:text-xl">
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
        </div>

        <Image
          alt="photo1"
          src="/768x715px.jpg"
          height={500}
          width={500}
          className="w-auto mx-auto md:rounded-2xl md:w-[500px] lg:mx-10 lg:ml-10 object-cover "
        />
      </section>

      <section
        id="trainings"
        className="md:mx-6 flex flex-col relative overflow-hidden bg-gray-900 py-10 md:py-20 px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-center text-4xl font-bold tracking-tight text-white mb-12 md:mb-16 animate-fade-up">
          Co oferuję?
        </h2>

        <div className="relative max-w-7xl mx-auto bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl shadow-2xl overflow-hidden">
          {/* Tło z efektem paralaksy */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20" />
          </div>

          {/* Kafelki z usługami */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 md:p-10">
            {/* Karta 1 */}
            <div className="group backdrop-blur-lg bg-white/5 rounded-xl p-6 md:p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-2 cursor-default animate-fade-up [animation-delay:.1s]">
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-amber-400 mb-3">
                  Indywidualny Trening Personalny
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  w profesjonalnym studiu treningowym
                </p>
              </div>
            </div>

            {/* Karta 2 */}
            <div className="group backdrop-blur-lg bg-white/5 rounded-xl p-6 md:p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-2 cursor-default animate-fade-up [animation-delay:.3s]">
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold break-words text-amber-400 mb-3">
                  Spersonalizowany Plan Treningowys
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  tak byś miał efekty a także zachował energię na inne
                  aktywności
                </p>
              </div>
            </div>

            {/* Karta 3 */}
            <div className="group backdrop-blur-lg bg-white/5 rounded-xl p-6 md:p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-2 cursor-default animate-fade-up [animation-delay:.5s]">
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-amber-400 mb-3">
                  Elastyczny Plan Dietetyczny
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  dostosowany do Twoich potrzeb. Nie będziesz musiał się zmuszać
                  do jedzenia a jednocześnie nie będziesz chciał się przejadać.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-5 md:mx-6 py-16  max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl space-y-20 mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 ">
          <div className="flex  justify-center space-x-2 text-gray-900">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl text-center font-bold text-gray-900">
              3-miesięczna przemiana sylwetki
            </h2>
            <p className="text-gray-900 leading-relaxed">
              W 90 dni poprowadzę Cię przez kompleksową zmianę, w skład której
              wchodzą: treningi precyzyjnie dobrane do Twojego celu, możliwości
              i preferencji, plan żywieniowy będący wsparciem w osiąganiu Twoich
              celów - bez ciężaru i zbędnych wyrzeczeń, systematyczna analiza
              postępów i dostosowywanie planu do Twoich aktualnych potrzeb,
              wsparcie mentalne - bo zmiana sylwetki zaczyna się od zmiany
              sposobu myślenia, motywacja i narzędzia, które pomogą Ci wytrwać i
              cieszyć się drogą, a nie tylko celem. Nie ważne, czy Twoim
              marzeniem jest lepsza sylwetka, większa siła, sprawniejsze ciało
              czy po prostu codzienne lepsze samopoczucie - tutaj masz wszystko,
              czego potrzebujesz, żeby to osiągnąć. Nie ważne, czy Twoim
              marzeniem jest lepsza sylwetka, większa siła, sprawniejsze ciało
              czy po prostu codzienne lepsze samopoczucie - tutaj masz wszystko,
              czego potrzebujesz, żeby to osiągnąć.
            </p>
          </div>

          <div className="flex  justify-center space-x-2 text-gray-900">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl  text-center font-bold text-gray-800">
              Gdzie przeprowadzam Treningi?
            </h2>
            <div className=" flex justify-around gap-5 items-center  text-gray-800">
              <p className="  font-normal h- max-w-[200px]">
                Studio treningowe - Medical Training Studio Iwona Odrowąża 26,
                Kraków
              </p>

              <button className="flex h-[50px] justify-center hover:">
                <a
                  href="https://www.google.com/maps/dir//Medical+Training+Studio,+Iwona+Odrow%C4%85%C5%BCa+26,+30-009+Krak%C3%B3w/@50.0591081,19.9264005,13.46z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47165bab8a527da7:0x42ecff449136800d!2m2!1d19.9326814!2d50.0774607!3e0?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-center items-center gap-2 border border-gray-900 rounded-full px-6 py-2 bg-transparent text-gray-900 hover:bg-gray-200 transition-colors w-fit"
                >
                  <FaMapMarkerAlt className="text-lg" />
                  Prowadź
                </a>
              </button>
            </div>
          </div>
          <div className="flex  justify-center space-x-2 text-gray-900">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl text-center font-bold text-gray-900">
              Jaki jest koszt Treningu Personalnego?
            </h2>
            <p className="text-gray-900 leading-relaxed">
              To zależy kilku czynników, takich jak stopień zaawansowania i
              długość współpracy. Cennik ustalam osobiście z podopiecznym i jest
              to koszt od <span className="font-semibold">100 zł/h</span> w
              górę.
            </p>
          </div>

          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.674074145789!2d19.9626814!3d50.0774607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165bab8a527da7%3A0x42ecff449136800d!2sIwona%20Odrow%C4%85%C5%BCa%2026%2C%2030-009%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1714140000000!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="questions" className="w-full max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Najczęstsze pytania (FAQ)
        </h2>
        <div className="space-y-6">
          <AnimationOnScroll
            classNameInView="animate-fade-up opacity-100"
            classNameNotInView="opacity-0"
          >
            <div
              className="bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
              tabIndex={0}
            >
              <h3 className="font-bold text-lg md:text-xl text-white mb-2">
                Czy muszę mieć doświadczenie, żeby zacząć?
              </h3>
              <p className="text-gray-200">
                Nie! Treningi są dostosowane do Twojego poziomu — niezależnie od
                tego, czy dopiero zaczynasz, czy masz już za sobą pierwsze
                doświadczenia. Wszystkiego nauczysz się krok po kroku.
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            classNameInView="animate-fade-up opacity-100"
            classNameNotInView="opacity-0"
          >
            <div
              className="bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
              tabIndex={0}
            >
              <h3 className="font-bold text-lg md:text-xl text-white mb-2">
                Ile razy w tygodniu muszę trenować?
              </h3>
              <p className="text-gray-200">
                Jeśli zastanawiasz się nad częstotliwością treningów, spokojnie
                — wiele osób rozpoczyna od jednej sesji w tygodniu i to
                całkowicie wystarczający krok na start. Jeśli jednak zależy Ci
                na szybszych efektach, rekomenduję spotkania dwa razy w tygodniu
                — to optymalna częstotliwość, która daje najlepsze rezultaty
                przy zachowaniu balansu między treningiem a codziennym życiem.
                <br />
                <br />
                Jeśli masz bardzo ambitne cele lub chcesz przyspieszyć proces,
                istnieje także możliwość współpracy trzy razy w tygodniu, a dla
                najbardziej wymagających nawet cztery razy. Niczego jednak nie
                narzucam — dostosowujemy wszystko do Twoich możliwości i
                potrzeb.
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            classNameInView="animate-fade-up opacity-100"
            classNameNotInView="opacity-0"
          >
            <div
              className="bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
              tabIndex={0}
            >
              <h3 className="font-bold text-lg md:text-xl text-white mb-2">
                Czy dostosowujesz plan, jeśli coś mi nie pasuje?
              </h3>
              <p className="text-gray-200">
                Tak, każdy element współpracy — trening, plan żywieniowy czy
                nawet komunikacja — jest modyfikowany na bieżąco tak, żeby Ci
                służył, a nie przeszkadzał. Jesteśmy zespołem i słucham Twojego
                feedbacku.
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            classNameInView="animate-fade-up opacity-100"
            classNameNotInView="opacity-0"
          >
            <div
              className="bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
              tabIndex={0}
            >
              <h3 className="font-bold text-lg md:text-xl text-white mb-2">
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
              className="bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
              tabIndex={0}
            >
              <h3 className="font-bold text-lg md:text-xl text-white mb-2">
                Czy mogę trenować, jeśli mam napięty grafik?
              </h3>
              <p className="text-gray-200">
                Tak. Wspólnie znajdziemy rozwiązanie — możliwe są krótsze sesje,
                elastyczne godziny lub plan dostosowany do Twoich możliwości
                czasowych.
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            classNameInView="animate-fade-up opacity-100"
            classNameNotInView="opacity-0"
          >
            <div
              className="bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
              tabIndex={0}
            >
              <h3 className="font-bold text-lg md:text-xl text-white mb-2">
                Jak szybko zobaczę efekty?
              </h3>
              <p className="text-gray-200">
                Pierwsze zmiany — w energii, samopoczuciu i sile — możesz odczuć
                już po kilku tygodniach. Sylwetkowe zmiany stają się widoczne
                zwykle po 8–12 tygodniach regularnej pracy.
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            classNameInView="animate-fade-up opacity-100"
            classNameNotInView="opacity-0"
          >
            <div
              className="bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:-translate-y-2 active:shadow-2xl focus:-translate-y-2 focus:shadow-2xl cursor-pointer"
              tabIndex={0}
            >
              <h3 className="font-bold text-lg md:text-xl text-white mb-2">
                Czy muszę stosować ścisłą dietę?
              </h3>
              <p className="text-gray-200">
                Nie. Otrzymasz plan żywieniowy, który ma być wsparciem, a nie
                utrudnieniem. Stawiamy na elastyczność i realne podejście — bez
                restrykcji, które odbierają radość z życia.
              </p>
            </div>
          </AnimationOnScroll>
        </div>
      </section>
      {/* END FAQ SECTION */}

      <section
        id="contact"
        className=" w-full px-6 max-w-[800px] md:w-[600px] md:mx-6 sm:px-6 lg:px-8"
      >
        <h2 className="text-center text-white font-bold text-2xl mb-10">
          Formularz kontaktowy
        </h2>
        <ContactForm />
      </section>
      <footer className="bg-gray-900 text-white w-full mt-10">
        <div className="w-full max-w-3xl  flex  flex-row  mx-auto md:flex-row justify-between items-start py-8 px-6">
          {/* Ikony social/contact */}
          <div className="flex flex-col gap-6 text-2xl md:mr-auto ">
            <Link
              href="https://instagram.com/"
              aria-label="Instagram"
              className="hover:text-amber-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://facebook.com/"
              aria-label="Facebook"
              className="hover:text-amber-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </Link>
            <Link
              href="tel:555900999"
              aria-label="Telefon"
              className="hover:text-amber-400 transition-colors flex items-center gap-2"
            >
              <FaPhone />
              <span className="text-base">555 900 999</span>
            </Link>
          </div>
          {/* Linki nawigacyjne */}
          <div className="flex flex-col gap-2 text-right text-base order-1 md:order-2 md:ml-auto mt-0 md:mt-0">
            <Link
              href="#about"
              className="hover:text-amber-400 transition-colors"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#about");
              }}
            >
              O mnie
            </Link>
            <Link
              href="#faq"
              className="hover:text-amber-400 transition-colors"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#questions");
              }}
            >
              Najczęstsze pytania FAQ
            </Link>
            <Link
              href="#"
              className="hover:text-amber-400 transition-colors"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#trainings");
              }}
            >
              Treningi Personalne
            </Link>
            <Link
              href="#contact"
              className="hover:text-amber-400 transition-colors"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
            >
              Kontakt
            </Link>
          </div>
        </div>
        <div className="text-center text-xs text-gray-300 pb-4">
          Copyright © Łukasz Moczkodan 2025
        </div>
      </footer>
    </div>
  );
}
