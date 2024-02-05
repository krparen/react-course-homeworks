import {Tab} from "../tab/component.jsx";

export const RestaurantTabs = ({restaurants, onSelect}) => {
  return <div>
    {restaurants.map(
        restaurant => <Tab title={restaurant.name} onClick={() => onSelect(restaurant.id)}/>
    )}
  </div>
}