import {Dishes} from "../dishes/component.jsx";
import {Reviews} from "../reviews/component.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectDishById} from "../../redux/entities/dish/selectors.js";
import {selectReviewById} from "../../redux/entities/review/selectors.js";
import {selectRestaurantById} from "../../redux/entities/restaurant/selectors.js";
import {useEffect, useState} from "react";
import {selectIsLoading} from "../../redux/ui/request/index.js";
import {getDishes} from "../../redux/entities/dish/thunks/get-dishes.js";
import {getReviews} from "../../redux/entities/review/thunks/get-reviews.js";

export const Restaurant = ({restaurantId}) => {

    const [requestId, setRequestId] = useState();
    const [reviewRequestId, setReviewRequestId] = useState();
    const isDishesLoading = useSelector(
        (state) => {
            console.log("INSIDE DISH USE SELECTOR FOR DISHES: current request id value: ", requestId);
            const isTrulyLoading = selectIsLoading(state, requestId);
            console.log("INSIDE DISH USE SELECTOR FOR DISHES: selectIsLoading on evaluation moment: ", isTrulyLoading);
            const result = !requestId || isTrulyLoading;
            console.log("INSIDE DISH USE SELECTOR FOR DISHES: result of isDishesLoading evaluation: ", result)
            return result;
        }
    );

    const isReviewsLoading = useSelector(
        (state) => {
            console.log("INSIDE DISH USE SELECTOR FOR REVIEWS: current request id value: ", reviewRequestId);
            const isTrulyLoading = selectIsLoading(state, reviewRequestId);
            console.log("INSIDE DISH USE SELECTOR FOR REVIEWS: selectIsLoading on evaluation moment: ", isTrulyLoading);
            const result = !reviewRequestId || isTrulyLoading;
            console.log("INSIDE DISH USE SELECTOR FOR REVIEWS: result of isReviewsLoading evaluation: ", result)
            return result;
        }
    );

    const dispatch = useDispatch();
    useEffect(() => {
        const requestId = dispatch(getDishes()).requestId;
        console.log("INSIDE DISH USE EFFECT dishes request id: ", requestId);
        setRequestId(requestId);
    }, [dispatch]);
    useEffect(() => {
        const requestId = dispatch(getReviews()).requestId;
        console.log("INSIDE DISH USE EFFECT reviews request id: ", requestId);
        setReviewRequestId(requestId);
    }, [dispatch]);


    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

    const denormalizedMenu = useSelector((state) => {
            console.log("INSIDE RESTAURANT COMPONENT: current restaurant id =", restaurantId)
            console.log("INSIDE RESTAURANT COMPONENT: current restaurant =", restaurant)
            return restaurant.menu.map(dishId => selectDishById(state, dishId));
        }
    );
    
    console.log("INSIDE RESTAURANT COMPONENT:  denormalized menu: ", denormalizedMenu);

    const denormalizedReviews = useSelector((state) => {
        return restaurant.reviews.map(reviewId => selectReviewById(state, reviewId));
    });

    console.log("INSIDE RESTAURANT COMPONENT:  denormalized reviews: ", denormalizedReviews);
    
    if (isDishesLoading) {
        return (<div>Loading all dishes...</div>);
    }
    
    if (isReviewsLoading) {
        return (<div>Loading all reviews...</div>);
    }

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <div>{<Dishes dishes={denormalizedMenu}/>}</div>
            <div>{<Reviews reviews={denormalizedReviews}/>}</div>
        </div>
    );
};