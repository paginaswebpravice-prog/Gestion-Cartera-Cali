import { Metadata } from "next";
import ClientesNoPaganContent from "./ClientesNoPaganContent";

export const metadata: Metadata = {
  title: "Clientes no pagan en Cali: cómo cobrar deudas rápido y legalmente",
  description:
    "¿Tus clientes no te pagan en Cali? Recupera tu dinero con estrategias legales, cobro prejurídico y jurídico. Asesoría profesional en Cali.",
  keywords: [
    "clientes no pagan Cali",
    "cobrar deudas Cali",
    "recuperar cartera Cali",
    "clientes morosos Colombia",
    "cobro jurídico Cali",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-cali-pravice.vercel.app/Problemas/clientes-no-pagan-cali",
  },
  openGraph: {
    title:
      "¿Clientes no pagan en Cali? Solución rápida para recuperar tu dinero",
    description:
      "Recupera cartera vencida en Cali con estrategias legales efectivas.",
    url: "https://gestion-cartera-cali-pravice.vercel.app/Problemas/clientes-no-pagan-cali",
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
        logo: "https://gestion-cartera-cali-pravice.vercel.app/logo_pravice.png",
        image:
          "https://gestion-cartera-cali-pravice.vercel.app/logo_pravice.png",
        description:
          "Empresa especializada en recuperación de cartera y cobro de deudas en Cali, Colombia.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cali",
          addressCountry: "CO",
        },
        areaServed: "Cali, Colombia",
      },
      {
        "@type": "Service",
        serviceType: "Recuperación de cartera",
        name: "Cobro de deudas en Cali",
        provider: {
          "@type": "Organization",
          name: "Pravice",
        },
        areaServed: {
          "@type": "City",
          name: "Cali",
        },
        description:
          "Servicio profesional de recuperación de cartera vencida, cobro prejurídico y jurídico en Cali.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Qué hacer si un cliente no paga en Cali?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Lo recomendable es iniciar con contacto formal, continuar con cobro prejurídico y, si es necesario, escalar a cobro jurídico.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuándo iniciar cobro jurídico?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cuando el cliente no responde a las gestiones de cobro prejurídico o incumple acuerdos de pago.",
            },
          },
          {
            "@type": "Question",
            name: "¿Se puede recuperar una deuda sin demandar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí, muchos casos se resuelven mediante cobro prejurídico y acuerdos de pago bien estructurados.",
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
      <ClientesNoPaganContent />
    </>
  );
}
