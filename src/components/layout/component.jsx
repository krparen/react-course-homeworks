import styles from "./styles.module.scss";

export const Layout = ({children}) => {

    return (
        <div>
            {children}
            <div id="modal-container"/>
            <div id="popup-container"/>
            <div id="tooltip-container"/>
            <div id="popoverContainer" className={styles.popoverContainer}/>
        </div>
    );
};
