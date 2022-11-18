import React from 'react';
import './modal.scss';

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <div className='modal' onClick={onClose}></div>
    )
}


export default Modal;