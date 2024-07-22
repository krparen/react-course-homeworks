import {useSelector} from "react-redux";
import {selectProductAmount} from "../../redux/ui/cart/index.js";
import {CartButton} from "./component.jsx";

export const CartButtonContainer = () => {
    const amount = useSelector(selectProductAmount);
    return <CartButton amount={amount}/>
};