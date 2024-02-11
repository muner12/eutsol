

import { createSlice } from "@reduxjs/toolkit";

const PurchaseSlices = createSlice({
    name: "PurchaseSlice",
    initialState: {
        functions: [],
        pageState: 0,
        formIndex:null,
      

    },
    reducers: {
        openForm(state, action) {

            state.formIndex = action.payload
           
console.log("modall open redux" , action.payload);

        },

      

    },

})

export default PurchaseSlices;

export const {
    openForm,
    
} = PurchaseSlices.actions;