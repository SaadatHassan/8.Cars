import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    data: [],
    searchTerm: "",
  },
  reducers: {
    addCar: (state, action) => {
      // Assume that
      // action.payload is an object with the following properties:
      // name: string,
      // cost: number
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar: (state, action) => {
      // Assume that
      // action.payload is an object with the following properties:
      // id: string
      state.data = state.data.filter((car) => car.id !== action.payload);
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
