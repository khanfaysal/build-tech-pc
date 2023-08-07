import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productChoose: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductChoose: (state, action) => {
      state.productChoose = [...state.productChoose, action.payload];
      // state.selectedProduct = action.payload;
    },

    removeProductChoose: (state, action) => {
      const productIdToRemove = action.payload;
      state.productChoose = state.productChoose.filter((product) => product._id !== productIdToRemove);
    },
    
  },
});

export const { setProductChoose, removeProductChoose } = productSlice.actions;

export default productSlice.reducer;
