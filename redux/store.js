
const { configureStore, combineReducers } = require("@reduxjs/toolkit")

import  mouseEvnt  from "./slidebar/slidebar.slice";
import MobilBotNavSlices from "./mobilBotNav/mobilBotNav.slice"
import userSlice from "./user/userSlice";
import PurchaseSlices from "../app/(protected)/stock/(routes)/purchase/redux/Purchase.slice"
import receivingSlices from "../app/(protected)/stock/(routes)/receiving/redux/receivingSlices"
import stockSlices from "../app/(protected)/stock/(routes)/stock-order/redux/stockSlice"
import DiscountGroupSlice from "../app/(protected)/administration/(routes)/discount-group/_redux/DiscountGroupSlice"
const rootReducer = combineReducers({
    // login:AuthSlice.reducer,
    mouseEvnt:mouseEvnt.reducer,
    MobilBotNavSlices:MobilBotNavSlices.reducer,
    user:userSlice.reducer,
    PurchaseSlices:PurchaseSlices.reducer,
    receivingSlices:receivingSlices.reducer,
    stockSlices: stockSlices.reducer,
    discountGroup:DiscountGroupSlice.reducer
});
export const store = configureStore({
    reducer: rootReducer,
    // reducer: {},

});


