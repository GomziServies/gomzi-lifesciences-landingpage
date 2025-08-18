import React, { useEffect } from 'react';
import '../../assets/css/modal.css';

const BookingFormModal = ({ isOpen, onClose, children }) => {

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = originalOverflow;
        }

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleClose = () => {
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button
                    className="modal-close-button"
                    onClick={handleClose}
                >
                    ×
                </button>
                {children}
            </div>
        </div>
    );
};

export default BookingFormModal;
