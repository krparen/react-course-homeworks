import styles from "./styles.module.scss";
import {useContext, useState} from "react";
import {UserContext} from "../../contexts/user.js";

export default function ModalContent({ onClose }) {

    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [userFromInput, setUserFromInput] = useState({"name": "", "password": ""});
    
    const handleUserFromInputChange = (event) => {
        setUserFromInput({"name": event.target.value, "password": "dummy password"});
    }
    
    const setUserInContextAndCloseModal = () => {
        setCurrentUser(userFromInput);
        onClose();
    }
    
    return (
        <div className={styles.modal}>
            <form>
                <div>
                    <label htmlFor="username">Login</label>
                    <input
                        type="text"
                        id="username"
                        onChange={handleUserFromInputChange}
                    />
                </div>
            </form>
            <div>
                <button onClick={setUserInContextAndCloseModal}>Login</button>
            </div>
            <div>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}