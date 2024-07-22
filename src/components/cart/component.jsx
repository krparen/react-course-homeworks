import {Dish} from "../dish/component.jsx";

export const Cart = ({dishIds}) => {
    return (
        <div>
            {dishIds.length
                ?  dishIds.map(dishId => <Dish key={"cartdish" + dishId} dishId={dishId}/>) 
                : "Empty" }
        </div>
    );
}