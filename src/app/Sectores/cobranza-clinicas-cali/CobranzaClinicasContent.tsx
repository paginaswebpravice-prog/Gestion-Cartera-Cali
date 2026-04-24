"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaClinicasContent() {
  return (
    <section className={styles.section}>
      {/* HERO */}
      <div className={styles.hero}>
        <h1>Cobranza para clínicas en Cali</h1>

        <p>
          Recupera cartera vencida en el sector salud con estrategias
          especializadas para clínicas, IPS y entidades médicas en Cali.
        </p>

        <Link href="/contacto" className={styles.button}>
          Recuperar cartera clínica
        </Link>

        <div className={styles.badgeRow}>
          <span>🏥 Sector salud</span>
          <span>⚖️ Cobro legal</span>
          <span>📈 Flujo de caja</span>
        </div>
      </div>

      {/* PROBLEMA */}
      <div className={styles.block}>
        <h2>Problemas de cartera en clínicas</h2>

        <p>
          Las clínicas en Cali enfrentan altos niveles de cartera vencida debido
          a retrasos en pagos de aseguradoras, EPS y pacientes.
        </p>

        <ul>
          <li>Cuentas médicas sin pago</li>
          <li>Retrasos de EPS y aseguradoras</li>
          <li>Facturación acumulada</li>
          <li>Problemas de liquidez</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ La acumulación de cartera afecta la operación y sostenibilidad de
          la clínica.
        </div>
      </div>

      {/* SOLUCIÓN */}
      <div className={styles.block}>
        <h2>Cómo recuperar cartera en clínicas</h2>

        <div className={styles.step}>
          <h3>1. Auditoría de cartera</h3>
          <p>
            Identificación de cuentas médicas pendientes y priorización por
            valor y antigüedad.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Gestión prejurídica</h3>
          <p>
            Contacto formal con deudores, EPS o responsables de pago para lograr
            recuperación sin demanda.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Negociación y acuerdos</h3>
          <p>
            Se estructuran acuerdos que faciliten el pago de la cartera clínica.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Cobro jurídico</h3>
          <p>
            En caso de incumplimiento, se inicia proceso legal para exigir el
            pago.
          </p>
        </div>
      </div>

      {/* BENEFICIOS */}
      <div className={styles.block}>
        <h2>Beneficios de una cobranza especializada en salud</h2>

        <p>
          El sector salud requiere conocimiento técnico y legal específico para
          recuperar cartera de forma efectiva.
        </p>

        <ul>
          <li>Mayor recuperación de cuentas médicas</li>
          <li>Procesos legales seguros</li>
          <li>Optimización del flujo de caja</li>
          <li>Reducción de cartera vencida</li>
        </ul>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <h2>Recupera la cartera de tu clínica</h2>

        <p>
          Evita pérdidas financieras y mejora la liquidez de tu institución
          médica con apoyo profesional.
        </p>

        <Link href="/contacto" className={styles.button}>
          Solicitar asesoría para clínicas
        </Link>
      </div>
    </section>
  );
}
