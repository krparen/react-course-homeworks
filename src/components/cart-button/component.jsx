import {useRef, useState} from "react";
import {Button} from "../button/component.jsx";
import {createPortal} from "react-dom";
import styles from "./styles.module.scss";
import {CartContainer} from "../cart/container.jsx";

export const CartButton = ({amount}) => {
    const [coordinates, setCoordinates] = useState(null);
    const buttonRef = useRef();

    const toggleCartModal = () => {
        if (coordinates) {
            setCoordinates(null);
            return;
        }

        const {bottom, left} = buttonRef.current.getBoundingClientRect();

        setCoordinates( {left, top: bottom })
    };
    
    return (
      <>
         <Button ref={buttonRef} onClick={toggleCartModal}>
             {amount}
         </Button>
          {coordinates && 
                createPortal(
                    <div style={coordinates} className={styles.modal}>
                        <CartContainer/>
                    </div>,
                    document.getElementById("popoverContainer")
                )}
      </>  
    );
};