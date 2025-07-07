import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Services Section */}
      <section id="services" style={{ padding: '80px 0', background: 'var(--color-white)' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700 }}>What We Offer</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', maxWidth: 1100, margin: '0 auto' }}>
          <div className="glass" style={{ flex: '1 1 220px', minWidth: 220, maxWidth: 260, padding: 32, margin: 8, textAlign: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🌍</div>
            <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Global Sourcing</h3>
            <p style={{ color: 'var(--color-text)' }}>We help you find reliable international suppliers.</p>
          </div>
          <div className="glass" style={{ flex: '1 1 220px', minWidth: 220, maxWidth: 260, padding: 32, margin: 8, textAlign: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🚢</div>
            <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Logistics & Shipping</h3>
            <p style={{ color: 'var(--color-text)' }}>Secure, on-time global delivery.</p>
          </div>
          <div className="glass" style={{ flex: '1 1 220px', minWidth: 220, maxWidth: 260, padding: 32, margin: 8, textAlign: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>📄</div>
            <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Customs Clearance</h3>
            <p style={{ color: 'var(--color-text)' }}>Avoid legal and documentation headaches.</p>
          </div>
          <div className="glass" style={{ flex: '1 1 220px', minWidth: 220, maxWidth: 260, padding: 32, margin: 8, textAlign: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🤝</div>
            <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Business Matching</h3>
            <p style={{ color: 'var(--color-text)' }}>We connect buyers with the right sellers.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '80px 0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ flex: '1 1 350px', minWidth: 300, marginRight: 40 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>About Us</h2>
          <p style={{ marginBottom: 16 }}>
            NASE is dedicated to bridging businesses worldwide, making international trade simple, secure, and profitable. Our mission is to empower companies to expand globally with confidence and ease.
          </p>
          <p>
            With over 10 years of experience, we have built a reputation for reliability and excellence, serving clients in 20+ countries across 4 continents.
          </p>
        </div>
        <div style={{ flex: '1 1 250px', minWidth: 250, display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <div className="glass" style={{ padding: 16, textAlign: 'center', minWidth: 110 }}>
            <img src="/window.svg" alt="Team Member" style={{ width: 48, height: 48, borderRadius: '50%', marginBottom: 8 }} />
            <div style={{ fontWeight: 600 }}>Alex Kim</div>
            <div style={{ color: 'var(--color-text)', fontSize: 14 }}>Founder & CEO</div>
          </div>
          <div className="glass" style={{ padding: 16, textAlign: 'center', minWidth: 110 }}>
            <img src="/globe.svg" alt="Team Member" style={{ width: 48, height: 48, borderRadius: '50%', marginBottom: 8 }} />
            <div style={{ fontWeight: 600 }}>Maria Lopez</div>
            <div style={{ color: 'var(--color-text)', fontSize: 14 }}>Head of Operations</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '80px 0', background: 'var(--color-white)', display: 'flex', justifyContent: 'center' }}>
        <form className="glass" style={{ padding: 32, borderRadius: 18, minWidth: 320, maxWidth: 400, width: '100%', boxShadow: '0 4px 24px rgba(31,38,135,0.08)' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, textAlign: 'center' }}>Get in Touch</h2>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: 4, fontWeight: 500 }}>Full Name</label>
            <input id="name" name="name" type="text" required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb', marginBottom: 8 }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: 4, fontWeight: 500 }}>Email</label>
            <input id="email" name="email" type="email" required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb', marginBottom: 8 }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: 4, fontWeight: 500 }}>Message</label>
            <textarea id="message" name="message" rows={4} required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e5e7eb' }} />
          </div>
          <button type="submit" style={{ width: '100%', background: 'var(--color-accent)', color: '#fff', padding: '0.75em', borderRadius: 8, fontWeight: 600, fontSize: 18, border: 'none', cursor: 'pointer', marginBottom: 12 }}>
            Submit
          </button>
          <div style={{ textAlign: 'center', color: 'var(--color-text)', fontSize: 14 }}>
            <span role="img" aria-label="phone">📞</span> +1 234 567 8901 &nbsp; | &nbsp;
            <span role="img" aria-label="whatsapp">💬</span> WhatsApp
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--color-primary)', color: '#fff', padding: '40px 0 0 0', textAlign: 'left' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'space-between', padding: '0 24px' }}>
          {/* Company Info */}
          <div style={{ flex: '1 1 260px', minWidth: 220, marginBottom: 32 }}>
            <div style={{ fontWeight: 700, fontSize: 22, letterSpacing: 2, marginBottom: 8 }}>GlobalTrade</div>
            <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginBottom: 12 }}>
              Your trusted partner in international trade. We connect businesses worldwide through reliable import and export solutions.
            </div>
          </div>
          {/* Quick Links */}
          <div style={{ flex: '1 1 160px', minWidth: 140, marginBottom: 32 }}>
            <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 10 }}>Quick Links</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2 }}>
              <li><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Services</a></li>
              <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
              <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </div>
          {/* Services Links */}
          <div style={{ flex: '1 1 180px', minWidth: 140, marginBottom: 32 }}>
            <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 10 }}>Services</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2 }}>
              <li><a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Import Services</a></li>
              <li><a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Export Services</a></li>
              <li><a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Trade Compliance</a></li>
              <li><a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Logistics</a></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: 24, padding: '18px 0', textAlign: 'center', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
          © 2024 GlobalTrade. All rights reserved. |
          <a href="#" style={{ color: '#fff', margin: '0 8px' }}>Privacy Policy</a> |
          <a href="#" style={{ color: '#fff', margin: '0 8px' }}>Terms of Service</a>
        </div>
      </footer>
    </main>
  );
}
