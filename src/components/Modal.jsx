import React, { useEffect } from 'react';
import './Modal.css'; // Create a CSS file for modal styles

const Modal = ({ image, onClose }) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={image} alt="Modal Content" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;