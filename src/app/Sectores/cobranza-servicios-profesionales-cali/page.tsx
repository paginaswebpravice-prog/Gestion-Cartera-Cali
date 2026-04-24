import { Metadata } from "next";
import CobranzaServiciosProfesionalesCaliContent from "./CobranzaServiciosProfesionalesCaliContent";

const url =
  "https://gestion-cartera-cali-pravice.vercel.app/Sectores/cobranza-servicios-profesionales-cali";

export const metadata: Metadata = {
  title:
    "Cobranza para servicios profesionales en Cali | Clientes que no pagan honorarios",
  description:
    "Recupera honorarios y pagos pendientes de clientes en Cali. Servicio de cobranza para abogados, contadores, consultores y profesionales independientes.",
  keywords: [
    "clientes no pagan servicios profesionales",
    "cobranza abogados Cali",
    "cobrar honorarios Colombia",
    "recuperar cartera consultores",
    "cobro de servicios profesionales Cali",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Cobranza para servicios profesionales en Cali",
    description:
      "Recupera honorarios de clientes morosos con estrategias legales efectivas en Cali.",
    url,
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
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
            name: "Cobranza para servicios profesionales en Cali",
            description:
              "Recuperación de cartera para abogados, contadores, consultores y profesionales en Cali.",
            areaServed: {
              "@type": "City",
              name: "Cali",
            },
            provider: {
              "@type": "Organization",
              name: "Pravice",
              url: "https://gestion-cartera-cali-pravice.vercel.app",
            },
          }),
        }}
      />

      <CobranzaServiciosProfesionalesCaliContent />
    </>
  );
}
