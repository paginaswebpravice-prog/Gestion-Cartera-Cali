"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaConstructorasContent() {
  return (
    <section className={styles.section}>
      {/* HERO */}
      <div className={styles.hero}>
        <h1>Cobranza para constructoras en Cali</h1>

        <p>
          Recupera pagos atrasados de obras, contratos y clientes morosos con
          estrategias legales especializadas en el sector construcción.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Recuperar cartera de obra
        </Link>

        <div className={styles.badgeRow}>
          <span>🏗️ Sector construcción</span>
          <span>⚖️ Cobro legal</span>
          <span>💰 Alto valor</span>
          <span>📈 Flujo de caja</span>
        </div>
      </div>

      {/* CONTEXTO */}
      <div className={styles.block}>
        <h2>El problema de cartera en constructoras</h2>

        <p>
          En el sector construcción en Cali, los retrasos en pagos son una
          constante. Contratos sin liquidar, actas pendientes y clientes que no
          cumplen generan una acumulación de cartera difícil de recuperar.
        </p>

        <p>
          A diferencia de otros sectores, aquí las deudas suelen ser de alto
          valor, lo que hace que cada caso tenga un impacto significativo en la
          estabilidad financiera de la empresa.
        </p>

        <div className={styles.highlight}>
          ⚠️ Una sola deuda grande puede afectar toda la operación de una obra.
        </div>
      </div>

      {/* PROBLEMAS */}
      <div className={styles.block}>
        <h2>Problemas comunes en cartera de construcción</h2>

        <ul>
          <li>Clientes que no pagan avances de obra</li>
          <li>Facturación pendiente por contratos</li>
          <li>Retrasos en pagos de contratistas</li>
          <li>Disputas por entregas o cumplimiento</li>
          <li>Falta de seguimiento a cuentas por cobrar</li>
        </ul>

        <p>
          Estos problemas suelen escalar rápidamente si no se gestionan de forma
          profesional y oportuna.
        </p>
      </div>

      {/* IMPACTO */}
      <div className={styles.block}>
        <h2>Impacto financiero en constructoras</h2>

        <p>
          La cartera vencida en construcción afecta directamente la ejecución de
          proyectos y la continuidad del negocio.
        </p>

        <ul>
          <li>Falta de liquidez para continuar obras</li>
          <li>Retrasos en pagos a proveedores</li>
          <li>Paralización de proyectos</li>
          <li>Pérdidas financieras significativas</li>
        </ul>

        <p>
          Sin una gestión adecuada, una empresa constructora puede entrar en
          crisis rápidamente.
        </p>
      </div>

      {/* SOLUCIÓN */}
      <div className={styles.block}>
        <h2>Solución: cobranza especializada en construcción</h2>

        <p>
          La recuperación de cartera en este sector requiere conocimiento legal
          y contractual específico. No es un cobro tradicional.
        </p>

        <ul>
          <li>Análisis de contratos y soportes</li>
          <li>Gestión estratégica con el deudor</li>
          <li>Negociación estructurada</li>
          <li>Acciones legales cuando aplica</li>
        </ul>
      </div>

      {/* PROCESO */}
      <div className={styles.block}>
        <h2>Cómo recuperamos cartera de constructoras en Cali</h2>

        <div className={styles.step}>
          <h3>1. Evaluación del caso</h3>
          <p>
            Analizamos contratos, facturas y estado de la deuda para definir la
            mejor estrategia.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Cobro prejurídico</h3>
          <p>
            Iniciamos gestión formal para lograr pago sin necesidad de demanda.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Negociación</h3>
          <p>
            Se estructuran acuerdos que faciliten la recuperación del dinero.
          </p>
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
        <h2>¿Por qué elegir un servicio especializado?</h2>

        <p>
          La cobranza en construcción no puede manejarse como un caso estándar.
          Requiere experiencia en contratos, obras y negociación.
        </p>

        <ul>
          <li>Mayor recuperación de deudas grandes</li>
          <li>Gestión legal adecuada</li>
          <li>Estrategias adaptadas al sector</li>
          <li>Reducción de pérdidas financieras</li>
        </ul>
      </div>

      {/* URGENCIA */}
      <div className={styles.block}>
        <h2>¿Cuándo debes actuar?</h2>

        <ul>
          <li>Pagos atrasados en obra</li>
          <li>Facturas sin respuesta</li>
          <li>Contratos sin liquidación</li>
          <li>Clientes que evitan contacto</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ En construcción, el tiempo reduce la probabilidad de recuperación.
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <h2>Recupera el dinero de tus proyectos</h2>

        <p>
          No permitas que los retrasos de pago afecten tus obras. Actúa hoy y
          recupera tu cartera con apoyo profesional en Cali.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar asesoría para constructoras
        </Link>
      </div>
    </section>
  );
}
