import { Metadata } from "next";
import CobranzaClinicasContent from "./CobranzaClinicasContent";

export const metadata: Metadata = {
  title: "Cobranza para clínicas en Cali: recuperación de cartera en salud",
  description:
    "Recupera cartera vencida en clínicas de Cali. Gestión de cuentas médicas, cobro prejurídico y jurídico para el sector salud.",
  keywords: [
    "cobranza clínicas Cali",
    "cartera clínicas Colombia",
    "recuperación cuentas médicas",
    "cobro cartera salud Cali",
    "facturación clínica cartera vencida",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-cali-pravice.vercel.app/sectores/cobranza-clinicas-cali",
  },
  openGraph: {
    title: "Cobranza para clínicas en Cali: recupera cartera del sector salud",
    description:
      "Especialistas en recuperación de cuentas médicas y cartera vencida en clínicas.",
    url: "https://gestion-cartera-cali-pravice.vercel.app/sectores/cobranza-clinicas-cali",
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
          "Empresa especializada en recuperación de cartera para clínicas y sector salud en Cali.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cali",
          addressCountry: "CO",
        },
      },
      {
        "@type": "Service",
        name: "Cobranza para clínicas en Cali",
        serviceType: "Recuperación de cartera en salud",
        areaServed: {
          "@type": "City",
          name: "Cali",
        },
        description:
          "Servicio de recuperación de cartera para clínicas, IPS y sector salud en Cali.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cómo recuperar cartera en clínicas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Se realiza gestión prejurídica, conciliación y cobro jurídico de cuentas médicas pendientes.",
            },
          },
          {
            "@type": "Question",
            name: "¿Se pueden cobrar cuentas médicas sin demanda?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí, muchas se recuperan mediante gestión prejurídica especializada.",
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
      <CobranzaClinicasContent />
    </>
  );
}
