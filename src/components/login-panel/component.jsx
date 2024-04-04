import {Button} from "../button/component.jsx";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.js";
import {defaultUser} from "../../constants/users.js";

export const LoginPanel = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);

    return <div>
        {currentUser === undefined && <Button
            text={"Login"}
            viewVariant={"login"}
            onClick={() => setCurrentUser(defaultUser)}>
        </Button>}
        {currentUser !== undefined && <Button
            text={"Logout"}
            viewVariant={"login"}
            onClick={() => setCurrentUser(undefined)}>
        </Button>}
        <div>{currentUser?.name}</div>
    </div>
}