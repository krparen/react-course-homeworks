import {createSlice} from "@reduxjs/toolkit";
import {createEntityAdapter} from "@reduxjs/toolkit";
import {getRestaurants} from "./thunks/get-restaurants.js";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder.addCase(getRestaurants.fulfilled, (state, {payload}) => {
            console.log("payload when getRestaruants fulfilled: ", payload);
            entityAdapter.setAll(state, payload);
        }),
});