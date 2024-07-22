import {useSelector} from "react-redux";
import {selectCartProductIds} from "../../redux/ui/cart/index.js";
import {Cart} from "./component.jsx";

export const CartContainer = () => {
    const dishIds = useSelector(selectCartProductIds);
    return <Cart dishIds={dishIds}/>
}