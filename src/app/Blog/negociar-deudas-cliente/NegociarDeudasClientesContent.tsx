"use client";

import styles from "../Blog.module.css";
import Link from "next/link";

export default function NegociarDeudasClientesContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <header className={styles.hero}>
        <h1>Cómo negociar deudas sin perder clientes (Guía completa 2026)</h1>

        <p className={styles.subtitle}>
          Recuperar una deuda no significa perder un cliente. La clave está en
          negociar de forma estratégica, profesional y estructurada.
        </p>

        <div className={styles.badgeRow}>
          <span>🤝 Negociación</span>
          <span>💼 Empresas</span>
          <span>📍 Colombia</span>
        </div>
      </header>

      {/* INTRO */}
      <section>
        <h2>El gran miedo de las empresas al cobrar</h2>

        <p>
          Muchas empresas evitan cobrar de forma firme por miedo a perder la
          relación comercial con el cliente.
        </p>

        <p>
          Esto genera un problema mayor: la acumulación de cartera vencida que
          termina afectando la estabilidad financiera del negocio.
        </p>
      </section>

      {/* REALIDAD */}
      <section>
        <h2>¿Cobrar realmente afecta la relación con el cliente?</h2>

        <p>
          No necesariamente. Un proceso de cobranza bien gestionado puede
          incluso fortalecer la relación si se hace de forma profesional.
        </p>

        <div className={styles.highlight}>
          💡 Los clientes responsables valoran empresas con procesos claros.
        </div>
      </section>

      {/* ESTRATEGIAS */}
      <section>
        <h2>Estrategias para negociar deudas sin perder clientes</h2>

        <div className={styles.step}>
          <h3>1. Comunicación profesional y respetuosa</h3>
          <p>
            Evita mensajes agresivos. Mantén un tono claro, firme y respetuoso.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Escuchar la situación del cliente</h3>
          <p>Entender el contexto permite ofrecer soluciones reales.</p>
        </div>

        <div className={styles.step}>
          <h3>3. Ofrecer alternativas de pago</h3>
          <p>
            Planes de pago o acuerdos flexibles aumentan la probabilidad de
            recuperación.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Formalizar acuerdos</h3>
          <p>
            Todo acuerdo debe quedar por escrito para evitar incumplimientos.
          </p>
        </div>

        <div className={styles.step}>
          <h3>5. Definir límites claros</h3>
          <p>
            Si no hay cumplimiento, se debe escalar a cobro prejurídico o
            jurídico.
          </p>
        </div>
      </section>

      {/* ERRORES */}
      <section>
        <h2>Errores al negociar deudas</h2>

        <ul>
          <li>Ser demasiado flexible sin condiciones</li>
          <li>No documentar acuerdos</li>
          <li>Evitar el contacto con el cliente</li>
          <li>Esperar demasiado tiempo para actuar</li>
        </ul>
      </section>

      {/* BALANCE */}
      <section>
        <h2>El equilibrio entre relación y rentabilidad</h2>

        <p>
          Una empresa debe proteger tanto sus ingresos como sus relaciones
          comerciales.
        </p>

        <p>
          Negociar correctamente permite recuperar dinero sin deteriorar la
          confianza del cliente.
        </p>
      </section>

      {/* CONSEJO */}
      <section>
        <h2>Consejo profesional</h2>

        <p>La clave no es evitar el cobro, sino hacerlo con estrategia.</p>

        <p>
          Las empresas que estructuran su proceso logran mejores resultados sin
          perder clientes.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>¿Quieres recuperar tu cartera sin afectar tus clientes?</h2>

        <p>
          En Pravice te ayudamos a implementar estrategias de negociación que
          protegen tu flujo de caja y tus relaciones comerciales.
        </p>

        <Link href="/contacto" className={styles.button}>
          Optimizar mi cobranza
        </Link>
      </section>
    </article>
  );
}
