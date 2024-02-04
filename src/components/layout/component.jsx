import { Footer } from "../footer/component";
import { Header } from "../header/component";
import {Button} from "../button/button.jsx";
import {Restaurant} from "../restaurant/component.jsx";
import {useState} from "react";

export const Layout = ({ restaurants}) => {

    const [state, setState] = useState( restaurants[0] );
    
    return (
        <div>
            <Header>
                {restaurants.map(
                    restaurant => <Button text={restaurant.name} onClick={() => setState(restaurant)}/>
                )}
            </Header>
                <Restaurant restaurant={state}/>
            <Footer />
        </div>
    );
};
