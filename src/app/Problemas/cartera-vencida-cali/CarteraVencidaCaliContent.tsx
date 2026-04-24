"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function Content() {
  return (
    <section className={styles.section}>
      {/* HERO */}
      <div className={styles.hero}>
        <h1>¿Tienes cartera vencida en Cali?</h1>

        <p>
          Recupera tu dinero de clientes morosos con estrategias legales
          efectivas. Mejora tu flujo de caja y evita pérdidas en tu empresa.
        </p>

        <Link href="/contacto" className={styles.button}>
          Recuperar mi cartera
        </Link>
      </div>

      {/* PROBLEMA */}
      <div className={styles.block}>
        <h2>El problema de la cartera vencida</h2>

        <p>
          La cartera vencida es uno de los principales problemas financieros en
          empresas de Cali. Facturas sin pagar, clientes que no responden y
          pagos atrasados afectan directamente la liquidez del negocio.
        </p>

        <p>
          Muchas empresas siguen vendiendo, pero no logran recuperar el dinero,
          lo que genera una falsa sensación de crecimiento mientras el flujo de
          caja se deteriora.
        </p>
      </div>

      {/* IMPACTO */}
      <div className={styles.block}>
        <h2>¿Cómo afecta la cartera vencida a tu empresa?</h2>

        <ul>
          <li>Disminuye el flujo de caja</li>
          <li>Impide pagar proveedores y nómina</li>
          <li>Limita el crecimiento del negocio</li>
          <li>Aumenta el riesgo de pérdidas financieras</li>
        </ul>

        <p>
          En muchos casos, la cartera vencida puede convertirse en incobrable si
          no se gestiona a tiempo.
        </p>
      </div>

      {/* SOLUCION */}
      <div className={styles.block}>
        <h2>Solución: recuperación profesional de cartera</h2>

        <p>
          La recuperación de cartera no consiste solo en insistir en el pago.
          Requiere estrategia, seguimiento y respaldo legal.
        </p>

        <ul>
          <li>Gestión de cobro estructurada</li>
          <li>Contacto profesional con el deudor</li>
          <li>Negociación de acuerdos de pago</li>
          <li>Escalamiento a cobro jurídico</li>
        </ul>
      </div>

      {/* PROCESO */}
      <div className={styles.block}>
        <h2>Cómo recuperamos tu cartera en Cali</h2>

        <div className={styles.step}>
          <h3>1. Análisis de la deuda</h3>
          <p>
            Evaluamos el estado de la cartera y las probabilidades de
            recuperación.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Cobro prejurídico</h3>
          <p>Gestión formal de cobranza para lograr pago sin demanda.</p>
        </div>

        <div className={styles.step}>
          <h3>3. Negociación</h3>
          <p>Acuerdos de pago estructurados que aumentan la recuperación.</p>
        </div>

        <div className={styles.step}>
          <h3>4. Cobro jurídico</h3>
          <p>Proceso legal en caso de incumplimiento del deudor.</p>
        </div>
      </div>

      {/* BENEFICIOS */}
      <div className={styles.block}>
        <h2>Beneficios de recuperar tu cartera</h2>

        <ul>
          <li>Mejora inmediata del flujo de caja</li>
          <li>Reducción de pérdidas financieras</li>
          <li>Mayor estabilidad empresarial</li>
          <li>Control sobre tus cuentas por cobrar</li>
        </ul>
      </div>

      {/* DIFERENCIAL */}
      <div className={styles.block}>
        <h2>¿Por qué elegirnos?</h2>

        <ul>
          <li>Experiencia en recuperación de cartera empresarial</li>
          <li>Estrategias legales efectivas</li>
          <li>Procesos estructurados y medibles</li>
          <li>Enfoque en resultados</li>
        </ul>
      </div>

      {/* CTA FUERTE */}
      <div className={styles.cta}>
        <h2>Empieza hoy a recuperar tu dinero</h2>

        <p>
          No dejes que la cartera vencida siga afectando tu empresa. Actúa ahora
          y mejora tu flujo de caja.
        </p>

        <Link href="/contacto" className={styles.button}>
          Solicitar asesoría ahora
        </Link>
      </div>
    </section>
  );
}
