import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRestaurants } from "./restaurantAPI";

/* State */
const initialState = {
  restaurants: [
    ["Hummus", "Hamburger", "Pasta", "Falafel", "Sushi"],
    ["Hummus", "Hamburger", "Pasta", "Falafel", "Sushi"],
    ["Hummus", "Hamburger", "Pasta", "Falafel", "Sushi"],
    ["Hummus", "Hamburger", "Pasta", "Falafel", "Sushi"],
    ["Hummus", "Hamburger", "Pasta", "Falafel", "Sushi"],
  ],
  status: "idle",
};

/* Action Types */
const actionTypes = {
  fetchRestaurants: "restaurants/fetchRestaurants",
};

/* Actions */
export const getRestaurants = initialState.restaurants;

/* Slices */
export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    increaseRestaurantsLike: (state, action) => {
      state.restaurants[action.payload].likes++;
    },
  },
});

/* Selectors */
export const selectRestaurants = (state) => {
  return state.restaurants.restaurants;
};

export default restaurantsSlice.reducer;
