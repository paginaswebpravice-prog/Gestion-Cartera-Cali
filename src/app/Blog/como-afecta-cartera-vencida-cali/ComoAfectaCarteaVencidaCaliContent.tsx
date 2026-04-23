"use client";

import styles from "../Blogs.module.css";
import Link from "next/link";

export default function ComoAfectaCarteaVencidaCaliContent() {
  return (
    <article className={styles.article}>
      {/* HERO */}
      <header className={styles.hero}>
        <h1>
          Cómo afecta la cartera vencida a tu empresa (Impacto real en 2026)
        </h1>

        <p className={styles.subtitle}>
          La cartera vencida no solo representa dinero pendiente de pago, sino
          un riesgo directo para la estabilidad financiera, el crecimiento y la
          supervivencia de tu empresa.
        </p>

        <div className={styles.badgeRow}>
          <span>📉 Impacto financiero</span>
          <span>💼 Empresas y Pymes</span>
          <span>📍 Colombia</span>
        </div>
      </header>

      {/* INTRO */}
      <section>
        <h2>¿Qué es realmente la cartera vencida?</h2>

        <p>
          La cartera vencida es el conjunto de obligaciones que los clientes no
          han pagado dentro del tiempo acordado. Aunque parece solo un problema
          administrativo, su impacto es mucho más profundo.
        </p>

        <p>
          En empresas de Cali y Colombia, este problema es una de las
          principales causas de falta de liquidez y endeudamiento externo.
        </p>
      </section>

      {/* IMPACTO PRINCIPAL */}
      <section>
        <h2>Cómo afecta la cartera vencida a tu empresa</h2>

        <div className={styles.step}>
          <h3>1. Reduce la liquidez</h3>
          <p>
            El dinero que debería estar en caja no entra, afectando pagos
            operativos y obligaciones básicas.
          </p>
        </div>

        <div className={styles.step}>
          <h3>2. Limita el crecimiento</h3>
          <p>
            Sin flujo de caja, la empresa no puede invertir en expansión,
            personal o tecnología.
          </p>
        </div>

        <div className={styles.step}>
          <h3>3. Aumenta el endeudamiento</h3>
          <p>
            Muchas empresas recurren a créditos para cubrir huecos generados por
            clientes morosos.
          </p>
        </div>

        <div className={styles.step}>
          <h3>4. Genera inestabilidad financiera</h3>
          <p>
            La falta de ingresos constantes hace que la empresa pierda control
            financiero.
          </p>
        </div>
      </section>

      {/* EFECTOS OCULTOS */}
      <section>
        <h2>Efectos ocultos de la cartera vencida</h2>

        <ul>
          <li>Desorganización en la planificación financiera</li>
          <li>Pérdida de confianza de proveedores</li>
          <li>Retrasos en pagos a empleados</li>
          <li>Riesgo de cierre del negocio</li>
        </ul>

        <div className={styles.highlight}>
          💡 Muchas empresas no fracasan por ventas bajas, sino por mala gestión
          de cartera.
        </div>
      </section>

      {/* CAUSAS */}
      <section>
        <h2>¿Por qué se genera la cartera vencida?</h2>

        <ul>
          <li>Falta de políticas de crédito claras</li>
          <li>Clientes con mala cultura de pago</li>
          <li>Ausencia de seguimiento de cobro</li>
          <li>Procesos de cobranza improvisados</li>
        </ul>
      </section>

      {/* SOLUCIÓN */}
      <section>
        <h2>Cómo evitar que la cartera vencida te afecte</h2>

        <p>
          La clave no es solo cobrar, sino implementar un sistema de gestión de
          cartera estructurado.
        </p>

        <ul>
          <li>Seguimiento desde el día 1 de vencimiento</li>
          <li>Procesos de cobro prejurídico</li>
          <li>Escalamiento jurídico cuando sea necesario</li>
          <li>Políticas claras de crédito</li>
        </ul>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Evita que la cartera vencida afecte tu empresa</h2>

        <p>
          En Pravice ayudamos a empresas a recuperar su cartera y proteger su
          estabilidad financiera con estrategias legales efectivas.
        </p>

        <Link href="/contacto" className={styles.button}>
          Proteger mi empresa
        </Link>
      </section>
    </article>
  );
}
