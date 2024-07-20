import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getReviews} from "./thunks/get-reviews.js";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
    name: "review",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder.addCase(getReviews.fulfilled, (state, {payload}) => {
            console.log("payload when getReviews fulfilled:", payload);
            entityAdapter.setAll(state, payload);
        }) 
});