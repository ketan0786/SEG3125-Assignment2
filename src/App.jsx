// src/App.jsx
import { useState, useCallback } from 'react';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Global styles
import './styles/global.css';

// Components
import Navbar  from './components/Navbar';
import Footer  from './components/Footer';
import Toast   from './components/Toast';

// Pages
import Home     from './pages/Home';
import Booking  from './pages/Booking';
import Services from './pages/Services';
import About    from './pages/About';
import Contact  from './pages/Contact';

export default function App() {
  const [page,         setPageState] = useState('home');
  const [toast,        setToast]     = useState({ msg: '', show: false });
  const [bookingReset, setBookingReset] = useState(0);

  // Scroll to top on page change
  function setPage(p) {
    setPageState(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const [preSelected, setPreSelected] = useState(null);

  // Trigger booking reset, optionally pre-selecting a service
  function resetBooking(service = null) {
    setPreSelected(service);
    setBookingReset(n => n + 1);
  }

  // Toast helper
  const showToast = useCallback((msg) => {
    setToast({ msg, show: true });
  }, []);

  const hideToast = useCallback(() => {
    setToast(t => ({ ...t, show: false }));
  }, []);

return (
  <>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar page={page} setPage={setPage} resetBooking={resetBooking} />
      <div style={{ flex: 1 }}>
        {page === 'home'     && <Home     setPage={setPage} resetBooking={resetBooking} showToast={showToast} />}
        {page === 'booking'  && <Booking  key={bookingReset} showToast={showToast} preSelected={preSelected} />}
        {page === 'services' && <Services setPage={setPage} resetBooking={resetBooking} />}
        {page === 'about'    && <About    setPage={setPage} />}
        {page === 'contact'  && <Contact  showToast={showToast} />}
      </div>
      <Footer />
    </div>
    <Toast message={toast.msg} visible={toast.show} onHide={hideToast} />
  </>
);
}
