import {createAsyncThunk} from "@reduxjs/toolkit";
import {ROOT_URL} from "../../../../constants/api-urls.js";
import {selectRestaurantIds} from "../selectors.js";

export const getRestaurants = createAsyncThunk(
    "restaurant/getRestaurants",
    async () => {
        const response = await fetch(ROOT_URL + "/restaurants");
        console.log("fetch reply: ", response);
        return response.json();
    },
    {
        condition: (_, {getState}) => {
            console.log("evaluating condition in getRestaurants...");
            return !selectRestaurantIds((getState()))?.length;
        }
    }
);