import {useContext, useEffect, useState} from "react";
import {Header} from "../../header/component.jsx";
import {RestaurantTabs} from "../../restaurant-tabs/component.jsx";
import {Restaurant} from "../../restaurant/component.jsx";
import {Footer} from "../../footer/component.jsx";
import {ReviewForm} from "../../review-form/component.jsx";
import {UserContext} from "../../../contexts/user.js";
import {useDispatch, useSelector} from "react-redux";
import {selectRestaurantIds} from "../../../redux/entities/restaurant/selectors.js";
import {getRestaurants} from "../../../redux/entities/restaurant/thunks/get-restaurants.js";
import {selectIsLoading} from "../../../redux/ui/request/index.js";

export const RestaurantPage = () => {

    const [requestId, setRequestId] = useState();
    const isLoading = useSelector(
        (state) => {
            console.log("INSIDE USE SELECTOR: current request id value: ", requestId);
            const isTrulyLoading = selectIsLoading(state, requestId);
            console.log("INSIDE USE SELECTOR: selectIsLoading on evaluation moment: ", isTrulyLoading);
            const result = !requestId || isTrulyLoading;
            console.log("INSIDE USE SELECTOR: result of isLoading evaluation: ", result)
            return result;
        }
    )

    const restaurantIds = useSelector((state) => selectRestaurantIds(state));
    
    console.log("JUST PAGE: restaurant ids from selector: ", restaurantIds);

    const {currentUser} = useContext(UserContext);
    
    const [activeRestaurantId, setActiveRestaurantId] = useState();

    const dispatch = useDispatch();
    
    useEffect(() => {
        const requestId = dispatch(getRestaurants()).requestId;
        console.log("INSIDE USE EFFECT request id : ", requestId)
        setRequestId(requestId);
        setActiveRestaurantId(restaurantIds.size > 0 ? restaurantIds[0] : null);
    }, [dispatch, restaurantIds]);
    
    console.log("JUST PAGE: activeRestaurantId: ", activeRestaurantId);

    return (
        <div>
            {isLoading ?
                (<div>Loading all restaurants...</div>)
                :
                (<>
                    <Header/>
                    <RestaurantTabs restaurantIds={restaurantIds} onSelect={setActiveRestaurantId}/>
                    <Restaurant restaurantId={activeRestaurantId ? activeRestaurantId : restaurantIds[0]}/>
                    {currentUser !== undefined && <ReviewForm/>}
                    <Footer/>
                </>)
            }
        </div>
    );
}