import CobroJuridicoEnCaliContent from "./CobroJuridicoEnCaliContent";
import type { Metadata } from "next";

const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Cobro jurídico en Cali: cuándo demandar una deuda | Guía legal 2026",
  description:
    "Descubre cuándo iniciar un cobro jurídico en Cali, cómo funciona el proceso legal en Colombia y qué hacer si un cliente no paga su deuda.",

  keywords: [
    "cobro jurídico Cali",
    "abogados cobro de cartera Cali",
    "demanda por deuda Colombia",
    "recuperación de cartera jurídica",
    "cuándo demandar una deuda",
  ],

  alternates: {
    canonical:
      "https://gestion-cartera-cali-pravice.vercel.app/Blog/cobro-juridico-cali",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Cobro jurídico en Cali: cuándo demandar una deuda",
    description:
      "Guía completa sobre el proceso de cobro jurídico en Colombia y cuándo iniciar una demanda para recuperar cartera vencida.",
    url: `${baseUrl}/Blog/cobro-juridico-cali`,
    siteName: "Pravice Gestión de Cartera",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: `${baseUrl}/og/cobro-juridico.jpg`,
        width: 1200,
        height: 630,
        alt: "Cobro jurídico en Cali",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cobro jurídico en Cali: cuándo demandar una deuda",
    description:
      "Aprende cuándo iniciar un proceso legal para recuperar deudas en Colombia.",
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
            headline: "Cobro jurídico en Cali: cuándo demandar una deuda",
            author: {
              "@type": "Organization",
              name: "Pravice Gestión de Cartera",
            },
            inLanguage: "es",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/Blog/cobro-juridico-cali`,
            },
          }),
        }}
      />

      <CobroJuridicoEnCaliContent />
    </>
  );
}
