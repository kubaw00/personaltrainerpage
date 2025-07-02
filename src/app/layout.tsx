import type { Metadata } from "next";
import { Work_Sans, Montserrat, Anton } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import "@/styles/animations.css";
import "@/styles/swiper-overrides.css";

import Script from "next/script";

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
    "trener personalny Kraków cena",
    "koszt trenera personalnego",
    "cennik treningów personalnych",
    "ile kosztuje trener personalny",
    "ceny treningów w Krakowie",
    "indywidualne plany treningowe koszt",
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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
            `,
          }}
        />
        <Script
          id="meta-pixel-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '612591004655576');
            fbq('track', 'PageView');
            `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=612591004655576&ev=PageView&noscript=1"
          />
        </noscript>

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
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price:
                      "Cena zależy od indywidualnych potrzeb i częstotliwości treningów",
                    priceCurrency: "PLN",
                  },
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Treningi personalne",
                  description:
                    "Indywidualne treningi dostosowane do Twoich potrzeb",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "Cena zależy od ilości treningów",
                    priceCurrency: "PLN",
                  },
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Konsultacje dietetyczne",
                  description:
                    "Spersonalizowane plany żywieniowe wspierające Twoje cele",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "Cena ustalana indywidualnie",
                    priceCurrency: "PLN",
                  },
                  availability: "https://schema.org/InStock",
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
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Toaster
          position="top-right"
          toastOptions={{ duration: 2000, className: "toast-slide-up" }}
        />
        {children}
      </body>
    </html>
  );
}
