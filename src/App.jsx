import {RestaurantPage} from "./components/pages/restaurant-page/component.jsx";
import {Layout} from "./components/layout/component.jsx";
import {useState} from "react";
import {store} from "./redux"
import {UserContext} from "./contexts/user.js";
import {Provider} from "react-redux";

export const App = () => {
    const [currentUser, setCurrentUser] = useState();

    return (
        <Provider store={store}>
            <UserContext.Provider value={{currentUser, setCurrentUser}}>
                <Layout>
                    <RestaurantPage/>
                </Layout>
            </UserContext.Provider>
        </Provider>
    );
};