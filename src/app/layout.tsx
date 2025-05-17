import type { Metadata } from "next";
import { Work_Sans, Montserrat, Anton } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import "@/styles/animations.css";
import "@/styles/swiper-overrides.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trener Personalny Kraków - Łukasz Moczkodan",
  description:
    "Profesjonalny trener personalny w Krakowie. Osiągnij swoje cele fitness dzięki indywidualnym planom treningowym i wsparciu eksperta. Umów się na trening już dziś!",
  keywords: [
    "trener personalny Kraków",
    "trening personalny",
    "trener Łukasz Moczkodan",
    "treningi Kraków",
    "plan treningowy",
    "trener fitness",
    "odchudzanie Kraków",
    "zdrowie",
    "siłownia Kraków",
  ],
  metadataBase: new URL("https://lukaszmoczkodan.pl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Trener Personalny Kraków - Łukasz Moczkodan",
    description:
      "Profesjonalny trener personalny w Krakowie. Osiągnij swoje cele fitness dzięki indywidualnym planom treningowym i wsparciu eksperta.",
    url: "https://lukaszmoczkodan.pl/",
    siteName: "Trener Personalny Kraków - Łukasz Moczkodan",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 400,
        alt: "Logo Trener Personalny Kraków - Łukasz Moczkodan",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trener Personalny Kraków - Łukasz Moczkodan",
    description:
      "Profesjonalny trener personalny w Krakowie. Osiągnij swoje cele fitness dzięki indywidualnym planom treningowym i wsparciu eksperta.",
    images: ["/logo.png"],
    site: "@lukaszmoczkodan",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/apple-icon.png",
    apple: "/apple-icon.png",
    other: [
      { rel: "mask-icon", url: "/icon.png" },
      { rel: "icon", url: "/icon.png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${workSans.variable} ${montserrat.variable} ${anton.variable}`}
    >
      <head>
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W6C9K4XB');`}
        </script>
        {/* End Google Tag Manager */}

        {/* Structured data JSON-LD for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://lukaszmoczkodan.pl/#business",
              name: "Łukasz Moczkodan - Trener Personalny Kraków",
              image: "https://lukaszmoczkodan.pl/logo.png",
              url: "https://lukaszmoczkodan.pl/",
              telephone: "+48511274140",
              email: "lukasz.moczkodan@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Iwona Odrowąża 26",
                addressLocality: "Kraków",
                postalCode: "30-009",
                addressCountry: "PL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "50.0774607",
                longitude: "19.9326814",
              },
              description:
                "Profesjonalny trener personalny w Krakowie. Osiągnij swoje cele fitness dzięki indywidualnym planom treningowym i wsparciu eksperta.",
              priceRange: "$$",
              openingHours: "Mo-Su 06:00-22:00",
              sameAs: [
                "https://www.facebook.com/people/Trener-Personalny-%C5%81ukasz-Moczkodan/61566847799568/",
                "https://www.instagram.com/lukasz.moczkodan/",
              ],
              servesCuisine: ["Healthy", "Fitness nutrition"],
              makesOffer: [
                {
                  "@type": "Offer",
                  name: "3-miesięczna przemiana sylwetki",
                  description:
                    "Kompleksowy program treningowy i dietetyczny na 90 dni",
                },
                {
                  "@type": "Offer",
                  name: "Treningi personalne",
                  description:
                    "Indywidualne treningi dostosowane do Twoich potrzeb",
                },
                {
                  "@type": "Offer",
                  name: "Konsultacje dietetyczne",
                  description:
                    "Spersonalizowane plany żywieniowe wspierające Twoje cele",
                },
              ],
              review: {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                author: {
                  "@type": "Person",
                  name: "Klient",
                },
                reviewBody:
                  "Dzięki treningom z Łukaszem całkowicie zmieniłem swoją sylwetkę i podejście do zdrowego stylu życia.",
              },
            }),
          }}
        />
      </head>
      <body className={`antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6C9K4XB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Toaster
          position="top-right"
          toastOptions={{ duration: 2000, className: "toast-slide-up" }}
        />
        {children}
      </body>
    </html>
  );
}
