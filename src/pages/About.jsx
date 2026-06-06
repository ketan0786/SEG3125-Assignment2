// src/pages/About.jsx

export default function About({ setPage }) {
  const team = [
    {
      initials: 'AP',
      name: 'Dr. Anika Patel',
      role: 'General & Cosmetic Dentist',
      detail: 'Dr. Patel founded Tulip Dental Care in 2010 after noticing how many patients avoided the dentist out of fear. Her approach: explain everything, rush nothing.',
      years: '16 years experience',
    },
    {
      initials: 'JR',
      name: 'Dr. James Reid',
      role: 'Endodontist — Root Canal Specialist',
      detail: 'Dr. Reid has performed over 3,000 root canal procedures. His patients consistently say they were surprised by how painless the experience was.',
      years: '12 years experience',
    },
    {
      initials: 'SL',
      name: 'Dr. Sophie Lee',
      role: 'Preventive Dentist',
      detail: 'Dr. Lee specialises in children and anxious adults. She believes the best dental treatment is the one you actually show up for.',
      years: '9 years experience',
    },
  ];

  const values = [
    { icon: '🔍', title: 'Transparency first', desc: 'We tell you what a procedure involves and what it costs before we start. No surprises on the chair, no surprises on the bill.' },
    { icon: '🤲', title: 'No pressure, ever', desc: 'We never push unnecessary treatments. If you need time to think or a second opinion, we encourage it.' },
    { icon: '🗣️', title: 'Plain language', desc: 'We explain everything in plain English — not dental jargon. You should leave understanding exactly what happened and why.' },
    { icon: '⏱️', title: 'We respect your time', desc: 'We run on schedule. If we are ever running late, we will call you so you are not sitting in a waiting room unnecessarily.' },
  ];

  return (
    <div>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0C447C 0%, #185FA5 50%, #0FA89A 100%)',
        padding: '60px 40px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -40, width: 250, height: 250, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
        <div className="container-fluid" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '11px', fontWeight: 500, padding: '5px 16px', borderRadius: '99px', marginBottom: '16px' }}>
            🌷 About Us
          </span>
          <h1 style={{ fontSize: '42px', color: '#fff', marginBottom: '10px' }}>About Tulip Dental Care</h1>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', maxWidth: '500px', lineHeight: 1.7 }}>
            A small Ottawa clinic with a simple belief — dental care should never feel like something you dread.
          </p>
        </div>
      </section>

      <div style={{ padding: '60px 40px' }}>
        <div className="container-fluid">

          {/* OUR STORY */}
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6">
              <h2 style={{ fontSize: '30px', color: 'var(--blue-dark)', marginBottom: '16px' }}>Our Story</h2>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.9, marginBottom: '16px' }}>
                Tulip Dental Care opened its doors in Ottawa in 2010, founded by Dr. Anika Patel.
                After years of working in larger clinics, she kept hearing the same thing from patients:
                <em> "I put it off because I was scared"</em> or <em>"I didn't go because I couldn't afford a surprise bill."</em>
              </p>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.9, marginBottom: '16px' }}>
                So she built the clinic she wished existed — one where every procedure is explained before it begins,
                every cost is clear upfront, and no patient ever feels rushed or judged for waiting too long between visits.
              </p>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.9, marginBottom: '24px' }}>
                Today, Tulip Dental Care serves over 500 Ottawa families across all ages and needs —
                from a toddler's first checkup to complex restorative procedures for older adults.
              </p>
              <button
                className="btn"
                style={{ background: 'linear-gradient(135deg, #185FA5, #0FA89A)', color: '#fff', borderRadius: '99px', padding: '12px 28px', fontWeight: 500, border: 'none', fontSize: '13px', cursor: 'pointer' }}
                onClick={() => setPage('contact')}
              >
                Get in Touch →
              </button>
            </div>

            {/* PROMISE CARD */}
            <div className="col-lg-6">
              <div style={{ background: 'linear-gradient(135deg, #0C447C 0%, #185FA5 50%, #0FA89A 100%)', borderRadius: '24px', padding: '36px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px', textAlign: 'center' }}>🌷</div>
                <h3 style={{ color: '#fff', fontSize: '20px', marginBottom: '8px', textAlign: 'center' }}>Our Promise to You</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '24px', textAlign: 'center' }}>
                  We will never start a procedure without explaining it. We will never charge you without telling you first. And we will never make you feel bad for being nervous.
                </p>
                <div className="row g-3">
                  {[['500+', 'Ottawa patients served'], ['15+', 'Years of combined experience'], ['4', 'Dental specialists on staff'], ['98%', 'Patient satisfaction rate']].map(([num, label]) => (
                    <div className="col-6" key={label}>
                      <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '14px 10px', textAlign: 'center' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: '#7ED6CF' }}>{num}</div>
                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.75)', marginTop: '3px' }}>{label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* VALUES */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '26px', color: 'var(--blue-dark)', marginBottom: '8px' }}>How We Are Different</h2>
            <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '28px' }}>Four things we do that most dental clinics don't.</p>
            <div className="row g-4">
              {values.map(v => (
                <div className="col-md-6" key={v.title}>
                  <div style={{ background: 'var(--blue-light)', borderRadius: '16px', padding: '24px', height: '100%', border: '1px solid var(--blue-mid)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '28px', flexShrink: 0 }}>{v.icon}</div>
                    <div>
                      <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--blue-dark)', fontFamily: 'var(--font-body)', marginBottom: '6px' }}>{v.title}</h3>
                      <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TEAM */}
          <h2 style={{ fontSize: '26px', color: 'var(--blue-dark)', marginBottom: '8px' }}>Meet Our Team</h2>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '28px' }}>Three dentists. One shared belief — you deserve to understand your own dental health.</p>
          <div className="row g-4">
            {team.map(t => (
              <div className="col-md-4" key={t.name}>
                <div style={{ background: 'var(--blue-light)', borderRadius: '20px', padding: '28px', textAlign: 'center', height: '100%', border: '1px solid var(--blue-mid)', transition: 'transform 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{
                    width: 68, height: 68, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #185FA5, #0FA89A)',
                    color: '#fff', fontFamily: 'var(--font-display)', fontSize: '20px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px', boxShadow: '0 4px 16px rgba(24,95,165,0.3)',
                  }}>
                    {t.initials}
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 500, color: 'var(--blue-dark)', marginBottom: '4px' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--teal)', marginBottom: '12px', fontWeight: 500 }}>{t.role}</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', marginBottom: '12px' }}>{t.years}</div>
                  <p style={{ fontSize: '12px', color: '#555', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>"{t.detail}"</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
