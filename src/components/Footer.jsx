// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0C447C 0%, #185FA5 60%, #0FA89A 100%)',
      color: '#fff',
      padding: '24px 32px',
      marginTop: 'auto',
    }}>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-center text-md-start">
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '17px', marginBottom: '4px' }}>
            🌷 Tulip Dental Care
          </div>
          <div style={{ fontSize: '11px', opacity: 0.75 }}>
            Your Smile, Our Passion
          </div>
        </div>
        <div style={{ fontSize: '11px', opacity: 0.75 }} className="text-center text-md-end">
          <div>Designed by Ketan Kumar · SEG3125 Assignment 2</div>
          <div style={{ marginTop: '3px' }}>123 Tulip Avenue, Ottawa, ON · (613) 555-0192</div>
        </div>
      </div>
    </footer>
  );
}