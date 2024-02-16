import { createSlice } from "@reduxjs/toolkit";

const PurchaseSlices = createSlice({
  name: "PurchaseSlice",
  initialState: {
    subGridState: [],
    pageState: 0,
    formIndex: null,
    skuList: [],
    lotList:[],
    updatePayload: {
      PAR_ID: "",
    },
    purchaseOrderDetails: {},

    postPurchaseDetail: [],
    postPurchaseOrder: [],
  },
  reducers: {
    openForm(state, action) {
      state.formIndex = action.payload.PURORD_ID;

      // console.log("modall open redux", action.payload);
    },

    subGridset(state, action) {
      state.subGridState = action.payload;

      // console.log("modall open redux", action.payload);
    },

    purchaseSku(state, action) {
      state.skuList = action.payload;

      // console.log("modall open redux", action.payload);
    },

    updatePurchaseSku(state, action) {
      state.postPurchaseDetail[action.payload.indexR].PAR_ID = action.payload.id;
     
      console.log("check sku change", action.payload.id);
    },

    updatePurchaseCost(state, action) {
        state.postPurchaseDetail[action.payload.indexR].COST = action.payload.cost;
  
        // console.log("check cost change", action.payload.cost);
      },

      updatePurchaseOrdQnt(state, action) {
        state.postPurchaseDetail[action.payload.indexR].QUANTITY = action.payload.qnt;
  
        // console.log("check cost change", action.payload.qnt);
      },

      updatePurchaseNotes(state, action) {
        state.postPurchaseOrder[0].NOTES = action.payload;
  
        // console.log("check notes change", action.payload);
      },


    updatePurchaseLot(state, action) {
        state.postPurchaseDetail[action.payload.indexR].LOT_NUMBER = action.payload.id;

    // state.subGridState[action.payload.indexR].EXPIRY_DATE = action.payload.exp

        // console.log("check lot change", action.payload.id , action.payload.exp);
        // return state.subGridState
        // return {...state , subGridState:[...state.subGridState] }
      },

    setPurchaseDetails(state, action) {
      state.purchaseOrderDetails = action.payload;
      console.log("purchase detail", action.payload);
    },

    setUpdatePurchaseDetail(state, action) {
      state.postPurchaseDetail = action.payload;
    },

    setUpdatePurchaseOrder(state, action) {
      // console.log('log filter ' , action.payload );
      state.postPurchaseOrder = action.payload;
    },

    setLotList(state , action){
      state.lotList = action.payload;

    },

    setProductOrederUpdate(state , action){

    }
  },
});

export default PurchaseSlices;

export const {
  openForm,
  subGridset,
  purchaseSku,
  updatePurchaseSku,
  setPurchaseDetails,
  setUpdatePurchaseDetail,
  setUpdatePurchaseOrder,
  updatePurchaseLot,
  setLotList,
  updatePurchaseCost,
  updatePurchaseOrdQnt,
  setProductOrederUpdate,
  updatePurchaseNotes,
} = PurchaseSlices.actions;
