import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './modal-content.jsx';
import {Button} from "../button/component.jsx";

export default function PortalExample() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <Button
                text={"Login"}
                viewVariant={"login"}
                onClick={() => setShowModal(true)}>
            </Button>
            {showModal && createPortal(
                <ModalContent onClose={() => setShowModal(false)} />,
                document.body
            )}
        </div>
    );
}