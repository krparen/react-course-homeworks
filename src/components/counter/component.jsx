import {Button} from "../button/component.jsx";
import {useState} from "react";

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    return <span>
        <Button
            text={"-"}
            onClick={() => setCounter(counter - 1)}
            isDisabled={counter <= 0}
            viewVariant={"secondary"}
        >
        </Button>
        <span>{counter}</span>
        <Button
            text={"+"}
            onClick={() => setCounter(counter + 1)}
            isDisabled={counter >= 5}
            viewVariant={"secondary"}
        >
        </Button>
    </span>
}