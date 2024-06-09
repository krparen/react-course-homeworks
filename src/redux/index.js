import { combineSlices, configureStore } from "@reduxjs/toolkit";
import {restaurantSlice} from "./entities/restaurant/index.js";

export const store = configureStore({
    reducer: combineSlices(restaurantSlice)
});