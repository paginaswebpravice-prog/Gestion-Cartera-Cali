"use client";

import styles from "../Blogs.module.css";
import Link from "next/link";

export default function RecuperarCarteraVencidaCaliContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <header className={styles.hero}>
        <h1>
          Cómo recuperar cartera vencida en Cali paso a paso (Guía legal y
          efectiva 2026)
        </h1>

        <p className={styles.subtitle}>
          Si tu empresa tiene clientes que no pagan, estás perdiendo liquidez
          todos los días. Aquí aprenderás un método real, legal y probado para
          recuperar cartera vencida en Cali sin afectar tus relaciones
          comerciales.
        </p>

        <div className={styles.badgeRow}>
          <span>📍 Cali, Colombia</span>
          <span>⚖️ Proceso legal y prejurídico</span>
          <span>💼 Empresas y Pymes</span>
        </div>
      </header>

      {/* INTRO */}
      <section>
        <h2>¿Qué es realmente la cartera vencida en una empresa?</h2>

        <p>
          La cartera vencida no es solo “dinero atrasado”. Es el conjunto de
          facturas, servicios o productos que ya fueron entregados, pero que el
          cliente no ha pagado en el tiempo acordado.
        </p>

        <p>
          En ciudades como Cali, este problema es uno de los principales
          factores que afectan el crecimiento de pequeñas y medianas empresas,
          ya que bloquea el flujo de caja y genera dependencia de créditos
          externos.
        </p>

        <div className={styles.highlight}>
          💡 Mientras más tiempo pase una deuda sin gestión, menor es la
          probabilidad de recuperarla.
        </div>
      </section>

      {/* IMPACTO */}
      <section>
        <h2>El verdadero impacto de no recuperar la cartera vencida</h2>

        <p>
          No cobrar a tiempo no solo es un problema administrativo, es un
          problema financiero grave.
        </p>

        <ul>
          <li>Se reduce la liquidez operativa del negocio</li>
          <li>Aumenta la necesidad de endeudamiento</li>
          <li>Se afecta la capacidad de inversión</li>
          <li>Se deteriora la relación con proveedores</li>
        </ul>

        <p>
          Muchas empresas en Cali fracasan no por falta de ventas, sino por
          falta de control de cartera.
        </p>
      </section>

      {/* PASO A PASO */}
      <section>
        <h2>Cómo recuperar cartera vencida en Cali paso a paso</h2>

        <div className={styles.step}>
          <h3>1. Clasificación de la cartera</h3>
          <p>
            Se debe segmentar la cartera por días de mora: 30, 60, 90 y más de
            120 días. Esto permite priorizar los casos más críticos.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Gestión de cobro amistoso</h3>
          <p>
            El primer contacto debe ser estratégico, profesional y documentado.
            Muchas deudas se recuperan en esta etapa si se hace correctamente.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Cobro prejurídico</h3>
          <p>
            Se envían comunicaciones formales con soporte legal que presionan el
            pago sin necesidad de demanda.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Acuerdo de pago estructurado</h3>
          <p>
            En muchos casos, el cliente no puede pagar todo de una vez, por lo
            que se negocia un plan de pago realista y firmado.
          </p>
        </div>

        <div className={styles.step}>
          <h3>5. Cobro jurídico (última etapa)</h3>
          <p>
            Si no hay cumplimiento, se inicia un proceso legal para exigir el
            pago mediante demanda judicial.
          </p>
        </div>
      </section>

      {/* CONSEJOS */}
      <section>
        <h2>Errores que destruyen la recuperación de cartera</h2>

        <ul>
          <li>Esperar demasiado tiempo para cobrar</li>
          <li>No tener soporte documental de la deuda</li>
          <li>No segmentar la cartera por antigüedad</li>
          <li>No escalar a cobro legal cuando es necesario</li>
        </ul>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Recupera tu cartera vencida en Cali hoy mismo</h2>

        <p>
          En Pravice ayudamos a empresas a recuperar su dinero de forma legal,
          estratégica y efectiva. No dejes que tu cartera siga creciendo.
        </p>

        <Link href="/contacto" className={styles.button}>
          Solicitar asesoría gratuita
        </Link>
      </section>
    </article>
  );
}
