import {RestaurantPage} from "./components/pages/restaurant-page/component.jsx";
import {Layout} from "./components/layout/component.jsx";
import {useState} from "react";
import {UserContext} from "./contexts/user.js";

export const App = () => {
    const [currentUser, setCurrentUser] = useState();

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            <Layout>
                <RestaurantPage/>
            </Layout>
        </UserContext.Provider>
    );
};