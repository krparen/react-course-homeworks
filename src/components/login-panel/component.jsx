import {Button} from "../button/component.jsx";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.js";
import PortalExample from "../login-modal/component.jsx";

export const LoginPanel = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);

    return <div>
        {currentUser === undefined && <PortalExample/>}
        {currentUser !== undefined && <Button
            text={"Logout"}
            viewVariant={"login"}
            onClick={() => setCurrentUser(undefined)}>
        </Button>}
        <div>{currentUser?.name}</div>
    </div>
}