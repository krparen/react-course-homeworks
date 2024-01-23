import { Layout } from "./components/layout/component";
import { restaurants } from "./constants/mock";
import {Restaurant} from "./components/restaurant/component.jsx";

export const App = () => {
    return (
        <Layout>
            {restaurants.map((restaurant) => (
                <Restaurant restaurant={restaurant} />
            ))}
        </Layout>
    );
};