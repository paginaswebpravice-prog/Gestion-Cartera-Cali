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
          ¿Necesitas recuperar dinero de inmediato? Aplicamos estrategias de
          cobranza rápida, legal y efectiva para empresas en Cali que no pueden
          esperar más. Actúa hoy y aumenta tus probabilidades de recuperación.
        </p>

        <Link href="/contacto" className={styles.button}>
          Recuperar mi dinero ahora
        </Link>

        <div className={styles.badgeRow}>
          <span>⚡ Respuesta inmediata</span>
          <span>⚖️ Cobro legal</span>
          <span>💼 Empresas</span>
        </div>
      </div>

      {/* INTRO SEO */}
      <div className={styles.block}>
        <h2>Cómo cobrar una deuda urgente en Cali</h2>

        <p>
          Cuando una deuda se vuelve urgente, el tiempo se convierte en el
          factor más importante. Cada día que pasa reduce las probabilidades de
          recuperar el dinero, ya sea porque el deudor pierde liquidez,
          desaparece o prioriza otras obligaciones.
        </p>

        <p>
          En estos casos, no basta con “recordar el pago”. Se requiere una
          estrategia intensiva de cobranza que combine presión, seguimiento y
          respaldo legal.
        </p>

        <div className={styles.highlight}>
          ⚠️ Una deuda urgente mal gestionada puede convertirse en pérdida
          total.
        </div>
      </div>

      {/* PROBLEMA */}
      <div className={styles.block}>
        <h2>¿Cuándo una deuda se vuelve urgente?</h2>

        <p>
          No todas las deudas son urgentes desde el inicio, pero hay señales
          claras de alerta que indican que debes actuar de inmediato.
        </p>

        <ul>
          <li>Más de 30 o 60 días sin pago</li>
          <li>El cliente deja de responder</li>
          <li>Incumplimiento de acuerdos previos</li>
          <li>Problemas de liquidez en tu empresa</li>
          <li>Dependencia del pago para operar</li>
        </ul>

        <p>
          Si te identificas con alguno de estos casos, estás en un escenario de
          riesgo financiero.
        </p>
      </div>

      {/* IMPACTO */}
      <div className={styles.block}>
        <h2>Impacto de no cobrar una deuda urgente</h2>

        <p>
          No actuar a tiempo puede generar consecuencias graves en la operación
          de tu empresa.
        </p>

        <ul>
          <li>Falta de liquidez inmediata</li>
          <li>Retrasos en pagos a proveedores</li>
          <li>Endeudamiento innecesario</li>
          <li>Pérdida de oportunidades de inversión</li>
          <li>Riesgo de incumplimientos internos</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Muchas empresas no quiebran por falta de ventas, sino por falta de
          cobro.
        </div>
      </div>

      {/* ERRORES */}
      <div className={styles.block}>
        <h2>Errores comunes al intentar cobrar urgente</h2>

        <ul>
          <li>Esperar demasiado antes de actuar</li>
          <li>Insistir sin estrategia</li>
          <li>No documentar la deuda correctamente</li>
          <li>Aceptar promesas sin respaldo</li>
          <li>No escalar a tiempo a nivel legal</li>
        </ul>

        <p>
          Estos errores hacen que una deuda recuperable termine siendo
          incobrable.
        </p>
      </div>

      {/* SOLUCIÓN */}
      <div className={styles.block}>
        <h2>Estrategia para recuperar una deuda urgente</h2>

        <p>
          La recuperación rápida requiere un proceso estructurado que aumente la
          presión sobre el deudor sin comprometer la legalidad.
        </p>

        <div className={styles.step}>
          <h3>1. Diagnóstico inmediato</h3>
          <p>
            Evaluamos el caso en tiempo real para definir la mejor estrategia de
            recuperación.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Cobro prejurídico intensivo</h3>
          <p>Contacto constante y formal que genera urgencia en el pago.</p>
        </div>

        <div className={styles.step}>
          <h3>3. Negociación rápida</h3>
          <p>
            Se estructuran acuerdos de pago enfocados en liquidez inmediata.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Escalamiento jurídico</h3>
          <p>
            Si no hay respuesta, se inicia proceso legal para exigir el pago.
          </p>
        </div>
      </div>

      {/* VELOCIDAD */}
      <div className={styles.block}>
        <h2>¿Qué tan rápido se puede recuperar una deuda?</h2>

        <p>
          El tiempo de recuperación depende del caso, pero con una estrategia
          adecuada, muchas deudas pueden resolverse en etapas tempranas sin
          necesidad de procesos judiciales largos.
        </p>

        <ul>
          <li>Casos simples: días o semanas</li>
          <li>Casos negociados: corto plazo</li>
          <li>Casos complejos: requieren proceso legal</li>
        </ul>

        <p>
          Lo importante no es solo la rapidez, sino actuar correctamente desde
          el inicio.
        </p>
      </div>

      {/* BENEFICIOS */}
      <div className={styles.block}>
        <h2>Beneficios de actuar de inmediato</h2>

        <ul>
          <li>Aumenta la probabilidad de recuperación</li>
          <li>Reduce pérdidas financieras</li>
          <li>Mejora el flujo de caja</li>
          <li>Evita procesos más largos y costosos</li>
          <li>Recuperas el control financiero</li>
        </ul>
      </div>

      {/* DIFERENCIAL */}
      <div className={styles.block}>
        <h2>¿Por qué usar un servicio profesional de cobranza?</h2>

        <p>
          Cobrar una deuda urgente no es solo insistir, es aplicar estrategia,
          presión y respaldo legal de forma correcta.
        </p>

        <ul>
          <li>Mayor tasa de recuperación</li>
          <li>Gestión rápida y estructurada</li>
          <li>Comunicación profesional con el deudor</li>
          <li>Escalamiento legal cuando es necesario</li>
        </ul>
      </div>

      {/* CTA FINAL */}
      <div className={styles.cta}>
        <h2>Recupera tu dinero hoy mismo</h2>

        <p>
          No dejes que una deuda urgente siga afectando tu empresa. Actuar hoy
          puede marcar la diferencia entre recuperar o perder tu dinero.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar ayuda inmediata
        </Link>
      </div>
    </section>
  );
}
