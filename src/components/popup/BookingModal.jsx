import React, { useEffect, useState } from 'react';
import Booking from '../../page/booking';
import '../../assets/css/BookingModal.css';

const BookingModal = ({ onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300); // Match this with animation duration
    };

    useEffect(() => {
        const scrollY = window.scrollY;

        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
        document.documentElement.style.overflowX = 'hidden';

        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.width = '';
            window.scrollTo(0, scrollY);
            document.documentElement.style.overflowX = '';
        };
    }, []);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <div 
            className={`modal-overlay ${isClosing ? 'modal-closing' : ''}`} 
            onClick={handleOverlayClick}
        >
            <div className={`modal-content ${isClosing ? 'modal-closing' : ''}`}>
                <button
                    onClick={handleClose}
                    className="modal-close-btn"
                >
                    ×
                </button>
                <Booking />
            </div>
        </div>
    );
};

export default BookingModal;