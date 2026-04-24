"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobroUrgenteContent() {
  return (
    <section className={styles.section}>
      {/* HERO */}
      <div className={styles.hero}>
        <h1>Cobrar una deuda urgente en Cali</h1>

        <p>
          Si necesitas recuperar tu dinero de forma inmediata, aplicamos
          estrategias legales y efectivas para acelerar el pago de clientes
          morosos en Cali.
        </p>

        <Link href="/contacto" className={styles.button}>
          Recuperar mi dinero ahora
        </Link>

        <div className={styles.badgeRow}>
          <span>⚡ Respuesta rápida</span>
          <span>⚖️ Cobro legal</span>
          <span>💼 Empresas</span>
        </div>
      </div>

      {/* DOLOR */}
      <div className={styles.block}>
        <h2>¿Necesitas recuperar tu dinero con urgencia?</h2>

        <p>
          Cuando una deuda se vuelve urgente, cada día cuenta. La falta de pago
          puede afectar operaciones, proveedores y estabilidad financiera.
        </p>

        <ul>
          <li>Problemas de liquidez</li>
          <li>Pagos atrasados a proveedores</li>
          <li>Riesgo de endeudamiento</li>
          <li>Pérdida de control financiero</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Entre más esperes, menor será la probabilidad de recuperar el
          dinero.
        </div>
      </div>

      {/* SOLUCIÓN */}
      <div className={styles.block}>
        <h2>Cómo cobrar una deuda urgente en Cali</h2>

        <div className={styles.step}>
          <h3>1. Diagnóstico inmediato</h3>
          <p>
            Analizamos el caso para definir la estrategia más rápida de
            recuperación.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Cobro prejurídico intensivo</h3>
          <p>
            Se ejecutan acciones formales que presionan el pago sin necesidad de
            demanda.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Negociación estratégica</h3>
          <p>
            Se estructuran acuerdos que faciliten el pago inmediato o en corto
            plazo.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Escalamiento legal</h3>
          <p>
            Si no hay respuesta, se inicia cobro jurídico para exigir el pago.
          </p>
        </div>
      </div>

      {/* DIFERENCIAL */}
      <div className={styles.block}>
        <h2>¿Por qué actuar de inmediato?</h2>

        <p>
          Las deudas urgentes requieren acción rápida y profesional. Un manejo
          incorrecto puede hacer perder la oportunidad de recuperación.
        </p>

        <ul>
          <li>Aumenta la probabilidad de pago</li>
          <li>Reduce el riesgo de pérdida total</li>
          <li>Evita procesos más largos</li>
          <li>Mejora tu flujo de caja rápidamente</li>
        </ul>
      </div>

      {/* CTA FINAL */}
      <div className={styles.cta}>
        <h2>Recupera tu dinero hoy mismo</h2>

        <p>
          No dejes que una deuda urgente afecte tu empresa. Actúa ahora con
          apoyo profesional en Cali.
        </p>

        <Link href="/contacto" className={styles.button}>
          Solicitar ayuda inmediata
        </Link>
      </div>
    </section>
  );
}
