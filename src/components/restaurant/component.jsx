import {Dishes} from "../dishes/component.jsx";
import {Reviews} from "../reviews/component.jsx";

export const Restaurant = ({restaurant}) => {
    return (
        <div>
            <h1>{restaurant.name}</h1>
            <div>{<Dishes dishes={restaurant.menu}/>}</div>
            <div>{<Reviews reviews={restaurant.reviews}/>}</div>
        </div>
    );
};