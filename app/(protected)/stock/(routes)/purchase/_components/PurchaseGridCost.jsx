"use client";
import React, { useState, useEffect } from "react";
import { updatePurchaseCost } from "../redux/Purchase.slice";
import { useSelector, useDispatch } from "react-redux";

const PurchaseGridCost = ({ data , index }) => {
  const [changeValue, setChangeValue] = useState();

    const checkUpdatelist = useSelector((state) => state.PurchaseSlices.postPurchaseDetail)
// console.log('checkUpdatedlist' , checkUpdatelist);
  const dispatch = useDispatch()
  function formatNumber(number) {
    return parseFloat(number).toFixed(2);
  }

  const result = formatNumber(data);
  useEffect(() => {
    console.log('check result' , data);
    if(data == null){
    setChangeValue(0.00);

    }else{
      setChangeValue(result);

    }
  }, [result]);

  const setChange = (e) => {
    setChangeValue(e.target.value);
    data = {
      cost: e.target.value,
      indexR: index,
    };
    dispatch(updatePurchaseCost(data));
  };
  return (
    <div className="w-full flex items-center justify-center ">
      {/* <p className='text-[14px] text-gray-500'>$ {result}</p> */}
      <input
        className="w-full outline-none text-center"
        type="text"
        onChange={setChange}
        value={changeValue}
      />
    </div>
  );
};

export default PurchaseGridCost;
