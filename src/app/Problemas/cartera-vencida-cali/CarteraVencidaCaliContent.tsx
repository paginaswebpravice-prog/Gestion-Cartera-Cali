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
          Recupera el dinero de clientes morosos de forma legal, rápida y
          efectiva. Evita pérdidas financieras y mejora el flujo de caja de tu
          empresa en Cali con un proceso profesional de cobranza.
        </p>

        <Link href="/contacto" className={styles.button}>
          Recuperar mi cartera ahora
        </Link>

        <div className={styles.badgeRow}>
          <span>⚖️ Cobro legal</span>
          <span>📈 Flujo de caja</span>
          <span>💼 Empresas</span>
        </div>
      </div>

      {/* INTRO SEO */}
      <div className={styles.block}>
        <h2>Recuperación de cartera vencida en Cali</h2>

        <p>
          La recuperación de cartera vencida en Cali es una necesidad crítica
          para empresas que venden a crédito y enfrentan clientes morosos.
          Facturas sin pagar, incumplimientos y retrasos afectan directamente la
          estabilidad financiera del negocio.
        </p>

        <p>
          Muchas empresas cometen el error de esperar demasiado tiempo antes de
          actuar, lo que reduce significativamente las probabilidades de
          recuperar el dinero.
        </p>

        <div className={styles.highlight}>
          💡 Entre más tiempo pasa, menor es la probabilidad de recuperar una
          deuda.
        </div>
      </div>

      {/* PROBLEMA */}
      <div className={styles.block}>
        <h2>El problema real de la cartera vencida</h2>

        <p>
          La cartera vencida no es solo un problema contable, es un problema de
          liquidez y supervivencia empresarial.
        </p>

        <p>
          Empresas en Cali pueden estar vendiendo bien, pero si no cobran, en la
          práctica están financiando a sus clientes sin recibir retorno.
        </p>

        <ul>
          <li>Clientes que dejan de responder</li>
          <li>Pagos retrasados constantemente</li>
          <li>Falta de seguimiento a la cartera</li>
          <li>Acuerdos informales sin respaldo legal</li>
        </ul>
      </div>

      {/* IMPACTO PROFUNDO */}
      <div className={styles.block}>
        <h2>Cómo afecta la cartera vencida a tu empresa</h2>

        <p>
          El impacto de la cartera vencida es progresivo y muchas veces
          invisible al inicio, pero puede escalar rápidamente.
        </p>

        <ul>
          <li>Disminuye el flujo de caja operativo</li>
          <li>Genera estrés financiero constante</li>
          <li>Impide invertir y crecer</li>
          <li>Obliga a endeudarse para operar</li>
          <li>Reduce la rentabilidad real del negocio</li>
        </ul>

        <p>
          En casos críticos, la acumulación de cartera vencida puede llevar a
          una empresa a perder estabilidad financiera.
        </p>
      </div>

      {/* SOLUCIÓN PROFESIONAL */}
      <div className={styles.block}>
        <h2>Solución: gestión profesional de cobranza</h2>

        <p>
          Recuperar cartera no se trata de insistir con llamadas. Requiere una
          estrategia estructurada que combine comunicación, negociación y
          respaldo legal.
        </p>

        <p>
          Un proceso profesional aumenta significativamente la probabilidad de
          pago y reduce el tiempo de recuperación.
        </p>

        <ul>
          <li>Gestión organizada de cartera</li>
          <li>Seguimiento constante al deudor</li>
          <li>Comunicación formal y estratégica</li>
          <li>Uso de herramientas legales cuando es necesario</li>
        </ul>
      </div>

      {/* PROCESO DETALLADO */}
      <div className={styles.block}>
        <h2>Cómo recuperamos tu cartera en Cali paso a paso</h2>

        <div className={styles.step}>
          <h3>1. Diagnóstico de cartera</h3>
          <p>
            Analizamos la antigüedad, tipo de deuda y probabilidad de
            recuperación para definir la mejor estrategia.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Cobro prejurídico</h3>
          <p>
            Se realiza gestión formal mediante llamadas, mensajes y
            comunicaciones legales para lograr el pago sin proceso judicial.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Negociación estratégica</h3>
          <p>
            Se estructuran acuerdos de pago que aumentan la recuperación sin
            afectar la relación comercial cuando es posible.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Cobro jurídico</h3>
          <p>
            Si el deudor no responde, se inicia proceso legal para exigir el
            pago de la obligación.
          </p>
        </div>
      </div>

      {/* OBJECIONES */}
      <div className={styles.block}>
        <h2>¿Cuándo debes iniciar un proceso de cobranza?</h2>

        <p>
          Muchas empresas retrasan la cobranza por miedo a perder clientes, pero
          esto suele empeorar la situación.
        </p>

        <ul>
          <li>Cuando la deuda supera 30 días de mora</li>
          <li>Cuando el cliente deja de responder</li>
          <li>Cuando incumple acuerdos de pago</li>
          <li>Cuando el monto afecta tu flujo de caja</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Esperar demasiado puede convertir una deuda recuperable en pérdida.
        </div>
      </div>

      {/* BENEFICIOS AMPLIADOS */}
      <div className={styles.block}>
        <h2>Beneficios de recuperar tu cartera a tiempo</h2>

        <ul>
          <li>Mejora inmediata del flujo de caja</li>
          <li>Mayor estabilidad financiera</li>
          <li>Reducción del riesgo de pérdidas</li>
          <li>Mayor control sobre tus ingresos</li>
          <li>Capacidad de reinversión en el negocio</li>
        </ul>
      </div>

      {/* DIFERENCIAL */}
      <div className={styles.block}>
        <h2>¿Por qué elegir un servicio profesional de cobranza?</h2>

        <p>
          Gestionar cartera internamente puede ser ineficiente si no se cuenta
          con experiencia, herramientas y respaldo legal.
        </p>

        <ul>
          <li>Mayor tasa de recuperación</li>
          <li>Procesos estructurados</li>
          <li>Menor desgaste operativo</li>
          <li>Enfoque en resultados reales</li>
        </ul>
      </div>

      {/* CTA FINAL */}
      <div className={styles.cta}>
        <h2>Empieza hoy a recuperar tu dinero</h2>

        <p>
          No permitas que la cartera vencida siga afectando tu empresa. Cada día
          que pasa reduces tus probabilidades de recuperar ese dinero.
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
