import { configureStore } from "@reduxjs/toolkit";
import {
  addCar,
  removeCar,
  changeSearchTerm,
  carsReducer,
} from "./slices/carsSlice";
import { changeName, changeCost, formReducer } from "./slices/formSlice";

export const store = configureStore({
  //this is the actual state of the store
  //  state: {
  //     cars: [{}],
  //     form: {
  //         name:
  //         cost:
  //      }
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { addCar, removeCar, changeSearchTerm, changeName, changeCost };
