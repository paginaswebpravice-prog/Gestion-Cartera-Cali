"use client";

import styles from "../Blogs.module.css";
import Link from "next/link";

export default function CarteraPymesContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <header className={styles.hero}>
        <h1>Recuperación de cartera para pymes en Cali (Guía completa 2026)</h1>

        <p className={styles.subtitle}>
          Las pymes son las más afectadas por la cartera vencida. Aquí te
          mostramos cómo recuperar tu dinero de forma legal, rápida y sin
          afectar tu operación.
        </p>

        <div className={styles.badgeRow}>
          <span>💼 Pymes</span>
          <span>💰 Flujo de caja</span>
          <span>📍 Cali</span>
        </div>
      </header>

      {/* INTRO */}
      <section>
        <h2>El problema de la cartera en las pymes</h2>

        <p>
          En las pequeñas y medianas empresas, la cartera vencida tiene un
          impacto mucho más fuerte que en grandes compañías.
        </p>

        <p>
          Un solo cliente que no paga puede afectar nómina, proveedores y
          operación diaria.
        </p>
      </section>

      {/* IMPORTANCIA */}
      <section>
        <h2>¿Por qué es crítico recuperar la cartera en pymes?</h2>

        <ul>
          <li>Afecta directamente el flujo de caja</li>
          <li>Limita el crecimiento del negocio</li>
          <li>Genera dependencia de crédito externo</li>
          <li>Pone en riesgo la operación diaria</li>
        </ul>

        <div className={styles.highlight}>
          💡 En una pyme, la cartera no recuperada puede significar
          sobrevivencia o cierre.
        </div>
      </section>

      {/* ESTRATEGIA */}
      <section>
        <h2>Estrategia efectiva de recuperación de cartera para pymes</h2>

        <div className={styles.step}>
          <h3>1. Clasificación de la cartera</h3>
          <p>Identifica clientes según nivel de mora: 30, 60, 90+ días.</p>
        </div>

        <div className={styles.step}>
          <h3>2. Gestión de cobro preventiva</h3>
          <p>Contacto antes del vencimiento para evitar mora.</p>
        </div>

        <div className={styles.step}>
          <h3>3. Cobro prejurídico estructurado</h3>
          <p>Etapa formal de negociación antes de demandar.</p>
        </div>

        <div className={styles.step}>
          <h3>4. Acuerdos de pago</h3>
          <p>Solución negociada para evitar procesos judiciales.</p>
        </div>

        <div className={styles.step}>
          <h3>5. Cobro jurídico si es necesario</h3>
          <p>Acción legal para recuperar cartera no pagada.</p>
        </div>
      </section>

      {/* ERRORES */}
      <section>
        <h2>Errores comunes en pymes</h2>

        <ul>
          <li>No tener políticas de crédito claras</li>
          <li>No hacer seguimiento de facturas</li>
          <li>Confiar en clientes sin respaldo legal</li>
          <li>Esperar demasiado para cobrar</li>
        </ul>
      </section>

      {/* CONSEJO */}
      <section>
        <h2>Consejo clave para pymes</h2>

        <p>Las pymes no pueden permitirse una mala gestión de cartera.</p>

        <p>
          El control del dinero por cobrar es tan importante como las ventas
          mismas.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>¿Tu pyme tiene problemas de cartera?</h2>

        <p>
          En Pravice ayudamos a pymes en Cali a recuperar cartera vencida y
          mejorar su flujo de caja con procesos legales efectivos.
        </p>

        <Link href="/contacto" className={styles.button}>
          Recuperar mi cartera
        </Link>
      </section>
    </article>
  );
}
