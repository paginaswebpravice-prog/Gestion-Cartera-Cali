import NegociarDeudasClientesContent from "./NegociarDeudasClientesContent";
import type { Metadata } from "next";

const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Cómo negociar deudas sin perder clientes | Guía 2026",
  description:
    "Aprende cómo negociar deudas con clientes sin afectar la relación comercial. Estrategias efectivas de cobranza en Colombia.",

  keywords: [
    "negociar deudas clientes",
    "cómo cobrar sin perder clientes",
    "acuerdos de pago empresas",
    "cobranza efectiva Colombia",
    "recuperación de cartera negociación",
  ],

  alternates: {
    canonical:
      "https://gestion-cartera-cali-pravice.vercel.app/Blog/negociar-deudas-clientes",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Cómo negociar deudas sin perder clientes",
    description:
      "Estrategias profesionales para recuperar dinero sin afectar relaciones comerciales.",
    url: `${baseUrl}/Blog/negociar-deudas-clientes`,
    siteName: "Pravice Gestión de Cartera",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: `${baseUrl}/og/negociar-deudas.jpg`,
        width: 1200,
        height: 630,
        alt: "Negociar deudas clientes",
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
            headline: "Cómo negociar deudas sin perder clientes",
            author: {
              "@type": "Organization",
              name: "Pravice Gestión de Cartera",
            },
            inLanguage: "es",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/Blog/negociar-deudas-clientes`,
            },
          }),
        }}
      />

      <NegociarDeudasClientesContent />
    </>
  );
}
