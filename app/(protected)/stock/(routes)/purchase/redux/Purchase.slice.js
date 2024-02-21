import { createSlice } from "@reduxjs/toolkit";
import { produce } from 'immer';
import { stringify } from "querystring";
const PurchaseSlices = createSlice({
  name: "PurchaseSlice",
  initialState: {
    subGridState: [],
    pageState: 0,
    formIndex: null,
    skuList: [],
    lotList: [],
    updatePayload: {
      PAR_ID: "",
    },
    purchaseOrderDetails: {},

    postPurchaseDetail: [],
    postPurchaseOrder: [],
    FormStatus: null,
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

      console.log("modall open redux", action.payload);
    },

    updatePurchaseSku(state, action) {
      state.postPurchaseDetail[action.payload.indexR].PAR_ID = action.payload.id.PAR_ID;
      state.postPurchaseDetail[action.payload.indexR].COST = action.payload.id.STANDARD_COST;
      state.postPurchaseDetail[action.payload.indexR].VENDOR_QUANTITY = action.payload.id.TOTAL_AVAILABLE;
      state.subGridState[action.payload.indexR].COST = action.payload.id.STANDARD_COST;
      state.subGridState[action.payload.indexR].LAST_COST = action.payload.id.STANDARD_COST;
      state.subGridState[action.payload.indexR].QTY_ONHAND = action.payload.id.OH_QUANTITY;
      state.subGridState[action.payload.indexR].CONVERSION_INTO_STOCKING_UOM = action.payload.id.CONVERSION_INTO_STOCKING_UOM
      ;
      

      console.log("check sku change", action.payload.id );
    },

    updatePurchaseCost(state, action) {
      state.postPurchaseDetail[action.payload.indexR].COST =
        action.payload.cost;

      // console.log("check cost change", action.payload.cost);
    },

    updatePurchaseOrdQnt(state, action) {
      state.postPurchaseDetail[action.payload.indexR].QUANTITY =
        action.payload.qnt;

      // console.log("check cost change", action.payload.qnt);
    },

    updatePurchaseNotes(state, action) {
      state.postPurchaseOrder[0].NOTES = action.payload;

      // console.log("check notes change", action.payload);
    },

    updatePurchaseLot(state, action) {
      const string = state.postPurchaseDetail[action.payload.indexR].PURORD_ID   != null ? JSON.stringify(state.postPurchaseDetail[action.payload.indexR].PURORD_ID ) : '';

      state.postPurchaseDetail[action.payload.indexR].LOT_NUMBER = action.payload.id;
      state.postPurchaseDetail[action.payload.indexR].READY_FOR_RECEIVING_FLAG     = 'Y'
      state.postPurchaseDetail[action.payload.indexR].PURORD_ID     = string
      return produce(state, draftState => {
        state.subGridState[action.payload.indexR].EXPIRY_DATE = action.payload.exp
        
       
      });
    
    },

    setPurchaseDetails(state, action) {
console.log('check the purchase detail in redux' , action.payload);
      state.FormStatus = action.payload.PO_CURRENT_STATUS;
      

      
      state.purchaseOrderDetails = action.payload;

    },

    setUpdatePurchaseDetail(state, action) {
      const newArr2 = action.payload.map((obj) => {
        // Iterate through each property of the object
        const newObj = {};
        for (let key in obj) {
          // Check if the property value is undefined, replace it with ""
          newObj[key] = obj[key] === undefined ? "" : obj[key];
          newObj.DELETED_FLAG = "N";
        }
        return newObj;
      });

      // console.log('new Arr 2',newArr2);

      state.postPurchaseDetail = newArr2;
    },

    setUpdatePurchaseOrder(state, action) {
      // console.log('log filter ' , action.payload );
      const newArr = action.payload.map((obj) => {
        // Iterate through each property of the object
        const newObj = {};
        for (let key in obj) {
          // Check if the property value is undefined, replace it with ""
          newObj[key] = obj[key] === undefined ? "" : obj[key];
          // newObj.FNZ_USE_ID = state.purchaseOrderDetails[0]?.USER_ID_PREPARED_BY;
        }
        return newObj;
      });

      // state.postPurchaseDetail = newArr;
      state.postPurchaseOrder = newArr;
    },

    setLotList(state, action) {
      state.lotList = action.payload;
    },

    setProductOrederUpdate(state, action) {},

    setNewItem(state, action) {
      state.subGridState.push({
        PURORDDET_ID: "",
        PURORD_ID: state.purchaseOrderDetails.PURORD_ID,
        PAR_ID: 0,
        SEQ_NUMBER: 1.0,
        // PART_NUMBER: "TRAINIGSKU-02",
        NON_STOCK_ITEM_FLAG: "N",
        PART_DESCRIPTION: "  ",
        SKU_MANUFACTURE: "",
        UPC_MANUFACTURE: "",
        NAME: "",
        BARCODE_NUMBER: "",
        QUANTITY: 0,
        UOM_ID_REORDERING: null,
        REORDERING_UOM: null,
        COST: 0,
        LAST_COST: 0,
        QTY_RECEIVED: 0.0,
        COLOR: null,
        READY_FOR_RECEIVING_FLAG: "N",
        CATALOGUE_NUMBER: null,
        PART_COST: 0,
        QUARANTINE_FLAG: "N",
        CONVERSION_INTO_STOCKING_UOM: 0,
        LOT_NUMBER: null,
        EXPIRY_DATE: null,
        INVPARLOT_ID: null,
        QTY_ONHAND: 0.0,
        QTY_AVAILABLE: 0.0,
        LOT_INITIAL_STATUS: null,
        ISSUED_FLAG: "Y",
        RECEIVING_NUMBER: null,
        RECEIVING_DATE: null,
        INVREC_ID: null,
        VENDOR_QUANTITY: 0,
        EXPIRY_DATE_PDF: null,
      });

      state.postPurchaseDetail.push({
        CATALOG_NUMBER: "",
        COST: 0,
        DELETED_FLAG: "N",
        DESCRIPTION: "",
        INVPARLOT_ID: null,
        LOT_NUMBER: null,
        PAR_ID: 0,
        PURORDDET_ID: "",
        PURORD_ID: state.purchaseOrderDetails.PURORD_ID,
        QUANTITY: 0,
        QUARANTINE_FLAG: "N",
        READY_FOR_RECEIVING_FLAG: "N",
        USE_ID: "",
        VENDOR_QUANTITY: 7,
        WORORD_ID: "",
      });
    },

    setIssueStatus(state , action){
      // state.postPurchaseOrder[0].APPROVED_FLAG = 'Y'
      // console.log('check issue redux' , state.purchaseOrderDetails?.USER_ID_PREPARED_BY);
      return produce(state, draftState => {
        draftState.postPurchaseOrder[0].APPROVED_FLAG = 'Y';
        draftState.postPurchaseOrder[0].COMPLETE_FLAG = 'N';
        draftState.postPurchaseOrder[0].FNZ_USE_ID = state.purchaseOrderDetails?.USER_ID_PREPARED_BY;
   
      });
    }
,
    setReadyForRStatus(state , action){
      // console.log('RR chulling');
      // state.postPurchaseOrder[0].APPROVED_FLAG = 'Y'
      // console.log('check issue redux' , state.purchaseOrderDetails?.USER_ID_PREPARED_BY);
      const stringFNZ_USE_ID = state.purchaseOrderDetails?.USER_ID_PREPARED_BY != null ? JSON.stringify(state.purchaseOrderDetails.USER_ID_PREPARED_BY) : '';
    
      // console.log('check redux string' , string);
      return produce(state, draftState => {
        // draftState.postPurchaseOrder[0].APPROVED_FLAG = 'Y';
        draftState.postPurchaseOrder[0].COMPLETE_FLAG = 'Y';
        draftState.postPurchaseOrder[0].FNZ_USE_ID = stringFNZ_USE_ID ;
        draftState.postPurchaseOrder[0].USE_ID_APRVD_BY = stringFNZ_USE_ID;
        draftState.postPurchaseOrder[0].USE_ID_COMPT_BY  = stringFNZ_USE_ID;
        draftState.postPurchaseOrder[0].USE_ID_PREPARED_BY  = stringFNZ_USE_ID;
        
        draftState.postPurchaseOrder[0].FNZ_FLAG  = 'N'

      });
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
  setNewItem,
  setIssueStatus,
  setReadyForRStatus,
} = PurchaseSlices.actions;
