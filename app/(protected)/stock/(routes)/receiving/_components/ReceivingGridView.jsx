"use client";
import React, { useState, useEffect } from "react";
import GridTable from "../../../../../../components/misc/GridTable/GridTable";
import useApiFetch from "../../../../../../customHook/CustomHook";
import ReceivingStatus from "./ReceivingStatus";
import ReceivingPriority from "./ReceivingPriority";
import ReceivingFormModal from "./ReceivingFormModal";

const ReceivingGridView = () => {
  const [head, setHead] = useState([
    {
      title: "Receiving #",
      slector: "RECEIVING_NUMBER",
      Wid: 250,
      filter: "textFilter",
      Modal: ReceivingFormModal,
    },
    { title: "Receiving Date", slector: "REC_DATE", Wid: 150, date: true },
    {
      title: "Priority",
      slector: "Priority",
      Wid: 200,
      customComp: ReceivingPriority,
    },
    { title: "PO #", slector: "PO_NUMBER", Wid: 150 },
    { title: "PO Date", slector: "PO_DATE", Wid: 150, date: true },
    { title: "Inventory", slector: "INVENTORY", Wid: 200 },
    {
      title: "Status",
      slector: "RECEIVING_STATUS",
      Wid: 200,
      customComp: ReceivingStatus,
    },
    { title: "Comments", slector: "Comments", Wid: 200 },
  ]);
  const [row, setRow] = useState([]);
  const [data, setData] = useState();
 const [colaps , setColaps] = useState(false)
  const [colapsComp , setColapsComp] = useState(false)
  const [colapsNew , setColapsNew] = useState(false)
  let [error, sendRequest] = useApiFetch();
  const [processRow, setProcessRow] = useState([]);
  const [newRow, setNewRow] = useState([]);
  const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/GetRecievingList`;

  const payload = {
    data: {
      SEARCH: "",
      VOID_FLAG: "",
      ORDER: "",
      LOC_ID: "",
      OFFSET: "",
      RNUM_FROM: "1",
      RNUM_TO: "100",

      PO_NUMBER: "",
      REC_NUMBER: "",
      REC_DATE_FROM: "",
      REC_DATE_TO: "",
      PART_DETAILS: "",
      LOT_NUMBER: "",
      LOT_EXPIRY_DATE: "",
      VEN_ID: "",
      REC_STATUS: "",
      WAR_ID: "",
      FINZ_FLAG: "",
    },
    action: "InventoryWeb",
    method: "GetRecievingList",
    type: "rpc",
    tid: "144",
  };

   const accessToken = typeof localStorage !== 'undefined' ? localStorage.getItem('tokenSession') : null;

  function getAllTask(data) {
    setRow(data.Result);

    setData(data);
    setErrorMessage(error);
  }
  useEffect(() => {
    data?.Result?.forEach((processRow) => {
      // console.log('check========', processRow.RECEIVING_STATUS );
      if (processRow?.RECEIVING_STATUS == "IN PROCESS") {
        setProcessRow((prev) => [...prev, processRow]);
      }
    });
  }, [data]);
  useEffect(() => {
    data?.Result?.forEach((newRow) => {
      // console.log('check========', processRow.RECEIVING_STATUS );
      if (newRow?.RECEIVING_STATUS == "NEW") {
        setNewRow((prev) => [...prev, newRow]);
      }
    });
  }, [data]);

  useEffect(() => {
    sendRequest(apiUrl, "POST", payload, getAllTask, accessToken);
  }, []);

  const colapsfunc = () => {
  if (colaps && !colapsComp || !colapsNew) {
    setColaps(false);
    setColapsComp(true);
    setColapsNew(true)
  } 
  else {
    setColaps(!colaps); 
  }
};

const colapsfuncComp = () => {
  if (!colaps && colapsComp || !colapsNew) {
    setColaps(true);
    setColapsComp(false);
    setColapsNew(true)
  } 
  else {
    setColapsComp(!colapsComp);
  }
};

const colapsfuncNew = () => {
  if (colapsNew && !colapsComp || !colaps) {
    setColaps(true);
    setColapsComp(true);
    setColapsNew(false);
  } 
  else {
    setColapsNew(!colapsNew);
  }
};


  return (
  
    <div className=" w-full">
      <div className="h-full w-full">
<div className="h-fit max-h-[28vh] lgdesktop:max-h-[28vh] desktop:max-h-[28vh] laptop:max-h-[28vh] tablet:max-h-[28vh] overflow-auto">
        <GridTable
        head={head}
        row={data?.Result}
        setHead={setHead}
        GridTitle="Active"
        GridColor="green-400"
        GridColaps={false}
        colaps={colaps}
            setColaps={setColaps}
            colapsfunc={colapsfunc}
      />
      </div>
      <div className="h-fit max-h-[28vh] lgdesktop:max-h-[28vh] desktop:max-h-[28vh] laptop:max-h-[28vh] tablet:max-h-[28vh] overflow-auto">
        <GridTable
        head={head}
        row={processRow}
        setHead={setHead}
        GridTitle="In Process"
        GridColor="indigo-400"
        GridColaps={true}
        colaps={colapsComp}
            setColaps={setColapsComp}
            colapsfunc={colapsfuncComp}
      />
      </div>
      <div className="h-fit max-h-[28vh] lgdesktop:max-h-[28vh] desktop:max-h-[28vh] laptop:max-h-[28vh] tablet:max-h-[28vh] overflow-auto">
       <GridTable
        head={head}
        row={newRow}
        setHead={setHead}
        GridTitle="New"
        GridColor="cyan-400"
        GridColaps={true}
        colaps={colapsNew}
            setColaps={setColapsNew}
            colapsfunc={colapsfuncNew}
      />
      </div>
      </div>
      
      {/* <GridTable
        head={head}
        row={processRow}
        setHead={setHead}
        GridTitle="In Process"
        GridColor="indigo-400"
        GridColaps={true}
      />
      <GridTable
        head={head}
        row={newRow}
        setHead={setHead}
        GridTitle="New"
        GridColor="cyan-400"
        GridColaps={true}
      /> */}
    </div>
  );
};

export default ReceivingGridView;
