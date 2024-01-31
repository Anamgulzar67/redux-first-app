import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
const store =configureStore({
    reducer: rootReducer, // Pass the rootReducer directly
    // Other options can be added here, such as middleware
  },window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store; 

