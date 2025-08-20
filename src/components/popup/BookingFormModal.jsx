import React, { useEffect } from 'react';
import '../../assets/css/modal.css';

const BookingFormModal = ({ isOpen, onClose, children }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        return () => {
            document.body.classList.remove("modal-open");
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
