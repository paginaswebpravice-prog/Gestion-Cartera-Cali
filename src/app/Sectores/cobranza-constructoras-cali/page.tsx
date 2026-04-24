import { Metadata } from "next";
import CobranzaConstructorasCaliContent from "./CobranzaConstructorasCaliContent";

const url =
  "https://gestion-cartera-cali-pravice.vercel.app/Sectores/cobranza-constructoras-cali";

export const metadata: Metadata = {
  title:
    "Cobranza para constructoras en Cali | Recuperar cartera de obras y contratos",
  description:
    "Recupera cartera vencida en constructoras en Cali. Cobro de deudas por obras, contratistas y facturación pendiente con estrategias legales efectivas.",
  keywords: [
    "cobranza constructoras Cali",
    "recuperar cartera construcción Colombia",
    "clientes no pagan obras",
    "cobro de contratos construcción",
    "cartera vencida constructoras",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Cobranza para constructoras en Cali",
    description:
      "Recupera deudas por obras, contratos y clientes morosos en el sector construcción en Cali.",
    url,
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Cobranza para constructoras en Cali",
            description:
              "Servicio de recuperación de cartera para constructoras, contratistas y empresas de obra en Cali.",
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

      <CobranzaConstructorasCaliContent />
    </>
  );
}
