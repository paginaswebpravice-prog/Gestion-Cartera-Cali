import { Metadata } from "next";
import CobranzaPymesContent from "./CobranzaPymesContent";

export const metadata: Metadata = {
  title: "Cobranza para pymes en Cali: recuperación de cartera empresarial",
  description:
    "Recupera cartera vencida en tu pyme en Cali. Soluciones de cobro prejurídico y jurídico para pequeñas y medianas empresas.",
  keywords: [
    "cobranza pymes Cali",
    "recuperar cartera pymes",
    "clientes morosos empresas Cali",
    "cobro de deudas empresas Colombia",
    "cartera vencida pymes",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-cali-pravice.vercel.app/Sectores/cobranza-pymes-cali",
  },
  openGraph: {
    title: "Cobranza para pymes en Cali: recupera tu cartera vencida",
    description:
      "Soluciones efectivas para recuperar deudas en pequeñas y medianas empresas.",
    url: "https://gestion-cartera-cali-pravice.vercel.app/Sectores/cobranza-pymes-cali",
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Pravice",
        url: "https://gestion-cartera-cali-pravice.vercel.app",
        description:
          "Especialistas en recuperación de cartera para pymes en Cali.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cali",
          addressCountry: "CO",
        },
      },
      {
        "@type": "Service",
        name: "Cobranza para pymes en Cali",
        serviceType: "Recuperación de cartera empresarial",
        areaServed: {
          "@type": "City",
          name: "Cali",
        },
        description:
          "Servicio de cobro de deudas para pequeñas y medianas empresas en Cali.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo recuperar cartera en una pyme?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Se implementa gestión de cobro prejurídico, acuerdos de pago y, si es necesario, cobro jurídico.",
            },
          },
          {
            "@type": "Question",
            name: "¿Vale la pena contratar cobranza para una pyme?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí, mejora el flujo de caja y aumenta la recuperación de deudas sin afectar la operación.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CobranzaPymesContent />
    </>
  );
}
