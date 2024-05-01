import styles from "./styles.module.scss";

export default function ModalContent({ onClose }) {
    return (
        <div className={styles.modal}>
            <div>Im a modal dialog</div>
            <button onClick={onClose}>Close</button>
        </div>
    );
}