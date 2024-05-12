import styles from "./styles.module.scss";

export default function ModalContent({ onClose }) {
    return (
        <div className={styles.modal}>
            <div>Im a modal dialog</div>
            <div>
                <button onClick={() => console.log("dratuti ya nenastoyashiy login")}>Login</button>
            </div>
            <div>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}