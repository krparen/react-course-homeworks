import { Footer } from "../footer/component";
import { Header } from "../header/component";
import {Restaurant} from "../restaurant/component.jsx";
import {useState} from "react";
import {RestaurantTabs} from "../restaurant-tabs/component.jsx";

export const Layout = ({ restaurants}) => {

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
            <Footer />
        </div>
    );
};
