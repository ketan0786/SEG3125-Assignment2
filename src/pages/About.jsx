// src/pages/About.jsx

export default function About({ setPage }) {
  const team = [
    { initials: 'AP', name: 'Dr. Anika Patel',  role: 'General & Cosmetic Dentist' },
    { initials: 'JR', name: 'Dr. James Reid',   role: 'Endodontist (Root Canal)'   },
    { initials: 'SL', name: 'Dr. Sophie Lee',   role: 'Preventive Dentist'         },
  ];

  return (
    <div>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0C447C 0%, #185FA5 50%, #0FA89A 100%)',
        padding: '60px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -40, width: 250, height: 250, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
        <div className="container-fluid" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', fontWeight: 500, padding: '5px 16px', borderRadius: '99px', marginBottom: '16px' }}>
            🌷 About Us
          </span>
          <h1 style={{ fontSize: '42px', color: '#fff', marginBottom: '10px' }}>About Tulip Dental Care</h1>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', maxWidth: '500px', lineHeight: 1.7 }}>
            A family-friendly clinic dedicated to making every visit comfortable, transparent, and effective.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <div style={{ padding: '60px 40px' }}>
        <div className="container-fluid">

          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6">
              <h2 style={{ fontSize: '30px', color: 'var(--blue-dark)', marginBottom: '16px' }}>Our Story</h2>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.8, marginBottom: '14px' }}>
                We are a family-friendly dental clinic dedicated to making every visit comfortable, transparent, and effective.
                Our team of experienced dentists combines modern techniques with genuine care for every patient.
              </p>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.8, marginBottom: '24px' }}>
                Whether you are coming in for a routine cleaning or a complex restorative procedure, you will always know
                exactly what to expect — and what it costs.
              </p>
              <button
                className="btn"
                style={{ background: 'linear-gradient(135deg, #185FA5, #0FA89A)', color: '#fff', borderRadius: '99px', padding: '12px 28px', fontWeight: 500, border: 'none', fontSize: '13px' }}
                onClick={() => setPage('contact')}
              >
                Get in Touch →
              </button>
            </div>

            <div className="col-lg-6">
              <div style={{ background: 'linear-gradient(135deg, #0C447C 0%, #185FA5 50%, #0FA89A 100%)', borderRadius: '24px', padding: '36px', textAlign: 'center' }}>
                <div style={{ fontSize: '52px', marginBottom: '14px' }}>🌷</div>

                <h3 style={{ color: '#fff', fontSize: '22px', marginBottom: '10px' }}>Our Promise</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '24px' }}>
                  Honest pricing. Gentle care. A smile you will love.
                </p>
                <div className="row g-3">
                  {[['500+', 'Happy patients'], ['15+', 'Years of experience'], ['4', 'Specialist dentists']].map(([num, label]) => (
                    <div className="col-4" key={label}>
                      <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '14px 8px', backdropFilter: 'blur(4px)' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, color: '#7ED6CF' }}>{num}</div>
                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.8)' }}>{label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* TEAM */}
          <h2 style={{ fontSize: '28px', color: 'var(--blue-dark)', marginBottom: '24px' }}>Meet Our Team</h2>
          <div className="row g-4">
            {team.map(t => (
              <div className="col-sm-4" key={t.name}>
                <div style={{ background: 'var(--blue-light)', borderRadius: '20px', padding: '32px', textAlign: 'center', border: '1px solid var(--blue-mid)', transition: 'transform 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{
                    width: 68, height: 68, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #185FA5, #0FA89A)',
                    color: '#fff', fontFamily: 'var(--font-display)', fontSize: '22px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px', boxShadow: '0 4px 16px rgba(24,95,165,0.3)',
                  }}>
                    {t.initials}
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--blue-dark)', marginBottom: '4px' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
