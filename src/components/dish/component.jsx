import {Counter} from "../counter/component.jsx";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entities/dish/selectors.js";

export const Dish = ({dishId}) => {
    
    const dish = useSelector(state => selectDishById(state, dishId));
    
    const [counter, setCounter] = useState(0);
    
    return (
        <div>
            <div>{dish.name}</div>
            <div>{dish.price}</div>
            <Counter value={counter} min={0} max={5} onChange={setCounter}/>
        </div>
    );
};