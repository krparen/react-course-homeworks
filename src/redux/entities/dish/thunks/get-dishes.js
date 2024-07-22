import {createAsyncThunk} from "@reduxjs/toolkit";
import {ROOT_URL} from "../../../../constants/api-urls.js";
import {selectDishIds} from "../selectors.js";

export const getDishes = createAsyncThunk(
    "dish/getDishes",
    async () => {
        const response = await fetch(ROOT_URL + "/dishes");
        console.log("INSIDE GET DISHES: fetch reply: ", response);
        return response.json();
    },
    {
        condition: (_, {getState}) => {
            console.log("INSIDE GET DISHES: evaluating condition in getDishes...");
            return !selectDishIds((getState()))?.length;
        }
    }
);