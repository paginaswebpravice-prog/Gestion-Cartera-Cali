import AcuerdoPagoContent from "./AcuerdoPagoContent";
import type { Metadata } from "next";

const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Cómo redactar un acuerdo de pago efectivo | Ejemplo y guía 2026",
  description:
    "Aprende cómo redactar un acuerdo de pago efectivo paso a paso. Incluye estructura, ejemplo y recomendaciones legales para recuperar cartera en Colombia.",

  keywords: [
    "acuerdo de pago ejemplo",
    "cómo hacer acuerdo de pago",
    "modelo acuerdo de pago Colombia",
    "recuperación de cartera acuerdos",
    "cobro de deudas legal",
  ],

  alternates: {
    canonical: "/Blog/acuerdo-de-pago-ejemplo",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Cómo redactar un acuerdo de pago efectivo",
    description:
      "Guía práctica con ejemplo para crear acuerdos de pago que realmente se cumplan en Colombia.",
    url: `${baseUrl}/Blog/acuerdo-de-pago-ejemplo`,
    siteName: "Pravice Gestión de Cartera",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: `${baseUrl}/og/acuerdo-pago.jpg`,
        width: 1200,
        height: 630,
        alt: "Acuerdo de pago ejemplo Colombia",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Cómo redactar un acuerdo de pago efectivo",
            author: {
              "@type": "Organization",
              name: "Pravice Gestión de Cartera",
            },
            inLanguage: "es",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/Blog/acuerdo-de-pago-ejemplo`,
            },
          }),
        }}
      />

      <AcuerdoPagoContent />
    </>
  );
}
