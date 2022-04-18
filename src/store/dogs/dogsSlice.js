import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDogs, fetchDogsImages } from "./dogsAPI";

/* Constants */
const urls = {
  static: {
    getPlaceholderImage: 'https://via.placeholder.com/100'
  },
} 
const INITIAL_LIKES = 0; 

/* State */
const initialState = {
  dogs: {},
  status: "idle",
};

/* Action Types */
const actionTypes = {
  fetchDogs: 'dogs/fetchDogs',
  fetchDogsImages: 'dogs/fetchDogsImages'
}

/* Actions */
export const getDogs = createAsyncThunk(actionTypes.fetchDogs, async () => {
  const response = await fetchDogs();
  return mutateDogsStructure(response);
});
export const getDogsImages = createAsyncThunk(
  actionTypes.fetchDogsImages,
  async (dogs) => {
    const response = await fetchDogsImages(dogs);
    return response;
  }
);

/* Slices */
export const dogsSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {
    increaseDogLike: (state, action) => {
      state.dogs[action.payload].likes++;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDogs.fulfilled, (state, action) => {
        state.status = "idle";
        state.dogs = action.payload;
      })
      .addCase(getDogsImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDogsImages.fulfilled, (state, action) => {
        state.status = "idle";
        state.dogs = action.payload;
      });
  },
});

export const { increaseDogLike } = dogsSlice.actions;

/* Selectors */
export const selectDogs = (state) => {
  return state.dogs.dogs;
};

/* Helpers */
const mutateDogsStructure = (dogs) => {
  const mutatedDogs = JSON.parse(JSON.stringify(dogs));
  Object.keys(mutatedDogs).forEach((key) => {
    mutatedDogs[key] = {
      likes: INITIAL_LIKES,
      image: urls.static.getPlaceholderImage,
    };
  });
  return mutatedDogs;
};

export default dogsSlice.reducer;