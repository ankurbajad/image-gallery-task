import { combineReducers } from "@reduxjs/toolkit";
import homeSlice from './HomeSlice'

const RootReducer = combineReducers({
    home: homeSlice
})
export default RootReducer;