"use client";
import React ,{useState}from "react";
import GridTable from "../../../../../../components/misc/GridTable/GridTable";
// import ModalOpen from '../../../../../../components/misc/GridTable/ModalOpen'

function StockInnerGrid() {
  const [head, sethead] = useState([
    { title: "Location", Wid: 250 },
    { title: "Lot", Wid: 120 },
    { title: "Expiry", Wid: 120, date: true },
    { title: "MTH", Wid: 120 },
    { title: "Name", Wid: 120 },
    { title: "OHQty", Wid: 120 },
    { title: "QtyRecd", Wid: 120 },
    { title: "StockQty", Wid: 120 },
    { title: "Split", Wid: 120 },
    { title: " Asnd", Wid: 120 },
  ]);
 
  const [row, setRow] = useState([
    {
     Location:"00-00-00-00",
      Lot:"po00067",
      Expiry:"2023 jan 02",
      MTH:'123',
      Name:"XTF",
      OHQty:'222',
      QtyRecd:'12',
      StockQty:'234',
      Split:''
    },
  ]);
  return (
    <div>
      <GridTable head={head} row={row} />
    </div>
  );
}

export default StockInnerGrid;
