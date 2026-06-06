// src/pages/Home.jsx

export default function Home({ setPage, resetBooking }) {

  const services = [
    { icon: '🦷', name: 'Teeth Cleaning',  desc: 'Professional plaque & tartar removal for a healthier mouth.',  price: 'From $120', grad: 'linear-gradient(135deg, #E6F1FB 0%, #B5D4F4 100%)',
      preSelect: { icon: '🦷', name: 'Teeth Cleaning', desc: 'Professional plaque & tartar removal · 45 min', price: '$120' }, flow: 'booking' },
    { icon: '✨', name: 'Teeth Whitening', desc: 'Advanced whitening for a brighter, more confident smile.',       price: 'From $99',  grad: 'linear-gradient(135deg, #E6F7F6 0%, #7ED6CF 100%)',
      preSelect: { icon: '✨', name: 'Wedding Whitening Package', desc: 'Up to 10 shades whiter · 60 min', price: '$299' }, flow: 'booking' },
    { icon: '🔬', name: 'Root Canal',      desc: 'Gentle, effective treatment of infected tooth pulp.',           price: 'From $650', grad: 'linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)',
      preSelect: null, flow: 'services' },
    { icon: '📋', name: 'General Checkup', desc: 'Routine exam and X-rays to keep your oral health on track.',    price: 'From $80',  grad: 'linear-gradient(135deg, #ccfbf1 0%, #5eead4 100%)',
      preSelect: { icon: '📋', name: 'General Checkup', desc: 'Routine exam and X-rays · 30 min', price: '$80' }, flow: 'booking' },
  ];

  const whyUs = [
    { icon: '💬', color: '#185FA5', bg: '#E6F1FB', title: 'Transparent Pricing', desc: 'No hidden fees. You always know the cost before any procedure begins.' },
    { icon: '🤝', color: '#0FA89A', bg: '#E6F7F6', title: 'Gentle Care',         desc: 'We take our time with every patient, especially those with dental anxiety.' },
    { icon: '📅', color: '#185FA5', bg: '#E6F1FB', title: 'Easy Online Booking', desc: 'Book your appointment in under 2 minutes, any time of day.' },
    { icon: '👨‍👩‍👧', color: '#0FA89A', bg: '#E6F7F6', title: 'All Ages Welcome',  desc: 'From toddlers to seniors, we care for every member of your family.' },
  ];

  const testimonials = [
    {
      initials: 'SM', color: '#185FA5', bg: '#E6F1FB',
      name: 'Sarah M.', location: 'Ottawa, ON', stars: 5,
      quote: 'I was terrified of dentists for years. Dr. Patel was so patient and explained everything before touching anything. I actually look forward to my checkups now.',
      service: 'General Checkup',
    },
    {
      initials: 'JK', color: '#0FA89A', bg: '#E6F7F6',
      name: 'James K.', location: 'Kanata, ON', stars: 5,
      quote: 'Had a root canal here after being told I needed one elsewhere. Dr. Reid walked me through every step. Completely painless. I wish I had not waited so long.',
      service: 'Root Canal',
    },
    {
      initials: 'PR', color: '#185FA5', bg: '#E6F1FB',
      name: 'Priya R.', location: 'Nepean, ON', stars: 5,
      quote: 'Booked the wedding whitening package two weeks before my wedding. Results were incredible. The online booking was so easy — done in under 2 minutes.',
      service: 'Teeth Whitening',
    },
  ];

  function handleServiceClick(s) {
    if (s.flow === 'services') {
      setPage('services');
    } else {
      resetBooking(s.preSelect);
      setPage('booking');
    }
  }

  return (
    <div>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0C447C 0%, #185FA5 50%, #0FA89A 100%)',
        padding: '80px 40px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -40, width: 260, height: 260, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
        <div className="container-fluid">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" style={{ position: 'relative', zIndex: 1 }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', fontWeight: 500, padding: '5px 16px', borderRadius: '99px', marginBottom: '20px' }}>
                🌷 Serving Ottawa families since 2010
              </span>
              <h1 style={{ fontSize: 'clamp(32px, 7vw, 54px)', color: '#ffffff', marginBottom: '6px', lineHeight: 1.1, fontFamily: 'var(--font-display)' }}>A Smile for</h1>
              
              <h1 style={{ fontSize: 'clamp(32px, 7vw, 54px)', color: '#7ED6CF', marginBottom: '16px', lineHeight: 1.1, fontFamily: 'var(--font-display)' }}>Every Occasion</h1>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '12px', maxWidth: '420px' }}>
                Whether it is your child's first visit or a procedure you have been putting off — we make every appointment feel safe, clear, and worth it.
              </p>
              {/* Urgency line */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(15,168,154,0.25)', border: '1px solid rgba(15,168,154,0.4)', borderRadius: '99px', padding: '6px 14px', marginBottom: '24px' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#7ED6CF' }} />
                <span style={{ fontSize: '12px', color: '#7ED6CF', fontWeight: 500 }}>Next available appointment: Tomorrow</span>
              </div>
              <div className="d-flex gap-3 flex-wrap">
                <button onClick={() => { resetBooking(null); setPage('booking'); }}
                  style={{ background: '#0FA89A', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: '99px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-body)', boxShadow: '0 6px 20px rgba(15,168,154,0.45)' }}>
                  Book Appointment →
                </button>
                <button onClick={() => setPage('services')}
                  style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.35)', padding: '14px 32px', borderRadius: '99px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
                  Our Services
                </button>
              </div>
            </div>

            <div className="col-lg-6" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.2)', padding: '32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <div style={{ fontSize: '72px', marginBottom: '8px' }}>🦷</div>
                  <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: '8px' }}>Your Comfort is Our Priority</h3>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', lineHeight: 1.7, maxWidth: '280px', margin: '0 auto' }}>
                    Modern equipment, gentle techniques, and a warm team ready to make every visit stress-free.
                  </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '20px' }}>
                  {[['😌', 'Pain-Free'], ['⚡', 'Fast Results'], ['💎', 'Premium Care']].map(([emoji, label]) => (
                    <div key={label} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '14px', padding: '14px 8px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.15)' }}>
                      <div style={{ fontSize: '24px', marginBottom: '6px' }}>{emoji}</div>
                      <div style={{ fontSize: '11px', color: '#7ED6CF', fontWeight: 500 }}>{label}</div>
                    </div>
                  ))}
                </div>
                {['Noticeably Brighter Smiles', 'Professional Treatment', 'Suitable for All Ages'].map(c => (
                  <div key={c} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#0FA89A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#fff', flexShrink: 0, fontWeight: 700 }}>✓</span>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TULIP */}
      <section style={{ padding: '70px 40px', background: '#fff' }}>
        <div className="container-fluid">
          <div className="section-header">
            <h2 style={{ color: 'var(--blue-dark)' }}>Why Families Choose Us</h2>
            <p>Trusted by 500+ Ottawa patients for over 15 years</p>
          </div>
          <div className="row g-4 justify-content-center">
            {whyUs.map(f => (
              <div className="col-sm-6 col-lg-3" key={f.title}>
                <div style={{ background: f.bg, borderRadius: '20px', padding: '28px', textAlign: 'center', height: '100%', border: '1px solid rgba(24,95,165,0.1)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(24,95,165,0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ width: 54, height: 54, borderRadius: '16px', background: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', margin: '0 auto 16px', boxShadow: `0 4px 14px ${f.color}55` }}>
                    {f.icon}
                  </div>
                  <h3 style={{ fontSize: '15px', color: f.color, marginBottom: '8px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>{f.title}</h3>
                  <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '70px 40px', background: 'linear-gradient(180deg, #f0f9f8 0%, #e6f1fb 100%)' }}>
        <div className="container-fluid">
          <div className="section-header">
            <h2 style={{ color: 'var(--blue-dark)' }}>What Our Patients Say</h2>
            <p>Real stories from real Ottawa families</p>
          </div>
          <div className="row g-4">
            {testimonials.map(t => (
              <div className="col-md-4" key={t.name}>
                <div style={{ background: '#fff', borderRadius: '20px', padding: '28px', height: '100%', border: '1px solid var(--border)', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 2px 12px rgba(24,95,165,0.06)' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(24,95,165,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(24,95,165,0.06)'; }}>
                  {/* Stars */}
                  <div style={{ color: '#F5A623', fontSize: '16px', marginBottom: '14px', letterSpacing: '2px' }}>★★★★★</div>
                  {/* Quote */}
                  <p style={{ fontSize: '13px', color: '#444', lineHeight: 1.8, marginBottom: '20px', fontStyle: 'italic' }}>
                    "{t.quote}"
                  </p>
                  {/* Patient info */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                    <div style={{ width: 42, height: 42, borderRadius: '50%', background: t.bg, color: t.color, fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>{t.name}</div>
                      <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{t.location} · {t.service}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '70px 40px', background: '#fff' }}>
        <div className="container-fluid">
          <div className="section-header">
            <h2 style={{ color: 'var(--blue-dark)' }}>Our Services</h2>
            <p>Click a service to get started — book directly or learn more first</p>
          </div>
          <div className="row g-4">
            {services.map(s => (
              <div className="col-sm-6 col-lg-3" key={s.name}>
                <div onClick={() => handleServiceClick(s)}
                  style={{ background: s.grad, borderRadius: '20px', padding: '28px', cursor: 'pointer', height: '100%', border: '1px solid rgba(255,255,255,0.7)', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 2px 12px rgba(24,95,165,0.08)' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(24,95,165,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(24,95,165,0.08)'; }}>
                  <div style={{ fontSize: '38px', marginBottom: '14px' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, fontFamily: 'var(--font-body)', color: 'var(--blue-dark)', marginBottom: '8px' }}>{s.name}</h3>
                  <p style={{ fontSize: '12px', color: '#555', lineHeight: 1.6, marginBottom: '16px' }}>{s.desc}</p>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#0A7A6F', fontWeight: 600, marginBottom: '8px' }}>{s.price}</div>
                  <div style={{ fontSize: '11px', color: s.flow === 'services' ? '#185FA5' : '#0A7A6F', fontWeight: 500 }}>
                    {s.flow === 'services' ? '→ Learn more before booking' : '→ Click to book'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TONY ENTRY POINT */}
      <section style={{ background: 'var(--blue-light)', padding: '50px 40px', borderTop: '1px solid var(--blue-mid)' }}>
        <div className="container-fluid">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                <div style={{ fontSize: '36px' }}>🔬</div>
                <h2 style={{ color: 'var(--blue-dark)', fontSize: '24px', margin: 0 }}>Not sure what you need?</h2>
              </div>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.7, maxWidth: '560px', margin: 0 }}>
                Before booking, explore our Services page to learn what each procedure involves,
                read step-by-step breakdowns, and see transparent pricing — no surprises, ever.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button onClick={() => setPage('services')}
                style={{ background: 'linear-gradient(135deg, #185FA5, #0FA89A)', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: '99px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-body)', boxShadow: '0 4px 14px rgba(24,95,165,0.3)' }}>
                Explore Our Services →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: 'linear-gradient(135deg, #0C447C 0%, #185FA5 40%, #0FA89A 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -40, right: 80, width: 220, height: 220, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, left: 60, width: 260, height: 260, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', fontSize: '38px', marginBottom: '12px' }}>Ready for a Healthier Smile?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', marginBottom: '8px' }}>
            Book your appointment today — it only takes 2 minutes.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', marginBottom: '32px' }}>
            No waiting on hold. No forms to fax. Just pick a time and we'll see you soon.
          </p>
          <button onClick={() => { resetBooking(null); setPage('booking'); }}
            style={{ background: '#fff', color: '#0C447C', borderRadius: '99px', padding: '15px 40px', fontWeight: 700, fontSize: '15px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', boxShadow: '0 6px 24px rgba(0,0,0,0.2)' }}>
            Book Now →
          </button>
        </div>
      </section>

    </div>
  );
}
