import EstrategiasRecuperacionCarteraContent from "./EstrategiasRecuperacionCarteraContent";
import type { Metadata } from "next";

const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Estrategias de cobranza efectiva en Cali | Guía empresarial 2026",
  description:
    "Descubre estrategias de cobranza efectiva en Cali para mejorar la recuperación de cartera, reducir la morosidad y optimizar el flujo de caja de tu empresa.",

  keywords: [
    "estrategias de cobranza Cali",
    "recuperación de cartera empresas",
    "cobranza efectiva Colombia",
    "gestión de cartera Cali",
    "reducir morosidad empresas",
  ],

  alternates: {
    canonical:
      "https://gestion-cartera-cali-pravice.vercel.app/Blog/estrategias-recuperacion-cartera-cali",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Estrategias de cobranza efectiva en Cali",
    description:
      "Aprende cómo mejorar la recuperación de cartera en empresas de Cali con estrategias profesionales de cobranza.",
    url: `${baseUrl}/Blog/estrategias-recuperacion-cartera-cali`,
    siteName: "Pravice Gestión de Cartera",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: `${baseUrl}/og/estrategias-cobranza.jpg`,
        width: 1200,
        height: 630,
        alt: "Estrategias de cobranza en Cali",
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
            headline: "Estrategias de cobranza efectiva en Cali",
            author: {
              "@type": "Organization",
              name: "Pravice Gestión de Cartera",
            },
            inLanguage: "es",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/Blog/estrategias-recuperacion-cartera-cali`,
            },
          }),
        }}
      />

      <EstrategiasRecuperacionCarteraContent />
    </>
  );
}
