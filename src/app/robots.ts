import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://gestion-cartera-cali-pravice.vercel.app/sitemap.xml",
  };
}
