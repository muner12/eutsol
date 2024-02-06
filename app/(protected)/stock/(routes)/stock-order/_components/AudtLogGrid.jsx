"use client";
import React ,{useState}from "react";
import GridTable from "../../../../../../components/misc/GridTable/GridTable";

function AudtLogGrid() {
  const [head, sethead] = useState([
   
   
    { title: "DateTime", Wid: 120, date: true },
    { title: "Message", Wid: 350 },
    { title: "User", Wid: 150 },
  ]);
 
  const [row, setRow] = useState([
    {
      
      DateTime:"2023 jan 02",
      Message:'Stock Order has been created from Receiving: REC000473',
      User:'test user'
    },
  ]);
  return (
    <div> 
     < GridTable head={head} row={row}/>
    </div>
  )
}

export default AudtLogGrid