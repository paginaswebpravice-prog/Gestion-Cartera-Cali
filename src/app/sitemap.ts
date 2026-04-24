import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gestion-cartera-cali-pravice.vercel.app";

  return [
    /* ================= PÁGINAS PRINCIPALES ================= */
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/Blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    /* ================= LANDINGS PROBLEMAS ================= */
    {
      url: `${baseUrl}/Problemas/cartera-vencida-cali`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/Problemas/clientes-no-pagan-cali`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/Problemas/cobrar-deuda-urgente-cali`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },

    /* ================= LANDINGS SECTORES ================= */
    {
      url: `${baseUrl}/Sectores/cobranza-clinicas-cali`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/Sectores/cobranza-inmobiliarias-cali`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/Sectores/cobranza-pymes-cali`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },

    /* ================= BLOG ================= */
    {
      url: `${baseUrl}/Blog/recuperar-cartera-vencida-cali`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Blog/cobro-juridico-cali`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Blog/cliente-no-paga-cali`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Blog/diferencia-cobro-juridico-prejuridico`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Blog/estrategias-cobranza-cali`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Blog/impacto-cartera-vencida`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Blog/cobro-prejuridico-cali`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Blog/evitar-morosidad-clientes`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Blog/proceso-recuperacion-cartera-colombia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Blog/acuerdo-de-pago-ejemplo`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Blog/errores-cobranza-cartera`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Blog/cartera-pymes-cali`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Blog/tiempo-cobro-juridico-colombia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Blog/negociar-deudas-clientes`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Blog/recuperacion-cartera-sin-abogados`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
