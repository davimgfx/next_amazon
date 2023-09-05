import { createSlice } from "@reduxjs/toolkit";

interface NextState{
    productData: StoreProduct[];
  favoriteData: StoreProduct[];
  allProducts: StoreProduct[];
  userInfo: null | string;
}

const initialState : NextState {
  productData: [],
  favoriteData: [],
  allProducts: [],
  userInfo: null,
};


export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const existingProduct = state.productData.find(
            (item: StoreProducts) => item._id === action.payload
        )
        if(existingProduct){
            existingProduct.quantity += action.payload.quantity
        }   
    },
  },
});

export const { addToCart } = nextSlice.actions;

export default nextSlice.reducer;
