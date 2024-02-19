"use client"

import React, { useState, useEffect } from 'react'
import GridTable from '../../../../../../components/misc/GridTable/GridTable'
import ModalOpen from '../../../../../../components/misc/GridTable/ModalOpen'
import useApiFetch from '../../../../../../customHook/CustomHook'
//import PurchaseSiplitSubgrid from './PurchaseSiplitSubgrid'
//import PurchaseGridCost from './PurchaseGridCost'


const DiscountGroupGrid = () => {
    let [error, sendRequest] = useApiFetch()

    //   const [head, setHead] = useState([{ title: 'SubItem', slector: 'SubItem', Wid: 250, customComp: ModalOpen }, { title: 'Part', slector: 'Part', Wid: 120 }, { title: 'Cost', slector: 'Cost', Wid: 100 }, { title: 'LastCost', slector: 'LastCost', Wid: 120 }, { title: 'OhQty', slector: 'OhQty', Wid: 120 }, { title: 'OrderQty', slector: 'OrderQty', Wid: 120 }, { title: 'UOM', slector: 'UOM', Wid: 120 }, { title: 'Conv', slector: 'Conv', Wid: 120 }, { title: 'CaseQty', slector: 'CaseQty', Wid: 120 }, { title: 'Split', slector: 'Split', Wid: 120 }, { title: 'Batch', slector: 'Batch', Wid: 120 }, { title: 'Expiry', slector: 'Expiry', Wid: 120 }])
    //   const [row, setRow] = useState([{ SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" }, { SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" },])
    const [head, setHead] = useState([{ title: 'SubItem', slector: 'PART_NUMBER', Wid: 270, customComp: ModalOpen }, { title: 'Part', slector: 'BARCODE_NUMBER', Wid: 120 }, { title: 'Cost', slector: 'COST', Wid: 100  }, { title: 'LastCost', slector: 'LAST_COST', Wid: 120 }, { title: 'OhQty', slector: 'QTY_ONHAND', Wid: 120 }, { title: 'OrderQty', slector: 'QUANTITY', Wid: 120 }, { title: 'UOM', slector: 'CONVERSION_INTO_STOCKING_UOM', Wid: 120 }, { title: 'Conv', slector: 'CONVERSION_INTO_STOCKING_UOM', Wid: 120 }, { title: 'CaseQty', slector: 'CaseQty', Wid: 120 }, { title: 'Split', slector: 'Split', Wid: 120 , }, { title: 'Batch', slector: 'Batch', Wid: 120 }, { title: 'Expiry', slector: 'EXPIRY_DATE', Wid: 120 }])

    const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/GetPurchaseOrder`
    const [row, setRow] = useState([])

    const payload = {
        data: {
            PURORD_ID: "280878"
        },
        action: "InventoryWeb",
        method: "GetPurchaseOrder",
        type: "rpc",
        tid: "144",
        username: "admin"
    }



    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIyNjkzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiZXhwIjoxNzA5NDc0ODQwLCJpc3MiOiJwcmVjaXNldGVjLmNhIiwiYXVkIjoicHJlY2lzZXRlYy5jYSJ9._B2objEkiNbmbdcXdHjNtlqCq-RkzcCln65W9cBFQzY"

    function getAllTask(data) {

        setRow(data.Result.INV_PURCHASE_ORDER_DETAILS_WV)

       // console.log('data', data.Result.INV_PURCHASE_ORDER_DETAILS_WV);
        // setErrorMessage(error)
    }
    useEffect(() => {
        sendRequest(apiUrl, 'POST', payload, getAllTask, accessToken)



    }, []);
    const [colaps , setColaps] = useState(false)
    const [colapsComp , setColapsComp] = useState(false)
    const colapsfunc =()=>{
        if(colaps && !colapsComp){
          setColaps(false)
          setColapsComp(true)
        }else{
          setColaps(!colaps)
        }}
      
      const colapsfuncComp =()=>{
        if(!colaps && colapsComp){
          setColaps(true)
          setColapsComp(false)
        }else{
          setColapsComp(!colapsComp)
        }}
    return (
        <div>
            <GridTable 
            head={head} 
            row={row} 
            setHead={setHead} 
            colaps={colaps}
            setColaps={setColaps}
            colapsfunc={colapsfunc}
            />
        </div>
    )
}

export default DiscountGroupGrid