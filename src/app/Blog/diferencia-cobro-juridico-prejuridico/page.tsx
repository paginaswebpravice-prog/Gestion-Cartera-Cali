import DiferenciaCobroContent from "./DiferenciaCobroContent";
import type { Metadata } from "next";

const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title:
    "Diferencia entre cobro jurídico y prejurídico en Colombia | Guía 2026",
  description:
    "Entiende la diferencia entre cobro jurídico y prejurídico en Colombia. Cuándo aplicar cada etapa para recuperar cartera vencida de forma efectiva.",

  keywords: [
    "diferencia cobro jurídico y prejurídico",
    "cobro prejurídico Colombia",
    "cobro jurídico Colombia",
    "recuperación de cartera Cali",
    "abogados cobro de cartera",
  ],

  alternates: {
    canonical:
      "https://gestion-cartera-cali-pravice.vercel.app/Blog/diferencia-cobro-juridico-prejuridico",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Diferencia entre cobro jurídico y prejurídico en Colombia",
    description:
      "Guía clara para entender las etapas de cobranza en Colombia y cuándo usar cada una.",
    url: `${baseUrl}/Blog/diferencia-cobro-juridico-prejuridico`,
    siteName: "Pravice Gestión de Cartera",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: `${baseUrl}/og/diferencia-cobro.jpg`,
        width: 1200,
        height: 630,
        alt: "Cobro jurídico vs prejurídico",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      {/* Schema SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Diferencia entre cobro jurídico y prejurídico en Colombia",
            author: {
              "@type": "Organization",
              name: "Pravice Gestión de Cartera",
            },
            inLanguage: "es",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/Blog/diferencia-cobro-juridico-prejuridico`,
            },
          }),
        }}
      />

      <DiferenciaCobroContent />
    </>
  );
}
