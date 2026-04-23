"use client";

import styles from "../Blogs.module.css";
import Link from "next/link";

export default function AcuerdoPagoContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <header className={styles.hero}>
        <h1>Cómo redactar un acuerdo de pago efectivo (Guía + ejemplo 2026)</h1>

        <p className={styles.subtitle}>
          Un acuerdo de pago bien redactado es una de las herramientas más
          efectivas para recuperar cartera sin necesidad de demanda judicial.
        </p>

        <div className={styles.badgeRow}>
          <span>📄 Modelo legal</span>
          <span>💼 Empresas</span>
          <span>⚖️ Cobranza efectiva</span>
        </div>
      </header>

      {/* INTRO */}
      <section>
        <h2>¿Qué es un acuerdo de pago?</h2>

        <p>
          Es un documento mediante el cual un deudor se compromete a pagar una
          obligación en condiciones específicas: fechas, montos y plazos.
        </p>

        <p>
          En Colombia, es una herramienta clave dentro de la recuperación de
          cartera empresarial porque evita procesos judiciales largos y
          costosos.
        </p>
      </section>

      {/* IMPORTANCIA */}
      <section>
        <h2>¿Por qué es tan importante un buen acuerdo de pago?</h2>

        <ul>
          <li>Formaliza la obligación del deudor</li>
          <li>Reduce riesgo de incumplimiento</li>
          <li>Evita procesos jurídicos</li>
          <li>Permite recuperar cartera más rápido</li>
        </ul>

        <div className={styles.highlight}>
          💡 Un acuerdo mal redactado es prácticamente igual a no tener acuerdo.
        </div>
      </section>

      {/* ESTRUCTURA */}
      <section>
        <h2>Estructura de un acuerdo de pago efectivo</h2>

        <div className={styles.step}>
          <h3>1. Identificación de las partes</h3>
          <p>Datos completos del acreedor y del deudor.</p>
        </div>

        <div className={styles.step}>
          <h3>2. Descripción de la deuda</h3>
          <p>
            Monto total, origen de la obligación y soportes (facturas o
            contratos).
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Plan de pagos</h3>
          <p>Fechas exactas y montos de cada cuota.</p>
        </div>

        <div className={styles.step}>
          <h3>4. Consecuencias por incumplimiento</h3>
          <p>Establecer que el incumplimiento habilita cobro jurídico.</p>
        </div>

        <div className={styles.step}>
          <h3>5. Firma y aceptación</h3>
          <p>Firma de ambas partes como prueba de aceptación legal.</p>
        </div>
      </section>

      {/* EJEMPLO */}
      <section>
        <h2>Ejemplo básico de acuerdo de pago</h2>

        <div className={styles.docBox}>
          <div className={styles.docHeader}>
            <h3>ACUERDO DE PAGO</h3>
            <span>Documento referencial - Colombia 2026</span>
          </div>

          <div className={styles.docBody}>
            <p>
              Entre los suscritos a saber, el <strong>ACREEDOR</strong> y el{" "}
              <strong>DEUDOR</strong>, se celebra el presente acuerdo de pago
              bajo las siguientes condiciones:
            </p>

            <p>
              <strong>PRIMERA - OBLIGACIÓN:</strong> El deudor reconoce una
              deuda por valor de <strong>X (valor total)</strong>, derivada de
              la relación comercial existente entre las partes.
            </p>

            <p>
              <strong>SEGUNDA - FORMA DE PAGO:</strong> El deudor se compromete
              a pagar dicha obligación en <strong>X cuotas mensuales</strong>,
              así: inicio el día <strong>X</strong> y finalización el día{" "}
              <strong>X</strong>.
            </p>

            <p>
              <strong>TERCERA - INCUMPLIMIENTO:</strong> En caso de
              incumplimiento de cualquiera de las cuotas pactadas, el acreedor
              podrá iniciar <strong>cobro jurídico inmediato</strong> sin
              requerimiento adicional.
            </p>

            <p>
              <strong>CUARTA - ACEPTACIÓN:</strong> Las partes firman en señal
              de aceptación plena del presente acuerdo.
            </p>

            <div className={styles.docFooter}>
              <span>______________________</span>
              <span>Firma Acreedor</span>

              <span>______________________</span>
              <span>Firma Deudor</span>
            </div>
          </div>
        </div>
      </section>

      {/* ERRORES */}
      <section>
        <h2>Errores comunes al hacer un acuerdo de pago</h2>

        <ul>
          <li>No definir fechas exactas</li>
          <li>No establecer consecuencias legales</li>
          <li>No firmar el documento</li>
          <li>Hacer acuerdos verbales</li>
        </ul>
      </section>

      {/* CONSEJO */}
      <section>
        <h2>Consejo profesional</h2>

        <p>
          Un acuerdo de pago debe tratarse como un documento legal, no como un
          compromiso informal.
        </p>

        <p>
          Si no está bien estructurado, pierde valor jurídico y capacidad de
          ejecución.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>¿Necesitas estructurar acuerdos de pago efectivos?</h2>

        <p>
          En Pravice ayudamos a empresas a diseñar acuerdos de pago legales que
          realmente se cumplen y protegen tu cartera.
        </p>

        <Link href="/contacto" className={styles.button}>
          Crear acuerdo de pago
        </Link>
      </section>
    </article>
  );
}
