"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function ClientesNoPaganContent() {
  return (
    <section className={styles.section}>
      {/* HERO */}
      <div className={styles.hero}>
        <h1>¿Tus clientes no pagan en Cali?</h1>

        <p>
          Recupera tu dinero de forma rápida, legal y sin afectar la relación
          comercial. Aplicamos estrategias de cobranza efectivas adaptadas a
          empresas en Cali.
        </p>

        <Link href="/contacto" className={styles.button}>
          Recuperar mi cartera ahora
        </Link>

        <div className={styles.badgeRow}>
          <span>⚖️ Cobro legal</span>
          <span>💼 Empresas</span>
          <span>📈 Mejora flujo de caja</span>
        </div>
      </div>

      {/* PROBLEMA */}
      <div className={styles.block}>
        <h2>¿Por qué los clientes dejan de pagar?</h2>

        <p>
          En Cali, muchas empresas enfrentan problemas de morosidad por falta de
          control, acuerdos informales o simplemente incumplimiento del cliente.
        </p>

        <ul>
          <li>Falta de seguimiento en pagos</li>
          <li>Clientes con problemas financieros</li>
          <li>Acuerdos verbales sin respaldo legal</li>
          <li>Ausencia de procesos de cobranza estructurados</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Entre más tiempo pasa, más difícil es recuperar la deuda.
        </div>
      </div>

      {/* IMPACTO */}
      <div className={styles.block}>
        <h2>Cómo afecta a tu empresa que no te paguen</h2>

        <p>
          La falta de pago no solo afecta un ingreso puntual, sino que impacta
          directamente la estabilidad financiera de tu negocio.
        </p>

        <ul>
          <li>Disminución del flujo de caja</li>
          <li>Dificultad para pagar proveedores</li>
          <li>Pérdida de rentabilidad</li>
          <li>Riesgo de cierre o endeudamiento</li>
        </ul>
      </div>

      {/* SOLUCIÓN */}
      <div className={styles.block}>
        <h2>Cómo recuperar deudas de clientes morosos en Cali</h2>

        <div className={styles.step}>
          <h3>1. Contacto estratégico</h3>
          <p>
            Se inicia con una comunicación profesional que motive el pago sin
            generar conflicto.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Cobro prejurídico</h3>
          <p>
            Se envían notificaciones formales que aumentan la presión legal sin
            necesidad de demanda.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Acuerdos de pago</h3>
          <p>
            Se negocian planes estructurados que faciliten la recuperación del
            dinero.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Cobro jurídico</h3>
          <p>
            Si el cliente no responde, se inicia un proceso legal para exigir el
            pago.
          </p>
        </div>
      </div>

      {/* DIFERENCIAL */}
      <div className={styles.block}>
        <h2>¿Por qué elegir un servicio profesional de cobranza?</h2>

        <p>
          Intentar cobrar sin experiencia puede hacerte perder tiempo y dinero.
          Un equipo especializado aumenta significativamente las probabilidades
          de recuperación.
        </p>

        <ul>
          <li>Mayor tasa de recuperación</li>
          <li>Procesos legales seguros</li>
          <li>Ahorro de tiempo operativo</li>
          <li>Estrategias personalizadas</li>
        </ul>
      </div>

      {/* CTA FINAL */}
      <div className={styles.cta}>
        <h2>Recupera el dinero que te deben hoy</h2>

        <p>
          No dejes que los clientes morosos afecten tu empresa. Actúa ahora y
          mejora tu flujo de caja con apoyo profesional.
        </p>

        <Link href="/contacto" className={styles.button}>
          Solicitar asesoría inmediata
        </Link>
      </div>
    </section>
  );
}
