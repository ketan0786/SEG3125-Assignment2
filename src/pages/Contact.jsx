// src/pages/Contact.jsx
import { useState } from 'react';

export default function Contact({ showToast }) {
  const [form, setForm] = useState({ first: '', last: '', email: '', topic: 'Book an appointment', message: '' });

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    if (!form.first || !form.email) { showToast('Please fill in your name and email.'); return; }
    showToast("Message sent! We'll reply within 24 hours 💌");
    setForm({ first: '', last: '', email: '', topic: 'Book an appointment', message: '' });
  }

  const info = [
    { icon: '📍', title: 'Location',  text: '123 Tulip Avenue\nOttawa, ON K1A 0A1'   },
    { icon: '📞', title: 'Phone',     text: '(613) 555-0192'                          },
    { icon: '🕐', title: 'Hours',     text: 'Mon-Fri: 8am-6pm\nSaturday: 9am-3pm'    },
    { icon: '✉️', title: 'Email',     text: 'hello@tulipdentalcare.ca'                },
  ];

  const inputStyle = {
    border: '1px solid var(--blue-mid)', borderRadius: 'var(--radius-sm)',
    padding: '10px 14px', fontSize: '13px', fontFamily: 'var(--font-body)',
    width: '100%', outline: 'none', color: 'var(--text)', background: '#fff',
    transition: 'border 0.2s',
  };

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
            ✉️ Get in Touch
          </span>
          <h1 style={{ fontSize: '42px', color: '#fff', marginBottom: '10px' }}>Contact Us</h1>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', maxWidth: '480px', lineHeight: 1.7 }}>
            Have questions? Want to book by phone? We are here to help — reach out any time.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div style={{ padding: '50px 40px' }}>
        <div className="container-fluid" style={{ maxWidth: '900px' }}>

          {/* INFO CARDS */}
          <div className="row g-3 mb-5">
            {info.map(i => (
              <div className="col-6 col-lg-3" key={i.title}>
                <div style={{
                  background: 'linear-gradient(135deg, #E6F1FB, #E6F7F6)',
                  borderRadius: 'var(--radius-md)', padding: '20px',
                  border: '1px solid var(--blue-mid)',
                  transition: 'transform 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{
  width: 44, height: 44, borderRadius: '12px',
  background: 'linear-gradient(135deg, #185FA5, #0FA89A)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: '20px', marginBottom: '12px',
  boxShadow: '0 4px 12px rgba(24,95,165,0.25)',
}}>
  {i.icon}
</div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--blue-dark)', marginBottom: '4px' }}>{i.title}</div>
                  <div style={{ fontSize: '12px', color: '#555', whiteSpace: 'pre-line' }}>{i.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div style={{ background: '#fff', border: '1px solid var(--blue-mid)', borderRadius: 'var(--radius-lg)', padding: '36px' }}>
            <h3 style={{ fontSize: '22px', color: 'var(--blue-dark)', marginBottom: '6px' }}>Send us a message</h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '28px' }}>We typically respond within 24 hours.</p>

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--blue-dark)', display: 'block', marginBottom: '6px' }}>First name</label>
                <input name="first" value={form.first} onChange={handleChange} placeholder="First name" style={inputStyle} />
              </div>
              <div className="col-md-6">
                <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--blue-dark)', display: 'block', marginBottom: '6px' }}>Last name</label>
                <input name="last" value={form.last} onChange={handleChange} placeholder="Last name" style={inputStyle} />
              </div>
            </div>

            <div className="mb-3">
              <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--blue-dark)', display: 'block', marginBottom: '6px' }}>Email</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="email" style={inputStyle} />
            </div>

            <div className="mb-3">
              <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--blue-dark)', display: 'block', marginBottom: '6px' }}>What can we help you with?</label>
              <select name="topic" value={form.topic} onChange={handleChange} style={inputStyle}>
                <option>Book an appointment</option>
                <option>Root canal enquiry</option>
                <option>Pricing information</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--blue-dark)', display: 'block', marginBottom: '6px' }}>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="I'd like to know more about..." style={{ ...inputStyle, resize: 'vertical' }} />
            </div>

            <button
              className="btn w-100 py-3"
              style={{ background: 'linear-gradient(135deg, #185FA5, #0FA89A)', color: '#fff', borderRadius: '99px', fontWeight: 500, border: 'none', fontSize: '14px' }}
              onClick={handleSubmit}
            >
              Send Message →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
