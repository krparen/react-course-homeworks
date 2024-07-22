import {Counter} from "../counter/component.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectDishById} from "../../redux/entities/dish/selectors.js";
import {decrement, increment, selectProductAmountById} from "../../redux/ui/cart/index.js";

export const Dish = ({dishId}) => {
    
    const dish = useSelector(state => selectDishById(state, dishId));
    const amount = useSelector(state => selectProductAmountById(state, dishId));
    
    const dispatch = useDispatch();
    
    return (
        <div>
            <div>{dish.name}</div>
            <div>{dish.price}</div>
            <Counter
                value={amount}
                min={0} 
                max={5} 
                onIncrement={() => dispatch(increment(dishId))}
                onDecrement={() => dispatch(decrement(dishId))}
            />
        </div>
    );
};