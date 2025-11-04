import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mapa de Possibilidades",
  description:
    "Descubra como transformar ideias em experiências digitais completas: ideação, prototipagem, validação e deploy em um só lugar.",
  openGraph: {
    title: "Mapa de Possibilidades",
    description:
      "Entenda o que é possível construir aqui e percorra a jornada completa, da ideia ao lançamento.",
    type: "website",
    locale: "pt_BR",
  },
  metadataBase: new URL("https://agentic-498a06c4.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
