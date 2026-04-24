"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaInmobiliariasContent() {
  return (
    <section className={styles.section}>
      {/* HERO */}
      <div className={styles.hero}>
        <h1>Cobranza para inmobiliarias en Cali</h1>

        <p>
          Recupera arriendos vencidos y cartera inmobiliaria con estrategias
          legales efectivas. Ayudamos a inmobiliarias y administradores a
          recuperar ingresos rápidamente.
        </p>

        <Link href="/contacto" className={styles.button}>
          Recuperar arriendos ahora
        </Link>

        <div className={styles.badgeRow}>
          <span>🏠 Inmobiliarias</span>
          <span>⚖️ Cobro legal</span>
          <span>💰 Recuperación rápida</span>
        </div>
      </div>

      {/* PROBLEMA */}
      <div className={styles.block}>
        <h2>Problemas comunes en cartera inmobiliaria</h2>

        <p>
          Las inmobiliarias en Cali enfrentan constantemente inquilinos morosos
          que afectan el flujo de ingresos y la rentabilidad de los inmuebles.
        </p>

        <ul>
          <li>Arriendos vencidos</li>
          <li>Incumplimiento de contratos</li>
          <li>Retrasos en pagos de administración</li>
          <li>Dificultad para recuperar deudas</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Cada mes sin pago representa pérdidas directas para la
          inmobiliaria.
        </div>
      </div>

      {/* SOLUCIÓN */}
      <div className={styles.block}>
        <h2>Cómo recuperar arriendos vencidos en Cali</h2>

        <div className={styles.step}>
          <h3>1. Contacto formal con el inquilino</h3>
          <p>
            Se realiza una gestión profesional que aumenta la probabilidad de
            pago sin conflicto.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Cobro prejurídico</h3>
          <p>
            Envío de comunicaciones legales que generan presión para el pago.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Acuerdos de pago</h3>
          <p>
            Se estructuran soluciones que permiten recuperar la deuda en el
            menor tiempo posible.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Cobro jurídico</h3>
          <p>
            Si no hay respuesta, se inicia proceso legal para exigir el pago de
            arriendos y obligaciones.
          </p>
        </div>
      </div>

      {/* BENEFICIOS */}
      <div className={styles.block}>
        <h2>Beneficios de una cobranza especializada</h2>

        <p>
          Externalizar la cobranza permite a las inmobiliarias enfocarse en su
          operación mientras expertos gestionan la recuperación de cartera.
        </p>

        <ul>
          <li>Mayor recuperación de arriendos</li>
          <li>Reducción de cartera vencida</li>
          <li>Ahorro de tiempo administrativo</li>
          <li>Procesos legales seguros</li>
        </ul>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <h2>Recupera los arriendos de tus inmuebles</h2>

        <p>
          No permitas que los inquilinos morosos afecten tu negocio. Actúa hoy y
          mejora tu flujo de ingresos.
        </p>

        <Link href="/contacto" className={styles.button}>
          Solicitar asesoría inmobiliaria
        </Link>
      </div>
    </section>
  );
}
