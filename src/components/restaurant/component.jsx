import {Review} from "../review/component.jsx";
import {Dishes} from "../dishes/component.jsx";

export const Restaurant = ({restaurant}) => {
    return (
        <div>
            <h1>{restaurant.name}</h1>
            <div>{<Dishes dishes={restaurant.menu}/>}</div>
            <h3>Отзывы</h3>
            <ul>
                {restaurant.reviews.map((review) => (
                    <Review review={review}/>
                ))}
            </ul>
        </div>
    );
};