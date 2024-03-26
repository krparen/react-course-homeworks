import {Button} from "../button/component.jsx";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.js";
import {defaultUser, emptyUser} from "../../constants/users.js";

export const LoginPanel = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);

    return <div>
        <Button
            text={"Login"}
            viewVariant={"login"}
            onClick={() => setCurrentUser(defaultUser)}>
        </Button>
        {currentUser.name}
        <Button
            text={"Logout"}
            viewVariant={"login"}
            onClick={() => setCurrentUser(emptyUser)}>
        </Button>
    </div>
}