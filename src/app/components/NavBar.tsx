"use client";

import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import { useState } from "react";

function handleClick() {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank",
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <nav className={styles.navbar}>
      {/* LOGO */}
      <div className={styles.left}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image
              src="/logo_pravice.png"
              alt="Pravice - Gestión de cartera en Cali"
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <ul className={styles.center}>
        <li>
          <Link href="/">Inicio</Link>
        </li>

        <li>
          <Link href="/#servicios">Servicios</Link>
        </li>

        {/* PROBLEMAS */}
        <li
          className={styles.dropdown}
          onMouseEnter={() => setDropdown("problemas")}
          onMouseLeave={() => setDropdown(null)}
        >
          <span>Problemas ▾</span>

          {dropdown === "problemas" && (
            <div className={styles.dropdownMenu}>
              <Link href="/Problemas/clientes-no-pagan-cali">
                Clientes no pagan
              </Link>
              <Link href="/Problemas/cartera-vencida-cali">
                Cartera vencida
              </Link>
              <Link href="/Problemas/cobrar-deuda-urgente-cali">
                Cobrar deuda urgente
              </Link>
            </div>
          )}
        </li>

        {/* SECTORES */}
        <li
          className={styles.dropdown}
          onMouseEnter={() => setDropdown("sectores")}
          onMouseLeave={() => setDropdown(null)}
        >
          <span>Sectores ▾</span>

          {dropdown === "sectores" && (
            <div className={styles.dropdownMenu}>
              <Link href="/Sectores/cobranza-pymes-cali">Pymes</Link>
              <Link href="/Sectores/cobranza-inmobiliarias-cali">
                Inmobiliarias
              </Link>
              <Link href="/Sectores/cobranza-clinicas-cali">Clínicas</Link>
            </div>
          )}
        </li>

        <li>
          <Link href="/Blog">Blog</Link>
        </li>

        <li>
          <Link href="/#contacto">Contacto</Link>
        </li>
      </ul>

      {/* CTA */}
      <div className={styles.right}>
        <button className={styles.cta} onClick={handleClick}>
          Asesoría inmediata
        </button>

        <button className={styles.menuButton} onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setOpen(false)}>
            Inicio
          </Link>

          <Link href="/#servicios" onClick={() => setOpen(false)}>
            Servicios
          </Link>

          <Link href="/Problemas/clientes-no-pagan-cali">
            Clientes no pagan
          </Link>

          <Link href="/Problemas/cartera-vencida-cali">Cartera vencida</Link>

          <Link href="/Problemas/cobrar-deuda-urgente-cali">Cobro urgente</Link>

          <Link href="/Sectores/cobranza-pymes-cali">Pymes</Link>

          <Link href="/Sectores/cobranza-inmobiliarias-cali">
            Inmobiliarias
          </Link>

          <Link href="/Blog">Blog</Link>

          <button onClick={handleClick}>Solicitar asesoría</button>
        </div>
      )}
    </nav>
  );
}
