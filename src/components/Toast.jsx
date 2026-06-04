// src/components/Toast.jsx
import { useEffect } from 'react';

export default function Toast({ message, visible, onHide }) {
  useEffect(() => {
    if (visible) {
      const t = setTimeout(onHide, 3000);
      return () => clearTimeout(t);
    }
  }, [visible, onHide]);

  return (
    <div className={`toast-notify ${visible ? 'show' : ''}`}>
      {message}
    </div>
  );
}
