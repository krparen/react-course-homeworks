import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {ROOT_URL} from "../../../../constants/api-urls.js";
import {selectRestaurantIds} from "../selectors.js";

export const getRestaurants = createAsyncThunk(
    "restaurant/getRestaurants",
    async () => {
        let response =  await axios.get(ROOT_URL + "/restaurants");
        console.log("axios reply: ", response);
        return response.data;
    },
    {condition: (_, {getState}) => !selectRestaurantIds((getState()))?.length}
);