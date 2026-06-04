// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0C447C 0%, #185FA5 60%, #0FA89A 100%)',
      color: '#fff',
      padding: '28px 32px',
      marginTop: 'auto',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '17px', marginBottom: '4px' }}>
            🌷 Tulip Dental Care
          </div>
          <div style={{ fontSize: '11px', opacity: 0.75 }}>
            Your Smile, Our Passion
          </div>
        </div>

        {/* Info */}
        <div style={{ fontSize: '11px', opacity: 0.75, textAlign: 'right' }}>
          <div>Designed by Ketan Kumar · SEG3125 Assignment 2</div>
          <div style={{ marginTop: '3px' }}>123 Tulip Avenue, Ottawa, ON · (613) 555-0192</div>
        </div>
      </div>
    </footer>
  );
}
