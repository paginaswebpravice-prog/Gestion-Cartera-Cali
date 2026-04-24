import CarteraVencidaCaliContent from "./CarteraVencidaCaliContent";
import type { Metadata } from "next";

const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Cartera vencida en Cali: cómo recuperarla rápido | Solución 2026",
  description:
    "¿Tienes cartera vencida en Cali? Recupera tu dinero con estrategias legales efectivas. Mejora tu flujo de caja y evita pérdidas.",

  keywords: [
    "cartera vencida Cali",
    "recuperar cartera vencida",
    "clientes morosos Cali",
    "cobranza de deudas Colombia",
    "gestión de cartera empresas",
  ],

  alternates: {
    canonical:
      "https://gestion-cartera-cali-pravice.vercel.app/problemas/cartera-vencida-cali",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Cartera vencida en Cali",
    description:
      "Soluciones efectivas para recuperar cartera vencida y mejorar el flujo de caja.",
    url: `${baseUrl}/problemas/cartera-vencida-cali`,
    siteName: "Pravice Gestión de Cartera",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: `${baseUrl}/og/cartera-vencida.jpg`,
        width: 1200,
        height: 630,
        alt: "Cartera vencida en Cali",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Recuperación de cartera vencida en Cali",
            provider: {
              "@type": "Organization",
              name: "Pravice",
            },
            areaServed: "Cali, Colombia",
            description:
              "Servicio de recuperación de cartera vencida para empresas en Cali.",
          }),
        }}
      />

      <CarteraVencidaCaliContent />
    </>
  );
}
