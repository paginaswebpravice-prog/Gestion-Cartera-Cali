"use client";

import styles from "../Blogs.module.css";
import Link from "next/link";

export default function ErroresCobranzaContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <header className={styles.hero}>
        <h1>Errores comunes en la cobranza de cartera en Cali (Guía 2026)</h1>

        <p className={styles.subtitle}>
          Muchas empresas no pierden dinero por falta de ventas, sino por
          errores en la gestión de cobranza. Aquí te mostramos los más
          frecuentes y cómo evitarlos.
        </p>

        <div className={styles.badgeRow}>
          <span>⚠️ Prevención</span>
          <span>💼 Empresas</span>
          <span>📍 Cali</span>
        </div>
      </header>

      {/* INTRO */}
      <section>
        <h2>¿Por qué ocurren errores en la cobranza?</h2>

        <p>
          La cobranza de cartera no es solo pedir dinero. Es un proceso
          estructurado que requiere estrategia, seguimiento y soporte legal.
        </p>

        <p>
          Cuando no existe un sistema claro, las empresas terminan perdiendo
          control sobre sus cuentas por cobrar.
        </p>
      </section>

      {/* ERROR 1 */}
      <section>
        <h2>Errores más comunes en la cobranza de cartera</h2>

        <div className={styles.step}>
          <h3>1. No hacer seguimiento oportuno</h3>
          <p>
            Esperar demasiado tiempo para cobrar reduce la probabilidad de
            recuperación.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Confiar solo en acuerdos verbales</h3>
          <p>
            Sin documentos firmados, el riesgo de incumplimiento es mucho mayor.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. No segmentar la cartera</h3>
          <p>
            Tratar igual una deuda de 30 días que una de 180 días es un error
            crítico.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. No escalar a cobro prejurídico</h3>
          <p>
            Muchas empresas no usan esta etapa y pierden la oportunidad de
            recuperación sin demanda.
          </p>
        </div>

        <div className={styles.step}>
          <h3>5. Falta de políticas de crédito</h3>
          <p>Otorgar crédito sin reglas claras genera morosidad constante.</p>
        </div>
      </section>

      {/* CONSECUENCIAS */}
      <section>
        <h2>Consecuencias de una mala cobranza</h2>

        <ul>
          <li>Pérdida de liquidez</li>
          <li>Aumento de cartera vencida</li>
          <li>Dependencia de financiación externa</li>
          <li>Riesgo de incobrabilidad total</li>
        </ul>

        <div className={styles.highlight}>
          💡 El problema no es la deuda, sino la falta de proceso de cobro.
        </div>
      </section>

      {/* SOLUCION */}
      <section>
        <h2>Cómo evitar estos errores</h2>

        <ul>
          <li>Implementar seguimiento automático de cartera</li>
          <li>Documentar todas las obligaciones</li>
          <li>Usar cobro prejurídico estructurado</li>
          <li>Definir políticas de crédito claras</li>
        </ul>
      </section>

      {/* CONSEJO */}
      <section>
        <h2>Consejo profesional</h2>

        <p>
          La cobranza efectiva no depende de insistencia, sino de estrategia.
        </p>

        <p>
          Las empresas que estructuran su proceso reducen significativamente la
          mora.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>¿Tu empresa está cometiendo estos errores?</h2>

        <p>
          En Pravice ayudamos a empresas en Cali a corregir fallas en su gestión
          de cartera y mejorar la recuperación de dinero.
        </p>

        <Link href="/contacto" className={styles.button}>
          Optimizar cobranza
        </Link>
      </section>
    </article>
  );
}
