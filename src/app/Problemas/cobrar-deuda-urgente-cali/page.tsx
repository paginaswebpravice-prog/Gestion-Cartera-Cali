import { Metadata } from "next";
import CobroUrgenteContent from "./CobroUrgenteContent";

export const metadata: Metadata = {
  title: "Cobrar deuda urgente en Cali: recupera tu dinero rápido y legalmente",
  description:
    "¿Necesitas cobrar una deuda urgente en Cali? Recupera tu dinero con estrategias legales, cobro prejurídico y jurídico. Asesoría inmediata.",
  keywords: [
    "cobrar deuda urgente Cali",
    "recuperar dinero rápido Cali",
    "cobro jurídico urgente",
    "clientes morosos Cali",
    "recuperación de cartera urgente",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-cali-pravice.vercel.app/problemas/cobrar-deuda-urgente-cali",
  },
  openGraph: {
    title: "¿Necesitas cobrar una deuda urgente en Cali? Solución inmediata",
    description:
      "Recupera tu dinero hoy con estrategias profesionales de cobranza.",
    url: "https://gestion-cartera-cali-pravice.vercel.app/problemas/cobrar-deuda-urgente-cali",
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
          "Empresa especializada en recuperación de cartera y cobro de deudas en Cali.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cali",
          addressCountry: "CO",
        },
      },
      {
        "@type": "Service",
        name: "Cobro urgente de deudas en Cali",
        serviceType: "Recuperación de cartera urgente",
        areaServed: {
          "@type": "City",
          name: "Cali",
        },
        description:
          "Servicio especializado en cobro urgente de deudas, recuperación rápida de cartera y gestión legal en Cali.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo cobrar una deuda urgente en Cali?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Se recomienda iniciar con cobro prejurídico inmediato y, si no hay respuesta, escalar a cobro jurídico.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuánto tiempo tarda recuperar una deuda?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Depende del caso, pero con gestión profesional se pueden lograr resultados en semanas.",
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
      <CobroUrgenteContent />
    </>
  );
}
