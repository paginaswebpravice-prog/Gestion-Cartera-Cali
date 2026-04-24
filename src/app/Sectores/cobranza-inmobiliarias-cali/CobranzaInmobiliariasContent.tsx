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
          legales efectivas. Ayudamos a inmobiliarias, administradores y
          propietarios a recuperar ingresos rápidamente y reducir pérdidas.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Recuperar arriendos ahora
        </Link>

        <div className={styles.badgeRow}>
          <span>🏠 Inmobiliarias</span>
          <span>⚖️ Cobro legal</span>
          <span>💰 Recuperación rápida</span>
        </div>
      </div>

      {/* INTRO SEO */}
      <div className={styles.block}>
        <h2>Recuperación de cartera inmobiliaria en Cali</h2>

        <p>
          La mora en arriendos es uno de los principales problemas del sector
          inmobiliario. Cada mes sin pago representa una pérdida directa en la
          rentabilidad del inmueble y afecta el flujo de ingresos de la
          inmobiliaria o propietario.
        </p>

        <p>
          En Cali, muchas inmobiliarias enfrentan inquilinos que incumplen
          contratos, retrasan pagos o simplemente dejan de responder, lo que
          hace indispensable aplicar procesos de cobranza estructurados.
        </p>

        <div className={styles.highlight}>
          ⚠️ Un solo inquilino moroso puede afectar la rentabilidad de todo un
          portafolio.
        </div>
      </div>

      {/* PROBLEMAS */}
      <div className={styles.block}>
        <h2>Problemas comunes en la cartera inmobiliaria</h2>

        <p>
          La gestión de arriendos no pagados presenta retos específicos que
          requieren experiencia y estrategia.
        </p>

        <ul>
          <li>Arriendos vencidos por varios meses</li>
          <li>Incumplimiento de contratos de arrendamiento</li>
          <li>Falta de pago de administración o servicios</li>
          <li>Inquilinos que evitan comunicación</li>
          <li>Dificultad para recuperar deudas sin conflicto</li>
        </ul>

        <p>
          Sin una estrategia clara, estos problemas tienden a prolongarse y
          aumentar las pérdidas.
        </p>
      </div>

      {/* IMPACTO */}
      <div className={styles.block}>
        <h2>Impacto de los arriendos no pagados</h2>

        <p>
          La falta de pago en inmuebles genera efectos acumulativos que afectan
          tanto a inmobiliarias como a propietarios.
        </p>

        <ul>
          <li>Pérdida mensual de ingresos</li>
          <li>Desbalance en flujo de caja</li>
          <li>Gastos fijos sin cobertura</li>
          <li>Riesgo de deterioro del inmueble</li>
          <li>Conflictos legales con inquilinos</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Cada mes sin pago reduce la rentabilidad y aumenta el riesgo
          financiero.
        </div>
      </div>

      {/* TIPOS DE MOROSOS */}
      <div className={styles.block}>
        <h2>Tipos de inquilinos morosos</h2>

        <p>
          Identificar el tipo de deudor permite aplicar la estrategia correcta
          para recuperar el dinero más rápido.
        </p>

        <div className={styles.step}>
          <h3>Inquilino con retraso temporal</h3>
          <p>Puede ponerse al día con recordatorios y acuerdos de pago.</p>
        </div>

        <div className={styles.step}>
          <h3>Inquilino evasivo</h3>
          <p>Evita comunicación y requiere presión formal constante.</p>
        </div>

        <div className={styles.step}>
          <h3>Inquilino incumplido</h3>
          <p>No tiene intención de pagar y requiere escalamiento legal.</p>
        </div>

        <div className={styles.step}>
          <h3>Inquilino en mora prolongada</h3>
          <p>
            Requiere acciones jurídicas para recuperar deuda y control del
            inmueble.
          </p>
        </div>
      </div>

      {/* ERRORES */}
      <div className={styles.block}>
        <h2>Errores comunes al cobrar arriendos</h2>

        <ul>
          <li>Esperar varios meses antes de actuar</li>
          <li>Hacer acuerdos informales sin respaldo</li>
          <li>No documentar incumplimientos</li>
          <li>Evitar el conflicto con el inquilino</li>
          <li>No escalar a nivel legal a tiempo</li>
        </ul>

        <p>
          Estos errores aumentan la probabilidad de pérdida total de la deuda.
        </p>
      </div>

      {/* SOLUCIÓN */}
      <div className={styles.block}>
        <h2>Cómo recuperar arriendos vencidos en Cali</h2>

        <p>
          La recuperación efectiva de cartera inmobiliaria requiere un proceso
          estructurado que combine gestión y respaldo legal.
        </p>

        <div className={styles.step}>
          <h3>1. Contacto formal con el inquilino</h3>
          <p>
            Comunicación profesional que genera compromiso de pago sin escalar
            el conflicto.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Cobro prejurídico</h3>
          <p>Envío de comunicaciones formales que aumentan la presión legal.</p>
        </div>

        <div className={styles.step}>
          <h3>3. Negociación estratégica</h3>
          <p>
            Se estructuran acuerdos de pago que faciliten la recuperación
            rápida.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Cobro jurídico</h3>
          <p>
            Se inicia proceso legal para exigir el pago y proteger el inmueble.
          </p>
        </div>
      </div>

      {/* TIEMPO */}
      <div className={styles.block}>
        <h2>¿Cuándo iniciar la cobranza?</h2>

        <p>
          El tiempo es clave en la recuperación de arriendos. Actuar tarde
          reduce las probabilidades de recuperar el dinero.
        </p>

        <ul>
          <li>Desde el primer mes de mora</li>
          <li>Cuando el inquilino incumple acuerdos</li>
          <li>Cuando deja de responder</li>
          <li>Cuando la deuda comienza a crecer</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Actuar rápido aumenta significativamente la recuperación.
        </div>
      </div>

      {/* BENEFICIOS */}
      <div className={styles.block}>
        <h2>Beneficios de una cobranza especializada inmobiliaria</h2>

        <p>
          Delegar la cobranza a expertos permite optimizar resultados y reducir
          pérdidas.
        </p>

        <ul>
          <li>Mayor recuperación de arriendos</li>
          <li>Reducción de cartera vencida</li>
          <li>Ahorro de tiempo administrativo</li>
          <li>Procesos legales seguros</li>
          <li>Mejor control financiero</li>
        </ul>
      </div>

      {/* DIFERENCIAL */}
      <div className={styles.block}>
        <h2>¿Por qué usar un servicio profesional?</h2>

        <p>
          La cobranza inmobiliaria requiere experiencia en negociación y
          conocimiento legal para lograr resultados efectivos.
        </p>

        <ul>
          <li>Estrategias adaptadas al sector inmobiliario</li>
          <li>Mayor tasa de recuperación</li>
          <li>Gestión profesional del deudor</li>
          <li>Escalamiento legal oportuno</li>
        </ul>
      </div>

      {/* CTA FINAL */}
      <div className={styles.cta}>
        <h2>Recupera los arriendos de tus inmuebles</h2>

        <p>
          No permitas que los inquilinos morosos afecten tu rentabilidad.
          Recupera tu dinero y mejora tu flujo de ingresos hoy.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar asesoría inmobiliaria
        </Link>
      </div>
    </section>
  );
}
