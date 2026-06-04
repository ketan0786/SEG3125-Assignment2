// src/components/Navbar.jsx
import '../styles/Navbar.css';

export default function Navbar({ page, setPage, resetBooking }) {
  const links = [
    { id: 'home',     label: 'Home'     },
    { id: 'services', label: 'Services' },
    { id: 'about',    label: 'About'    },
    { id: 'contact',  label: 'Contact'  },
  ];

  return (
    <nav className="navbar navbar-tulip navbar-expand-lg">
      <div className="container-fluid px-0">

        {/* Brand */}
        <button
          className="navbar-brand d-flex align-items-center gap-3 border-0 bg-transparent p-0"
          onClick={() => setPage('home')}
        >
          <img
            src="/logo.png"
            alt="Tulip Dental Care Logo"
            style={{ width: '85px', height: '85px', objectFit: 'contain' }}
          />
          <div>
            <span className="navbar-brand-text">Tulip Dental Care</span>
            <span className="navbar-brand-sub">HEALTHY SMILE, HEALTHY LIFE</span>
          </div>
        </button>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto gap-2">
            {links.map(l => (
              <li className="nav-item" key={l.id}>
                <button
                  className={`nav-link ${page === l.id ? 'active' : ''}`}
                  onClick={() => setPage(l.id)}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="btn ms-3"
            style={{
              background: 'linear-gradient(135deg, #185FA5, #0FA89A)',
              color: '#fff',
              borderRadius: '99px',
              padding: '11px 26px',
              fontWeight: 500,
              fontSize: '13px',
              border: 'none',
              boxShadow: '0 4px 14px rgba(15,168,154,0.3)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            onClick={() => { resetBooking(); setPage('booking'); }}
          >
            Book Appointment
          </button>
        </div>

      </div>
    </nav>
  );
}
