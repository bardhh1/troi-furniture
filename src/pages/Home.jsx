import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChefHat, DoorOpen, Tv, BedDouble, ArrowRight, CheckCircle2,
  Clock, Star, Wrench, ShieldCheck, Palette, Truck
} from 'lucide-react';

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

const specialties = [
  { icon: ChefHat, label: 'Kuzhina' },
  { icon: DoorOpen, label: 'Garderoba' },
  { icon: Tv, label: 'Mobilie për TV' },
  { icon: BedDouble, label: 'Dhoma Gjumi' },
];

const processSteps = [
  { num: '01', title: 'Konsultimi', desc: 'Dëgjojmë nevojat dhe preferencat tuaja me vëmendje.' },
  { num: '02', title: 'Koncepti', desc: 'Dizajnerët tanë krijojnë koncepte të personalizuara.' },
  { num: '03', title: 'Krijimi', desc: 'Mjeshtrat tanë i japin jetë dizajneve me precizion.' },
  { num: '04', title: 'Dorëzimi', desc: 'Dorëzojmë dhe instalojmë mobiliet tuaja të reja.' },
];

const whyUs = [
  { icon: ShieldCheck, title: 'Cilësi Premium', desc: 'Standardet më të larta në çdo aspekt të prodhimit.' },
  { icon: Wrench,     title: 'Mjeshtëri Eksperte', desc: 'Vite përvojë në çdo pjesë që krijojnë duart tona.' },
  { icon: Palette,    title: 'Dizajne të Personalizuara', desc: 'Zgjidhje unike që përshtaten me stilin tuaj.' },
  { icon: Clock,      title: 'Dorëzim me Kohë', desc: 'Respektojmë afatet dhe kohën tuaj.' },
  { icon: Star,       title: 'Shërbim i Shkëlqyer', desc: 'Ekipi jonë i dedikuar për kënaqësinë tuaj.' },
  { icon: CheckCircle2, title: 'Garanci 5 Vjeçare', desc: 'Qëndrojmë pas produkteve tona me garanci solide.' },
];

export default function Home() {
  const sectionRef = useFadeUp();

  return (
    <main ref={sectionRef}>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/img/bg.jpg" alt="Luxury interior" />
        </div>
        <div className="container hero-content">
          <div className="hero-badge">
            <Star size={11} fill="currentColor" />
            Furniture &amp; Interior Design
          </div>
          <h1 className="hero-title fade-up">
            Elegancë e <span className="gold-text">Përjetshme</span> për Shtëpinë Tuaj
          </h1>
          <p className="hero-subtitle fade-up delay-1">
            Në Troi Furniture kombinojmë dizajnin modern me cilësinë e lartë. Çdo copë mobilie është krijuar me dashuri dhe precizion—për shtëpinë tuaj.
          </p>
          <div className="hero-actions fade-up delay-2">
            <Link to="/gallery" className="btn btn-gold">
              Shiko Punën Tonë <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/38348884220" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Na Kontaktoni
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="specialties">
        <div className="container">
          <p className="section-label fade-up">Çfarë Ofrojmë</p>
          <h2 className="section-title fade-up delay-1">Specialitetet Tona</h2>
          <div className="specialties-grid">
            {specialties.map(({ icon: Icon, label }, i) => (
              <div key={label} className={`specialty-card fade-up delay-${i + 1}`}>
                <div className="specialty-icon">
                  <Icon size={26} />
                </div>
                <p className="specialty-name">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap fade-up">
              <img src="/img/puna3.png" alt="Our workshop" />
              <img src="/img/kuzhina1.png" alt="Kitchen work" className="about-img-accent" />
            </div>
            <div className="about-text">
              <p className="section-label fade-up">Rreth Nesh</p>
              <h2 className="fade-up delay-1">
                Pasioni Ynë për <span className="gold-text">Mjeshtëri</span>
              </h2>
              <p className="fade-up delay-2">
                Në Troi Furniture, kombinojmë dizajnin modern me elegancën e përjetshme. Pasioni ynë për mjeshtëri dhe vëmendja ndaj detajeve siguron që çdo copë mobilie nuk është thjesht objekt—por vepër arti.
              </p>
              <p className="fade-up delay-3">
                Çdo projekt nis me konsultim të personalizuar dhe mbaron me instalimin e plotë, duke e bërë procesin sa të thjeshtë, aq edhe të kënaqshëm.
              </p>
              <div className="about-stats fade-up delay-4">
                <div className="stat-item">
                  <span className="stat-num">5+</span>
                  <span className="stat-label">Vite Përvojë</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">200+</span>
                  <span className="stat-label">Projekte të Kryera</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">5yr</span>
                  <span className="stat-label">Garanci</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="process">
        <div className="container">
          <p className="section-label fade-up">Si Punojmë</p>
          <h2 className="section-title fade-up delay-1">Procesi Ynë i Dizajnit</h2>
          <div className="process-steps">
            {processSteps.map(({ num, title, desc }, i) => (
              <div key={num} className={`process-step fade-up delay-${i + 1}`}>
                <div className="step-number">{num}</div>
                <p className="step-title">{title}</p>
                <p className="step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured">
        <div className="container">
          <p className="section-label fade-up">Produkt i Veçantë</p>
          <h2 className="section-title fade-up delay-1" style={{ marginBottom: '2.5rem' }}>
            Krijim i Fundit
          </h2>
          <div className="featured-card fade-up delay-2">
            <div className="featured-img">
              <img src="/img/rajana.jpg" alt="Featured bedroom" />
            </div>
            <div className="featured-body">
              <p className="section-label">Dhoma Gjumi</p>
              <h3>Dhomë Gjumi Moderne — Rajana</h3>
              <p>
                Transformoni hapësirën tuaj të pushimit me dhomën tonë moderne. Ky set i plotë përfshin krevatën elegante, dollapët funksionalë dhe aksesorët luksoze — kombinim i stilit bashkëkohor me komoditetin maksimal.
              </p>
              <Link to="/gallery?cat=bedrooms" className="btn btn-gold" style={{ alignSelf: 'flex-start' }}>
                Shiko Galerrinë <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <div className="container">
          <p className="section-label fade-up">Pse Ne?</p>
          <h2 className="section-title fade-up delay-1">Pse të Zgjidhni Troi Furniture</h2>
          <div className="why-grid">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className={`why-card fade-up delay-${(i % 3) + 1}`}>
                <div className="why-icon">
                  <Icon size={20} />
                </div>
                <p className="why-title">{title}</p>
                <p className="why-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner fade-up">
            <h2>Transformoni Hapësirën Tuaj <span className="gold-text">Sot</span></h2>
            <p>
              Gati për të përmirësuar shtëpinë tuaj? Na kontaktoni për një konsultim falas dhe të personalizuar.
            </p>
            <a
              href="https://wa.me/38348884220"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              Filloni Tani <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
