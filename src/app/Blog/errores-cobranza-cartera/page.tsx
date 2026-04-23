import ErroresCobranzaContent from "./ErroresCobranzaContent";
import type { Metadata } from "next";

const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Errores comunes en la cobranza de cartera en Cali | Guía 2026",
  description:
    "Descubre los errores más comunes en la cobranza de cartera en Cali y cómo evitarlos para mejorar la recuperación de deudas en empresas.",

  keywords: [
    "errores cobranza cartera",
    "cobranza en Colombia errores",
    "gestión de cartera empresas",
    "recuperación de cartera fallas",
    "cómo cobrar deudas correctamente",
  ],

  alternates: {
    canonical:
      "https://gestion-cartera-cali-pravice.vercel.app/Blog/errores-cobranza-cartera",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Errores comunes en la cobranza de cartera en Cali",
    description:
      "Evita los errores más frecuentes que afectan la recuperación de cartera en empresas.",
    url: `${baseUrl}/Blog/errores-cobranza-cartera`,
    siteName: "Pravice Gestión de Cartera",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: `${baseUrl}/og/errores-cobranza.jpg`,
        width: 1200,
        height: 630,
        alt: "Errores en cobranza de cartera",
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
            headline: "Errores comunes en la cobranza de cartera en Cali",
            author: {
              "@type": "Organization",
              name: "Pravice Gestión de Cartera",
            },
            inLanguage: "es",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/Blog/errores-cobranza-cartera`,
            },
          }),
        }}
      />

      <ErroresCobranzaContent />
    </>
  );
}
