import {useContext, useState} from "react";
import {Header} from "../../header/component.jsx";
import {RestaurantTabs} from "../../restaurant-tabs/component.jsx";
import {Restaurant} from "../../restaurant/component.jsx";
import {Footer} from "../../footer/component.jsx";
import {ReviewForm} from "../../review-form/component.jsx";
import {UserContext} from "../../../contexts/user.js";
import {useSelector} from "react-redux";
import {selectRestaurantIds} from "../../../redux/entities/restaurant/selectors.js";

export const RestaurantPage = () => {
    const restaurantIds = useSelector(selectRestaurantIds);
    
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

    const {currentUser} = useContext(UserContext);

    return (
        <div>
            <Header/>
            <RestaurantTabs restaurantIds={restaurantIds} onSelect={setActiveRestaurantId}/>
            <Restaurant restaurantId={activeRestaurantId}/>
            {currentUser !== undefined && <ReviewForm/>}
            <Footer/>
        </div>
    );
}