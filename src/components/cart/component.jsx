export const Cart = ({dishIds}) => {
    return (
        <div>
            {dishIds.length
                ?  "Заглушка блюд в корзине" 
                : "Заглушка блюд в корзине" }
        </div>
    );
}