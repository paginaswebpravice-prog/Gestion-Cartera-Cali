import CarteraPymesContent from "./CarteraPymesContent";
import type { Metadata } from "next";

const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Recuperación de cartera para pymes en Cali | Guía 2026",
  description:
    "Soluciones efectivas para la recuperación de cartera en pymes en Cali. Aprende cómo mejorar el flujo de caja y recuperar deudas de clientes.",

  keywords: [
    "cartera pymes Cali",
    "recuperación de cartera empresas pequeñas",
    "cobranza pymes Colombia",
    "gestión de cartera negocios pequeños",
    "deudas clientes pymes",
  ],

  alternates: {
    canonical:
      "https://gestion-cartera-cali-pravice.vercel.app/Blog/cartera-pymes-cali",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Recuperación de cartera para pymes en Cali",
    description:
      "Estrategias legales y efectivas para recuperar cartera vencida en pequeñas y medianas empresas.",
    url: `${baseUrl}/Blog/cartera-pymes-cali`,
    siteName: "Pravice Gestión de Cartera",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: `${baseUrl}/og/cartera-pymes.jpg`,
        width: 1200,
        height: 630,
        alt: "Cartera para pymes en Cali",
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
            headline: "Recuperación de cartera para pymes en Cali",
            author: {
              "@type": "Organization",
              name: "Pravice Gestión de Cartera",
            },
            inLanguage: "es",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/Blog/cartera-pymes-cali`,
            },
          }),
        }}
      />

      <CarteraPymesContent />
    </>
  );
}
