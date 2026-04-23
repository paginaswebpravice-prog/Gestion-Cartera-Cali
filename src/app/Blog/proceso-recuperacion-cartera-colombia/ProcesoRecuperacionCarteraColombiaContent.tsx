"use client";

import styles from "../Blogs.module.css";
import Link from "next/link";

export default function ProcesoRecuperacionCarteraColombiaContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <header className={styles.hero}>
        <h1>
          Proceso de recuperación de cartera empresarial en Colombia (Guía
          completa 2026)
        </h1>

        <p className={styles.subtitle}>
          Conocer el proceso correcto de recuperación de cartera es clave para
          evitar pérdidas financieras y recuperar dinero de forma estructurada,
          legal y eficiente.
        </p>

        <div className={styles.badgeRow}>
          <span>⚖️ Proceso legal</span>
          <span>💼 Empresas</span>
          <span>📍 Colombia</span>
        </div>
      </header>

      {/* INTRO */}
      <section>
        <h2>¿Qué es el proceso de recuperación de cartera?</h2>

        <p>
          Es el conjunto de etapas legales y administrativas que permiten
          recuperar deudas pendientes de clientes o empresas.
        </p>

        <p>
          Este proceso no es improvisado: sigue una estructura que determina la
          probabilidad de éxito en la recuperación del dinero.
        </p>
      </section>

      {/* ESTRUCTURA */}
      <section>
        <h2>Etapas del proceso de recuperación de cartera</h2>

        <div className={styles.step}>
          <h3>1. Análisis de la cartera</h3>
          <p>
            Se revisa la deuda, soportes legales, facturas y antigüedad de la
            obligación.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Gestión de cobro preventiva</h3>
          <p>
            Se realizan recordatorios antes del vencimiento para evitar mora.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Cobro prejurídico</h3>
          <p>
            Etapa de negociación formal antes de iniciar cualquier proceso
            judicial.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Acuerdo de pago</h3>
          <p>Se estructura una solución negociada para evitar demanda.</p>
        </div>

        <div className={styles.step}>
          <h3>5. Cobro jurídico</h3>
          <p>
            Si no hay pago, se inicia demanda legal para recuperar la deuda.
          </p>
        </div>
      </section>

      {/* IMPORTANCIA */}
      <section>
        <h2>¿Por qué es importante seguir este proceso?</h2>

        <ul>
          <li>Evita pérdida de dinero por mala gestión</li>
          <li>Reduce tiempos de recuperación</li>
          <li>Mejora la liquidez empresarial</li>
          <li>Aumenta la probabilidad de pago</li>
        </ul>

        <div className={styles.highlight}>
          💡 Sin proceso estructurado, la cartera se vuelve incobrable con el
          tiempo.
        </div>
      </section>

      {/* ERRORES */}
      <section>
        <h2>Errores comunes en la recuperación de cartera</h2>

        <ul>
          <li>No segmentar la cartera por riesgo</li>
          <li>No escalar el cobro a tiempo</li>
          <li>No documentar acuerdos de pago</li>
          <li>Esperar demasiado para actuar</li>
        </ul>
      </section>

      {/* OPTIMIZACION */}
      <section>
        <h2>Cómo optimizar el proceso de cartera en tu empresa</h2>

        <p>
          Las empresas más efectivas no solo cobran: tienen un sistema definido
          de gestión de cartera.
        </p>

        <ul>
          <li>Políticas de crédito claras</li>
          <li>Seguimiento automático de facturas</li>
          <li>Proceso prejurídico estructurado</li>
          <li>Escalamiento legal definido</li>
        </ul>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>¿Quieres estructurar el proceso de cartera en tu empresa?</h2>

        <p>
          En Pravice ayudamos a empresas en Colombia a implementar procesos de
          recuperación de cartera efectivos y legales.
        </p>

        <Link href="/contacto" className={styles.button}>
          Estructurar mi proceso de cartera
        </Link>
      </section>
    </article>
  );
}
