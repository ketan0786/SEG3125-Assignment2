// src/pages/Booking.jsx
import { useState } from 'react';

const SERVICES = [
  { icon: '🦷', name: 'Teeth Cleaning',            desc: 'Professional plaque & tartar removal · 45 min',               price: '$120' },
  { icon: '✨', name: 'Wedding Whitening Package',  desc: 'Up to 10 shades whiter, includes touch-up · 60 min',         price: '$299' },
  { icon: '⭐', name: 'Premium Whitening',           desc: 'Up to 6-8 shades whiter, long-lasting · 45 min',             price: '$199' },
  { icon: '💎', name: 'Basic Whitening',             desc: 'Essential brightening, great for maintenance · 30 min',      price: '$99'  },
  { icon: '🔬', name: 'Root Canal Consultation', desc: 'Meet Dr. James Reid to discuss your root canal options · 45 min', price: 'Free' },
  { icon: '📋', name: 'General Checkup',             desc: 'Routine exam and X-rays · 30 min',                           price: '$80'  },
];

const TIMES = ['9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '3:30 PM', '5:00 PM'];

function buildCalendar() {
  const days = [];
  const firstDay = 1;
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= 30; d++) days.push(d);
  return days;
}

const gradBtn = {
  background: 'linear-gradient(135deg, #185FA5, #0FA89A)',
  border: 'none', borderRadius: '99px',
  color: '#fff', fontWeight: 500, fontSize: '14px',
};

const inputStyle = {
  border: '1px solid var(--blue-mid)', borderRadius: 'var(--radius-sm)',
  padding: '10px 14px', fontSize: '13px', fontFamily: 'var(--font-body)',
  width: '100%', outline: 'none', color: 'var(--text)', background: '#fff',
};

const labelStyle = {
  fontSize: '12px', fontWeight: 500, color: 'var(--blue-dark)',
  display: 'block', marginBottom: '6px',
};

export default function Booking({ showToast, preSelected }) {
  const [step,    setStep]    = useState(1);
  const [service, setService] = useState(preSelected || null);
  const [day,     setDay]     = useState(null);
  const [time,    setTime]    = useState(null);
  const [patient, setPatient] = useState({ firstName: '', lastName: '', email: '', phone: '', notes: '' });

  function handlePatient(e) {
    setPatient(p => ({ ...p, [e.target.name]: e.target.value }));
  }

  function goStep2() {
    if (!service) { showToast('Please select a service first!'); return; }
    setStep(2);
  }
  function goStep3() {
    if (!day)  { showToast('Please pick a date!');  return; }
    if (!time) { showToast('Please pick a time!');  return; }
    setStep(3);
  }
  function goStep4() {
    if (!patient.firstName) { showToast('Please enter your first name!');   return; }
    if (!patient.email)     { showToast('Please enter your email!');         return; }
    if (!patient.phone)     { showToast('Please enter your phone number!');  return; }
    setStep(4);
  }
  function reset() {
    setStep(1); setService(null); setDay(null); setTime(null);
    setPatient({ firstName: '', lastName: '', email: '', phone: '', notes: '' });
  }

  const cal = buildCalendar();
  const STEPS = ['Select Service', 'Date & Time', 'Your Details', 'Confirmation'];

  return (
    <div style={{ background: 'var(--blue-light)', minHeight: 'calc(100vh - 70px)', padding: '40px' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>

        {/* STEP INDICATOR */}
        <div className="d-flex align-items-center mb-4">
          {STEPS.map((label, i) => {
            const n = i + 1;
            const isDone   = step > n;
            const isActive = step === n;
            return (
              <div key={n} className="d-flex align-items-center flex-grow-1">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', fontSize: '12px', fontWeight: 500,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: isDone ? 'var(--blue-dark)' : isActive ? 'var(--blue)' : 'var(--blue-mid)',
                    color: isDone || isActive ? '#fff' : 'var(--blue-dark)',
                  }}>
                    {isDone ? '✓' : n}
                  </div>
                  <span style={{ fontSize: '11px', color: isActive ? 'var(--blue-dark)' : 'var(--muted)', fontWeight: isActive ? 500 : 400 }}>
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && <div style={{ flex: 1, height: '1px', background: 'var(--blue-mid)', margin: '0 8px' }} />}
              </div>
            );
          })}
        </div>

        {/* STEP 1: SERVICE SELECTION */}
        {step === 1 && (
          <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--blue-mid)', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ background: 'linear-gradient(135deg, #0C447C 0%, #185FA5 50%, #0FA89A 100%)', padding: '24px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🦷</div>
                <div>
                  <h2 style={{ color: '#fff', margin: 0, fontSize: '22px' }}>Book an Appointment</h2>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0 }}>Choose the service that is right for you</p>
                </div>
              </div>
            </div>
            {/* Body */}
            <div style={{ padding: '28px 32px' }}>
              <div className="d-flex flex-column gap-3 mb-4">
                {SERVICES.map(s => (
                  <div key={s.name} onClick={() => setService(s)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '14px',
                      display: 'flex', alignItems: 'flex-start', gap: '14px', flexWrap: 'wrap',
                      padding: '14px 18px', borderRadius: 'var(--radius-md)', cursor: 'pointer',
                      border: service?.name === s.name ? '1.5px solid var(--blue)' : '1.5px solid var(--blue-mid)',
                      background: service?.name === s.name ? 'var(--blue-light)' : '#fff',
                      transition: 'all 0.15s',
                    }}
                  >
                    <div style={{
                      width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                      border: service?.name === s.name ? '5px solid var(--blue)' : '2px solid var(--blue-mid)',
                      transition: 'all 0.15s',
                    }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '14px', fontWeight: 500 }}>{s.icon} {s.name}</div>
                      <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>{s.desc}</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', color: 'var(--blue)', flexShrink: 0 }}>{s.price}</div>
                  </div>
                ))}
              </div>
              <button className="btn w-100 py-3" style={gradBtn} onClick={goStep2}>Continue →</button>
            </div>
          </div>
        )}

        {/* STEP 2: DATE & TIME */}
        {step === 2 && (
          <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--blue-mid)', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ background: 'linear-gradient(135deg, #0C447C 0%, #185FA5 50%, #0FA89A 100%)', padding: '24px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>📅</div>
                <div>
                  <h2 style={{ color: '#fff', margin: 0, fontSize: '22px' }}>Pick a Date & Time</h2>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0 }}>
                    Booking: {service?.icon} {service?.name}
                  </p>
                </div>
              </div>
            </div>
            {/* Body */}
            <div style={{ padding: '28px 32px' }}>
              <div className="row g-4">
                <div className="col-md-6">
                  <div style={{ fontWeight: 500, color: 'var(--blue-dark)', fontSize: '14px', marginBottom: '12px' }}>June 2026</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', textAlign: 'center', marginBottom: '6px' }}>
                    {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
                      <span key={d} style={{ fontSize: '10px', color: 'var(--blue)', fontWeight: 500 }}>{d}</span>
                    ))}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '3px' }}>
                    {cal.map((d, i) => (
                      <div key={i} onClick={() => d && d >= 2 && setDay(d)}
                        style={{
                          textAlign: 'center', padding: '6px 2px', fontSize: '12px', borderRadius: '50%',
                          cursor: d && d >= 2 ? 'pointer' : 'default',
                          background: day === d ? 'var(--blue)' : 'transparent',
                          color: !d || d < 2 ? '#ddd' : day === d ? '#fff' : '#555',
                          fontWeight: day === d ? 500 : 400, transition: 'all 0.15s',
                        }}
                      >{d || ''}</div>
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <div style={{ fontWeight: 500, color: 'var(--blue-dark)', fontSize: '14px', marginBottom: '12px' }}>
                    Available times {day && <span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '12px' }}>— June {day}</span>}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {TIMES.map(t => (
                      <div key={t} onClick={() => setTime(t)}
                        style={{
                          padding: '10px', borderRadius: 'var(--radius-sm)', textAlign: 'center',
                          fontSize: '13px', cursor: 'pointer',
                          border: time === t ? '1.5px solid var(--blue)' : '1.5px solid var(--blue-mid)',
                          background: time === t ? 'var(--blue)' : '#fff',
                          color: time === t ? '#fff' : 'var(--blue-dark)', transition: 'all 0.15s',
                        }}
                      >{t}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="d-flex gap-3 mt-4">
                <button className="btn btn-blue-outline flex-fill py-3" onClick={() => setStep(1)}>← Back</button>
                <button className="btn flex-fill py-3" style={{ ...gradBtn, flex: 2 }} onClick={goStep3}>Continue →</button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: PATIENT DETAILS */}
        {step === 3 && (
          <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--blue-mid)', overflow: 'hidden' }}>
            {/* Gradient header */}
            <div style={{ background: 'linear-gradient(135deg, #0C447C 0%, #185FA5 50%, #0FA89A 100%)', padding: '24px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>👤</div>
                <div>
                  <h2 style={{ color: '#fff', margin: 0, fontSize: '22px' }}>Your Details</h2>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0 }}>
                    {service?.icon} {service?.name} · June {day} at {time}
                  </p>
                </div>
              </div>
            </div>
            {/* Form body */}
            <div style={{ padding: '28px 32px' }}>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label style={labelStyle}>First name *</label>
                  <input name="firstName" value={patient.firstName} onChange={handlePatient} placeholder="Enter your first name" style={inputStyle} />
                </div>
                <div className="col-md-6">
                  <label style={labelStyle}>Last name</label>
                  <input name="lastName" value={patient.lastName} onChange={handlePatient} placeholder="Enter your last name" style={inputStyle} />
                </div>
              </div>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label style={labelStyle}>Email *</label>
                  <input name="email" value={patient.email} onChange={handlePatient} type="email" placeholder="Enter your email address" style={inputStyle} />
                </div>
                <div className="col-md-6">
                  <label style={labelStyle}>Phone number *</label>
                  <input name="phone" value={patient.phone} onChange={handlePatient} type="tel" placeholder="Enter your phone number" style={inputStyle} />
                </div>
              </div>
              <div className="mb-4">
                <label style={labelStyle}>Additional notes (optional)</label>
                <textarea name="notes" value={patient.notes} onChange={handlePatient} rows={3}
                  placeholder="Any allergies, concerns, or things we should know before your visit..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>
              <div className="d-flex gap-3">
                <button className="btn btn-blue-outline flex-fill py-3" onClick={() => setStep(2)}>← Back</button>
                <button className="btn flex-fill py-3" style={{ ...gradBtn, flex: 2 }} onClick={goStep4}>Review Booking →</button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: CONFIRMATION */}
        {step === 4 && (
          <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--blue-mid)', overflow: 'hidden' }}>
            {/* Gradient header */}
            <div style={{ background: 'linear-gradient(135deg, #0C447C 0%, #185FA5 50%, #0FA89A 100%)', padding: '32px', textAlign: 'center' }}>
              <div style={{ width: 68, height: 68, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', color: '#fff', margin: '0 auto 14px' }}>✓</div>
              <h2 style={{ color: '#fff', marginBottom: '6px' }}>Appointment Confirmed!</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', margin: 0 }}>
                A confirmation email has been sent to {patient.email}
              </p>
            </div>
            {/* Body */}
            <div style={{ padding: '28px 32px' }}>
              {/* Appointment details */}
              <div style={{ background: 'var(--blue-light)', borderRadius: 'var(--radius-md)', padding: '20px 24px', marginBottom: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--blue-dark)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Appointment Details</div>
                {[
                  { label: 'Service', value: `${service?.icon} ${service?.name}` },
                  { label: 'Date',    value: `June ${day}, 2026`                 },
                  { label: 'Time',    value: time                                },
                  { label: 'Dentist', value: service?.name?.includes('Root Canal') ? 'Dr. James Reid — Endodontist' : 'Dr. Anika Patel — Tulip Dental Care' },
                  { label: 'Total',   value: service?.price, highlight: true     },
                ].map(r => (
                  <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--blue-mid)', fontSize: '13px' }}>
                    <span style={{ color: 'var(--muted)' }}>{r.label}</span>
                    <span style={{ color: r.highlight ? 'var(--blue)' : 'var(--blue-dark)', fontWeight: 500, fontFamily: r.highlight ? 'var(--font-display)' : 'inherit', fontSize: r.highlight ? '17px' : '13px' }}>
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>
              {/* Patient details */}
              <div style={{ background: 'var(--blue-light)', borderRadius: 'var(--radius-md)', padding: '20px 24px', marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--blue-dark)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Patient Details</div>
                {[
                  { label: 'Name',  value: `${patient.firstName} ${patient.lastName}`.trim() },
                  { label: 'Email', value: patient.email },
                  { label: 'Phone', value: patient.phone },
                  patient.notes ? { label: 'Notes', value: patient.notes } : null,
                ].filter(Boolean).map(r => (
                  <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--blue-mid)', fontSize: '13px' }}>
                    <span style={{ color: 'var(--muted)' }}>{r.label}</span>
                    <span style={{ color: 'var(--blue-dark)', fontWeight: 500 }}>{r.value}</span>
                  </div>
                ))}
              </div>
              <div className="d-flex gap-3">
                <button className="btn flex-fill py-3" style={gradBtn} onClick={() => showToast('Added to your calendar! 📅')}>
                  📅 Add to Calendar
                </button>
                <button className="btn btn-blue-outline flex-fill py-3" onClick={reset}>
                  Book Another
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
