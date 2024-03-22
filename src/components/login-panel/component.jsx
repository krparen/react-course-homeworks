import {Button} from "../button/component.jsx";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.js";

export const LoginPanel = ({onLogin, onLogout}) => {
    const currentUser = useContext(UserContext);

    return <div>
        <Button
            text={"Login"}
            viewVariant={"login"}
            onClick={
                () => {
                    onLogin();
                    console.log("on login");
                    console.log("current context user: ", currentUser);
                }
            }>
        </Button>
        <Button
            text={"Logout"}
            viewVariant={"login"}
            onClick={
                () => {
                    onLogout();
                    console.log("on logout");
                    console.log("current context user: ", currentUser);
                }
            }>
        </Button>
    </div>
}