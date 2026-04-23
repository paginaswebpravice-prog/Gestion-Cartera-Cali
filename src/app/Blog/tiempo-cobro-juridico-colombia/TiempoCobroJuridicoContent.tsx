"use client";

import styles from "../Blogs.module.css";
import Link from "next/link";

export default function TiempoCobroJuridicoContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <header className={styles.hero}>
        <h1>¿Cuánto tiempo tarda un cobro jurídico en Colombia? (Guía 2026)</h1>

        <p className={styles.subtitle}>
          Uno de los factores más importantes antes de iniciar una demanda es
          entender cuánto puede tardar el proceso de recuperación de cartera.
        </p>

        <div className={styles.badgeRow}>
          <span>⚖️ Proceso legal</span>
          <span>📊 Tiempos reales</span>
          <span>📍 Colombia</span>
        </div>
      </header>

      {/* INTRO */}
      <section>
        <h2>¿El cobro jurídico es rápido?</h2>

        <p>
          No. El cobro jurídico en Colombia no es inmediato. Depende de varios
          factores como el juzgado, la carga procesal y la documentación del
          caso.
        </p>

        <p>
          Sin embargo, es una de las herramientas más efectivas para recuperar
          cartera cuando el deudor no paga voluntariamente.
        </p>
      </section>

      {/* TIEMPOS */}
      <section>
        <h2>Tiempo promedio de un cobro jurídico en Colombia</h2>

        <div className={styles.step}>
          <h3>1. Etapa inicial (demanda)</h3>
          <p>
            Aproximadamente entre 1 y 3 meses dependiendo del juzgado y
            documentación.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Notificación del demandado</h3>
          <p>Puede tardar entre 1 y 6 meses según la ubicación del deudor.</p>
        </div>

        <div className={styles.step}>
          <h3>3. Proceso ejecutivo</h3>
          <p>De 6 meses a 2 años dependiendo de si hay oposición del deudor.</p>
        </div>

        <div className={styles.step}>
          <h3>4. Embargos y recuperación</h3>
          <p>
            Depende de la existencia de bienes o cuentas bancarias embargables.
          </p>
        </div>
      </section>

      {/* FACTORES */}
      <section>
        <h2>Factores que afectan el tiempo del proceso</h2>

        <ul>
          <li>Carga del juzgado</li>
          <li>Complejidad del caso</li>
          <li>Ubicación del deudor</li>
          <li>Calidad de los documentos soporte</li>
          <li>Respuesta del demandado</li>
        </ul>

        <div className={styles.highlight}>
          💡 Un buen expediente puede reducir significativamente los tiempos.
        </div>
      </section>

      {/* ERROR */}
      <section>
        <h2>Error común de las empresas</h2>

        <p>
          Pensar que el cobro jurídico es inmediato lleva a tomar malas
          decisiones o retrasar el proceso demasiado.
        </p>

        <p>
          El momento correcto de actuar es cuando la cartera prejurídica ya no
          funciona.
        </p>
      </section>

      {/* REALIDAD */}
      <section>
        <h2>Realidad del cobro jurídico en Colombia</h2>

        <p>
          Aunque puede tardar meses o años, sigue siendo una de las formas más
          seguras de recuperar deudas grandes o complejas.
        </p>

        <p>
          La clave está en iniciar el proceso con estrategia, no con urgencia.
        </p>
      </section>

      {/* CONSEJO */}
      <section>
        <h2>Consejo profesional</h2>

        <p>
          Antes de llegar a cobro jurídico, siempre se debe agotar la etapa
          prejurídica para aumentar la probabilidad de pago voluntario.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>¿Necesitas iniciar un cobro jurídico?</h2>

        <p>
          En Pravice analizamos tu caso y definimos la mejor estrategia para
          recuperar tu cartera en el menor tiempo posible.
        </p>

        <Link href="/contacto" className={styles.button}>
          Evaluar mi caso
        </Link>
      </section>
    </article>
  );
}
