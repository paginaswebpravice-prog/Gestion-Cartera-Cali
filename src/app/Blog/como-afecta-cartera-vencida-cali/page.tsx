import ComoAfectaCarteaVencidaCaliContent from "./ComoAfectaCarteaVencidaCaliContent";
import type { Metadata } from "next";

const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title:
    "Cómo afecta la cartera vencida a tu empresa | Impacto financiero 2026",
  description:
    "Descubre cómo la cartera vencida afecta la liquidez, el crecimiento y la estabilidad de tu empresa. Aprende a prevenir pérdidas financieras en Colombia.",

  keywords: [
    "cartera vencida empresa",
    "impacto cartera vencida",
    "problemas de liquidez empresas",
    "morosidad empresarial Colombia",
    "gestión de cartera Cali",
  ],

  alternates: {
    canonical:
      "https://gestion-cartera-cali-pravice.vercel.app/Blog/impacto-cartera-vencida",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Cómo afecta la cartera vencida a tu empresa",
    description:
      "Entiende el impacto financiero de la cartera vencida en empresas y cómo evitar pérdidas de liquidez.",
    url: `${baseUrl}/Blog/impacto-cartera-vencida`,
    siteName: "Pravice Gestión de Cartera",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: `${baseUrl}/og/impacto-cartera.jpg`,
        width: 1200,
        height: 630,
        alt: "Impacto de cartera vencida en empresas",
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
            headline: "Cómo afecta la cartera vencida a tu empresa",
            author: {
              "@type": "Organization",
              name: "Pravice Gestión de Cartera",
            },
            inLanguage: "es",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/Blog/impacto-cartera-vencida`,
            },
          }),
        }}
      />

      <ComoAfectaCarteaVencidaCaliContent />
    </>
  );
}
