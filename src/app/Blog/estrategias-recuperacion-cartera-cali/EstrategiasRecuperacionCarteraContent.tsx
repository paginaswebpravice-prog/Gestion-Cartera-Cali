"use client";

import styles from "../Blogs.module.css";
import Link from "next/link";

export default function EstrategiasRecuperacionCarteraCali() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <header className={styles.hero}>
        <h1>
          Estrategias de cobranza efectiva en Cali (Guía empresarial 2026)
        </h1>

        <p className={styles.subtitle}>
          Una buena estrategia de cobranza no solo recupera dinero, también
          protege el flujo de caja, mejora la estabilidad financiera y reduce la
          morosidad en tu empresa.
        </p>

        <div className={styles.badgeRow}>
          <span>📊 Gestión empresarial</span>
          <span>📍 Cali</span>
          <span>💼 Empresas y Pymes</span>
        </div>
      </header>

      {/* INTRO */}
      <section>
        <h2>¿Por qué es clave tener una estrategia de cobranza?</h2>

        <p>
          Muchas empresas en Cali no tienen un sistema de cobranza estructurado
          y dependen únicamente de llamadas o recordatorios informales.
        </p>

        <p>
          Esto genera pérdidas de dinero, acumulación de cartera vencida y
          problemas graves de liquidez.
        </p>

        <div className={styles.highlight}>
          💡 La diferencia entre una empresa estable y una en crisis suele ser
          su gestión de cartera.
        </div>
      </section>

      {/* ESTRATEGIAS */}
      <section>
        <h2>Estrategias de cobranza efectiva que funcionan en Cali</h2>

        <div className={styles.step}>
          <h3>1. Segmentación de cartera</h3>
          <p>
            Clasifica tus clientes por riesgo: baja, media y alta morosidad.
            Esto permite priorizar esfuerzos.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Cobranza preventiva</h3>
          <p>
            Antes de que venza la factura, envía recordatorios para evitar mora.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Flujo de seguimiento estructurado</h3>
          <p>
            Define días exactos de contacto: 1, 15, 30, 60 y 90 días de mora.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Automatización del cobro</h3>
          <p>
            Usa sistemas o procesos internos para no depender del seguimiento
            manual.
          </p>
        </div>

        <div className={styles.step}>
          <h3>5. Escalamiento legal progresivo</h3>
          <p>Define cuándo pasar de cobro amistoso → prejurídico → jurídico.</p>
        </div>
      </section>

      {/* FACTORES DE ÉXITO */}
      <section>
        <h2>Factores que determinan una cobranza efectiva</h2>

        <ul>
          <li>Rapidez en la gestión</li>
          <li>Documentación clara de la deuda</li>
          <li>Comunicación profesional</li>
          <li>Seguimiento constante</li>
          <li>Escalamiento oportuno</li>
        </ul>
      </section>

      {/* ERROR */}
      <section>
        <h2>Error más común en empresas de Cali</h2>

        <p>
          El error más frecuente es dejar que la cartera envejezca sin
          seguimiento, lo que reduce drásticamente la probabilidad de
          recuperación.
        </p>

        <p>
          Entre más tiempo pase, más difícil y costoso se vuelve recuperar el
          dinero.
        </p>
      </section>

      {/* IMPACTO */}
      <section>
        <h2>Impacto de una mala cobranza</h2>

        <ul>
          <li>Falta de liquidez</li>
          <li>Dependencia de créditos externos</li>
          <li>Pérdida de capacidad operativa</li>
          <li>Riesgo de cierre empresarial</li>
        </ul>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Optimiza la cobranza de tu empresa en Cali</h2>

        <p>
          En Pravice diseñamos estrategias de cobranza efectivas para mejorar la
          recuperación de cartera y fortalecer tu flujo de caja.
        </p>

        <Link href="/contacto" className={styles.button}>
          Mejorar mi cobranza
        </Link>
      </section>
    </article>
  );
}
