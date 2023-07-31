import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryChoose: ""
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCategoryChoose: (state, action) => {
            state.categoryChoose = action.payload;
        }
    }
})

export const { setCategoryChoose } = productSlice.actions;

// export const selectCategoryChoose = (state) => state.product.categoryChoose;

export default productSlice.reducer;