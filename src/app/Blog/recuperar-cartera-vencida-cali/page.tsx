import RecuperarCarteraVencidaCaliContent from "./RecuperarCarteraVencidaCaliContent";
import type { Metadata } from "next";

const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Cómo recuperar cartera vencida en Cali paso a paso | Guía legal 2026",
  description:
    "Aprende cómo recuperar cartera vencida en Cali paso a paso. Estrategias legales, prejurídicas y jurídicas para cobrar deudas de clientes morosos en Colombia.",

  keywords: [
    "recuperar cartera vencida Cali",
    "cobro de deudas Cali",
    "cartera morosa Colombia",
    "cobranza empresarial Cali",
    "abogados cobro de cartera Cali",
  ],

  alternates: {
    canonical:
      "https://gestion-cartera-cali-pravice.vercel.app/Blog/recuperar-cartera-vencida-cali",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Cómo recuperar cartera vencida en Cali paso a paso",
    description:
      "Guía completa para empresas en Cali que necesitan recuperar deudas de clientes morosos de forma legal y efectiva.",
    url: `${baseUrl}/Blog/recuperar-cartera-vencida-cali`,
    siteName: "Pravice Gestión de Cartera",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: `${baseUrl}/og/recuperar-cartera.jpg`,
        width: 1200,
        height: 630,
        alt: "Recuperación de cartera vencida en Cali",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo recuperar cartera vencida en Cali paso a paso",
    description:
      "Guía completa para recuperar cartera vencida en Colombia de forma legal.",
    images: [`${baseUrl}/og/recuperar-cartera.jpg`],
  },
};

export default function Page() {
  return (
    <>
      {/* JSON-LD SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Cómo recuperar cartera vencida en Cali paso a paso",
            description:
              "Guía completa sobre recuperación de cartera vencida en Cali con estrategias legales y prejurídicas.",
            image: `${baseUrl}/og/recuperar-cartera.jpg`,
            author: {
              "@type": "Organization",
              name: "Pravice Gestión de Cartera",
            },
            publisher: {
              "@type": "Organization",
              name: "Pravice",
              logo: {
                "@type": "ImageObject",
                url: `${baseUrl}/logo.png`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/Blog/recuperar-cartera-vencida-cali`,
            },
            inLanguage: "es",
          }),
        }}
      />

      <RecuperarCarteraVencidaCaliContent />
    </>
  );
}
