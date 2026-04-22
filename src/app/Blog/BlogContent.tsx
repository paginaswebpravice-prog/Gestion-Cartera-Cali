"use client";

import styles from "./Blog.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Cómo recuperar cartera vencida en Cali paso a paso",
    slug: "recuperar-cartera-vencida-cali",
    description:
      "Guía completa para empresas en Cali que necesitan recuperar deudas de clientes morosos de forma legal y efectiva.",
  },
  {
    title: "Cobro jurídico en Cali: cuándo demandar una deuda",
    slug: "cobro-juridico-cali",
    description:
      "Descubre cuándo es necesario iniciar un proceso judicial para recuperar cartera en Colombia.",
  },
  {
    title: "Qué hacer si un cliente no paga en Cali",
    slug: "cliente-no-paga-cali",
    description:
      "Estrategias prácticas para empresas que enfrentan clientes morosos en Cali, Colombia.",
  },
  {
    title: "Diferencia entre cobro jurídico y prejurídico",
    slug: "diferencia-cobro-juridico-prejuridico",
    description:
      "Entiende las diferencias clave entre etapas de cobranza en Colombia.",
  },
  {
    title: "Estrategias de cobranza efectiva en Cali",
    slug: "estrategias-cobranza-cali",
    description:
      "Técnicas profesionales para mejorar la recuperación de cartera empresarial.",
  },
  {
    title: "Cómo afecta la cartera vencida a tu empresa",
    slug: "impacto-cartera-vencida",
    description:
      "El impacto financiero de la mora en empresas de Cali y cómo solucionarlo.",
  },

  /* ===================== NUEVOS ARTÍCULOS ===================== */

  {
    title: "Cobro prejurídico en Cali: cómo funciona y cuándo usarlo",
    slug: "cobro-prejuridico-cali",
    description:
      "Conoce cómo funciona el cobro prejurídico y por qué es la primera etapa para recuperar deudas sin demanda.",
  },
  {
    title: "Cómo evitar la morosidad en clientes empresariales",
    slug: "evitar-morosidad-clientes",
    description:
      "Estrategias preventivas para reducir clientes morosos en empresas de Cali.",
  },
  {
    title: "Proceso de recuperación de cartera empresarial en Colombia",
    slug: "proceso-recuperacion-cartera-colombia",
    description:
      "Paso a paso del proceso legal y extrajudicial para recuperar cartera vencida.",
  },
  {
    title: "Cómo redactar un acuerdo de pago efectivo",
    slug: "acuerdo-de-pago-ejemplo",
    description:
      "Guía para estructurar acuerdos de pago que realmente se cumplan.",
  },
  {
    title: "Errores comunes en la cobranza de cartera en Cali",
    slug: "errores-cobranza-cartera",
    description:
      "Errores frecuentes que afectan la recuperación de cartera en empresas.",
  },
  {
    title: "Recuperación de cartera para pymes en Cali",
    slug: "cartera-pymes-cali",
    description:
      "Soluciones legales adaptadas a pequeñas y medianas empresas en Cali.",
  },
  {
    title: "Cuánto tiempo tarda un cobro jurídico en Colombia",
    slug: "tiempo-cobro-juridico-colombia",
    description: "Tiempos reales de un proceso judicial de cobro en Colombia.",
  },
  {
    title: "Cómo negociar deudas sin perder clientes",
    slug: "negociar-deudas-clientes",
    description:
      "Estrategias para recuperar dinero sin romper relaciones comerciales.",
  },
  {
    title: "Recuperación de cartera empresarial sin abogados: ¿es posible?",
    slug: "recuperacion-cartera-sin-abogados",
    description:
      "Análisis de cuándo puedes gestionar cartera sin apoyo legal y sus riesgos.",
  },
];

export default function BlogContent() {
  return (
    <section className={styles.section}>
      {/* HEADER */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          Blog de recuperación de cartera en Cali
        </h1>

        <p className={styles.description}>
          Aprende estrategias legales y financieras para recuperar cartera
          vencida, cobrar deudas y mejorar el flujo de caja de tu empresa en
          Cali, Colombia.
        </p>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${post.slug}`} className={styles.card}>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardDesc}>{post.description}</p>
              <span className={styles.link}>Leer artículo →</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
