import CobroPrejuridicoCaliContent from "./CobroPrejuridicoCaliContent";
import type { Metadata } from "next";

const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Cobro prejurídico en Cali: cómo funciona y cuándo usarlo | Guía 2026",
  description:
    "Descubre cómo funciona el cobro prejurídico en Cali, cuándo aplicarlo y cómo recuperar cartera vencida sin llegar a demanda judicial.",

  keywords: [
    "cobro prejurídico Cali",
    "cómo funciona cobro prejurídico",
    "recuperación de cartera sin demanda",
    "abogados cobranza Cali",
    "gestión de cartera Colombia",
  ],

  alternates: {
    canonical: "/Blog/cobro-prejuridico-cali",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Cobro prejurídico en Cali: cómo funciona",
    description:
      "Guía completa sobre el cobro prejurídico en Colombia antes de iniciar una demanda judicial.",
    url: `${baseUrl}/Blog/cobro-prejuridico-cali`,
    siteName: "Pravice Gestión de Cartera",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: `${baseUrl}/og/cobro-prejuridico.jpg`,
        width: 1200,
        height: 630,
        alt: "Cobro prejurídico en Cali",
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
            headline: "Cobro prejurídico en Cali",
            author: {
              "@type": "Organization",
              name: "Pravice Gestión de Cartera",
            },
            inLanguage: "es",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/Blog/cobro-prejuridico-cali`,
            },
          }),
        }}
      />

      <CobroPrejuridicoCaliContent />
    </>
  );
}
