"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaPymesContent() {
  return (
    <section className={styles.section}>
      {/* HERO */}
      <div className={styles.hero}>
        <h1>Cobranza para pymes en Cali</h1>

        <p>
          Recupera el dinero de clientes morosos y mejora el flujo de caja de tu
          empresa con estrategias de cobranza efectivas y legales.
        </p>

        <Link href="/contacto" className={styles.button}>
          Recuperar cartera de mi empresa
        </Link>

        <div className={styles.badgeRow}>
          <span>💼 PYMES</span>
          <span>⚖️ Cobro legal</span>
          <span>📈 Flujo de caja</span>
        </div>
      </div>

      {/* PROBLEMA */}
      <div className={styles.block}>
        <h2>Problemas comunes de cartera en pymes</h2>

        <p>
          Muchas pequeñas y medianas empresas en Cali pierden dinero por falta
          de procesos de cobranza estructurados o clientes que no cumplen sus
          pagos.
        </p>

        <ul>
          <li>Clientes que no pagan a tiempo</li>
          <li>Falta de seguimiento de cartera</li>
          <li>Acumulación de deudas</li>
          <li>Problemas de liquidez</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ La cartera vencida puede frenar el crecimiento de tu empresa.
        </div>
      </div>

      {/* SOLUCIÓN */}
      <div className={styles.block}>
        <h2>Cómo recuperar cartera en tu pyme</h2>

        <div className={styles.step}>
          <h3>1. Diagnóstico de cartera</h3>
          <p>
            Se analiza el estado de las deudas para definir la mejor estrategia.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Cobro prejurídico</h3>
          <p>
            Se gestionan comunicaciones formales para lograr el pago sin
            demanda.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Acuerdos de pago</h3>
          <p>
            Se negocian condiciones que faciliten la recuperación del dinero.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Cobro jurídico</h3>
          <p>
            Si el cliente no responde, se inicia proceso legal para exigir el
            pago.
          </p>
        </div>
      </div>

      {/* BENEFICIOS */}
      <div className={styles.block}>
        <h2>Beneficios para tu empresa</h2>

        <p>
          Externalizar la cobranza permite que tu empresa se enfoque en crecer
          mientras expertos gestionan la recuperación de cartera.
        </p>

        <ul>
          <li>Mejor flujo de caja</li>
          <li>Mayor recuperación de deudas</li>
          <li>Ahorro de tiempo</li>
          <li>Procesos legales seguros</li>
        </ul>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <h2>Recupera el dinero de tu empresa</h2>

        <p>
          No dejes que los clientes morosos afecten tu negocio. Empieza hoy a
          recuperar tu cartera vencida.
        </p>

        <Link href="/contacto" className={styles.button}>
          Solicitar asesoría para pymes
        </Link>
      </div>
    </section>
  );
}
