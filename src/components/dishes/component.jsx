import {Dish} from "../dish/component.jsx";
import {Counter} from "../counter/component.jsx";

export const Dishes = ({dishes: dishes}) => {
    return (
        <div>
            <h3>Меню</h3>
            <ul>
                {dishes.map(dish =>
                    <li>
                        <span><Dish dish={dish}/><Counter/></span>
                    </li>
                )}
            </ul>
        </div>
    );
};