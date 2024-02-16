"use client";
import React, { useState, useEffect } from "react";
import { updatePurchaseOrdQnt } from "../redux/Purchase.slice";
import { useSelector, useDispatch } from "react-redux";

const PurchaseGridOrdQnt = ({ data , index }) => {
  const [changeValue, setChangeValue] = useState();

    const checkUpdatelist = useSelector((state) => state.PurchaseSlices.postPurchaseDetail)
// console.log('ist' , checkUpdatelist);
  const dispatch = useDispatch()
  function formatNumber(number) {
    return parseFloat(number).toFixed(2);
  }

//   const result = formatNumber(data);
  useEffect(() => {
    setChangeValue(data);
  }, [data]);

  const setChange = (e) => {
    setChangeValue(e.target.value);
    data = {
      qnt: e.target.value,
      indexR: index,
    };
    dispatch(updatePurchaseOrdQnt(data));
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

export default PurchaseGridOrdQnt;
