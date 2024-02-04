import { Footer } from "../footer/component";
import { Header } from "../header/component";
import {Button} from "../button/button.jsx";
import {Restaurant} from "../restaurant/component.jsx";

export const Layout = ({ restaurants}) => {
    return (
        <div>
            <Header>
                {restaurants.map(
                    restaraunt => <Button text={restaraunt.name}/>
                )}
            </Header>
            <div><Restaurant restaurant={restaurants[0]}/></div>
            <Footer />
        </div>
    );
};
