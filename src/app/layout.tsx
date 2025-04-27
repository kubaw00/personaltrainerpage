import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trener Personalny - Łukasz Mczkodan",
  description:
    "Profesjonalny trener personalny w Krakowie. Osiągnij swoje cele fitness dzięki indywidualnym planom treningowym i wsparciu eksperta. Umów się na trening już dziś!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
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
