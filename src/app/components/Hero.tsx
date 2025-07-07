"use client";
import React, { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Clients", value: 120 },
  { label: "Countries", value: 24 },
  { label: "Years Experience", value: 10 },
];

function useAutoCounter(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    let frame: number;
    function animate() {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return count;
}

export default function Hero() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseOver = () => {
    if (btnRef.current) btnRef.current.style.background = "#0F1F3F";
  };
  const handleMouseOut = () => {
    if (btnRef.current) btnRef.current.style.background = "#3B82F6";
  };

  const counters = [
    useAutoCounter(stats[0].value, 1200),
    useAutoCounter(stats[1].value, 1400),
    useAutoCounter(stats[2].value, 1600),
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 120,
        background: '#e0f2fe',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: 44, fontWeight: 700, color: '#111827', marginBottom: 18, letterSpacing: -1 }}>
        Simplifying Global Trade
      </h1>
      <p style={{ fontSize: 20, color: '#334155', maxWidth: 600, marginBottom: 32 }}>
        NASE connects businesses across borders with secure and profitable trading solutions.
      </p>
      <a
        ref={btnRef}
        href="#contact"
        style={{
          background: '#3B82F6',
          color: '#fff',
          padding: '0.75em 2em',
          borderRadius: 8,
          fontWeight: 600,
          fontSize: 18,
          boxShadow: '0 2px 8px rgba(59,130,246,0.10)',
          transition: 'background 0.2s, transform 0.2s',
          display: 'inline-block',
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Get Started
      </a>
      {/* Stats Cards */}
      <div style={{ display: 'flex', gap: 32, marginTop: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
        {stats.map((stat, i) => (
          <div key={stat.label} style={{ background: '#f0f9ff', borderRadius: 12, padding: '28px 36px', minWidth: 140, boxShadow: '0 2px 8px rgba(59,130,246,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 36, fontWeight: 700, color: '#2563EB', marginBottom: 6 }}>{counters[i]}</span>
            <span style={{ fontSize: 16, color: '#111827', fontWeight: 500 }}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 