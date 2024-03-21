import {useContext, useState} from "react";
import {Header} from "../../header/component.jsx";
import {RestaurantTabs} from "../../restaurant-tabs/component.jsx";
import {Restaurant} from "../../restaurant/component.jsx";
import {Footer} from "../../footer/component.jsx";
import {restaurants} from "../../../constants/mock.js";
import {ReviewForm} from "../../review-form/component.jsx";
import {Button} from "../../button/component.jsx";
import {UserContext} from "../../../contexts/user.js";

export const RestaurantPage = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

    const activeRestaurant = restaurants.find(
        ({id}) => id === activeRestaurantId
    );

    const [currentUser, setCurrentUser] = useState({"name": "", "password": ""});

    const defaultUser = {"name": "George", "password": "12345"}

    return (
        <UserContext.Provider value={currentUser}>
            <div>
                <Header>
                    <Button text={"Login"} viewVariant={"login"}
                            onClick={
                                () => {
                                    setCurrentUser(defaultUser);
                                    console.log("user in context: ", currentUser)
                                }
                            }
                    ></Button>
                    <RestaurantTabs restaurants={restaurants} onSelect={setActiveRestaurantId}/>
                </Header>
                <Restaurant restaurant={activeRestaurant}/>
                <ReviewForm/>
                <Footer/>
            </div>
        </UserContext.Provider>
    );
}