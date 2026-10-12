import { useState } from 'react'

// ─── Icons ───────────────────────────────────────────────────────────────────

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="19" y2="6" />
      <line x1="3" y1="11" x2="19" y2="11" />
      <line x1="3" y1="16" x2="19" y2="16" />
    </svg>
  )
}

function IconX() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="4" x2="18" y2="18" />
      <line x1="18" y1="4" x2="4" y2="18" />
    </svg>
  )
}

function Icon360() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="11" stroke="#2563eb" strokeWidth="2"/>
      <ellipse cx="14" cy="14" rx="6" ry="11" stroke="#2563eb" strokeWidth="2"/>
      <line x1="3" y1="14" x2="25" y2="14" stroke="#2563eb" strokeWidth="2"/>
      <path d="M8 7.5 Q14 5 20 7.5" stroke="#2563eb" strokeWidth="1.5" fill="none"/>
    </svg>
  )
}

function IconInteractive() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="22" height="16" rx="3" stroke="#2563eb" strokeWidth="2"/>
      <circle cx="14" cy="14" r="3" fill="#2563eb"/>
      <line x1="14" y1="11" x2="14" y2="3" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function IconAssessment() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="3" width="18" height="22" rx="3" stroke="#2563eb" strokeWidth="2"/>
      <line x1="9" y1="10" x2="19" y2="10" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
      <line x1="9" y1="14" x2="19" y2="14" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
      <line x1="9" y1="18" x2="15" y2="18" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function SolutionIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    manual: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3v14M9 7l4-4 4 4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="5" y="19" width="16" height="4" rx="2" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
      </svg>
    ),
    height: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="20" width="20" height="3" rx="1.5" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
        <line x1="13" y1="3" x2="13" y2="19" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 9l4-6 4 6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    hazard: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3L3 22h20L13 3z" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" fill="#dbeafe"/>
        <line x1="13" y1="11" x2="13" y2="16" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="13" cy="19" r="1" fill="#2563eb"/>
      </svg>
    ),
    unsafe: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="10" stroke="#2563eb" strokeWidth="2" fill="#dbeafe"/>
        <line x1="8" y1="8" x2="18" y2="18" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    whys: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="10" r="7" stroke="#2563eb" strokeWidth="2" fill="#dbeafe"/>
        <path d="M10.5 9a2.5 2.5 0 014.9.8c0 2-2.5 2.5-2.5 4.5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="13" cy="21" r="1.5" fill="#2563eb"/>
      </svg>
    ),
    cyber: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="5" y="4" width="16" height="12" rx="2" stroke="#2563eb" strokeWidth="2" fill="#dbeafe"/>
        <path d="M9 16v3a4 4 0 008 0v-3" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="13" cy="10" r="2" fill="#2563eb"/>
      </svg>
    ),
  }
  return icons[type] || icons.hazard
}

// ─── Data ────────────────────────────────────────────────────────────────────

const navLinks = ['Home', 'About', 'Solutions', 'Training', 'Contact']

const features = [
  { icon: <Icon360 />, title: '360° Environments', desc: 'Explore realistic workplace scenarios captured in full 360° detail.' },
  { icon: <IconInteractive />, title: 'Interactive Learning', desc: 'Identify hazards, complete challenges, and make real decisions.' },
  { icon: <IconAssessment />, title: 'Knowledge Assessment', desc: 'Test understanding, receive results, and track performance over time.' },
]

const solutions = [
  { key: 'manual', title: 'Manual Handling', desc: 'Learn safe lifting, carrying and handling techniques in realistic environments.' },
  { key: 'height', title: 'Working at Height', desc: 'Recognise risks and apply controls when working at elevation.' },
  { key: 'hazard', title: 'Hazard Perception', desc: 'Spot workplace hazards before they lead to incidents or injury.' },
  { key: 'unsafe', title: 'Unsafe Acts', desc: 'Identify and challenge unsafe behaviours across workplace scenarios.' },
  { key: 'whys', title: '5 Whys', desc: 'Investigate root causes of incidents using the 5 Whys methodology.' },
  { key: 'cyber', title: 'Cyber Awareness', desc: 'Understand digital threats and safe online practices in the workplace.' },
]

const steps = [
  { num: '01', title: 'Explore', desc: 'Enter the 360° environment and navigate the workplace scenario.' },
  { num: '02', title: 'Identify', desc: 'Find hazards, unsafe situations and potential risks in the scene.' },
  { num: '03', title: 'Interact', desc: 'Complete challenges, answer questions and make key decisions.' },
  { num: '04', title: 'Learn', desc: 'Receive your results, review outcomes and improve your knowledge.' },
]

const benefits = [
  { title: 'Immersive', desc: 'Realistic 360° environments that place learners directly in the situation.' },
  { title: 'Interactive', desc: 'Active learning through decisions and challenges — not passive viewing.' },
  { title: 'Engaging', desc: 'Scenario-based learning that keeps learners focused and involved.' },
  { title: 'Measurable', desc: 'Built-in knowledge assessment and performance results for every learner.' },
]

// ─── Components ───────────────────────────────────────────────────────────────

function Navbar({ onDemo }: { onDemo: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 22, color: '#1e3a8a', letterSpacing: '-0.03em' }}>
            N<span style={{ color: '#2563eb' }}>E</span>xus
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500, color: '#334155', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#2563eb')}
              onMouseLeave={e => (e.currentTarget.style.color = '#334155')}
            >
              {link}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={onDemo}
            style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 14, padding: '10px 20px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1d4ed8')}
            onMouseLeave={e => (e.currentTarget.style.background = '#2563eb')}
            className="desktop-nav"
          >
            Request a Demo
          </button>
          <button
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#334155', padding: 4, display: 'none' }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {open ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '16px 24px 24px' }} className="mobile-only">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '10px 0', fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 500, color: '#334155', textDecoration: 'none', borderBottom: '1px solid #f1f5f9' }}
            >
              {link}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); onDemo() }}
            style={{ marginTop: 16, width: '100%', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 15, padding: '12px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}
          >
            Request a Demo
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .mobile-only { display: none; }
        @media (max-width: 768px) {
          .mobile-only { display: block; }
        }
      `}</style>
    </nav>
  )
}

function Hero({ onDemo }: { onDemo: () => void }) {
  return (
    <section id="home" style={{ background: 'linear-gradient(160deg, #eff6ff 0%, #ffffff 55%, #dbeafe 100%)', padding: '80px 24px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="hero-grid">
          {/* Text */}
          <div>
            <span style={{ display: 'inline-block', background: '#dbeafe', color: '#1d4ed8', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100, marginBottom: 24 }}>
              360° Safety Training
            </span>
            <h1 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1, color: '#0f172a', letterSpacing: '-0.03em', marginBottom: 24 }}>
              Transform Safety Training with 360° Interactive Experiences
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.7, color: '#475569', marginBottom: 40, maxWidth: 480 }}>
              NExus creates engaging 360° 3D environments that help organisations deliver interactive workplace safety training.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button
                onClick={onDemo}
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 15, padding: '14px 28px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 10, cursor: 'pointer', boxShadow: '0 4px 14px rgba(37,99,235,0.35)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Request a Demo
              </button>
              <a
                href="#solutions"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 15, padding: '14px 28px', background: 'transparent', color: '#2563eb', border: '2px solid #2563eb', borderRadius: 10, cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#eff6ff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
              >
                Explore Solutions
              </a>
            </div>

            {/* Trust bar */}
            <div style={{ marginTop: 48, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {[['50+', 'Training Modules'], ['10k+', 'Learners Trained'], ['98%', 'Completion Rate']].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 26, color: '#1d4ed8', lineHeight: 1 }}>{val}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#64748b', marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div style={{ position: 'relative', paddingBottom: 40 }}>
            {/* Main image */}
            <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 60px rgba(30,58,138,0.18)', position: 'relative', background: '#1e3a8a' }}>
              <img
                src="https://images.unsplash.com/photo-1586528116022-aeda1613c63d?w=700&h=460&fit=crop&auto=format"
                alt="Workers navigating a warehouse environment in a 360° training scenario"
                style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block', opacity: 0.88 }}
              />
              {/* Overlay UI elements */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,30,80,0.5) 0%, transparent 60%)' }} />

              {/* Hotspot markers */}
              <div style={{ position: 'absolute', top: '30%', left: '25%' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(37,99,235,0.9)', border: '3px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 6px rgba(37,99,235,0.25)', cursor: 'pointer' }}>
                  <span style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>!</span>
                </div>
                <div style={{ position: 'absolute', top: 44, left: '50%', transform: 'translateX(-50%)', background: '#fff', borderRadius: 6, padding: '4px 10px', fontSize: 11, fontWeight: 600, color: '#1e3a8a', whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                  Hazard Detected
                </div>
              </div>

              <div style={{ position: 'absolute', top: '52%', right: '22%' }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(34,197,94,0.9)', border: '3px solid #fff', boxShadow: '0 0 0 5px rgba(34,197,94,0.2)' }} />
              </div>

              {/* Bottom bar */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, color: '#fff', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  360° Warehouse Environment
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.15)', padding: '3px 10px', borderRadius: 100 }}>
                  Interactive Mode
                </span>
              </div>
            </div>

            {/* Floating card */}
            <div style={{ position: 'absolute', bottom: 0, left: -24, background: '#fff', borderRadius: 12, padding: '14px 18px', boxShadow: '0 8px 32px rgba(30,58,138,0.14)', border: '1px solid #e2e8f0', minWidth: 180 }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Session Progress</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 20, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>3 / 8 Hazards</div>
              <div style={{ height: 6, background: '#e2e8f0', borderRadius: 3 }}>
                <div style={{ height: '100%', width: '37.5%', background: '#2563eb', borderRadius: 3 }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function About() {
  return (
    <section id="about" style={{ padding: '96px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ display: 'inline-block', background: '#dbeafe', color: '#1d4ed8', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100, marginBottom: 20 }}>
            About NExus
          </span>
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 42px)', color: '#0f172a', letterSpacing: '-0.025em', marginBottom: 20 }}>
            Making Safety Training More Interactive
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.7, color: '#475569', maxWidth: 620, margin: '0 auto' }}>
            NExus combines 360° environments, interactive scenarios, hands-on challenges, and knowledge assessment to make workplace safety learning genuinely engaging — moving people from passive observers to active participants.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }} className="three-col">
          {features.map(f => (
            <div
              key={f.title}
              style={{ background: '#f8faff', border: '1px solid #e2e8f0', borderRadius: 14, padding: '36px 32px', transition: 'box-shadow 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.boxShadow = '0 8px 32px rgba(30,58,138,0.1)'; el.style.borderColor = '#bfdbfe' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.boxShadow = 'none'; el.style.borderColor = '#e2e8f0' }}
            >
              <div style={{ marginBottom: 20 }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 18, color: '#0f172a', marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.65, color: '#64748b' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .three-col { grid-template-columns: 1fr !important; } }
        @media (max-width: 900px) and (min-width: 769px) { .three-col { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  )
}

function Solutions() {
  return (
    <section id="solutions" style={{ padding: '96px 24px', background: '#f8faff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ display: 'inline-block', background: '#dbeafe', color: '#1d4ed8', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100, marginBottom: 20 }}>
            Solutions
          </span>
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 42px)', color: '#0f172a', letterSpacing: '-0.025em' }}>
            Interactive Training Solutions
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="three-col">
          {solutions.map(s => (
            <div
              key={s.key}
              style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: '30px 28px', transition: 'box-shadow 0.2s, transform 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.boxShadow = '0 10px 36px rgba(30,58,138,0.12)'; el.style.transform = 'translateY(-2px)'; el.style.borderColor = '#bfdbfe' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)'; el.style.borderColor = '#e2e8f0' }}
            >
              <div style={{ width: 52, height: 52, background: '#eff6ff', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <SolutionIcon type={s.key} />
              </div>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 17, color: '#0f172a', marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.65, color: '#64748b', marginBottom: 20 }}>{s.desc}</p>
              <a
                href="#contact"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600, color: '#2563eb', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4, transition: 'gap 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.gap = '8px')}
                onMouseLeave={e => (e.currentTarget.style.gap = '4px')}
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="training" style={{ padding: '96px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ display: 'inline-block', background: '#dbeafe', color: '#1d4ed8', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100, marginBottom: 20 }}>
            How It Works
          </span>
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 42px)', color: '#0f172a', letterSpacing: '-0.025em' }}>
            From Exploration to Understanding
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }} className="four-col-steps">
          {steps.map((step, i) => (
            <div key={step.num} style={{ position: 'relative', padding: '0 20px', textAlign: 'center' }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div style={{ position: 'absolute', top: 36, left: 'calc(50% + 36px)', right: '-50%', height: 2, background: 'linear-gradient(to right, #bfdbfe, #dbeafe)', zIndex: 0 }} className="step-connector" />
              )}
              <div style={{ position: 'relative', zIndex: 1, marginBottom: 24 }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 20px rgba(37,99,235,0.3)' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff' }}>{step.num}</span>
                </div>
              </div>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 18, color: '#0f172a', marginBottom: 10 }}>{step.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.65, color: '#64748b' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .four-col-steps { grid-template-columns: 1fr 1fr !important; }
          .step-connector { display: none; }
        }
        @media (max-width: 480px) {
          .four-col-steps { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function WhyNExus() {
  return (
    <section style={{ padding: '96px 24px', background: 'linear-gradient(160deg, #eff6ff 0%, #dbeafe 100%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="two-col">
          {/* Image */}
          <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 16px 48px rgba(30,58,138,0.16)', background: '#1e3a8a' }}>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=640&h=480&fit=crop&auto=format"
              alt="Team receiving safety training presentation"
              style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Content */}
          <div>
            <span style={{ display: 'inline-block', background: '#fff', color: '#1d4ed8', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100, marginBottom: 20 }}>
              Why NExus
            </span>
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#0f172a', letterSpacing: '-0.025em', marginBottom: 40 }}>
              Built for Real Learning Outcomes
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
              {benefits.map(b => (
                <div key={b.title} style={{ background: '#fff', borderRadius: 12, padding: '22px 20px', boxShadow: '0 2px 12px rgba(30,58,138,0.08)', border: '1px solid rgba(37,99,235,0.1)' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2563eb', marginBottom: 12 }} />
                  <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 16, color: '#0f172a', marginBottom: 6 }}>{b.title}</h4>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13.5, lineHeight: 1.6, color: '#64748b' }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .two-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

function CTA({ onDemo }: { onDemo: () => void }) {
  return (
    <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 42px)', color: '#fff', letterSpacing: '-0.025em', marginBottom: 18 }}>
          See NExus in Action
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,0.8)', marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}>
          Discover how immersive 360° training can transform workplace safety learning across your organisation.
        </p>
        <button
          onClick={onDemo}
          style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 16, padding: '16px 36px', background: '#fff', color: '#1d4ed8', border: 'none', borderRadius: 10, cursor: 'pointer', boxShadow: '0 6px 24px rgba(0,0,0,0.2)', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.25)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.2)' }}
        >
          Request a Demo
        </button>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    fontFamily: 'Inter, sans-serif',
    fontSize: 15,
    padding: '12px 16px',
    border: '1.5px solid #e2e8f0',
    borderRadius: 8,
    background: '#fff',
    color: '#0f172a',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box' as const,
  }

  return (
    <section id="contact" style={{ padding: '96px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="two-col">
        {/* Left */}
        <div>
          <span style={{ display: 'inline-block', background: '#dbeafe', color: '#1d4ed8', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100, marginBottom: 20 }}>
            Get in Touch
          </span>
          <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(26px, 3.5vw, 38px)', color: '#0f172a', letterSpacing: '-0.025em', marginBottom: 20 }}>
            Request a Demo
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.7, color: '#475569', marginBottom: 40 }}>
            Fill in your details and a member of the NExus team will be in touch to arrange a personalised demonstration of our 360° training solutions.
          </p>

          {/* Info cards */}
          {[
            ['Response Time', 'We aim to respond within one working day.'],
            ['Tailored Demos', 'We customise every demo to your industry and needs.'],
            ['No Commitment', 'A demo is completely free and without obligation.'],
          ].map(([title, desc]) => (
            <div key={title} style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#2563eb', marginTop: 5, flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 15, color: '#0f172a', marginBottom: 3 }}>{title}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#64748b' }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{ background: '#f8faff', border: '1px solid #e2e8f0', borderRadius: 16, padding: '40px 36px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: 64, height: 64, background: '#dbeafe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 28 }}>✓</div>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 22, color: '#0f172a', marginBottom: 12 }}>Thank you!</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#64748b', lineHeight: 1.6 }}>
                Your demo request has been received. A member of the NExus team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-two-col">
                <div>
                  <label style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = '#2563eb')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#e2e8f0')}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Company Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Acme Ltd"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = '#2563eb')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#e2e8f0')}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Email Address *</label>
                <input
                  required
                  type="email"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = '#2563eb')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#e2e8f0')}
                />
              </div>

              <div>
                <label style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+44 7700 900000"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = '#2563eb')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#e2e8f0')}
                />
              </div>

              <div>
                <label style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your training needs..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#2563eb')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#e2e8f0')}
                />
              </div>

              <button
                type="submit"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 15, padding: '14px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 10, cursor: 'pointer', boxShadow: '0 4px 14px rgba(37,99,235,0.3)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#2563eb' }}
              >
                Request Demo →
              </button>
            </form>
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .two-col { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (max-width: 480px) { .form-two-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ background: '#0f172a', padding: '56px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 48, flexWrap: 'wrap', gap: 32 }}>
          <div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 24, color: '#fff', letterSpacing: '-0.03em', marginBottom: 10 }}>
              N<span style={{ color: '#60a5fa' }}>E</span>xus
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#94a3b8', lineHeight: 1.6, maxWidth: 260 }}>
              Immersive Learning. Safer Workplaces.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1e293b', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#64748b' }}>
            © 2026 NExus. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#64748b' }}>
            Interactive 360° Workplace Safety Training
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar onDemo={scrollToContact} />
      <Hero onDemo={scrollToContact} />
      <About />
      <Solutions />
      <HowItWorks />
      <WhyNExus />
      <CTA onDemo={scrollToContact} />
      <Contact />
      <Footer />
    </div>
  )
}
