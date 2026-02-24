import { useEffect, useRef } from 'react';
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

/* Intersection Observer hook for scroll animations */
function useFadeUp(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold }
    );
    const items = el.querySelectorAll('.fade-up');
    items.forEach((i) => observer.observe(i));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    value: '+383 48 884 220',
    href: 'tel:+38348884220',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+383 48 884 220',
    href: 'https://wa.me/38348884220',
  },
  {
    icon: MapPin,
    title: 'Adresa',
    value: 'Agim Ramadani, Ferizaj, Kosovë',
    href: null,
  },
  {
    icon: Clock,
    title: 'Orari i Punës',
    value: 'E Hënë – E Shtunë: 08:00 – 18:00',
    href: null,
  },
];

export default function Contact() {
  const sectionRef = useFadeUp();

  return (
    <main ref={sectionRef}>
      {/* HERO */}
      <div className="gallery-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Na Gjeni</p>
          <h1>Na <span className="gold-text">Kontaktoni</span></h1>
          <p>
            Keni një projekt në mendje? Na kontaktoni sot për një konsultim falas dhe të personalizuar.
            Jemi këtu për t'ju ndihmuar të realizoni shtëpinë tuaj të ëndrrave.
          </p>
        </div>
      </div>

      {/* CONTACT CARDS + CTA */}
      <section style={{ padding: 'var(--section-pd) 0', background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            marginBottom: '5rem',
          }}>
            {contactInfo.map(({ icon: Icon, title, value, href }, i) => (
              <div
                key={title}
                className={`why-card fade-up delay-${i + 1}`}
                style={{ cursor: href ? 'pointer' : 'default' }}
                onClick={() => href && window.open(href, '_blank')}
              >
                <div className="why-icon">
                  <Icon size={20} />
                </div>
                <p className="why-title">{title}</p>
                <p className="why-desc" style={{ color: href ? 'var(--color-gold-light)' : undefined }}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA block */}
          <div className="cta-inner fade-up" style={{ marginBottom: '5rem' }}>
            <p className="section-label" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
              Mënyra Më e Shpejtë
            </p>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: '1rem',
              position: 'relative',
            }}>
              Na Shkruani në <span className="gold-text">WhatsApp</span>
            </h2>
            <p style={{
              color: 'var(--color-text-muted)',
              fontSize: '1.05rem',
              maxWidth: '50ch',
              margin: '0 auto 2.5rem',
              position: 'relative',
            }}>
              Mesazhi juaj do të përgjigjet sa më shpejt të jetë e mundur. Përshkruani projektin tuaj dhe ne do t'ju japim një ofertë pa pagesë.
            </p>
            <a
              href="https://wa.me/38348884220"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              Hap WhatsApp <ArrowRight size={16} />
            </a>
          </div>

          {/* Process reminder */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label fade-up" style={{ justifyContent: 'center' }}>Si Funksionon</p>
            <h2 className="section-title fade-up delay-1" style={{ marginBottom: '3rem' }}>
              Nga Kontakti deri te <span className="gold-text">Produkti Final</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
          }}>
            {[
              { num: '01', title: 'Na Kontaktoni', desc: 'Dërgoni mesazh ose telefononi — konsultimi është plotësisht falas.' },
              { num: '02', title: 'Diskutojmë Projektin', desc: 'Bisedojmë për nevojat, stilin dhe buxhetin tuaj.' },
              { num: '03', title: 'Oferta & Dizajni', desc: 'Ju prezantojmë ofertën dhe konceptin e personalizuar.' },
              { num: '04', title: 'Prodhimi & Dorëzimi', desc: 'Krijojmë dhe instalojmë mobiliet tuaja me profesionalizëm.' },
            ].map(({ num, title, desc }, i) => (
              <div key={num} className={`process-step fade-up delay-${i + 1}`}>
                <div className="step-number">{num}</div>
                <p className="step-title">{title}</p>
                <p className="step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
