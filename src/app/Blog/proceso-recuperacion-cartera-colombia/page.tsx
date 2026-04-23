import ProcesoRecuperacionCarteraColombiaContent from "./ProcesoRecuperacionCarteraColombiaContent";
import type { Metadata } from "next";

const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title:
    "Proceso de recuperación de cartera empresarial en Colombia | Guía 2026",
  description:
    "Conoce el proceso completo de recuperación de cartera empresarial en Colombia: prejurídico, jurídico y estrategias efectivas para recuperar deudas.",

  keywords: [
    "proceso recuperación de cartera Colombia",
    "cobro prejurídico y jurídico",
    "gestión de cartera empresas",
    "recuperar deudas empresas Colombia",
    "abogados cartera vencida",
  ],

  alternates: {
    canonical: "/Blog/proceso-recuperacion-cartera-colombia",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Proceso de recuperación de cartera empresarial en Colombia",
    description:
      "Guía completa del proceso legal y estratégico para recuperar cartera vencida en empresas.",
    url: `${baseUrl}/Blog/proceso-recuperacion-cartera-colombia`,
    siteName: "Pravice Gestión de Cartera",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: `${baseUrl}/og/proceso-cartera.jpg`,
        width: 1200,
        height: 630,
        alt: "Proceso de recuperación de cartera Colombia",
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
            headline:
              "Proceso de recuperación de cartera empresarial en Colombia",
            author: {
              "@type": "Organization",
              name: "Pravice Gestión de Cartera",
            },
            inLanguage: "es",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/Blog/proceso-recuperacion-cartera-colombia`,
            },
          }),
        }}
      />

      <ProcesoRecuperacionCarteraColombiaContent />
    </>
  );
}
