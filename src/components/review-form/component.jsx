import styles from "./styles.module.scss";

export const ReviewForm = () => {
    return (
        <div>
            <h3>Обратная связь</h3>
            <form className={styles.root}>
                <div className={styles.field}>
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="text">Текст</label>
                    <input type="text" id="text"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="rating">Рейтинг</label>
                    <input
                        type="number"
                        id="rating"
                        min={1}
                        max={5}
                    />
                </div>
            </form>
        </div>
    )
}