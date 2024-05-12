import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.jsx';

export default function PortalExample() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)}>
                Login-modal
            </button>
            {showModal && createPortal(
                <ModalContent onClose={() => setShowModal(false)} />,
                document.body
            )}
        </>
    );
}