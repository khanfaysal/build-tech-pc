import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryFilter: ""
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCategoryFilter: (state, action) => {
            state.categoryFilter = action.payload;
        }
    }
})

export const { setCategoryFilter } = productSlice.actions;

export default productSlice.reducer;