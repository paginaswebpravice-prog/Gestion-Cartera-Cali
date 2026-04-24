import { Metadata } from "next";
import CobranzaInmobiliariasContent from "./CobranzaInmobiliariasContent";

export const metadata: Metadata = {
  title:
    "Cobranza para inmobiliarias en Cali: recuperación de arriendos y cartera",
  description:
    "Recupera arriendos vencidos y cartera inmobiliaria en Cali. Gestión prejurídica y jurídica para inmobiliarias y administradores de propiedad.",
  keywords: [
    "cobranza inmobiliarias Cali",
    "recuperar arriendos Cali",
    "cartera inmobiliaria Colombia",
    "cobro de arriendos morosos",
    "deudas de inquilinos Cali",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-cali-pravice.vercel.app/Sectores/cobranza-inmobiliarias-cali",
  },
  openGraph: {
    title: "Cobranza para inmobiliarias en Cali: recupera arriendos vencidos",
    description:
      "Especialistas en recuperación de cartera inmobiliaria y cobro de arriendos.",
    url: "https://gestion-cartera-cali-pravice.vercel.app/Sectores/cobranza-inmobiliarias-cali",
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
          "Empresa especializada en recuperación de cartera inmobiliaria en Cali.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cali",
          addressCountry: "CO",
        },
      },
      {
        "@type": "Service",
        name: "Cobranza para inmobiliarias en Cali",
        serviceType: "Recuperación de cartera inmobiliaria",
        areaServed: {
          "@type": "City",
          name: "Cali",
        },
        description:
          "Servicio de recuperación de arriendos vencidos y cartera inmobiliaria en Cali.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo cobrar arriendos vencidos en Cali?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Se inicia con cobro prejurídico, negociación con el inquilino y, si es necesario, proceso jurídico.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué hacer si un inquilino no paga?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Se recomienda iniciar gestión formal de cobro y evaluar acciones legales para recuperar la deuda.",
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
      <CobranzaInmobiliariasContent />
    </>
  );
}
