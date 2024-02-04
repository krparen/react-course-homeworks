export const Button = ({text, onClick, isDisabled}) => {
    return <button onClick={onClick} disabled={isDisabled}>{text}</button>;
};