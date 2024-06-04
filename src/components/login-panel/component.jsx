import {Button} from "../button/component.jsx";
import {useContext, useState} from "react";
import {UserContext} from "../../contexts/user.js";
import {createPortal} from "react-dom";
import ModalContent from "../login-modal/modal-content.jsx";

export const LoginPanel = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);

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
                    document.getElementById("modal-container")
                )}
            </>)
        }
    </div>
}