


"use client"
import Image from 'next/image'
import GridTable from './../components/misc/GridTable/GridTable'
import PhoneNumber from './../components/misc/GridTable/PhoneNumber'
import ModalOpen from './../components/misc/GridTable/ModalOpen'
import useApiFetch from './../customHook/CustomHook'
import React, { useState, useEffect } from 'react'



export default function Home() {
//   const [head, setHead] = useState([{ title: 'Contact', slector: 'PO_NUMBER', Wid: 270, filter: "textFilter", customComp: ModalOpen }, { title: 'order Date', Wid: 250, slector: 'APPROVED_DATE', date: true }, { title: 'comp Date', Wid: 250, slector: 'COMPLETED_DATE', date: true }, { title: 'Vander', slector: 'SUPPLIER', Wid: 250 }, { title: 'cost', slector: 'TOTAL_COST', Wid: 200 },{ title: 'Status', slector: 'PO_CURRENT_STATUS', Wid: 200 },{ title: 'comments', slector: 'PO_CURRENT_STATUS', Wid: 200 }, ])
//   const [row, setRow] = useState([
//     { Contact: "Po78234234", Priority: "High", orderDate: "Jan 10", compDate: "Jan 20", Vander: "Vandor 1", phone: '+1 325 478 5698', email: "Phonix@gamil.com", cost: "$250.00", status: "Working on it", comments: "Working on its", childrenData: [{ SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" }, { SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" },] },
//     { Contact: "Po78234234", Priority: "Medium", orderDate: "Jan 10", compDate: "Jan 20", Vander: "Vandor 1", phone: '+1 325 478 5698', email: "Phonix@gamil.com", cost: "$250.00", status: "Done", comments: "Working on its", childrenData: [{ SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" },] },
//     { Contact: "Po78234234", Priority: "Low", orderDate: "Jan 10", compDate: "Jan 20", Vander: "Vandor 1", phone: '+1 325 478 5698', email: "Phonix@gamil.com", cost: "$250.00", status: "issued", comments: "Working on its", },
// ])
// const [subHead, setSubHead] = useState([{ title: 'SubItem', slector:'SubItem' ,Wid: 250 , customComp: ModalOpen }, { title: 'Part', slector:'Part' , Wid: 120 }, { title: 'Cost', slector:'Cost' , Wid: 100 }, { title: 'LastCost', slector:'LastCost' , Wid: 120 }, { title: 'OhQty', slector:'OhQty' , Wid: 120 }, { title: 'OrderQty', slector:'OrderQty' , Wid: 120 }, { title: 'UOM', slector:'UOM' , Wid: 120 }, { title: 'Conv', slector:'Conv' , Wid: 120 }, { title: 'CaseQty', slector:'CaseQty' , Wid: 120 }, { title: 'Split', slector:'Split' , Wid: 120 }, { title: 'Batch', slector:'Batch' , Wid: 120 }, { title: 'Expiry', slector:'Expiry' , Wid: 120 }])
// const [data , setData] = useState()

//   let [error, sendRequest] = useApiFetch()

// // const apiUrl = 'https://dummy.restapiexample.com/api/v1/employees';
// //    const { data, loading, error } = useApiFetch(apiUrl);



//   // const apiUrl = 'http://10.10.20.201:2025/api/usermanagement/login';

//   const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/GetPurchaseOrderList`

//   // const postData = {
//   //  username: "admin",
//   //  password: "12123"
//   // }

//   const postData = {
//     data: {
//       SEARCH: "",
//       VOID_FLAG: "",
//       ORDER: "",
//       LOC_ID: "",
//       OFFSET: "+5:00",
//       RNUM_FROM: "1",
//       RNUM_TO: "100",
//       PO_NUMBER: "",
//       PART_DETAILS: "",
//       LOT_NUMBER: "",
//       PO_STATUS: "",
//       PO_DATE_FROM: "",
//       PO_DATE_TO: "",
//       LOT_EXPIRY_DATE: "",
//       VEN_ID: "",
//       FINZ_FLAG: ""
//     },
//     action: "InventoryWeb",
//     method: "GetPurchaseOrderList",
//     username: "admin",
//     type: "rpc",
//     tid: "144"
//   }


//   const accessToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIyNjkzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiZXhwIjoxNzA5NDc0ODQwLCJpc3MiOiJwcmVjaXNldGVjLmNhIiwiYXVkIjoicHJlY2lzZXRlYy5jYSJ9._B2objEkiNbmbdcXdHjNtlqCq-RkzcCln65W9cBFQzY"
  
//   let [error , sendRequest] =  useApiFetch()

//   function getAllTask(data){

//     setData(data)
    
//     // console.log('data' , data);
//     setErrorMessage(error)
//         }
  
//    useEffect(() => {
//     sendRequest(apiUrl , 'POST' , payload , getAllTask , accessToken)


    // console.log('Data by fetching:', data?.Result );
    // console.log('Loading:', loading);
    // console.error('Error:', error);
  // }, []);



  // useEffect(()=>{

  //  dataget()

  // } , [])




  return (
    <div className='w-full h-[1200px]   p-2 '>
      hello
      {/* <GridTable head={head} row={data?.Result} subHead={subHead} setHead={setHead} setSubHead={setSubHead} /> */}

    </div>
  )
}
