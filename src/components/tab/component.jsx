import {Button} from "../button/component.jsx";

export const Tab = ({title, onClick}) => {
    return <Button text={title} onClick={onClick} viewVariant={"tab"}></Button>
}