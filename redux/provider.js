"use client"

// import {  store } from "./store";
import { store } from "./store";
import { purchaseStore } from "../app/(protected)/stock/(routes)/purchase/redux/purchaseStore"
import { Provider } from "react-redux";
// const { Provider } = require("react-redux")

export default function ReduxStoreProvider({ children }) {
  return (
    <Provider store={store} purchaseStore={purchaseStore} >
    
        {children}
    
    </Provider>
  );
}
