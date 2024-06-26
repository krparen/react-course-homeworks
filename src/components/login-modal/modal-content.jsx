import styles from "./styles.module.scss";
import {useContext, useReducer, useRef} from "react";
import {UserContext} from "../../contexts/user.js";
import {createPortal} from "react-dom";

export default function ModalContent({onClose}) {

    const modalContainer = useRef(document.getElementById("modal-container"));

    const BASE_INPUT_STATE = {username: "", email: ""};

    const reducer = (state, {type, payload}) => {
        switch (type) {
            case "setUsername":
                return {
                    ...state,
                    username: payload
                }
            case "setEmail":
                return {
                    ...state,
                    email: payload
                }
            default:
                return state;
        }
    }

    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [userFromReducer, dispatch] = useReducer(reducer, BASE_INPUT_STATE, () => {
    });

    const setUserInContextAndCloseModal = () => {
        console.log("user from reducer on click button moment: ", userFromReducer);
        if (!userFromReducer.username) {
            alert("Please fill USERNAME for login.");
        } else if (!userFromReducer.email) {
            alert("Please fill EMAIL for login.");
        } else {
            setCurrentUser(userFromReducer);
            onClose();
        }
    }

    return (
        createPortal(
            <>
                <div onClick={onClose} className={styles.overlay}/>
                <div className={styles.modal}>
                    <form>
                        <div>
                            <label htmlFor="username">Login</label>
                            <input
                                type="text"
                                id="username"
                                value={userFromReducer?.username}
                                onChange={(event) => dispatch({type: "setUsername", payload: event.target.value})}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                value={userFromReducer?.email}
                                onChange={(event) => dispatch({type: "setEmail", payload: event.target.value})}
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
            </>,
            modalContainer.current
        )
    );
}