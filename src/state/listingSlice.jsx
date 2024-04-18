import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/api";
import axios from "axios";
const initialState = {
    listings:[],
    error:null,
    favouriteListingId:[],
    status:'idle'
}
const listingSlice = createSlice({
    name:'listings',
    initialState,
    reducers:{
        addFavoriteListings:(state,action)=>{
            console.log("stae",state,action)
            state.favouriteListingId.push(action.payload)
        },
        removeFavoriteListings:(state,action)=>{
            state.favouriteListingId = state.favouriteListingId.filter((id)=>id!==action.payload)
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchListings.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchListings.fulfilled,(state,action)=>{
            state.status='succceeded';
            state.listings=action.payload
        })
        .addCase(fetchListings.rejected,(state,action)=>{
            if(axios.isCancel(action.payload)){
                return 
            }
            state.status = 'failed'
            
        })
    }
})

export const fetchListings = createAsyncThunk(
    'listings/fetchListings',
    async(options)=>{
        const response = await api.get('/api/listings',options)
        return response.data
    })

export const {addFavoriteListings,removeFavoriteListings} = listingSlice.actions
export default listingSlice.reducer