"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaPymesContent() {
  return (
    <section className={styles.section}>
      {/* HERO */}
      <div className={styles.hero}>
        <h1>
          Cobranza para pymes en Cali: recupera tu dinero y mejora tu flujo de
          caja
        </h1>

        <p>
          Si tu empresa tiene clientes que no pagan o facturas vencidas, estás
          perdiendo liquidez cada día. Implementamos estrategias de cobranza
          profesional para pymes en Cali que te permiten recuperar cartera de
          forma rápida, legal y efectiva.
        </p>

        <Link href="/contacto" className={styles.button}>
          Recuperar cartera de mi empresa
        </Link>

        <div className={styles.badgeRow}>
          <span>💼 Especialistas en pymes</span>
          <span>⚖️ Cobro legal</span>
          <span>📈 Mejora flujo de caja</span>
          <span>⚡ Resultados medibles</span>
        </div>
      </div>

      {/* CONTEXTO */}
      <div className={styles.block}>
        <h2>El problema silencioso de las pymes: vender sin cobrar</h2>

        <p>
          En Cali, miles de pequeñas y medianas empresas enfrentan un problema
          crítico: venden, facturan… pero no reciben el dinero a tiempo.
        </p>

        <p>
          Esto genera una falsa sensación de crecimiento, cuando en realidad el
          negocio está perdiendo liquidez. La cartera vencida se acumula, los
          pagos se retrasan y el flujo de caja comienza a deteriorarse.
        </p>

        <div className={styles.highlight}>
          ⚠️ Muchas pymes quiebran no por falta de ventas, sino por falta de
          recaudo.
        </div>
      </div>

      {/* PROBLEMAS */}
      <div className={styles.block}>
        <h2>Problemas más comunes de cartera en pymes</h2>

        <p>
          Si tienes una pyme, es probable que ya hayas enfrentado alguno de
          estos escenarios:
        </p>

        <ul>
          <li>Clientes que prometen pagar pero no cumplen</li>
          <li>Facturas vencidas sin seguimiento</li>
          <li>Acuerdos informales sin respaldo legal</li>
          <li>Falta de procesos estructurados de cobranza</li>
          <li>Dependencia de pocos clientes que retrasan pagos</li>
        </ul>

        <p>
          Estos problemas no solo afectan un ingreso puntual, sino que impactan
          toda la operación del negocio.
        </p>
      </div>

      {/* IMPACTO */}
      <div className={styles.block}>
        <h2>Cómo la cartera vencida afecta el crecimiento de tu pyme</h2>

        <p>
          La falta de pago tiene consecuencias directas en la estabilidad de tu
          empresa:
        </p>

        <ul>
          <li>Disminución del flujo de caja</li>
          <li>Dificultad para pagar proveedores</li>
          <li>Retrasos en nómina</li>
          <li>Necesidad de endeudamiento</li>
          <li>Pérdida de oportunidades de crecimiento</li>
        </ul>

        <p>
          Una pyme sin control de cartera puede entrar rápidamente en crisis,
          incluso si tiene buena demanda.
        </p>
      </div>

      {/* SOLUCIÓN */}
      <div className={styles.block}>
        <h2>Solución: cobranza profesional para pymes en Cali</h2>

        <p>
          Recuperar cartera no se trata solo de insistir. Se trata de aplicar
          estrategia, estructura y respaldo legal.
        </p>

        <p>
          Nuestro enfoque está diseñado específicamente para pymes, con procesos
          eficientes que maximizan la recuperación sin afectar la operación del
          negocio.
        </p>

        <ul>
          <li>Gestión estructurada de cartera</li>
          <li>Seguimiento constante y profesional</li>
          <li>Comunicación estratégica con el deudor</li>
          <li>Escalamiento legal cuando es necesario</li>
        </ul>
      </div>

      {/* PROCESO */}
      <div className={styles.block}>
        <h2>Cómo recuperamos la cartera de tu pyme</h2>

        <div className={styles.step}>
          <h3>1. Diagnóstico de cartera</h3>
          <p>
            Analizamos tus cuentas por cobrar, clasificamos deudas y definimos
            prioridades según antigüedad y probabilidad de recuperación.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Cobro prejurídico</h3>
          <p>
            Ejecutamos una gestión formal que aumenta la presión de pago sin
            necesidad de iniciar un proceso judicial.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Negociación de acuerdos</h3>
          <p>
            Diseñamos acuerdos de pago efectivos que faciliten la recuperación
            del dinero en el menor tiempo posible.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Cobro jurídico</h3>
          <p>
            Si el cliente no responde, iniciamos acciones legales para exigir el
            pago de la deuda.
          </p>
        </div>
      </div>

      {/* DIFERENCIAL */}
      <div className={styles.block}>
        <h2>¿Por qué externalizar la cobranza en tu pyme?</h2>

        <p>
          Muchas empresas intentan cobrar internamente, pero terminan perdiendo
          tiempo, dinero y oportunidades de recuperación.
        </p>

        <ul>
          <li>Mayor tasa de recuperación de cartera</li>
          <li>Ahorro de tiempo operativo</li>
          <li>Procesos legales correctos</li>
          <li>Mejor relación con el cliente (gestión profesional)</li>
        </ul>

        <div className={styles.highlight}>
          💡 Externalizar la cobranza te permite enfocarte en crecer, no en
          perseguir pagos.
        </div>
      </div>

      {/* CASOS */}
      <div className={styles.block}>
        <h2>Casos comunes que resolvemos en pymes</h2>

        <ul>
          <li>Clientes que no responden después de múltiples contactos</li>
          <li>Facturas con más de 60 o 90 días de mora</li>
          <li>Deudas acumuladas difíciles de recuperar</li>
          <li>Empresas que dejaron de pagar sin explicación</li>
        </ul>

        <p>
          Cada caso se maneja con una estrategia específica para maximizar la
          recuperación.
        </p>
      </div>

      {/* URGENCIA */}
      <div className={styles.block}>
        <h2>¿Cuándo deberías actuar?</h2>

        <p>El tiempo es un factor clave en la recuperación de cartera.</p>

        <ul>
          <li>Más de 30 días de mora → iniciar gestión</li>
          <li>Más de 60 días → aumentar presión</li>
          <li>Más de 90 días → riesgo alto de pérdida</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Entre más tiempo pasa, menor es la probabilidad de recuperar el
          dinero.
        </div>
      </div>

      {/* CTA FINAL */}
      <div className={styles.cta}>
        <h2>Recupera la cartera de tu pyme hoy</h2>

        <p>
          No permitas que los clientes morosos sigan afectando tu empresa.
          Empieza hoy a recuperar tu dinero y mejora tu flujo de caja con
          estrategias profesionales en Cali.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar asesoría para pymes
        </Link>
      </div>
    </section>
  );
}
