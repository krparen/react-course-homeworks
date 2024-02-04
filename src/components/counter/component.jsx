import {Button} from "../button/component.jsx";

export const Counter = ({value, min = 0, max = 5, onChange}) => {
    
    return <div>
        <Button
            text={"-"}
            onClick={() => onChange(value - 1)}
            isDisabled={value <= min}
            viewVariant={"counter"}
        >
        </Button>
        {value}
        <Button
            text={"+"}
            onClick={() => onChange(value + 1)}
            isDisabled={value >= max}
            viewVariant={"counter"}
        >
        </Button>
    </div>
}