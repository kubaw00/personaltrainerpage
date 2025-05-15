import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności | Trener Personalny Kraków - Łukasz Moczkodan",
  description:
    "Zasady przetwarzania danych osobowych, cookies i inne informacje dotyczące prywatności na stronie trenera personalnego w Krakowie - Łukasza Moczkodana.",
  keywords: [
    "polityka prywatności",
    "ochrona danych osobowych",
    "RODO",
    "prywatność",
    "Łukasz Moczkodan",
    "trener personalny Kraków",
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full bg-black">
      <main className="mx-auto w-full max-w-4xl p-4 text-white md:p-8">
        <h1 className="font-anton mb-8 text-center text-4xl tracking-wide">
          Polityka prywatności
        </h1>

        <p className="mb-6 text-lg">
          Niniejsza Polityka prywatności wyjaśnia, w jaki sposób zbierane,
          przetwarzane i chronione są Twoje dane osobowe podczas korzystania z
          naszej strony internetowej oraz formularza kontaktowego.
        </p>

        <h2 className="font-anton mt-8 mb-4 text-2xl tracking-wide">
          Administrator danych
        </h2>
        <p className="mb-4">
          Administratorem Twoich danych osobowych jest Łukasz Moczkodan,
          prowadzący działalność jako trener personalny w Krakowie, z którym
          możesz skontaktować się telefonicznie: 511 274 140 lub mailowo przez
          formularz kontaktowy dostępny na stronie.
        </p>

        <h2 className="font-anton mt-8 mb-4 text-2xl tracking-wide">
          Zakres zbieranych danych
        </h2>
        <p className="mb-4">
          Podczas korzystania z naszej strony możemy zbierać następujące dane:
        </p>
        <ul className="mb-6 ml-6 list-disc">
          <li className="mb-2">
            Dane kontaktowe (imię i nazwisko, adres e-mail, numer telefonu) -
            podawane dobrowolnie w formularzu kontaktowym
          </li>
          <li className="mb-2">
            Dane analityczne dotyczące sposobu korzystania ze strony (czas
            spędzony na stronie, odwiedzone podstrony, dane o urządzeniu)
          </li>
        </ul>

        <h2 className="font-anton mt-8 mb-4 text-2xl tracking-wide">
          Cel i podstawa przetwarzania
        </h2>
        <p className="mb-4">Twoje dane przetwarzamy w następujących celach:</p>
        <ul className="mb-6 ml-6 list-disc">
          <li className="mb-2">
            Udzielenie odpowiedzi na zapytania przesłane przez formularz
            kontaktowy (podstawa prawna: art. 6 ust. 1 lit. b RODO - działania
            przed zawarciem umowy)
          </li>
          <li className="mb-2">
            Prowadzenie statystyk i analiza ruchu na stronie w celu poprawy jej
            funkcjonowania (podstawa prawna: art. 6 ust. 1 lit. f RODO - prawnie
            uzasadniony interes administratora)
          </li>
        </ul>

        <h2 className="font-anton mt-8 mb-4 text-2xl tracking-wide">
          Odbiorcy danych
        </h2>
        <p className="mb-6">
          Dostęp do Twoich danych mogą mieć zaufani odbiorcy, tacy jak dostawcy
          usług IT wspierających funkcjonowanie strony. Dane nie są przekazywane
          innym podmiotom bez wyraźnej podstawy prawnej lub Twojej zgody. Nie
          przekazujemy danych do państw trzecich poza Europejski Obszar
          Gospodarczy.
        </p>

        <h2 className="font-anton mt-8 mb-4 text-2xl tracking-wide">
          Google Analytics
        </h2>
        <p className="mb-6">
          Nasza strona korzysta z Google Analytics w wersji bez plików cookies,
          zgodnie z najnowszymi standardami prywatności. Oznacza to, że zbieramy
          zanonimizowane dane statystyczne o ruchu na stronie bez możliwości
          identyfikacji poszczególnych użytkowników. Dane te służą wyłącznie do
          poprawy jakości naszych usług oraz dostosowania treści do preferencji
          użytkowników. Możesz zablokować działanie Google Analytics instalując
          dodatek do przeglądarki dostępny pod adresem:
          <Link
            href="https://tools.google.com/dlpage/gaoptout"
            className="ml-1 text-[#DC252A] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://tools.google.com/dlpage/gaoptout
          </Link>
          .
        </p>

        <h2 className="font-anton mt-8 mb-4 text-2xl tracking-wide">
          Okres przechowywania
        </h2>
        <p className="mb-6">
          Dane z formularza kontaktowego będą przechowywane przez okres
          niezbędny do udzielenia odpowiedzi na zapytanie oraz przez dodatkowy
          okres 1 roku w celu ewentualnego kontynuowania korespondencji. Dane
          analityczne przechowywane są przez okres 14 miesięcy.
        </p>

        <h2 className="font-anton mt-8 mb-4 text-2xl tracking-wide">
          Twoje prawa
        </h2>
        <p className="mb-4">
          W związku z przetwarzaniem danych przysługują Ci następujące prawa:
        </p>
        <ul className="mb-6 ml-6 list-disc">
          <li className="mb-2">Prawo dostępu do danych</li>
          <li className="mb-2">Prawo do sprostowania danych</li>
          <li className="mb-2">Prawo do usunięcia danych</li>
          <li className="mb-2">Prawo do ograniczenia przetwarzania</li>
          <li className="mb-2">Prawo do przenoszenia danych</li>
          <li className="mb-2">Prawo do sprzeciwu wobec przetwarzania</li>
          <li className="mb-2">
            Prawo do wniesienia skargi do organu nadzorczego (Prezes Urzędu
            Ochrony Danych Osobowych)
          </li>
        </ul>

        <h2 className="font-anton mt-8 mb-4 text-2xl tracking-wide">
          Bezpieczeństwo danych
        </h2>
        <p className="mb-6">
          Stosujemy odpowiednie środki techniczne i organizacyjne, aby zapewnić
          bezpieczeństwo Twoich danych osobowych, w szczególności w celu ochrony
          przed nieuprawnionym dostępem, utratą lub zniszczeniem.
        </p>

        <h2 className="font-anton mt-8 mb-4 text-2xl tracking-wide">
          Zmiany w Polityce Prywatności
        </h2>
        <p className="mb-6">
          Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce
          prywatności. Aktualna wersja będzie zawsze dostępna na naszej stronie.
          Znaczące zmiany będą komunikowane w odpowiedni sposób.
        </p>

        <h2 className="font-anton mt-8 mb-4 text-2xl tracking-wide">
          Kontakt w sprawach prywatności
        </h2>
        <p className="mb-6">
          W sprawach związanych z ochroną danych osobowych możesz skontaktować
          się z nami przez formularz kontaktowy na stronie lub telefonicznie pod
          numerem: 511 274 140.
        </p>

        <p className="mt-12 text-sm text-gray-400">
          Ostatnia aktualizacja: 7 maja 2025
        </p>

        <div className="mt-10 mb-4">
          <Link
            href="/"
            className="inline-block rounded bg-[#DC252A] px-6 py-2 text-white transition-colors hover:bg-[#B01E22]"
          >
            Powrót na stronę główną
          </Link>
        </div>
      </main>
    </div>
  );
}
