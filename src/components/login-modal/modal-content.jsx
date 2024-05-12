import styles from "./styles.module.scss";

export default function ModalContent({ onClose }) {
    return (
        <div className={styles.modal}>
            <div><h3>Im a modal dialog</h3></div>
            <form>
                <div>
                    <label htmlFor="username">Login</label>
                    <input
                        type="text"
                        id="username"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                    />
                </div>
            </form>
            <div>
                <button onClick={() => console.log("dratuti ya nenastoyashiy login")}>Login</button>
            </div>
            <div>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}