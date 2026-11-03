import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Macarena Leyton Vega · Estudiante de Derecho",
  description:
    "Estudiante de Derecho en la Universidad Gabriela Mistral. Juez del Tribunal Calificador de Elecciones y ayudante de Derecho Internacional Público y Derecho Civil.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${dmSans.variable} ${instrument.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
