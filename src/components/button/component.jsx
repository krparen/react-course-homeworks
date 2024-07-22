import styles from "./styles.module.scss";
import classNames from "classnames";
import {forwardRef} from "react";

const ButtonViewVariant = {
    ["tab"]: styles.tab,
    ["counter"]: styles.counter,
    ["login"]: styles.login,
}

export const Button = forwardRef(function Button(
    {
        text,
        onClick,
        isDisabled,
        viewVariant
    }, ref) {
    return (
        <button
            ref={ref}
            className={classNames(ButtonViewVariant[viewVariant] || ButtonViewVariant["tab"])}
            onClick={onClick}
            disabled={isDisabled}
        >
            {text}
        </button>
    );
});