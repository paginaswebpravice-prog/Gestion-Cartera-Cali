"use client";

import styles from "../Blogs.module.css";
import Link from "next/link";

export default function DiferenciaCobroContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <header className={styles.hero}>
        <h1>
          Diferencia entre cobro jurídico y prejurídico en Colombia (Guía clara
          2026)
        </h1>

        <p className={styles.subtitle}>
          Entender la diferencia entre cobro jurídico y prejurídico es clave
          para recuperar cartera vencida sin perder tiempo ni dinero. Aquí te
          explico cuándo usar cada uno y cuál te conviene.
        </p>

        <div className={styles.badgeRow}>
          <span>⚖️ Etapas de cobranza</span>
          <span>📍 Colombia</span>
          <span>💼 Empresas y Pymes</span>
        </div>
      </header>

      {/* INTRO */}
      <section>
        <h2>¿Por qué es importante entender estas dos etapas?</h2>

        <p>
          Muchas empresas en Colombia pierden dinero porque no saben cuándo
          escalar un cobro o qué tipo de gestión aplicar.
        </p>

        <p>
          El cobro prejurídico y el cobro jurídico no son lo mismo, y usarlos
          mal puede hacer que pierdas tiempo, dinero o incluso la posibilidad de
          recuperar la deuda.
        </p>
      </section>

      {/* DIFERENCIA PRINCIPAL */}
      <section>
        <h2>Diferencia entre cobro prejurídico y jurídico</h2>

        <div className={styles.step}>
          <h3>🟡 Cobro prejurídico</h3>
          <p>
            Es la etapa previa a la demanda. Se busca que el deudor pague
            voluntariamente mediante comunicaciones formales, recordatorios y
            acuerdos de pago.
          </p>
        </div>

        <div className={styles.step}>
          <h3>🔴 Cobro jurídico</h3>
          <p>
            Es la etapa legal donde se inicia una demanda ante un juez para
            exigir el pago de la deuda mediante procesos judiciales.
          </p>
        </div>
      </section>

      {/* TABLA CONCEPTUAL */}
      <section>
        <h2>Comparación clara entre ambos procesos</h2>

        <ul>
          <li>
            <strong>Prejurídico:</strong> no hay demanda, es negociación
          </li>
          <li>
            <strong>Jurídico:</strong> hay proceso legal formal
          </li>
          <li>
            <strong>Prejurídico:</strong> bajo costo
          </li>
          <li>
            <strong>Jurídico:</strong> mayor costo pero más coercitivo
          </li>
          <li>
            <strong>Prejurídico:</strong> más rápido
          </li>
          <li>
            <strong>Jurídico:</strong> más lento pero más fuerte legalmente
          </li>
        </ul>
      </section>

      {/* CUANDO USAR CADA UNO */}
      <section>
        <h2>¿Cuándo usar cobro prejurídico?</h2>

        <ul>
          <li>Cuando la deuda aún está en etapa temprana</li>
          <li>Cuando hay posibilidad de negociación</li>
          <li>Cuando quieres evitar costos legales</li>
        </ul>

        <h2>¿Cuándo usar cobro jurídico?</h2>

        <ul>
          <li>Cuando el cliente no responde</li>
          <li>Cuando la deuda es antigua o ignorada</li>
          <li>Cuando ya falló el cobro prejurídico</li>
        </ul>
      </section>

      {/* ERROR */}
      <section>
        <h2>Error más común en las empresas</h2>

        <p>
          El error más grave es saltar directamente al cobro jurídico sin
          intentar una gestión prejurídica estructurada.
        </p>

        <div className={styles.highlight}>
          💡 La mayoría de deudas se pueden recuperar en etapa prejurídica si se
          gestiona correctamente.
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>¿No sabes qué tipo de cobro usar?</h2>

        <p>
          En Pravice analizamos tu cartera y definimos la mejor estrategia para
          recuperar tu dinero de forma efectiva.
        </p>

        <Link href="/contacto" className={styles.button}>
          Evaluar mi cartera
        </Link>
      </section>
    </article>
  );
}
