import styles from "./styles.module.scss";
import classNames from "classnames";

const ButtonViewVariant = {
    ["primary"]: styles.primary,
    ["secondary"]: styles.secondary,
}

export const Button = ({text, onClick, isDisabled, viewVariant}) => {
    return <button
        className={classNames(ButtonViewVariant[viewVariant] || ButtonViewVariant["primary"])}
        onClick={onClick}
        disabled={isDisabled}
    >
        {text}
    </button>;
};