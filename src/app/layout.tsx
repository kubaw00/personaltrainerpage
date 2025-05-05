import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import "@/styles/animations.css";
import "@/styles/swiper-overrides.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
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
    icon: "/icon.png",
    shortcut: "/apple-icon.png",
    apple: "/apple-icon.png",
    other: [
      { rel: "mask-icon", url: "/icon.png" },
      { rel: "favicon", url: "/favicon.ico" },
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
    <html lang="pl">
      <head>
        {/* Strukturalne dane JSON-LD dla LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Łukasz Moczkodan - Trener Personalny Kraków",
              image: "https://lukaszmoczkodan.pl/logo.png",
              url: "https://lukaszmoczkodan.pl/",
              telephone: "+48555900999",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Iwona Odrowąża 26",
                addressLocality: "Kraków",
                postalCode: "30-009",
                addressCountry: "PL",
              },
              description:
                "Profesjonalny trener personalny w Krakowie. Osiągnij swoje cele fitness dzięki indywidualnym planom treningowym i wsparciu eksperta.",
              priceRange: "$$",
              openingHours: "Mo-Su 06:00-22:00",
              sameAs: ["https://facebook.com/", "https://instagram.com/"],
            }),
          }}
        />
      </head>
      <body className={` ${montserrat.variable} antialiased`}>
        <Toaster
          position="top-right"
          toastOptions={{ duration: 2000, className: "toast-slide-up" }}
        />
        {children}
      </body>
    </html>
  );
}
