import {Button} from "../button/component.jsx";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.js";

export const LoginPanel = ({onLogin, onLogout}) => {
    //const currentUser = useContext(UserContext);

    return <div>
        <Button text={"Login"} viewVariant={"login"} onClick={() => console.log("on login")}></Button>
        <Button text={"Logout"} viewVariant={"login"} onClick={() => console.log("on logout")}></Button>
    </div>
}