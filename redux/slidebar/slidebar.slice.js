import React from 'react';

import { createSlice } from "@reduxjs/toolkit";


const CheckOutSlices = createSlice({
    name: "CheckOutSlice",
    initialState: {
        functions: [],
        mouseEvntState: false,
        stockPage: ['Item Master', 'purchase', 'Receiving', 'Stock order', 'Phisycal count', "Cycle count", "transfer"],
        stocklistState: true,
        salesPage: ['Sales order', 'Pick order', 'Sales Return'],
        saleslistState: true,
        AdministrationPage: ['Customer', 'Discount group', "Payment term", "Supplier", "Barcode", "Orgnization",
            "Branch",
            "Warehouse",
            "Purchase Group",
            "Lot Numbers",
            "UOW",
            "Sessions",
            "Tax",
            "UOM",
            "Promotions"
        ],
        AdministrationlistState: true,
        securitylistState: true,
        SecurityPage:['Users' , "Rolles" , "Permission"],
        slectedSection: {},
    

    },
    reducers: {
        checkOutfirstFunction(state, action) {


        },

        mouseEvnt(state, action) {
            state.mouseEvntState = action.payload

        },

        stockPageEvnt(state, action) {
            state.stocklistState = action.payload

        },
        salesPageEvnt(state, action) {
            state.saleslistState = action.payload

        },

        AdministrationPageEvnt(state, action) {
            state.AdministrationlistState = action.payload
            // console.log('AdministrationlistState chulling' , state.AdministrationlistState );

        },
        SecurityPageEvnt(state , action){
            state.securitylistState = action.payload

        },

        PageClickedCheck(state , action){
            state.slectedSection = action.payload
        // console.log('check slected page redux' , state.slectedSection);
        }

    },

})

export default CheckOutSlices;

export const {
    checkOutfirstFunction,
    mouseEvnt,
    stockPageEvnt,
    salesPageEvnt,
    AdministrationPageEvnt,
    SecurityPageEvnt,
    PageClickedCheck,
} = CheckOutSlices.actions;