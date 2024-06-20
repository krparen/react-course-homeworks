import {Tab} from "../tab/component.jsx";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/selectors.js";

export const RestaurantTabs = ({restaurantIds, onSelect}) => {
  
  const restaurants = useSelector(state => {
    return restaurantIds.map(restaurantId => selectRestaurantById(state, restaurantId));
  })
  
  return <div>
    {restaurants.map(
        restaurant => <Tab title={restaurant.name} onClick={() => onSelect(restaurant.id)}/>
    )}
  </div>
}