import {useState} from "react";
import {Header} from "../../header/component.jsx";
import {RestaurantTabs} from "../../restaurant-tabs/component.jsx";
import {Restaurant} from "../../restaurant/component.jsx";
import {Footer} from "../../footer/component.jsx";
import {restaurants} from "../../../constants/mock.js";
import {ReviewForm} from "../../review-form/component.jsx";

export const RestaurantPage = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState( restaurants[0].id );

    const activeRestaurant = restaurants.find(
        ({id}) => id === activeRestaurantId
    );

    return (
        <div>
            <Header>
                <RestaurantTabs restaurants={restaurants} onSelect={setActiveRestaurantId}/>
            </Header>
            <Restaurant restaurant={activeRestaurant}/>
            <ReviewForm/>
            <Footer />
        </div>
    );
}