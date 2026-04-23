"use client";

import styles from "../Blogs.module.css";
import Link from "next/link";

export default function CobroJuridicoEnCaliContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <header className={styles.hero}>
        <h1>
          Cobro jurídico en Cali: cuándo demandar una deuda (Guía legal completa
          2026)
        </h1>

        <p className={styles.subtitle}>
          No todas las deudas se cobran igual. Aquí aprenderás cuándo es
          necesario iniciar un cobro jurídico en Cali, cómo funciona el proceso
          en Colombia y qué debes hacer para recuperar tu dinero legalmente.
        </p>

        <div className={styles.badgeRow}>
          <span>⚖️ Proceso legal en Colombia</span>
          <span>📍 Cali</span>
          <span>💼 Empresas y Pymes</span>
        </div>
      </header>

      {/* INTRO */}
      <section>
        <h2>¿Qué es el cobro jurídico?</h2>

        <p>
          El cobro jurídico es la etapa en la que una empresa o persona inicia
          un proceso legal para exigir el pago de una deuda mediante la
          intervención de un abogado y el sistema judicial.
        </p>

        <p>
          En Colombia, este proceso se utiliza cuando el cobro amistoso y el
          cobro prejurídico han fallado, y el deudor no cumple voluntariamente
          con sus obligaciones.
        </p>
      </section>

      {/* CUANDO APLICAR */}
      <section>
        <h2>¿Cuándo debes iniciar un cobro jurídico en Cali?</h2>

        <p>Debes considerar una demanda cuando ocurre alguno de estos casos:</p>

        <ul>
          <li>El cliente ignora múltiples intentos de cobro</li>
          <li>Ya existe un incumplimiento prolongado de pago</li>
          <li>No hay intención de negociación del deudor</li>
          <li>Se agotó la etapa prejurídica sin resultados</li>
        </ul>

        <div className={styles.highlight}>
          💡 Regla clave: Si la deuda supera 90-120 días sin pago, el riesgo de
          pérdida aumenta significativamente.
        </div>
      </section>

      {/* PROCESO */}
      <section>
        <h2>Cómo funciona el cobro jurídico en Colombia</h2>

        <div className={styles.step}>
          <h3>1. Revisión de la deuda</h3>
          <p>
            Se analiza la documentación: facturas, contratos, acuerdos o
            soportes de la obligación.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Preparación del caso</h3>
          <p>
            El abogado estructura la demanda y define la estrategia legal más
            efectiva.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Presentación de la demanda</h3>
          <p>
            Se inicia el proceso judicial ante un juez competente en Colombia.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Notificación al deudor</h3>
          <p>
            El deudor es notificado oficialmente y tiene la oportunidad de
            responder o pagar.
          </p>
        </div>

        <div className={styles.step}>
          <h3>5. Sentencia y ejecución</h3>
          <p>
            Si el juez falla a favor, se ordena el pago y se pueden embargar
            bienes si es necesario.
          </p>
        </div>
      </section>

      {/* VENTAJAS */}
      <section>
        <h2>Ventajas del cobro jurídico</h2>

        <ul>
          <li>Alta presión legal sobre el deudor</li>
          <li>Posibilidad de embargo de bienes</li>
          <li>Recuperación de deudas antiguas</li>
          <li>Formalidad y respaldo legal completo</li>
        </ul>
      </section>

      {/* ERRORES */}
      <section>
        <h2>Errores comunes antes de demandar</h2>

        <ul>
          <li>Esperar demasiado tiempo para actuar</li>
          <li>No tener documentos soporte de la deuda</li>
          <li>No hacer cobro prejurídico previo</li>
          <li>No asesorarse con abogados especializados</li>
        </ul>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>¿Necesitas iniciar un cobro jurídico en Cali?</h2>

        <p>
          En Pravice te ayudamos a recuperar tu cartera vencida mediante
          procesos legales efectivos y estratégicos.
        </p>

        <Link href="/contacto" className={styles.button}>
          Hablar con un abogado
        </Link>
      </section>
    </article>
  );
}
