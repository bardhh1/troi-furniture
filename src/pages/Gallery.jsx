import { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { X, ZoomIn } from 'lucide-react';

/* ── CATEGORY CONFIG ─────────────────────────────────── */
const CATEGORIES = [
  { id: 'all',       label: 'Të Gjitha' },
  { id: 'kitchens',  label: 'Kuzhina' },
  { id: 'bedrooms',  label: 'Dhoma Gjumi' },
  { id: 'wardrobes', label: 'Garderoba' },
  { id: 'tvstands',  label: 'TV Stands' },
  { id: 'misc',      label: 'Të Tjera' },
];

/* ── PROJECT IMAGES  ─────────────────────────────────── */
/*
  Add real images here as the project grows!
  src  → path relative to /public  (e.g. /img/kuzhina1.png)
  cat  → must match a CATEGORIES id
  label → short description shown on hover
*/
const ITEMS = [
  { id: 1,  src: '/img/kuzhina1.png', cat: 'kitchens',  label: 'Kuzhinë Moderne' },
  { id: 2,  src: '/img/rajana.jpg',   cat: 'bedrooms',  label: 'Dhomë Gjumi Rajana' },
  { id: 3,  src: '/img/rajana2.jpg',  cat: 'bedrooms',  label: 'Dhomë Gjumi Rajana II' },
  { id: 4,  src: '/img/puna3.png',    cat: 'misc',      label: 'Projekt Special' },
  { id: 5,  src: '/img/omeri.jpg',    cat: 'wardrobes', label: 'Garderobë e Personalizuar' },
  { id: 6,  src: '/img/culi3.jpg',    cat: 'misc',      label: 'Projekt i Posaçëm' },
  { id: 7,  src: '/img/komoda2.jpg',  cat: 'tvstands',  label: 'TV Stand & Komoda' },
  { id: 8,  src: '/img/bg.jpg',       cat: 'misc',      label: 'Interior Design' },
];

/* ── LIGHTBOX ─────────────────────────────────────────── */
function Lightbox({ item, onClose }) {
  const handleKey = useCallback((e) => { if (e.key === 'Escape') onClose(); }, [onClose]);
  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div className="lightbox" onClick={onClose}>
      <img
        className="lightbox-img"
        src={item.src}
        alt={item.label}
        onClick={(e) => e.stopPropagation()}
      />
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <X size={18} />
      </button>
    </div>
  );
}

/* ── GALLERY ITEM ─────────────────────────────────────── */
function GalleryItem({ item, onClick }) {
  return (
    <div className="gallery-item" onClick={() => onClick(item)}>
      <img src={item.src} alt={item.label} loading="lazy" />
      <div className="gallery-overlay">
        <span className="gallery-item-label">{item.label}</span>
        <ZoomIn size={18} color="#fff" style={{ marginLeft: 'auto' }} />
      </div>
    </div>
  );
}

/* ── MAIN GALLERY PAGE ────────────────────────────────── */
export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get('cat') || 'all';

  // Make sure catParam is a valid category
  const activeCat = CATEGORIES.find((c) => c.id === catParam) ? catParam : 'all';

  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCat === 'all'
    ? ITEMS
    : ITEMS.filter((i) => i.cat === activeCat);

  function setCategory(id) {
    if (id === 'all') setSearchParams({});
    else setSearchParams({ cat: id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Scroll-in fade for grid items
  const gridRef = useRef(null);
  useEffect(() => {
    const items = gridRef.current?.querySelectorAll('.gallery-item') || [];
    items.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  }, [filtered]);

  return (
    <>
      {/* Hero */}
      <div className="gallery-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Puna Jonë</p>
          <h1>Galeria e Projekteve</h1>
          <p>
            Zbuloni koleksionin tonë të projekteve — nga kuzhinat moderne deri te dhoma gjumi elegante,
            çdo mobilje reflekton pasionin tonë për dizajn cilësor.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="gallery-filter">
        <div className="container">
          <div className="filter-tabs">
            {CATEGORIES.map(({ id, label }) => (
              <button
                key={id}
                className={`filter-tab ${activeCat === id ? 'active' : ''}`}
                onClick={() => setCategory(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="gallery-empty">
              <p>Nuk ka projekte në këtë kategori aktualisht.</p>
            </div>
          ) : (
            <div className="gallery-grid" ref={gridRef}>
              {filtered.map((item) => (
                <GalleryItem key={item.id} item={item} onClick={setLightbox} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}
    </>
  );
}
