export const ReviewForm = () => {
    return <div>
        <h3>Обратная связь</h3>
        <form>
            <label htmlFor="name">Имя</label>
            <input type="text" id="name"/>
            <label htmlFor="text">Текст</label>
            <input type="text" id="text"/>
            <label htmlFor="rating">Рейтинг</label>
            <input type="text" id="rating"/>
        </form>
    </div>
}