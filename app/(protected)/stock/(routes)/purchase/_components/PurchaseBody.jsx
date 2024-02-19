"use client";
import React, { useState, useEffect } from "react";
import GridTable from "../../../../../../components/misc/GridTable/GridTable";
import ModalOpen from "../../../../../../components/misc/GridTable/ModalOpen";
import PhoneNumber from "../../../../../../components/misc/GridTable/PhoneNumber";
import CustomModal from "../../../../../../components/misc/custommodal/CustomModal";
import useApiFetch from "../../../../../../customHook/CustomHook";
import PurchaseGridCost from "./PurchaseGridCost";
import PurchaseStatus from "./PurchaseStatus";
import PurchaseFormModall from "./PurchaseFormModall";
import PurchasePiriority from "./PurchasePiriority";
import { useSelector, useDispatch } from "react-redux";
import { purchaseSku } from "../redux/Purchase.slice";

import StatusCell from "../../../../../../components/misc/GridTable/StatusCell";

const PurchaseBody = () => {
  let [error, sendRequest] = useApiFetch();
  const [data, setData] = useState();
  const [colaps, setColaps] = useState(false);
  const [colapsComp, setColapsComp] = useState(false);
  // const [head, setHead] = useState([{ title: 'Contact', slector:'Contact' ,  Wid: 250, filter: "textFilter" , customComp: ModalOpen }, { title: 'Priority', Wid: 100, status: "priority", slector:'Priority' ,  }, { title: 'order Date', Wid: 100 , slector:'orderDate'  ,  date:true }, { title: 'comp Date', Wid: 100 , slector:'compDate'  , date:true }, { title: 'Vander', slector:'Vander' ,  Wid: 100 }, { title: 'phone', slector:'phone' , Wid: 200 , customComp:PhoneNumber }, { title: 'email', slector:'email' , Wid: 200 }, { title: 'cost', slector:'cost' , Wid: 200 }, { title: 'status',slector:'status' , Wid: 150 , status: "status" ,}, { title: 'comments', slector:'comments' , Wid: 200 },])
  const [head, setHead] = useState([
    {
      title: "Order number",
      slector: "PO_NUMBER",
      Wid: 250,
      filter: "textFilter",
      Modal: PurchaseFormModall,
    },
    { title: "Order Date", Wid: 150, slector: "PPROVED_DATE", date: true },
    {
      title: "Priority",
      Wid: 120,
      slector: "",
      Status: PurchasePiriority,
      mWid: 150,
    },
    { title: "Comp Date", Wid: 150, slector: "COMPLETED_DATE", date: true },
    {
      title: "Vendor",
      slector: "SUPPLIER",
      filter: "checkFilter",
      checkFilterOptions: [
        "Nutranex",
        "Opening Entry",
        "Maria Supplier",
        "PAKISTANI SUPPLIERS",
      ],
      Wid: 150,
    },
    { title: "Cost", slector: "TOTAL_COST", Wid: 100, filter: "NumberFilter" , tottal:'Cost' },
    {
      title: "Status",
      slector: "PO_CURRENT_STATUS",
      Wid: 150,
      Status: PurchaseStatus,
      filter: "checkFilter",
      checkFilterOptions: [
        "Completed",
        "Issued to Vendor",
        "Initiated",
        "Void",
        "Ready for Receiving",
      ],
    },
    { title: "Comments", slector: "REFERENCE_NUMBER", Wid: 200 },
  ]);

  const [subHead, setSubHead] = useState([
    { title: "SubItem", slector: "SubItem", Wid: 250 },
    { title: "Part", slector: "Part", Wid: 120 },
    { title: "Cost", slector: "Cost", Wid: 100 },
    { title: "LastCost", slector: "LastCost", Wid: 120 },
    { title: "OhQty", slector: "OhQty", Wid: 120 },
    { title: "OrderQty", slector: "OrderQty", Wid: 120 },
    { title: "UOM", slector: "UOM", Wid: 120 },
    { title: "Conv", slector: "Conv", Wid: 120 },
    { title: "CaseQty", slector: "CaseQty", Wid: 120 },
    { title: "Split", slector: "Split", Wid: 120 },
    { title: "Batch", slector: "Batch", Wid: 120 },
    { title: "Expiry", slector: "Expiry", Wid: 120 },
  ]);

  const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/GetPurchaseOrderList`;
  const apiUrlSku = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}ItemMaster/GetPartsList`;

  const [compRow, setCompRow] = useState([]);
  // console.log('comp Row' , compRow);

  const accessToken =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("tokenSession")
      : null;

  const dispatch = useDispatch();

  const payload = {
    data: {
      SEARCH: "",
      VOID_FLAG: "",
      ORDER: "",
      LOC_ID: "",
      OFFSET: "+5:00",
      RNUM_FROM: "1",
      RNUM_TO: "100",
      PO_NUMBER: "",
      PART_DETAILS: "",
      LOT_NUMBER: "",
      PO_STATUS: "",
      PO_DATE_FROM: "",
      PO_DATE_TO: "",
      LOT_EXPIRY_DATE: "",
      VEN_ID: "",
      FINZ_FLAG: "",
    },
    action: "InventoryWeb",
    method: "GetPurchaseOrderList",
    username: "admin",
    type: "rpc",
    tid: "144",
  };

  const payloadSku = {
    data: {
      SEARCH: "",
      ORDER: "PAR_ID DESC",
      ACTIVE_FLAG: "Y",
      RNUM_FROM: "1",
      RNUM_TO: "100",
      BOLTON_FLAG: "",
      SPECIAL_FLAG: "",
      NON_STOCK_FLAG: "",
    },
    action: "ItemMaster",
    method: "GetPartsList",
    username: "admin",
    type: "rpc",
    tid: "144",
  };

  function getAllTask(data) {
    setData(data);

    // console.log('data' , data);
    setErrorMessage(error);
  }

  const getAllTaskSku = (data) => {
    // console.log('get all sku' , data.Result);
    dispatch(purchaseSku(data.Result));
  };

  useEffect(() => {
    data?.Result?.forEach((comp) => {
      // console.log("check========", comp.PO_CURRENT_STATUS);
      if (comp?.PO_CURRENT_STATUS == "Completed") {
        setCompRow((prev) => [...prev, comp]);
      }
    });
  }, [data]);

  useEffect(() => {
    sendRequest(apiUrl, "POST", payload, getAllTask, accessToken);
    sendRequest(apiUrlSku, "POST", payloadSku, getAllTaskSku, accessToken);
  }, []);

  const colapsfunc = () => {
    if (colaps && !colapsComp) {
      setColaps(false);
      setColapsComp(true);
    } else {
      setColaps(!colaps);
    }
  };

  const colapsfuncComp = () => {
    if (!colaps && colapsComp) {
      setColaps(true);
      setColapsComp(false);
    } else {
      setColapsComp(!colapsComp);
    }
  };
  return (
    <div className=" w-full    ">
      <div className=" h-full w-full  ">
        <div className=" overflow-auto h-fit lgdesktop:max-h-[57vh] desktop:max-h-[43vh] laptop:max-h-[43vh] tablet:max-h-[50vh] max-h-[50vh]">
          <GridTable
            head={head}
            row={data?.Result}
            setHead={setHead}
            setSubHead={setSubHead}
            subHead={subHead}
            GridTitle="Active"
            GridColor="green-400"
            GridColaps={false}
            colaps={colaps}
            setColaps={setColaps}
            colapsfunc={colapsfunc}
          />
        </div>
        <div className="my-3  overflow-auto h-fit lgdesktop:max-h-[57vh] desktop:max-h-[43vh] laptop:max-h-[43vh] tablet:max-h-[50vh] max-h-[50vh]">
          <GridTable
            head={head}
            row={compRow}
            setHead={setHead}
            setSubHead={setSubHead}
            subHead={subHead}
            GridTitle="Completed"
            GridColor="pink-400"
            GridColaps={true}
            colaps={colapsComp}
            setColaps={setColapsComp}
            colapsfunc={colapsfuncComp}
          />
        </div>
      </div>
    </div>
  );
};

export default PurchaseBody;
