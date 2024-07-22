import {Button} from "../button/component.jsx";

export const Counter = ({value, min = 0, max = 5, onIncrement, onDecrement}) => {
    
    return <div>
        <Button
            text={"-"}
            onClick={() => onDecrement()}
            isDisabled={value <= min}
            viewVariant={"counter"}
        >
        </Button>
        {value}
        <Button
            text={"+"}
            onClick={() => onIncrement()}
            isDisabled={value >= max}
            viewVariant={"counter"}
        >
        </Button>
    </div>
}