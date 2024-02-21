"use client";

import React, { useState, useEffect } from "react";
import GridTable from "../../../../../../components/misc/GridTable/GridTable";
import ModalOpen from "../../../../../../components/misc/GridTable/ModalOpen";
import useApiFetch from "../../../../../../customHook/CustomHook";
import PurchaseSiplitSubgrid from "./PurchaseSiplitSubgrid";
import PurchaseGridCost from "./PurchaseGridCost";
import CustomLotcell from "./CustomLotcell";
import PurchaseFormModall from "./PurchaseFormModall";
import PurchaseGridSku from "./PurchaseGridSku";
import PurchaseGridOrdQnt from "./PurchaseGridOrdQnt";
import { useSelector, useDispatch } from "react-redux";
import { setNewItem } from "../redux/Purchase.slice"

const PurchaseGrid = () => {
  let [error, sendRequest] = useApiFetch();
  const [colaps, setColaps] = useState(false);
  const dispatch = useDispatch()
  //   const [head, setHead] = useState([{ title: 'SubItem', slector: 'SubItem', Wid: 250, customComp: ModalOpen }, { title: 'Part', slector: 'Part', Wid: 120 }, { title: 'Cost', slector: 'Cost', Wid: 100 }, { title: 'LastCost', slector: 'LastCost', Wid: 120 }, { title: 'OhQty', slector: 'OhQty', Wid: 120 }, { title: 'OrderQty', slector: 'OrderQty', Wid: 120 }, { title: 'UOM', slector: 'UOM', Wid: 120 }, { title: 'Conv', slector: 'Conv', Wid: 120 }, { title: 'CaseQty', slector: 'CaseQty', Wid: 120 }, { title: 'Split', slector: 'Split', Wid: 120 }, { title: 'Batch', slector: 'Batch', Wid: 120 }, { title: 'Expiry', slector: 'Expiry', Wid: 120 }])
  //   const [row, setRow] = useState([{ SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" }, { SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" },])
  const [head, setHead] = useState([
    { title: "", slector: "", Wid: 0 },
    {
      title: "SubItem",
      slector: "PART_NUMBER",
      Wid: 290,
      customComp: PurchaseGridSku,
    },
    { title: "Part", slector: "", customComp: CustomLotcell, Wid: 150 },
    { title: "Cost", slector: "COST", Wid: 100, customComp: PurchaseGridCost },
    {
      title: "LastCost",
      slector: "LAST_COST",
      Wid: 120,
      customComp: PurchaseGridCost,
    },
    { title: "OhQty", slector: "QTY_ONHAND", Wid: 120 },
    {
      title: "OrderQty",
      slector: "QUANTITY",
      Wid: 120,
      customComp: PurchaseGridOrdQnt,
    },
    { title: "UOM", slector: "CONVERSION_INTO_STOCKING_UOM", Wid: 120 },
    { title: "Conv", slector: "CONVERSION_INTO_STOCKING_UOM", Wid: 120 },
    { title: "CaseQty", slector: "CaseQty", Wid: 120 },
    {
      title: "Split",
      slector: "Split",
      Wid: 120,
      customComp: PurchaseSiplitSubgrid,
    },
    { title: "Batch", slector: "Batch", Wid: 120 },
    { title: "Expiry", slector: "EXPIRY_DATE", Wid: 170, date: true },
  ]);

  // const [row, setRow] = useState([])
  const rowData = useSelector((state) => state.PurchaseSlices.subGridState);
  const FormStatus = useSelector((state) => state.PurchaseSlices.FormStatus);

  const colapsfunc = () => {
   
  };

//   console.log("purchase sub grid ", rowData);


  // function getAllTask(data) {

  //     setRow(data.Result.INV_PURCHASE_ORDER_DETAILS_WV)

  //     // console.log('data', data.Result.INV_PURCHASE_ORDER_DETAILS_WV);
  //     // setErrorMessage(error)
  // }
  // useEffect(() => {
  //     sendRequest(apiUrl, 'POST', payload, getAllTask, accessToken)

  // }, []);

  return (
    <div>
      <GridTable 
      head={head} 
      row={rowData} 
      setHead={setHead}
      GridTitle="Active"
      GridColor="green-400"
      GridColaps={false}
      colaps={colaps}
      setColaps={setColaps}
      colapsfunc={colapsfunc}
      addButton={false}
       />
       <div>
        <p 
        className={`text-blue-500 mt-2  ${FormStatus == 'Initiated' ? 'block' : 'hidden'} `}
        onClick={()=>dispatch(setNewItem())}
        >
            Add item
            </p>
       </div>
    </div>
  );
};

export default PurchaseGrid;
