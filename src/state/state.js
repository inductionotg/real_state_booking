import {configureStore} from "@reduxjs/toolkit"
import listingReducer from "./listingSlice"
const store = configureStore({
    reducer:{
        listings:listingReducer
    }
})
export {store}