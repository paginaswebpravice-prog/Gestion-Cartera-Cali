import EvitarMorosidadClientesCaliContent from "./EvitarMorosidadClientesCaliContent";
import type { Metadata } from "next";

const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Cómo evitar la morosidad en clientes empresariales | Guía 2026",
  description:
    "Aprende cómo evitar la morosidad en clientes empresariales con estrategias de crédito, cobranza preventiva y gestión de cartera efectiva en Colombia.",

  keywords: [
    "evitar morosidad clientes",
    "reducción cartera vencida empresas",
    "gestión de crédito empresas",
    "cobranza preventiva Colombia",
    "clientes morosos solución",
  ],

  alternates: {
    canonical: "/Blog/evitar-morosidad-clientes",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Cómo evitar la morosidad en clientes empresariales",
    description:
      "Estrategias efectivas para prevenir clientes morosos y mejorar la salud financiera de tu empresa.",
    url: `${baseUrl}/Blog/evitar-morosidad-clientes`,
    siteName: "Pravice Gestión de Cartera",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: `${baseUrl}/og/evitar-morosidad.jpg`,
        width: 1200,
        height: 630,
        alt: "Evitar morosidad en empresas",
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
            headline: "Cómo evitar la morosidad en clientes empresariales",
            author: {
              "@type": "Organization",
              name: "Pravice Gestión de Cartera",
            },
            inLanguage: "es",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/Blog/evitar-morosidad-clientes`,
            },
          }),
        }}
      />

      <EvitarMorosidadClientesCaliContent />
    </>
  );
}
