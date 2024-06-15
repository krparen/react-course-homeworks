import {Dishes} from "../dishes/component.jsx";
import {Reviews} from "../reviews/component.jsx";
import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entities/dish/selectors.js";
import {selectReviewById} from "../../redux/entities/review/selectors.js";
import {selectRestaurantById} from "../../redux/entities/restaurant/selectors.js";

export const Restaurant = ({restaurantId}) => {

    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
    
    const denormalizedMenu = useSelector((state) => {
            return restaurant.menu.map(dishId => selectDishById(state, dishId));
        }
    );
    
    const denormalizedReviews = useSelector((state) => {
        return restaurant.reviews.map(reviewId => selectReviewById(state, reviewId));
    });

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <div>{<Dishes dishes={denormalizedMenu}/>}</div>
            <div>{<Reviews reviews={denormalizedReviews}/>}</div>
        </div>
    );
};