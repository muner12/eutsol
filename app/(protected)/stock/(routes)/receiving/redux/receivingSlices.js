import { createSlice } from "@reduxjs/toolkit";

const receivingSlices = createSlice({
  name: "receivingSlice",
  initialState: {
    // functions: [],
    // pageState: 0,
    subGridState: [],
    formIndex: null,
    postReceving:[],
    postReceivingDetail:[]
  },
  reducers: {
    openForm(state, action) {
      state.formIndex = action.payload;
    },
    // for sub grid
    subGridset(state, action) {
      state.subGridState = action.payload;

      console.log("subgrid redux", action.payload);
    },
    // for input form data
    setUpdatedReceving(state,action){
      // state.postReceving = [action.payload]
      // console.log("Updated Receiving redux full array",action.payload)
    },
    //updating ref number
   updateRefNumber(state, action) {
  state.postReceving[0].REFERENCE_NUMBER = action.payload.refNumber;
  // console.log("Updated Receiving redux Ref", action.payload);
  },
  // updating notes
updateNotes(state, action) {
  state.postReceving[action.payload].NOTES = action.payload.notes;
  // console.log("Updated Receiving redux Notes", action.payload.notes);
},
// Grid Data
    setUpdatedReceivingDetail(state,action){
      state.postReceivingDetail = [action.payload]
      // state.postReceivingDetail[action.payload.indexR].QUANTITY=action.payload.quantity;
      console.log("Updated Receiving detail GRID redux",action.payload)
    },
// updating quantity
    updateQty(state, action) {
        state.postReceivingDetail[action.payload.indexR].QANTITY = action.payload.qty;
        console.log("check qty change", action.payload.qty);
      },
  },
});

export default receivingSlices;

export const { openForm ,subGridset,setUpdatedReceving,setUpdatedReceivingDetail,updateRefNumber,updateNotes} = receivingSlices.actions;
