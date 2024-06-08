import {LoginPanel} from "../login-panel/component.jsx";
import styles from "./styles.module.scss"

export const Header = () => {
    return <header className={styles.root}>
        Header
        <LoginPanel/>
    </header>
};