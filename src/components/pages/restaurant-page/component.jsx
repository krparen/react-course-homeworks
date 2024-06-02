import {useContext, useState} from "react";
import {Header} from "../../header/component.jsx";
import {RestaurantTabs} from "../../restaurant-tabs/component.jsx";
import {Restaurant} from "../../restaurant/component.jsx";
import {Footer} from "../../footer/component.jsx";
import {restaurants} from "../../../constants/mock.js";
import {ReviewForm} from "../../review-form/component.jsx";
import {LoginPanel} from "../../login-panel/component.jsx";
import {UserContext} from "../../../contexts/user.js";

export const RestaurantPage = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

    const activeRestaurant = restaurants.find(
        ({id}) => id === activeRestaurantId
    );

    const {currentUser} = useContext(UserContext);

    return (
        <div>
            <Header>
                <LoginPanel>
                </LoginPanel>
                <RestaurantTabs restaurants={restaurants} onSelect={setActiveRestaurantId}/>
            </Header>
            <Restaurant restaurant={activeRestaurant}/>
            {currentUser !== undefined && <ReviewForm/>}
            <Footer/>
        </div>
    );
}