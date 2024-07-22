import {createAsyncThunk} from "@reduxjs/toolkit";
import {ROOT_URL} from "../../../../constants/api-urls.js";
import {selectReviewIds} from "../selectors.js";

export const getReviews = createAsyncThunk(
    "review/getReviews",
    async () => {
        const response = await fetch(ROOT_URL + "/reviews");
        console.log("INSIDE GET REVIEWS: fetch reply: ", response);
        return response.json();
    },
    {
        condition: (_, {getState}) => {
            console.log("INSIDE GET REVIEWS: evaluating condition in getReviews...");
            return !selectReviewIds((getState())).length;
        }
    }
)