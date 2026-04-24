"use client";

import styles from "../Blog.module.css";
import Link from "next/link";

export default function CarteraSinAbogadosContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <header className={styles.hero}>
        <h1>Recuperación de cartera sin abogados: ¿es posible? (Guía 2026)</h1>

        <p className={styles.subtitle}>
          Muchas empresas intentan recuperar deudas por su cuenta. Pero,
          ¿realmente funciona? Aquí te explicamos cuándo sí y cuándo no.
        </p>

        <div className={styles.badgeRow}>
          <span>⚖️ Análisis legal</span>
          <span>💼 Empresas</span>
          <span>📍 Colombia</span>
        </div>
      </header>

      {/* INTRO */}
      <section>
        <h2>¿Se puede recuperar cartera sin abogados?</h2>

        <p>
          Sí, es posible recuperar cartera sin abogados en ciertas etapas del
          proceso, especialmente en la gestión inicial o cobro prejurídico.
        </p>

        <p>
          Sin embargo, esto depende del tipo de deuda, el comportamiento del
          cliente y el nivel de formalidad del acuerdo.
        </p>
      </section>

      {/* CUANDO SI */}
      <section>
        <h2>Cuándo sí puedes recuperar cartera sin abogados</h2>

        <ul>
          <li>Deudas recientes (menos de 60 días)</li>
          <li>Clientes con buena relación comercial</li>
          <li>Cuando hay comunicación activa con el deudor</li>
          <li>Cuando existen acuerdos de pago viables</li>
        </ul>

        <div className={styles.highlight}>
          💡 En estos casos, la negociación directa puede ser suficiente.
        </div>
      </section>

      {/* CUANDO NO */}
      <section>
        <h2>Cuándo necesitas apoyo legal</h2>

        <ul>
          <li>Deudas antiguas o superiores a 90 días</li>
          <li>Clientes que no responden</li>
          <li>Falta de documentos o soportes</li>
          <li>Incumplimiento de acuerdos de pago</li>
        </ul>

        <p>
          En estos escenarios, el cobro prejurídico o jurídico es necesario para
          aumentar la probabilidad de recuperación.
        </p>
      </section>

      {/* RIESGOS */}
      <section>
        <h2>Riesgos de gestionar cartera sin abogados</h2>

        <ul>
          <li>Pérdida de tiempo en deudas incobrables</li>
          <li>Errores en acuerdos de pago</li>
          <li>Falta de soporte legal</li>
          <li>Reducción de probabilidad de recuperación</li>
        </ul>
      </section>

      {/* REALIDAD */}
      <section>
        <h2>La realidad en empresas</h2>

        <p>
          Muchas empresas inician la gestión por su cuenta, pero terminan
          recurriendo a expertos cuando la deuda ya es difícil de recuperar.
        </p>

        <p>
          El problema es que, en ese punto, las probabilidades de éxito ya han
          disminuido.
        </p>
      </section>

      {/* CONSEJO */}
      <section>
        <h2>Consejo profesional</h2>

        <p>
          No se trata de elegir entre hacerlo solo o contratar abogados, sino de
          saber en qué momento escalar el proceso.
        </p>

        <p>
          Una gestión estratégica combina cobranza interna y apoyo legal en el
          momento adecuado.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>¿No sabes si necesitas apoyo legal?</h2>

        <p>
          En Pravice analizamos tu caso y te indicamos la mejor estrategia para
          recuperar tu cartera sin perder tiempo ni dinero.
        </p>

        <Link href="/contacto" className={styles.button}>
          Evaluar mi caso
        </Link>
      </section>
    </article>
  );
}
