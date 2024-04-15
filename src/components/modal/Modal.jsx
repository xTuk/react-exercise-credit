import "./modal.css";

export default function Modal({ isOpen, onClose, children }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <div className="header-close">
              <span className="pointer" onClick={() => onClose()}>
                X
              </span>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
