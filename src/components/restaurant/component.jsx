import {MenuEntry} from "./menu_entry/MenuEntry.jsx";

export const Restaurant = ({restaurant}) => {
    return (
        <div>
            <h1>{restaurant.name}</h1>
            <h3>Меню</h3>
            <ul>
                {restaurant.menu.map((menuItem) => (
                    <MenuEntry menu={menuItem} />
                ))}
            </ul>
        </div>
    );
};