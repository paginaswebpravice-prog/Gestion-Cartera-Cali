import TiempoCobroJuridicoContent from "./TiempoCobroJuridicoContent";
import type { Metadata } from "next";

const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Cuánto tiempo tarda un cobro jurídico en Colombia | Guía 2026",
  description:
    "Descubre cuánto tiempo tarda un cobro jurídico en Colombia, sus etapas, factores de duración y cómo agilizar la recuperación de cartera.",

  keywords: [
    "tiempo cobro jurídico Colombia",
    "cuánto dura una demanda de cobro",
    "proceso ejecutivo Colombia tiempos",
    "recuperación de cartera judicial",
    "abogados cobro de deudas",
  ],

  alternates: {
    canonical:
      "gestion-cartera-cali-pravice.vercel.app/Blog/tiempo-cobro-juridico-colombia",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Cuánto tiempo tarda un cobro jurídico en Colombia",
    description:
      "Conoce los tiempos reales de un proceso de cobro jurídico y cómo acelerar la recuperación de cartera.",
    url: `${baseUrl}/Blog/tiempo-cobro-juridico-colombia`,
    siteName: "Pravice Gestión de Cartera",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: `${baseUrl}/og/tiempo-cobro.jpg`,
        width: 1200,
        height: 630,
        alt: "Tiempo cobro jurídico Colombia",
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
            headline: "Cuánto tiempo tarda un cobro jurídico en Colombia",
            author: {
              "@type": "Organization",
              name: "Pravice Gestión de Cartera",
            },
            inLanguage: "es",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/Blog/tiempo-cobro-juridico-colombia`,
            },
          }),
        }}
      />

      <TiempoCobroJuridicoContent />
    </>
  );
}
