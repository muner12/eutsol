"use client";

import GridTable from "../../../../../../components/misc/GridTable/GridTable";
import ModalOpen from "../../../../../../components/misc/GridTable/ModalOpen";
//import PhoneNumber from '../../../../../../components/misc/GridTable/PhoneNumber'
import useApiFetch from "../../../../../../customHook/CustomHook";
import StockStatus from './StockStatus';
import CustomModal from '../../../../../../components/misc/custommodal/CustomModal'
import StockFormModall from "./StockFormModall";
import React, { useState, useEffect } from "react";

function StockGridView() {
  const [head, setHead] = useState([
    {
      title: "Stock #",
      slector: "STOORD_NUMBER",
      Wid: 250,
      filter: "textFilter",
      Modal: StockFormModall ,
    },
    { title: "Stock Date", slector: "STOORD_DATE", Wid: 220, date: true },
    { title: "Receiving", slector: "RECEIVING_NUMBER", Wid: 220 },
    { title: "ReceivingDate", slector:'RECEIVING_DATE', Wid: 220, date: true },
    { title: "Warehouse", slector: "INVENTORY", Wid: 220 },
    { title: "Status", slector: "STOCK_ORD_STATUS",  Wid: 250, Status:StockStatus , filter: "checkFilter" , checkFilterOptions:["Full Transferred |Full Assigned",
    "Initiated",
    "NEW",
    "Full Transferred |Not Assigned", 
    "Partial Transferred |Not Assigned",
    "Partial Transferred | Partial Assigned"] },
  ]);
  //   const [row, setRow] = useState([
  //     {
  //       Stock: "PO000600",
  //       Priority: "High",
  //       StockDate: "Jan 10",
  //       Receiving: "REC000506",
  //       ReceivingDate: "Jan 20",
  //       Warehouse: "Main Inventory",
  //       status: "Done",
  //       childrenData: [{}],
  //     },
  //   ]);
    const [subHead, setSubHead] = useState([
      { title: "Location", Wid: 250, customComp: ModalOpen },
      { title: "Lot", Wid: 120 },
      { title: "Expiry", Wid: 120, date: true },
      { title: "MTH", Wid: 120 },
      { title: "OHQty", Wid: 120 },
      { title: "QtyRec'd", Wid: 120 },
      { title: "StockQty", Wid: 120 },
      { title: "Split", Wid: 120 },
    ]);

  const [data, setData] = useState();
  const [errorM, setErrorM] = useState();

  let [error, sendRequest] = useApiFetch();

  const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/GetStockOrderList`;
  const payload = {
    data: {
      SEARCH: "",
      VOID_FLAG: "",
      ORDER: "",
      LOC_ID: "",
      OFFSET: "",
      RNUM_FROM: "1",
      RNUM_TO: "100",
      FINZ_FLAG: "",

      REC_NUMBER: "",
      STOCK_NUMBER: "",
      STOCK_DATE_FROM: "",
      STOCK_DATE_TO: "",
      PART_DETAILS: "",
      LOT_NUMBER: "",
      LOT_EXPIRY_DATE: "",
      VEN_ID: "",
      STOCK_STATUS: "",
      WAR_ID: "",
      RETURN_FLAG: "",
      ASSIGNED_FLAG: "N",
      COMPLETED_FLAG: "N",
      INVENTORY: " ",
      INVREC_ID: "",
      INVSTO_ID: "",
      RECEIVING_DATE: "",
      RECEIVING_NUMBER: "",
      RETURN_DATE: null,
      RFP_DATE: null,
      RNUM: "",
      SALEORDRET_ID: null,
      SALEORDRET_NUMBER: null,
      STOCK_ORD_STATUS: "",
      STOORD_COMPLETE_DATE: null,
      STOORD_DATE: "",
      STOORD_NUMBER: "",
      SUPPLIER: "",
      SUPPLIER_INVOICE_NUMBER: null,
      TOTALROW: "",
      USER_ASSIGNED_TO: null,
      USE_ID_ASSIGNED_TO: null,
      VOID: "N",
    },
    action: "GetStockOrderList",
    method: "GetSaleOrder",
    type: "rpc",
    tid: "144",
  };

  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIyNjkzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiZXhwIjoxNzA5NTc0MTAyLCJpc3MiOiJwcmVjaXNldGVjLmNhIiwiYXVkIjoicHJlY2lzZXRlYy5jYSJ9.98afPFcw_qh1Y-U_jyDGGQ2Rj4GRZduB1rpAP7CwpJk";

  function getAllTask(data) {
    setData(data);
    console.log("this is data", data);
    setErrorM(error);
  }

  useEffect(() => {
    sendRequest(apiUrl, "POST", payload, getAllTask, accessToken);
  }, []);
  console.log("data", data);
  return (
    <div className="flex flex-col">
     
      <div className="max-w-[1200px]">
        <GridTable head={head} row={data?.Result}
        setHead={setHead} setSubHead={setSubHead} subHead={subHead} formModal={CustomModal}
        GridTitle='Active' GridColor="indigo-400" GridColaps={false}
        />
      </div>
    </div>
  );
}

export default StockGridView;
