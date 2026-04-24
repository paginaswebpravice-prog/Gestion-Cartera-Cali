"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaServiciosProfesionalesCaliContent() {
  return (
    <section className={styles.section}>
      {/* HERO */}
      <div className={styles.hero}>
        <h1>Cobranza para servicios profesionales en Cali</h1>

        <p>
          ¿Prestaste un servicio y no te pagaron? Recupera tus honorarios de
          clientes morosos con estrategias legales y efectivas diseñadas para
          profesionales independientes y empresas de servicios en Cali.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Recuperar honorarios ahora
        </Link>

        <div className={styles.badgeRow}>
          <span>💼 Profesionales</span>
          <span>⚖️ Cobro legal</span>
          <span>📄 Honorarios</span>
          <span>⚡ Recuperación rápida</span>
        </div>
      </div>

      {/* CONTEXTO */}
      <div className={styles.block}>
        <h2>El problema: trabajas, entregas… y no te pagan</h2>

        <p>
          En Cali, muchos profesionales enfrentan una situación frustrante:
          cumplen con su trabajo, entregan resultados… pero el cliente no paga.
        </p>

        <p>
          Esto es especialmente común en servicios como asesorías, consultorías,
          procesos legales, contabilidad, diseño, tecnología y más.
        </p>

        <div className={styles.highlight}>
          ⚠️ El problema no es la falta de trabajo, es la falta de pago.
        </div>
      </div>

      {/* CASOS */}
      <div className={styles.block}>
        <h2>Casos comunes en servicios profesionales</h2>

        <ul>
          <li>Clientes que reciben el servicio y desaparecen</li>
          <li>Pagos parciales que nunca se completan</li>
          <li>Acuerdos verbales sin respaldo legal</li>
          <li>Clientes que prometen pagar “después”</li>
          <li>Proyectos terminados sin liquidación final</li>
        </ul>

        <p>
          Estos escenarios afectan directamente tus ingresos y la estabilidad de
          tu actividad profesional.
        </p>
      </div>

      {/* IMPACTO */}
      <div className={styles.block}>
        <h2>Cómo afecta esto a tu negocio o actividad profesional</h2>

        <ul>
          <li>Pérdida de ingresos</li>
          <li>Desmotivación y desgaste</li>
          <li>Falta de liquidez</li>
          <li>Tiempo perdido en cobranza informal</li>
        </ul>

        <p>
          Muchos profesionales terminan resignándose a no cobrar, lo que genera
          pérdidas acumuladas con el tiempo.
        </p>
      </div>

      {/* SOLUCIÓN */}
      <div className={styles.block}>
        <h2>Solución: cobranza profesional de honorarios</h2>

        <p>
          Recuperar pagos no se trata de insistir por WhatsApp. Requiere un
          enfoque estructurado, estratégico y legal.
        </p>

        <ul>
          <li>Comunicación formal con el cliente</li>
          <li>Soporte legal en la gestión</li>
          <li>Negociación de acuerdos de pago</li>
          <li>Escalamiento jurídico si es necesario</li>
        </ul>
      </div>

      {/* PROCESO */}
      <div className={styles.block}>
        <h2>Cómo recuperamos tus honorarios en Cali</h2>

        <div className={styles.step}>
          <h3>1. Evaluación del caso</h3>
          <p>
            Revisamos contratos, acuerdos o evidencias del servicio prestado.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Cobro prejurídico</h3>
          <p>
            Se inicia contacto formal que incrementa la probabilidad de pago.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Negociación</h3>
          <p>Se establecen acuerdos de pago claros y estructurados.</p>
        </div>

        <div className={styles.step}>
          <h3>4. Cobro jurídico</h3>
          <p>
            Si no hay respuesta, se inicia proceso legal para exigir el pago.
          </p>
        </div>
      </div>

      {/* DIFERENCIAL */}
      <div className={styles.block}>
        <h2>¿Por qué usar un servicio profesional de cobranza?</h2>

        <p>
          Intentar cobrar por tu cuenta puede afectar la relación con el cliente
          y reducir la probabilidad de pago.
        </p>

        <ul>
          <li>Mayor tasa de recuperación</li>
          <li>Enfoque profesional y sin confrontación</li>
          <li>Respaldo legal</li>
          <li>Ahorro de tiempo y energía</li>
        </ul>

        <div className={styles.highlight}>
          💡 Cobrar bien también es parte de ser profesional.
        </div>
      </div>

      {/* URGENCIA */}
      <div className={styles.block}>
        <h2>¿Cuándo deberías actuar?</h2>

        <ul>
          <li>Cuando el cliente deja de responder</li>
          <li>Si hay retrasos en el pago</li>
          <li>Cuando el proyecto ya fue entregado</li>
          <li>Si el cliente evita cumplir acuerdos</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Entre más tiempo pasa, más difícil es recuperar tus honorarios.
        </div>
      </div>

      {/* CTA FINAL */}
      <div className={styles.cta}>
        <h2>Recupera lo que ya trabajaste</h2>

        <p>
          No dejes que tu esfuerzo se pierda. Recupera tus honorarios con apoyo
          profesional en Cali y protege tus ingresos.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar asesoría ahora
        </Link>
      </div>
    </section>
  );
}
