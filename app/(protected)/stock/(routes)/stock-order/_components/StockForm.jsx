'use client';
import GridTable from "../../../../../../components/misc/GridTable/GridTable";
import React, { useState, useEffect } from "react";
import useApiFetch from "../../../../../../customHook/CustomHook";
import StockFormHeader from "./StockFormHeader";
import Tooltip from "../../../../../../components/misc/tooltip/Tooltip";
import InputTextEut from "../../../../../../components/misc/textinput/InputTextEut";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import {  useSelector } from "react-redux";



function StockForm() {
  const [item, setItem] = useState("Working on it");
  const [itemPriority, setItemPriority] = useState("High")
  const getSlect = (e) => {
    setItem(e.target.value)
  }
// dtat for fetching inner form
let id = useSelector((state)=>state.stockSlices.formIndex);
console.log("This is my id",id.INVSTO_ID)
  const [data, setData] = useState();
  const [errorM, setErrorM] = useState();

  let [error, sendRequest] = useApiFetch();

  const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/GetStockOrder`;
  const [head, sethead] = useState([
    { title: "Location", slector: "LOCATION", Wid: 250 },
    { title: "Lot", slector: "LOT_NUMBER", Wid: 120 },
    { title: "Expiry", slector: "EXPIRY_DATE", Wid: 120, date: true },
    { title: "MTH", Wid: 120 },
    { title: "Name", slector: "DESCRIPTION", Wid: 120 },
    { title: "OH Qty", slector: "QTY_ONHAND", Wid: 120 },
    { title: "Qty Recd", slector: "QTY_RECEIVED", Wid: 120 },
    { title: "Stock Qty", slector: "QTY_ONHAND1", Wid: 120 },
    { title: "SUK", slector: "SKU_MANUFACTURE", Wid: 120 },
  ]);
  const payload = {
    data: {
      INVSTO_ID: `${id.INVSTO_ID}`,
      OFFSET: "+5.00",
    },
    action: "InventoryWeb",
    method: "GetSaleOrder",
    type: "rpc",
    tid: "144",
  };
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIyNjkzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiZXhwIjoxNzA5NTc0MTAyLCJpc3MiOiJwcmVjaXNldGVjLmNhIiwiYXVkIjoicHJlY2lzZXRlYy5jYSJ9.98afPFcw_qh1Y-U_jyDGGQ2Rj4GRZduB1rpAP7CwpJk";

  function getAllTask(data) {
    setData(data);
    
    setErrorM(error);
  }

  useEffect(() => {
    sendRequest(apiUrl, "POST", payload, getAllTask, accessToken);
  }, []);
  console.log("data", data);

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    STOORD_NUMBER: Yup.string().required('Stock # is required'), 
    RECEIVING_NUMBER: Yup.string().required('Receiving # is required'),
    REC_DATE: Yup.date().required('Receiving Date is required'),

    STO_DATE: Yup.date().required('STO Date is required'),
    SUPPLIER_PHONE: Yup.string().required('Phone # is required'),
    SUPPLIER_EMAIL: Yup.string().email('Invalid email address').required('Email is required'),
    SUPPLIER: Yup.string().required('Supplier is required'),
    SUPPLIER_INVOICE_NUMBER: Yup.string().required('Invoice is required'),
    STOCK_REFERENCE_NUMBER: Yup.string().required('Ref is required'),
    STOCK_NOTES: Yup.string(),
    ADDRESS_1:Yup.string()
  });
  const formik = useFormik({
    initialValues: {
      STOORD_NUMBER:'',
      RECEIVING_NUMBER: '',
      REC_DATE: '',
      ADDRESS_1:"",
      STO_DATE: '',
      SUPPLIER_PHONE: '',
      SUPPLIER_EMAIL: '',
      SUPPLIER: '',
      SUPPLIER_INVOICE_NUMBER: '',
      STOCK_REFERENCE_NUMBER: '',
      STOCK_NOTES: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  return (
    <div className=" w-full flex gap-2 ">
      <div className="relative w-3/4  p-4 bg-white shadow-sm shadow-gray-400 ">
        <StockFormHeader />
        <div className="overflow-x-auto overflow-y-auto min-h-[40vh]">
        <GridTable head={head} setHead={sethead} row={data?.Result.Table1} />
        </div>
      </div>
      <div className="w-1/4 h-auto p-4 bg-white shadow-sm shadow-gray-400 overflow-auto">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Tooltip content="Edit">
              <MdEdit className="text-[25px] border  bg-purple-200 rounded-lg cursor-pointer p-1 text-purple-500 hover:text-white hover:bg-purple-500" />
            </Tooltip>
            <Tooltip content="Perview">
              <FaRegEye className="text-[25px] rounded-lg border cursor-pointer p-1 bg-sky-100 text-sky-500 hover:text-white hover:bg-sky-400" />
            </Tooltip>
            <Tooltip content="Export">
              <HiOutlineDocumentArrowDown className="text-[25px] cursor-pointer rounded-lg border p-1 bg-indigo-100 text-indigo-500 hover:text-white hover:bg-indigo-400" />
            </Tooltip>
          </div>
          <div className='flex items-center flex-col'>
              <p className='H text-gray-800   text-[20px]'> {data?.Result.Results[0]?.STOORD_NUMBER ?? 'ST034567'}</p>
              <p className='H text-gray-500  text-right '>
                {data?.Result.Results[0]?.STO_DATE ?? ''}</p>

            </div>
          </div>
           {/* <DropDownInput options={options} /> */}
          {/* <DateTimePicker isDisabled={true} /> */}
          <div className='flex justify-between w-full'>
            <div className='py-4 w-full  '>
              <p className='py-3 text-gray-500 text-[14px]'>Status</p>
              <div className='flex items-center'>

                <div className={`p-1 h-fit w-[30px] rounded-full ${item == "High" ? "bg-orange-600" : item == "Medium" ? "bg-blue-400" : item == "Low" ? "bg-cyan-400" : item == "Full Transferred |Full Assigned" ? "bg-yellow-400" : item == "Full Transferred |Not Assigned" ? "bg-green-500" : item == "NEW" ? "bg-red-600" : item == "initiated" ? "bg-zinc-400" : item == "Partial Transferred | Partial Assigned" ? "bg-blue-600" : ""}`}></div>
                <select className='outline-none' onChange={getSlect}>
                  <option value="Full Transferred |Full Assigned">F T |F A</option>
                  <option value="Initiated">Initiated</option>
                  <option value="NEW">NEW</option>
                  <option value="Full Transferred |Not Assigned">F T |N A</option>
                  <option value="Partial Transferred |Not Assigned">P T |N A</option>
                  <option value="Partial Transferred | Partial Assigned">P T | P A</option>
                </select>
              </div>
            </div>

            <div className='py-4 w-full '>
              <p className='py-3 text-gray-500 text-[14px]'>Priority</p>
              <div className='flex items-center '>

                <div className={`p-1 h-fit w-[30px] rounded-full ${itemPriority == "High" ? "bg-orange-600" : itemPriority == "Medium" ? "bg-blue-400" : itemPriority == "Low" ? "bg-cyan-400" : itemPriority == "Working on it" ? "bg-yellow-400" : itemPriority == "Done" ? "bg-green-500" : itemPriority == "Stuck" ? "bg-red-600" : itemPriority == "initiated" ? "bg-zinc-400" : itemPriority == "issued" ? "bg-blue-600" : itemPriority == "Ready" ? "bg-indigo-500" : ""}`}></div>
                <select className='outline-none' onChange={(e) => setItemPriority(e.target.value)}>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>

                </select>
              </div>
            </div>
          </div>
          {/* in put fields */}
          <div>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
          <InputTextEut label="SO #" placeHolder="SO #" isDisabled={true} 
          initialValue={data?.Result.Results[0]?.STOORD_NUMBER ?? ''}
          />
            <InputTextEut placeHolder="2024-01-30 8:36AM" isDisabled={true}
             initialValue={data?.Result.Results[0]?.STO_DATE ?? ''}
            />
            <InputTextEut label="Rec #" placeHolder="Rec #" isDisabled={true}
             initialValue={data?.Result.Results[0]?.RECEIVING_NUMBER ?? ''}
             />
            <InputTextEut placeHolder="2024-01-30 8:36AM" isDisabled={true} 
            initialValue={data?.Result.Results[0]?.REC_DATE ?? ''}
            />
            <InputTextEut
              label="Created By"
              placeHolder="Created By"
              isDisabled={true}
            />
           
         
            <InputTextEut
              label="Supplier"
              placeHolder="Supplier"
              isDisabled={true}
              initialValue={data?.Result.Results[0]?.SUPPLIER ?? ''}
            />
            <InputTextEut
              label="Addres"
              placeHolder="Addres"
              isDisabled={true}
              initialValue={data?.Result.Results[0]?.ADDRESS_1 ?? ''}
            />
            <InputTextEut
              label="Phone #"
              placeHolder="Phone #"
              isDisabled={true}
              initialValue={data?.Result.Results[0]?.SUPPLIER_PHONE ?? ''}
            />
            <InputTextEut label="Email" placeHolder="Email" isDisabled={true} 
            initialValue={data?.Result.Results[0]?.SUPPLIER_EMAIL ?? ''}/>
            <InputTextEut label="Ref" placeHolder="Ref"  
            initialValue={data?.Result.Results[0]?.STOCK_REFERENCE_NUMBER ?? ''}/>
            <InputTextEut label="Notes" placeHolder="Notes"
            initialValue={data?.Result.Results[0]?.STOCK_NOTES ?? ''}  />
          </form>
           
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default StockForm;
