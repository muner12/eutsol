"use client"
import GridTest from "../../../../../components/misc/GridTable/GridTable";
import GridTabel from "../../../../../components/misc/GridTable/GridTable";
import { FaEye } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import ModalOpen from "../../../../../components/misc/GridTable/ModalOpen";
import PhoneNumber from "../../../../../components/misc/GridTable/PhoneNumber";
import DiscountGroupModal from "./_components/DiscountGroupModal"
import {IoIosRefresh } from "react-icons/io";
import { IoMdRefresh } from "react-icons/io";
import CustomModal from "../../../../../components/misc/custommodal/CustomModal";

import ModalOpenButtons from "./_components/ModalOpenButtons";
import DashbordNav from "../../../../../components/misc/landingNavebar/DashbordNav";

const DiscountGroupt = () => {

const[openModal,setOpenModal]=useState(false);
const tabs = [
{
    label: 'Details', content: <div></div> },
  { label: 'Audit Log', content: <div>Content for Audit Log</div> },
]; 

  const [head, setHead] = useState(
    [
      { title: 'Code', Wid: 200,  slector: "Code",customComp:DiscountGroupModal},
      { title: 'Name', Wid: 200, slector: 'Name' },
      { title: 'Description', Wid: 200, slector: 'Description', },
      { title: 'Discount Percentage', slector: 'DiscountPercentage', Wid: 200 },
      { title: 'status', slector: 'status', Wid: 200,status:"status"},

      { title: 'Actions', Wid: 100, slector: '' }])
  const [row, setRow] = useState([
    { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "Working on it", Actions: "", },
    { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "Done", Actions: "", },
    { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "Done", Actions: "", },
    { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "Done", Actions: "", },
    { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "Done", Actions: "", },
    { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "Done", Actions: "", },
    { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "Done", Actions: "", },
    { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "Done", Actions: "", },
    { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "issued", Actions: "", },

  ]);


  return <div className=' w-full    mt-30  '>
    


  <DashbordNav heading="Discount Group" ptext="Welcome to contacts board! here you can store manage all of your contacts "/>
            
    <div className=' h-screen overflow-x w-full  flex justify-center mb-2 '>
      <GridTabel head={head} row={row} setHead={setHead} formModal={openModal} />
      {/* <CustomModal isOpen={openModal}  onClose={()=>setOpenModal(!openModal)} tabs={tabs} heading={"Discount Group"} />
    */}


    </div>
  </div>

}


export default DiscountGroupt;