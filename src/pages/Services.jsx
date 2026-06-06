// src/pages/Services.jsx
import { useState } from 'react';

export default function Services({ setPage, resetBooking }) {
  const [showDetail, setShowDetail] = useState(false);

  const services = [
    {
      icon: '🦷', name: 'Teeth Cleaning', tag: 'Preventive',
      desc: 'Professional plaque and tartar removal for a healthier mouth and fresher breath.',
      price: 'From $120',
      action: () => { resetBooking({ icon: '🦷', name: 'Teeth Cleaning', desc: 'Professional plaque & tartar removal · 45 min', price: '$120' }); setPage('booking'); },
      actionLabel: 'Book now',
    },
    {
      icon: '✨', name: 'Teeth Whitening', tag: 'Cosmetic',
      desc: 'Advanced whitening — Basic ($99), Premium ($199), or Wedding Package ($299).',
      price: 'From $99',
      action: () => { resetBooking({ icon: '✨', name: 'Wedding Whitening Package', desc: 'Up to 10 shades whiter · 60 min', price: '$299' }); setPage('booking'); },
      actionLabel: 'Book now',
    },
    {
      icon: '🔬', name: 'Root Canal', tag: 'Restorative',
      desc: 'Gentle treatment of infected tooth pulp. We explain every step before we begin.',
      price: 'From $650',
      action: () => setShowDetail(v => !v),
      actionLabel: showDetail ? 'Hide details' : 'Learn what\'s involved',
      highlight: true,
    },
    {
      icon: '📋', name: 'General Checkup', tag: 'Preventive',
      desc: 'Routine exam and X-rays. Catch small problems before they become big ones.',
      price: 'From $80',
      action: () => { resetBooking({ icon: '📋', name: 'General Checkup', desc: 'Routine exam and X-rays · 30 min', price: '$80' }); setPage('booking'); },
      actionLabel: 'Book now',
    },
  ];

  const rcSteps = [
    'X-ray taken to assess the extent of infection in the tooth root.',
    'Local anesthesia applied — area fully numbed before any work begins.',
    'Infected pulp removed and canal cleaned and shaped carefully.',
    'Canal sealed and a crown placed to protect and restore the tooth.',
  ];

  return (
    <div>

      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg, #0C447C 0%, #185FA5 60%, #0FA89A 100%)', padding: '50px 40px' }}>
        <div className="container-fluid">
          <h1 style={{ fontSize: '38px', color: '#fff', marginBottom: '10px' }}>Our Dental Services</h1>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', maxWidth: '480px', lineHeight: 1.7 }}>
            Transparent pricing. Trusted care. Learn about each treatment before you decide — no surprises, ever.
          </p>
        </div>
      </div>

      <div style={{ padding: '40px' }}>
        <div className="container-fluid">

          {/* ROOT CANAL DETAIL PANEL */}
          {showDetail && (
            <div style={{ background: 'var(--blue-light)', borderRadius: 'var(--radius-lg)', padding: '32px', marginBottom: '32px', border: '1px solid var(--blue-mid)' }}>
              <h2 style={{ fontSize: '26px', color: 'var(--blue-dark)', marginBottom: '8px' }}>Root Canal — What to Expect</h2>
              <p style={{ fontSize: '13px', color: '#555', marginBottom: '24px', lineHeight: 1.7, maxWidth: '560px' }}>
                A root canal treats infection inside the tooth. It is often painless thanks to modern anesthesia, and saves your natural tooth from extraction.
              </p>

              {/* Steps */}
              <div className="row g-3 mb-4">
                {rcSteps.map((s, i) => (
                  <div className="col-md-6" key={i}>
                    <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', padding: '16px', border: '1px solid var(--blue-mid)', display: 'flex', gap: '12px' }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #185FA5, #0FA89A)', color: '#fff', fontSize: '12px', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {i + 1}
                      </div>
                      <p style={{ fontSize: '12px', color: '#444', lineHeight: 1.6, margin: 0 }}>{s}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', padding: '20px', border: '1px solid var(--blue-mid)', marginBottom: '20px', maxWidth: '360px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 500, color: 'var(--blue-dark)', marginBottom: '14px' }}>Pricing breakdown</h4>
                {[['Front tooth', '$650'], ['Premolar', '$750'], ['Molar', '$950']].map(([tooth, price]) => (
                  <div key={tooth} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--blue-mid)', fontSize: '13px' }}>
                    <span style={{ color: '#555' }}>{tooth}</span>
                    <span style={{ color: 'var(--blue)', fontWeight: 500 }}>{price}</span>
                  </div>
                ))}
              </div>

              <div className="d-flex gap-3 flex-wrap">
                <button
                  className="btn"
                  style={{ background: 'linear-gradient(135deg, #185FA5, #0FA89A)', color: '#fff', borderRadius: '99px', padding: '12px 28px', fontWeight: 500, border: 'none', fontSize: '13px' }}
                  onClick={() => {
                    resetBooking({
                      icon: '🔬',
                      name: 'Root Canal Consultation',
                      desc: 'Meet Dr. James Reid to discuss your root canal options · 45 min',
                      price: 'Free',
                    });
                    setPage('booking');
                  }}
                >
                  Book a Consultation →
                </button>
                <button className="btn btn-blue-outline" onClick={() => setPage('contact')}>
                  Ask a Question
                </button>
              </div>
            </div>
          )}

          {/* SERVICE CARDS */}
          <div className="row g-4">
            {services.map(s => (
              <div className="col-sm-6 col-lg-3" key={s.name}>
                <div
                  className="card-warm h-100"
                  style={{ border: s.highlight ? '2px solid var(--blue)' : '1px solid var(--border)', cursor: 'default' }}
                >
                  <span className="tag-pill tag-blue" style={{ fontSize: '10px' }}>{s.tag}</span>
                  <div style={{ fontSize: '28px', marginBottom: '8px' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '15px', fontWeight: 500, fontFamily: 'var(--font-body)', color: 'var(--blue-dark)', marginBottom: '6px' }}>{s.name}</h3>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '14px' }}>{s.desc}</p>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--blue)', marginBottom: '12px' }}>{s.price}</div>
                  <button
                    className="btn btn-blue-outline btn-sm"
                    style={{ fontSize: '12px', padding: '7px 16px', borderRadius: '99px' }}
                    onClick={s.action}
                  >
                    → {s.actionLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
