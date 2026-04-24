"use client";

import styles from "../../styles/Landing.module.css";
import Link from "next/link";

export default function CobranzaClinicasContent() {
  return (
    <section className={styles.section}>
      {/* HERO */}
      <div className={styles.hero}>
        <h1>Cobranza para clínicas en Cali</h1>

        <p>
          Recupera cartera vencida en el sector salud con estrategias
          especializadas para clínicas, IPS y entidades médicas en Cali.
          Mejoramos tu flujo de caja y aceleramos el pago de cuentas médicas.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Recuperar cartera clínica
        </Link>

        <div className={styles.badgeRow}>
          <span>🏥 Sector salud</span>
          <span>⚖️ Cobro legal</span>
          <span>📈 Flujo de caja</span>
        </div>
      </div>

      {/* INTRO SEO */}
      <div className={styles.block}>
        <h2>Recuperación de cartera en clínicas, IPS y sector salud</h2>

        <p>
          La cartera en el sector salud es una de las más complejas de
          gestionar. Clínicas e IPS en Cali enfrentan retrasos constantes en
          pagos, especialmente por parte de EPS, aseguradoras y entidades
          intermediarias.
        </p>

        <p>
          Esto genera acumulación de cuentas médicas, problemas de liquidez y
          dificultades operativas que impactan directamente la calidad del
          servicio.
        </p>

        <div className={styles.highlight}>
          ⚠️ Una clínica puede tener alta facturación, pero sufrir problemas
          graves por falta de recaudo.
        </div>
      </div>

      {/* PROBLEMAS */}
      <div className={styles.block}>
        <h2>Principales problemas de cartera en clínicas</h2>

        <p>
          Las instituciones de salud presentan desafíos específicos en la
          recuperación de cartera que requieren un enfoque especializado.
        </p>

        <ul>
          <li>Cuentas médicas radicadas sin pago</li>
          <li>Glosas y devoluciones de facturación</li>
          <li>Retrasos prolongados de EPS</li>
          <li>Falta de seguimiento a cuentas por cobrar</li>
          <li>Procesos administrativos complejos</li>
        </ul>

        <p>
          Estos factores hacen que la recuperación de cartera en salud sea más
          lenta si no se gestiona correctamente.
        </p>
      </div>

      {/* IMPACTO */}
      <div className={styles.block}>
        <h2>Cómo afecta la cartera vencida a una clínica</h2>

        <p>
          La falta de pago en el sector salud no solo afecta las finanzas, sino
          toda la operación de la institución.
        </p>

        <ul>
          <li>Falta de liquidez para operación diaria</li>
          <li>Dificultad para pagar personal médico</li>
          <li>Limitación en compra de insumos</li>
          <li>Retrasos en expansión o inversión</li>
          <li>Riesgo de inestabilidad financiera</li>
        </ul>

        <div className={styles.highlight}>
          ⚠️ Sin flujo de caja, la calidad del servicio de salud también se ve
          afectada.
        </div>
      </div>

      {/* TIPOS DE DEUDA */}
      <div className={styles.block}>
        <h2>Tipos de cartera en el sector salud</h2>

        <p>
          No toda la cartera es igual. Identificar su origen permite aplicar una
          estrategia de recuperación más efectiva.
        </p>

        <div className={styles.step}>
          <h3>Cartera con EPS</h3>
          <p>
            Requiere gestión técnica y seguimiento estructurado por procesos
            administrativos.
          </p>
        </div>

        <div className={styles.step}>
          <h3>Cartera con aseguradoras</h3>
          <p>
            Implica validaciones contractuales y tiempos de respuesta
            específicos.
          </p>
        </div>

        <div className={styles.step}>
          <h3>Cartera de pacientes</h3>
          <p>
            Se maneja mediante contacto directo, acuerdos de pago y cobranza
            personalizada.
          </p>
        </div>

        <div className={styles.step}>
          <h3>Cartera en mora avanzada</h3>
          <p>
            Requiere escalamiento a procesos legales para lograr recuperación.
          </p>
        </div>
      </div>

      {/* ERRORES */}
      <div className={styles.block}>
        <h2>Errores comunes en la cobranza de clínicas</h2>

        <ul>
          <li>No hacer seguimiento constante a cuentas médicas</li>
          <li>Depender únicamente del área administrativa</li>
          <li>No priorizar cartera por antigüedad</li>
          <li>No escalar casos críticos a tiempo</li>
          <li>Falta de estrategia en negociación</li>
        </ul>

        <p>
          Estos errores hacen que la cartera se acumule y sea cada vez más
          difícil de recuperar.
        </p>
      </div>

      {/* SOLUCIÓN */}
      <div className={styles.block}>
        <h2>Cómo recuperamos cartera clínica en Cali</h2>

        <p>
          Aplicamos un proceso estructurado que combina conocimiento del sector
          salud con estrategias legales y financieras.
        </p>

        <div className={styles.step}>
          <h3>1. Auditoría de cartera</h3>
          <p>
            Identificamos cuentas médicas pendientes y priorizamos según valor y
            antigüedad.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Gestión prejurídica</h3>
          <p>
            Realizamos contacto formal con EPS, aseguradoras o deudores para
            lograr recuperación sin demanda.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Negociación estratégica</h3>
          <p>
            Estructuramos acuerdos que faciliten el pago de la cartera clínica.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Cobro jurídico</h3>
          <p>
            En caso de incumplimiento, iniciamos procesos legales para exigir el
            pago.
          </p>
        </div>
      </div>

      {/* BENEFICIOS */}
      <div className={styles.block}>
        <h2>Beneficios de una cobranza especializada en salud</h2>

        <p>
          Contar con un equipo experto en recuperación de cartera del sector
          salud permite mejorar resultados de forma significativa.
        </p>

        <ul>
          <li>Mayor recuperación de cuentas médicas</li>
          <li>Reducción de cartera vencida</li>
          <li>Mejor flujo de caja</li>
          <li>Optimización de procesos administrativos</li>
          <li>Mayor estabilidad financiera</li>
        </ul>
      </div>

      {/* DIFERENCIAL */}
      <div className={styles.block}>
        <h2>¿Por qué elegir un servicio especializado?</h2>

        <p>
          La cobranza en el sector salud requiere conocimiento técnico,
          normativo y operativo que no todos los servicios ofrecen.
        </p>

        <ul>
          <li>Experiencia en cuentas médicas</li>
          <li>Conocimiento de procesos con EPS</li>
          <li>Estrategias adaptadas al sector salud</li>
          <li>Enfoque en resultados medibles</li>
        </ul>
      </div>

      {/* CTA FINAL */}
      <div className={styles.cta}>
        <h2>Recupera la cartera de tu clínica</h2>

        <p>
          No dejes que la cartera vencida afecte tu operación. Mejora tu
          liquidez y asegura la estabilidad financiera de tu institución.
        </p>

        <Link
          href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar asesoría para clínicas
        </Link>
      </div>
    </section>
  );
}
