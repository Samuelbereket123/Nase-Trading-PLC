"use client";
import React from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav
      className="glass"
      style={{
        position: "fixed",
        top: 24,
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(90vw, 1100px)",
        zIndex: 50,
        padding: "0.75rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 8px 32px 0 rgba(59,130,246,0.10)",
        backdropFilter: "blur(12px)",
        borderRadius: "18px",
        background: "rgba(224,242,254,0.85)",
        border: "1px solid #3B82F6",
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 24, letterSpacing: 2, color: "#111827", fontFamily: "Poppins, Montserrat, Arial, sans-serif", flex: '0 0 auto' }}>
        NASE
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: "2rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontWeight: 500,
                fontSize: 16,
                color: "#2563EB",
                transition: "color 0.2s",
                position: "relative",
              }}
              onMouseOver={e => (e.currentTarget.style.color = '#0F1F3F')}
              onMouseOut={e => (e.currentTarget.style.color = '#2563EB')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
