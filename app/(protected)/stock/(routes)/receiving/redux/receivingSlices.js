import { createSlice } from "@reduxjs/toolkit";
import {produce} from 'immer'

const receivingSlices = createSlice({
  name: "receivingSlice",
  initialState: {
    // functions: [],
    // pageState: 0,
    subGridState: [],
    receivingDetails : {},
    formIndex: null,
    postReceiving:[],
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
    setReceivingDetails(state,action){
      state.receivingDetails = action.payload;
      console.log("Receiving details redux",action.payload);
    },
    // for input form data
    setUpdatedReceving(state,action){
      // state.postReceiving = [action.payload]
      // console.log("Updated post Receiving redux form Data",action.payload)
      const newArr2 = action.payload.map((obj) => {
        const newObj = {};
        for (let key in obj) {
          newObj[key] = obj[key] === undefined ? "" : obj[key];
          newObj.DELETED_FLAG = "N";
        }
        return newObj;
      });

      // console.log('new Arr 2',newArr2);

      state.postReceiving = newArr2;
    },

    //updating ref number
   updateRefNumber(state, action) {

return produce(state,draftState => {
draftState.postReceiving[0].REFERENCE_NUMBER = state.receivingDetails?.RECIEVING_REFERENCE_NUMBER
console.log("Updated Receiving redux Ref", action.payload);
    });
  // state.receivingDetails[0].RECIEVING_REFERENCE_NUMBER = action.payload;
  // console.log("Updated Receiving redux Ref", action.payload);
  },

  // updating notes
updateNotes(state, action) {
  // state.postReceiving[0].RECIEVING_NOTES = action.payload;
  // console.log("Updated Receiving redux Notes", action.payload);
  return produce(state,draftState => {
draftState.postReceiving[0].NOTES = state.receivingDetails?.RECIEVING_NOTES
console.log("Updated Receiving redux notes", action.payload);
    });
},

// Grid Data
    setUpdatedReceivingDetail(state,action){
      state.postReceivingDetail = [action.payload]
      // state.postReceivingDetail[action.payload.indexR].QUANTITY=action.payload.quantity;
      // console.log("Updated Receiving detail GRID redux",action.payload)
    },

// updating quantity
    updateQty(state, action) {
        state.postReceivingDetail[action.payload.indexR].QUANTITY = action.payload.qty;
        console.log("check qty change", action.payload);
      },
  },
});

export default receivingSlices;

export const { openForm ,subGridset,setReceivingDetails,setUpdatedReceving,setUpdatedReceivingDetail,updateRefNumber,updateNotes,updateQty} = receivingSlices.actions;
