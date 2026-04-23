"use client";

import styles from "../Blogs.module.css";
import Link from "next/link";

export default function ClienteNoPagaCaliContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <header className={styles.hero}>
        <h1>
          Qué hacer si un cliente no paga en Cali (Guía práctica y legal 2026)
        </h1>

        <p className={styles.subtitle}>
          Si un cliente no te paga, el problema no es solo la deuda: es el
          impacto directo en tu flujo de caja, operaciones y estabilidad
          financiera. Aquí te explico exactamente qué hacer paso a paso.
        </p>

        <div className={styles.badgeRow}>
          <span>⚠️ Clientes morosos</span>
          <span>📍 Cali</span>
          <span>💼 Empresas y Pymes</span>
        </div>
      </header>

      {/* INTRO */}
      <section>
        <h2>¿Qué significa realmente cuando un cliente no paga?</h2>

        <p>
          Cuando un cliente no paga, no solo estás frente a una deuda: estás
          frente a un riesgo financiero que puede escalar rápidamente si no se
          gestiona correctamente.
        </p>

        <p>
          En muchas empresas de Cali, este problema inicia con pequeños retrasos
          y termina convirtiéndose en cartera vencida difícil de recuperar.
        </p>
      </section>

      {/* PRIMERA ACCION */}
      <section>
        <h2>Qué hacer inmediatamente si un cliente no paga</h2>

        <div className={styles.step}>
          <h3>1. Verifica la deuda</h3>
          <p>
            Confirma factura, contrato o acuerdo firmado. Sin soporte, el cobro
            pierde fuerza legal.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Contacto directo y profesional</h3>
          <p>
            Realiza un contacto formal, evitando mensajes informales o
            emocionales.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Envía recordatorio de pago</h3>
          <p>
            Un recordatorio estructurado puede resolver muchos casos en etapa
            temprana.
          </p>
        </div>
      </section>

      {/* ESCALAMIENTO */}
      <section>
        <h2>Si el cliente sigue sin pagar, esto es lo que debes hacer</h2>

        <p>
          Si después de varios intentos no hay respuesta, debes escalar el
          proceso de manera estratégica.
        </p>

        <ul>
          <li>Iniciar cobro prejurídico</li>
          <li>Enviar comunicación formal legal</li>
          <li>Negociar acuerdo de pago estructurado</li>
          <li>Preparar posible cobro jurídico</li>
        </ul>

        <div className={styles.highlight}>
          💡 El error más común es esperar demasiado antes de escalar el cobro.
        </div>
      </section>

      {/* ERRORES */}
      <section>
        <h2>Errores que empeoran el problema</h2>

        <ul>
          <li>Dejar pasar meses sin actuar</li>
          <li>No dejar evidencia escrita</li>
          <li>Confiar solo en llamadas informales</li>
          <li>No tener proceso de cobranza definido</li>
        </ul>
      </section>

      {/* CONSEJO ESTRATEGICO */}
      <section>
        <h2>La clave real para recuperar dinero</h2>

        <p>
          El éxito en la recuperación de cartera no depende del cliente, sino
          del sistema de cobro que tenga tu empresa.
        </p>

        <p>
          Las empresas que tienen procesos claros recuperan hasta 3 veces más
          cartera que las que actúan de forma improvisada.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>¿Tu cliente no te paga en Cali?</h2>

        <p>
          En Pravice te ayudamos a recuperar cartera vencida con estrategias
          legales y efectivas sin perder más tiempo ni dinero.
        </p>

        <Link href="/contacto" className={styles.button}>
          Recuperar mi dinero ahora
        </Link>
      </section>
    </article>
  );
}
