import { createSlice } from "@reduxjs/toolkit";
import { StoreProduct } from "@/types/types";

interface NextState {
  productData: StoreProduct[];
  favoriteData: StoreProduct[];
  user: null | string;
  isLoading: boolean;
}

const initialState: NextState = {
  productData: [],
  favoriteData: [],
  user: null,
  isLoading: true,
};

export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    //Add to cart
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    //Add to favorite
    addToFavorite: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.favoriteData.push(action.payload);
      }
    },

    // Delete product
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },

    // Delete favorite products
    deleteFavorite: (state, action) => {
      state.favoriteData = state.favoriteData.filter(
        (item) => item._id !== action.payload
      );
    },

    //Increase the quantity of the product
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },

    //Decrease the quantity of the product
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity = 1;
      } else {
        existingProduct!.quantity--;
      }
    },

    // Reset the Cart
    resetTheCart: (state) => {
      state.productData = [];
    },

    // Login User
    loginUser: (state, action) => {
      state.user = action.payload;
    },

    //Logout User
    logOutUser: (state) => {
      state.user = null;
    },
    // Set the user loading if false = no user, if true  = user
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  addToCart,
  addToFavorite,
  deleteProduct,
  deleteFavorite,
  increaseQuantity,
  decreaseQuantity,
  resetTheCart,
  loginUser,
  logOutUser,
  setLoading,
} = nextSlice.actions;

export default nextSlice.reducer;
