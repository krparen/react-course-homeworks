import {Button} from "../button/component.jsx";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.js";
import {defaultUser} from "../../constants/users.js";

export const LoginPanel = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);

    return <div>
        <Button
            text={"Login"}
            viewVariant={"login"}
            onClick={() => setCurrentUser(defaultUser)}
            isVisible={currentUser === undefined}>
        </Button>
        {currentUser?.name}
        <Button
            text={"Logout"}
            viewVariant={"login"}
            onClick={() => setCurrentUser(undefined)}
            isVisible={currentUser !== undefined}>
        </Button>
    </div>
}