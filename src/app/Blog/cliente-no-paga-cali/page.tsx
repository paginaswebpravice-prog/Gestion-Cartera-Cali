import ClienteNoPagaCaliContent from "./ClienteNoPagaCaliContent";
import type { Metadata } from "next";

const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Qué hacer si un cliente no paga en Cali | Guía legal y práctica 2026",
  description:
    "Descubre qué hacer si un cliente no paga en Cali. Estrategias legales, prejurídicas y prácticas para recuperar tu dinero de forma efectiva en Colombia.",

  keywords: [
    "cliente no paga Cali",
    "qué hacer si no me pagan Colombia",
    "cobro de cartera Cali",
    "recuperar dinero clientes morosos",
    "abogados cobro Cali",
  ],

  alternates: {
    canonical:
      "https://gestion-cartera-cali-pravice.vercel.app/Blog/cliente-no-paga-cali",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Qué hacer si un cliente no paga en Cali",
    description:
      "Guía práctica y legal para empresas en Cali que enfrentan clientes morosos.",
    url: `${baseUrl}/Blog/cliente-no-paga-cali`,
    siteName: "Pravice Gestión de Cartera",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: `${baseUrl}/og/cliente-no-paga.jpg`,
        width: 1200,
        height: 630,
        alt: "Cliente no paga en Cali",
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
            headline: "Qué hacer si un cliente no paga en Cali",
            author: {
              "@type": "Organization",
              name: "Pravice Gestión de Cartera",
            },
            inLanguage: "es",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/Blog/cliente-no-paga-cali`,
            },
          }),
        }}
      />

      <ClienteNoPagaCaliContent />
    </>
  );
}
