"use client";

import styles from "../Blogs.module.css";
import Link from "next/link";

export default function CobroPrejuridicoCaliContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <header className={styles.hero}>
        <h1>
          Cobro prejurídico en Cali: cómo funciona y cuándo usarlo (Guía
          completa 2026)
        </h1>

        <p className={styles.subtitle}>
          El cobro prejurídico es la etapa más importante antes de una demanda.
          Bien aplicado, puede ayudarte a recuperar cartera sin procesos
          judiciales largos ni costos elevados.
        </p>

        <div className={styles.badgeRow}>
          <span>⚖️ Etapa previa legal</span>
          <span>📍 Cali</span>
          <span>💼 Recuperación de cartera</span>
        </div>
      </header>

      {/* INTRO */}
      <section>
        <h2>¿Qué es el cobro prejurídico?</h2>

        <p>
          El cobro prejurídico es el proceso de gestión de cobro que se realiza
          antes de iniciar una demanda judicial. Su objetivo es lograr que el
          deudor pague voluntariamente sin necesidad de acudir a un juez.
        </p>

        <p>
          En Colombia, esta etapa es clave porque la mayoría de las deudas aún
          pueden recuperarse sin procesos legales complejos si se gestionan a
          tiempo.
        </p>
      </section>

      {/* IMPORTANCIA */}
      <section>
        <h2>¿Por qué el cobro prejurídico es tan importante?</h2>

        <p>
          Muchas empresas en Cali pierden dinero porque no gestionan
          correctamente esta etapa o la subestiman.
        </p>

        <ul>
          <li>Reduce costos legales</li>
          <li>Aumenta la tasa de recuperación</li>
          <li>Evita procesos judiciales innecesarios</li>
          <li>Mantiene la relación comercial</li>
        </ul>

        <div className={styles.highlight}>
          💡 Una gestión prejurídica bien hecha puede recuperar la mayoría de
          deudas antes de llegar a juicio.
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section>
        <h2>Cómo funciona el cobro prejurídico en Cali</h2>

        <div className={styles.step}>
          <h3>1. Análisis de la deuda</h3>
          <p>
            Se revisan documentos como facturas, contratos o acuerdos firmados
            para validar la obligación.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Contacto inicial con el cliente</h3>
          <p>
            Se realiza comunicación formal informando el estado de la deuda y
            solicitando el pago.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Comunicación prejurídica formal</h3>
          <p>
            Se envía una notificación escrita indicando que, de no pagar, el
            caso puede escalar a cobro jurídico.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Negociación o acuerdo de pago</h3>
          <p>
            Se busca una solución amigable mediante acuerdos de pago
            estructurados.
          </p>
        </div>
      </section>

      {/* CUANDO USARLO */}
      <section>
        <h2>¿Cuándo debes usar cobro prejurídico?</h2>

        <ul>
          <li>Cuando la deuda tiene entre 30 y 120 días de mora</li>
          <li>Cuando aún hay posibilidad de comunicación con el cliente</li>
          <li>Antes de iniciar cualquier demanda judicial</li>
          <li>Cuando quieres evitar costos legales altos</li>
        </ul>
      </section>

      {/* ERROR */}
      <section>
        <h2>Error más común en empresas</h2>

        <p>
          El error más frecuente es tratar el cobro prejurídico como una simple
          llamada o recordatorio, cuando en realidad es una estrategia legal
          estructurada.
        </p>

        <p>
          Si no se hace correctamente, la deuda puede terminar perdiéndose o
          pasando directamente a cobro jurídico con menos probabilidad de éxito.
        </p>
      </section>

      {/* BENEFICIO */}
      <section>
        <h2>Beneficio real del cobro prejurídico</h2>

        <p>
          Una gestión prejurídica profesional puede aumentar significativamente
          la tasa de recuperación de cartera sin necesidad de procesos
          judiciales.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>¿Necesitas recuperar cartera sin llegar a demanda?</h2>

        <p>
          En Pravice te ayudamos a estructurar procesos de cobro prejurídico
          efectivos para recuperar tu dinero de forma rápida y legal.
        </p>

        <Link href="/contacto" className={styles.button}>
          Iniciar gestión prejurídica
        </Link>
      </section>
    </article>
  );
}
