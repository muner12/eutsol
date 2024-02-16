"use client";

import React, { useState, useEffect } from "react";
import useApiFetch from "../../../../../../customHook/CustomHook";
// import { useSelector } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { updatePurchaseLot } from "../redux/Purchase.slice";

const CustomLotcell = ({ data, rowData, index }) => {
  let [error, sendRequest] = useApiFetch();
  // const [lotList, setLotSlist] = useState([]);
  const dispatch = useDispatch();

  const rowId = useSelector((state) => state.PurchaseSlices.formIndex);
  const lotList = useSelector((state) => state.PurchaseSlices.lotList);
  //  const checkUpdatelist = useSelector((state) => state.PurchaseSlices.postPurchaseDetail)
  // console.log('checkUpdatelist' , checkUpdatelist);
  const payload = {
    data: {
      PURORD_ID: rowId,
    },
    action: "InventoryWeb",
    method: "GetPurchaseLotList",
    type: "rpc",
    tid: "144",
  };

  const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/GetPurchaseLotList`;
  const token = localStorage.getItem("tokenSession");

  // function getAllTask(data) {
  //   setLotSlist(data.Result);
  //   // console.log("get lot list ", data.Result);

  //   // dispatch(subGridset(data.Result.INV_PURCHASE_ORDER_DETAILS_WV))
  //   //   setFormData(data.Result.INV_PURCHASE_ORDERS_WV[0])
  // }
  // useEffect(() => {
  //   sendRequest(apiUrl, "POST", payload, getAllTask, token);
  // }, []);

  // const setChange = (e) => {
  //  let expDate = "";
  //   lotList.map((data) => {
  //     if (data.LOT_NUMBER == e.target.value) {
  //       expDate = data.EXPIRY_DATE;
  //     }
  //   });
  //   data = {
  //     id: e.target.value,
  //     indexR: index,
  //     exp: expDate
  //   };

  //   dispatch(updatePurchaseLot(data));

  //   // console.log('check lot change' , e.target.value);
  // };

  const setChange = (e) => {
    let expDate = "";
    lotList.forEach((data) => {
      if (data.LOT_NUMBER === e.target.value) {
        expDate = data.EXPIRY_DATE;
      }
    });
  
    const updatedData = {
      id: e.target.value,
      indexR: index,
      exp: expDate
    };
  
    dispatch(updatePurchaseLot(updatedData));
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <select
        onChange={setChange}
        className="block w-full mt-1 p-2 pr-8  rounded-md shadow-sm focus:outline-none "
      >
        <option value=""></option>
        {lotList?.map((data, i) => {
          return (
            <option key={i} value={data.LOT_NUMBER}>
              {data.LOT_NUMBER}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CustomLotcell;
