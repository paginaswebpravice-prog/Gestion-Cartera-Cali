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
          Recupera el dinero de clientes morosos de forma legal, estratégica y
          sin afectar la relación comercial. Implementamos procesos de cobranza
          efectivos para empresas en Cali que necesitan resultados reales.
        </p>

        <Link href="/contacto" className={styles.button}>
          Recuperar mi cartera ahora
        </Link>

        <div className={styles.badgeRow}>
          <span>⚖️ Cobro legal</span>
          <span>💼 Empresas</span>
          <span>📈 Flujo de caja</span>
        </div>
      </div>

      {/* INTRO SEO */}
      <div className={styles.block}>
        <h2>Qué hacer cuando un cliente no paga en Cali</h2>

        <p>
          Uno de los problemas más frecuentes en empresas de Cali es la falta de
          pago por parte de clientes. Ya sea por incumplimiento, falta de
          liquidez o mala gestión, las deudas sin cobrar afectan directamente la
          estabilidad del negocio.
        </p>

        <p>
          Saber cómo actuar frente a un cliente moroso puede marcar la
          diferencia entre recuperar el dinero o perderlo definitivamente.
        </p>

        <div className={styles.highlight}>
          💡 No cobrar a tiempo es uno de los errores más costosos en cualquier
          empresa.
        </div>
      </div>

      {/* CAUSAS */}
      <div className={styles.block}>
        <h2>¿Por qué los clientes dejan de pagar?</h2>

        <p>
          Entender por qué un cliente no paga permite definir una estrategia de
          cobranza más efectiva y aumentar las probabilidades de recuperación.
        </p>

        <ul>
          <li>Falta de seguimiento después de la venta</li>
          <li>Problemas financieros del cliente</li>
          <li>Prioridad a otros pagos</li>
          <li>Acuerdos informales sin respaldo legal</li>
          <li>Errores en facturación o comunicación</li>
        </ul>

        <p>
          En muchos casos, el cliente no paga porque no percibe consecuencias
          reales o urgencia en la obligación.
        </p>
      </div>

      {/* TIPOS DE CLIENTES */}
      <div className={styles.block}>
        <h2>Tipos de clientes morosos (y cómo actuar)</h2>

        <p>
          No todos los deudores son iguales. Identificar el tipo de cliente
          ayuda a definir la mejor estrategia de cobro.
        </p>

        <div className={styles.step}>
          <h3>Cliente olvidadizo</h3>
          <p>
            No paga por descuido. Se recupera fácilmente con recordatorios
            oportunos.
          </p>
        </div>

        <div className={styles.step}>
          <h3>Cliente con problemas financieros</h3>
          <p>Necesita negociación y acuerdos de pago estructurados.</p>
        </div>

        <div className={styles.step}>
          <h3>Cliente evasivo</h3>
          <p>
            Evita responder. Requiere presión formal y seguimiento constante.
          </p>
        </div>

        <div className={styles.step}>
          <h3>Cliente que no quiere pagar</h3>
          <p>Requiere escalamiento legal para lograr recuperación.</p>
        </div>
      </div>

      {/* IMPACTO */}
      <div className={styles.block}>
        <h2>Cómo impacta la falta de pago en tu empresa</h2>

        <p>
          Cuando un cliente no paga, el problema no es solo la deuda, sino el
          efecto acumulativo que genera en toda la operación.
        </p>

        <ul>
          <li>Disminuye el flujo de caja</li>
          <li>Afecta el pago a proveedores</li>
          <li>Reduce la capacidad de inversión</li>
          <li>Genera estrés financiero</li>
          <li>Aumenta el riesgo de endeudamiento</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Un cliente que no paga puede afectar toda tu operación si no se
          gestiona a tiempo.
        </div>
      </div>

      {/* ERRORES */}
      <div className={styles.block}>
        <h2>Errores comunes al intentar cobrar</h2>

        <ul>
          <li>Esperar demasiado para iniciar cobranza</li>
          <li>Hacer acuerdos verbales</li>
          <li>No hacer seguimiento constante</li>
          <li>No documentar la deuda correctamente</li>
          <li>Evitar el conflicto y no escalar el caso</li>
        </ul>

        <p>
          Estos errores reducen significativamente las probabilidades de
          recuperación.
        </p>
      </div>

      {/* SOLUCIÓN */}
      <div className={styles.block}>
        <h2>Cómo recuperar deudas de clientes morosos en Cali</h2>

        <p>
          La clave está en aplicar un proceso estructurado que combine presión,
          comunicación y respaldo legal.
        </p>

        <div className={styles.step}>
          <h3>1. Contacto estratégico</h3>
          <p>
            Se inicia con una comunicación profesional que genera compromiso de
            pago.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Cobro prejurídico</h3>
          <p>
            Se envían comunicaciones formales que aumentan la presión sin
            necesidad de demanda.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Negociación</h3>
          <p>
            Se establecen acuerdos de pago claros, medibles y con respaldo
            legal.
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

      {/* CUÁNDO ACTUAR */}
      <div className={styles.block}>
        <h2>¿Cuándo debes actuar?</h2>

        <p>
          El momento de actuar es clave en la recuperación de cartera. Muchas
          empresas pierden dinero por esperar demasiado.
        </p>

        <ul>
          <li>Después de 30 días de mora</li>
          <li>Cuando el cliente deja de responder</li>
          <li>Cuando incumple acuerdos</li>
          <li>Cuando la deuda afecta tu operación</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Cada día sin acción reduce tus probabilidades de recuperar el
          dinero.
        </div>
      </div>

      {/* BENEFICIOS */}
      <div className={styles.block}>
        <h2>Beneficios de una cobranza profesional</h2>

        <ul>
          <li>Mayor recuperación de deudas</li>
          <li>Mejor flujo de caja</li>
          <li>Menor desgaste operativo</li>
          <li>Procesos legales seguros</li>
          <li>Resultados medibles</li>
        </ul>
      </div>

      {/* DIFERENCIAL */}
      <div className={styles.block}>
        <h2>¿Por qué elegir expertos en cobranza?</h2>

        <p>
          Un equipo especializado sabe cómo manejar clientes morosos, aplicar
          presión adecuada y escalar legalmente cuando es necesario.
        </p>

        <ul>
          <li>Estrategias adaptadas a cada caso</li>
          <li>Mayor tasa de éxito</li>
          <li>Comunicación profesional</li>
          <li>Enfoque en resultados</li>
        </ul>
      </div>

      {/* CTA FINAL */}
      <div className={styles.cta}>
        <h2>Recupera el dinero que te deben hoy</h2>

        <p>
          No dejes que los clientes morosos afecten tu empresa. Actuar a tiempo
          es la clave para recuperar tu dinero.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar asesoría inmediata
        </Link>
      </div>
    </section>
  );
}
