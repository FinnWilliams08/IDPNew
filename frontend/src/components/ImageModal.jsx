import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const ImageModal = ({ isOpen, onClose, imageSource, alt, title, description }) => {
  const { theme } = useContext(ThemeContext);

  if (!isOpen) return null;

  const textColor = theme === 'light' ? 'black' : 'white';

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={styles.closeButton}>Close</button>
        <img src={imageSource} alt={alt} title={title} style={styles.image} />
        <h3 style={{ color: textColor }}>{title}</h3>
        <p style={{ color: textColor }}>{description}</p>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '90%',
    maxHeight: '90%',
    overflowY: 'auto',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: '80vh', // Ensure the image fits within the viewport
    objectFit: 'contain',
  },
};