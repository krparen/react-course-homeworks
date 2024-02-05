import {Dish} from "../dish/component.jsx";
import {Counter} from "../counter/component.jsx";

export const Dishes = ({dishes: dishes}) => {
    return (
        <div>
            <h3>Меню</h3>
            <ul>
                {dishes.map(dish =>
                    <li>
                        <div><Dish dish={dish}/></div>
                    </li>
                )}
            </ul>
        </div>
    );
};