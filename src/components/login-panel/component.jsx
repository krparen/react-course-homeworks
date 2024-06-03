import {Button} from "../button/component.jsx";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.js";
import LoginButtonAndPortal from "../login-modal/component.jsx";

export const LoginPanel = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);

    return <div>
        {currentUser ? (<>
                <span>{currentUser.username}</span>
                <Button
                    text={"Logout"}
                    viewVariant={"login"}
                    onClick={() => setCurrentUser(undefined)}>
                </Button>
            </>) :
            (<LoginButtonAndPortal/>)
        }
    </div>
}