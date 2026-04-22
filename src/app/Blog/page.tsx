import { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title:
    "Blog de recuperación de cartera en Cali | Cobranza, deudas y estrategias legales",

  description:
    "Blog especializado en recuperación de cartera en Cali, Colombia. Aprende cómo cobrar deudas, procesos jurídicos, estrategias de cobranza y gestión de cartera vencida.",

  keywords: [
    "recuperación de cartera Cali",
    "cobranza en Cali",
    "cobro jurídico Colombia",
    "deudas empresas Cali",
    "gestión de cartera vencida",
    "cómo cobrar deudas en Cali",
  ],

  alternates: {
    canonical: "https://gestion-cartera-cali-pravice.vercel.app/blog",
  },

  openGraph: {
    title:
      "Blog de recuperación de cartera en Cali | Estrategias legales y cobranza",
    description:
      "Guías y estrategias para recuperar cartera vencida en Cali, Colombia. Cobro jurídico, negociación y gestión de deudas empresariales.",
    url: "https://gestion-cartera-cali-pravice.vercel.app/blog",
    siteName: "Gestión de Cartera Cali",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de recuperación de cartera en Cali",
    description:
      "Artículos sobre cobranza, deudas, recuperación de cartera y estrategias legales en Cali, Colombia.",
    url: "https://gestion-cartera-cali-pravice.vercel.app/blog",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <BlogContent />
    </>
  );
}
