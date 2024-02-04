import {Button} from "../button/button.jsx";
import {useState} from "react";

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    return <span>
        <Button
            text={"-"}
            onClick={() => setCounter(counter - 1)}
            isDisabled={counter <= 0}>
        </Button>
        <span>{counter}</span>
        <Button
            text={"+"}
            onClick={() => setCounter(counter + 1)}
            isDisabled={counter >= 5}>
        </Button>
    </span>
}