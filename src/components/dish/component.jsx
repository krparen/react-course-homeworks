import {Counter} from "../counter/component.jsx";
import {useState} from "react";

export const Dish = ({dish}) => {
    
    const [counter, setCounter] = useState(0);
    
    return (
        <div>
            <div>{dish.name}</div>
            <div>{dish.price}</div>
            <Counter value={counter} min={0} max={5} onChange={setCounter}/>
        </div>
    );
};