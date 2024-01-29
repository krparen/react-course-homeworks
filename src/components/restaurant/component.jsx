import {Dish} from "../dish/component.jsx";
import {Review} from "../review/component.jsx";

export const Restaurant = ({restaurant}) => {
    return (
        <div>
            <h1>{restaurant.name}</h1>
            <h3>Меню</h3>
            <ul>
                {restaurant.menu.map((menuItem) => (
                    <Dish menu={menuItem}/>
                ))}
            </ul>
            <h3>Отзывы</h3>
            <ul>
                {restaurant.reviews.map((review) => (
                    <Review review={review}/>
                ))}
            </ul>
        </div>
    );
};