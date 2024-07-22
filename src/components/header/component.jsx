import {LoginPanel} from "../login-panel/component.jsx";
import styles from "./styles.module.scss"
import {CartButtonContainer} from "../cart-button/container.jsx";

export const Header = () => {
    return <header className={styles.root}>
        Header
        <LoginPanel/>
        <CartButtonContainer/>
    </header>
};