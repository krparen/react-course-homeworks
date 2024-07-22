import {Dish} from "../dish/component.jsx";

export const Dishes = ({dishes: dishes}) => {
    return (
        <div>
            <h3>Меню</h3>
            <ul>
                {dishes.map(dish =>
                    <li key={"dish" + dish.id}>
                        <div><Dish dishId={dish.id}/></div>
                    </li>
                )}
            </ul>
        </div>
    );
};