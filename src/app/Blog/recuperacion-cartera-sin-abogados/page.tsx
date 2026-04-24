import CarteraSinAbogadosContent from "./CarteraSinAbogadosContent";
import type { Metadata } from "next";

const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Recuperación de cartera sin abogados: ¿es posible? | Guía 2026",
  description:
    "Descubre si es posible recuperar cartera sin abogados en Colombia, cuándo hacerlo y los riesgos de gestionar deudas sin asesoría legal.",

  keywords: [
    "recuperar cartera sin abogados",
    "cobranza sin abogados Colombia",
    "gestión de cartera empresas",
    "cuándo contratar abogados cobranza",
    "riesgos cobro de deudas",
  ],

  alternates: {
    canonical:
      "https://gestion-cartera-cali-pravice.vercel.app/Blog/recuperacion-cartera-sin-abogados",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Recuperación de cartera sin abogados",
    description:
      "Análisis real de cuándo puedes gestionar cartera sin abogados y cuándo necesitas apoyo legal.",
    url: `${baseUrl}/Blog/recuperacion-cartera-sin-abogados`,
    siteName: "Pravice Gestión de Cartera",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: `${baseUrl}/og/sin-abogados.jpg`,
        width: 1200,
        height: 630,
        alt: "Recuperar cartera sin abogados",
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
            headline: "Recuperación de cartera sin abogados: ¿es posible?",
            author: {
              "@type": "Organization",
              name: "Pravice Gestión de Cartera",
            },
            inLanguage: "es",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/Blog/recuperacion-cartera-sin-abogados`,
            },
          }),
        }}
      />

      <CarteraSinAbogadosContent />
    </>
  );
}
