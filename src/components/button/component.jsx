import styles from "./styles.module.scss";
import classNames from "classnames";

const ButtonViewVariant = {
    ["tab"]: styles.tab,
    ["counter"]: styles.counter,
    ["login"]: styles.login,
}

export const Button = ({text, onClick, isDisabled, viewVariant, isVisible = true}) => {
    return isVisible &&
        (
            <button
                className={classNames(ButtonViewVariant[viewVariant] || ButtonViewVariant["tab"])}
                onClick={onClick}
                disabled={isDisabled}
            >
                {text}
            </button>
        );
};