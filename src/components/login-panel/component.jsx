import {Button} from "../button/component.jsx";
import {useContext, useLayoutEffect, useRef, useState} from "react";
import {UserContext} from "../../contexts/user.js";
import {createPortal} from "react-dom";
import ModalContent from "../login-modal/modal-content.jsx";

export const LoginPanel = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);
    const modalContainer = useRef();
    
    useLayoutEffect(() => {
        modalContainer.current = document.getElementById("modal-container");
    }, []);

    return <div>
        {currentUser ? (<>
                <span>{currentUser.username}</span>
                <Button
                    text={"Logout"}
                    viewVariant={"login"}
                    onClick={() => setCurrentUser(undefined)}>
                </Button>
            </>) :
            (<>
                <Button
                    text={"Login"}
                    viewVariant={"login"}
                    onClick={() => setShowModal(true)}>
                </Button>
                {showModal && createPortal(
                    <ModalContent onClose={() => setShowModal(false)}/>,
                    modalContainer.current
                )}
            </>)
        }
    </div>
}