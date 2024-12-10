import { configureStore } from "@reduxjs/toolkit";
import privacySlice from "./privacy";
import counterSlice from "./counter";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export default counterStore;

// const INITIAL_VALUE = {
//   counter: 0,
//   privacy: false,
// };

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if (action.type === "INCREMENT") {
//     return { ...store, counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { ...store, counter: store.counter - 1 };
//   } else if (action.type === "ADD") {
//     return { ...store, counter: store.counter + Number(action.payload.number) };
//   } else if (action.type === "SUBTRACT") {
//     return { ...store, counter: store.counter - Number(action.payload.number) };
//   } else if (action.type === "PRIVACY_TOGGLE") {
//     return { ...store, privacy: !store.privacy };
//   }
//   return store;
// };
