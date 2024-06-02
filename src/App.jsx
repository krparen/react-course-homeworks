import {RestaurantPage} from "./components/pages/restaurant-page/component.jsx";
import {Layout} from "./components/layout/component.jsx";
import {useState} from "react";
import {UserContext} from "./contexts/user.js";

export const App = () => {

    const [currentUser, setCurrentUser] = useState(undefined);
    const value = {currentUser, setCurrentUser};

    return (
        <UserContext.Provider value={value}>
            <Layout>
                <RestaurantPage/>
            </Layout>
        </UserContext.Provider>
    );
};