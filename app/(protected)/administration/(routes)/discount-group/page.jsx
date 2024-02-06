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
import PurchaseFormModall from "../../../stock/(routes)/purchase/_components/PurchaseFormModall";
import useApiFetch from "../../../../../customHook/CustomHook";
import PurchaseBody from "../../../stock/(routes)/purchase/_components/PurchaseBody";

const DiscountGroupt = () => {

// const[openModal,setOpenModal]=useState(false);
// const tabs = [
// {
//     label: 'Details', content: <div></div> },
//   { label: 'Audit Log', content: <div>Content for Audit Log</div> },
// ]; 

//   const [head, setHead] = useState(
//     [
//       { title: 'Code', Wid: 200,  slector: "Code",customComp:CustomModal},
//       { title: 'Name', Wid: 200, slector: 'Name' },
//       { title: 'Description', Wid: 200, slector: 'Description', },
//       { title: 'Discount Percentage', slector: 'DiscountPercentage', Wid: 200 },
//       { title: 'status', slector: 'status', Wid: 200,status:"status"},

//       { title: 'Actions', Wid: 100, slector: '' }])
  // const [row, setRow] = useState([
  //   { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "Working on it", Actions: "", },
  //   { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "Done", Actions: "", },
  //   { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "Done", Actions: "", },
  //   { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "Done", Actions: "", },
  //   { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "Done", Actions: "", },
  //   { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "Done", Actions: "", },
  //   { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "Done", Actions: "", },
  //   { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "Done", Actions: "", },
  //   { Code: "78234234", Name: "Discount 123", Description: "Descrition 123123", DiscountPercentage: " 12%", status: "issued", Actions: "", },

  // ]);

  //api integration
  // let [error, sendRequest] = useApiFetch()
  // const [data, setData] = useState()
      // const [head, setHead] = useState([{ title: 'Contact', slector:'Contact' ,  Wid: 250, filter: "textFilter" , customComp: ModalOpen }, { title: 'Priority', Wid: 100, status: "priority", slector:'Priority' ,  }, { title: 'order Date', Wid: 100 , slector:'orderDate'  ,  date:true }, { title: 'comp Date', Wid: 100 , slector:'compDate'  , date:true }, { title: 'Vander', slector:'Vander' ,  Wid: 100 }, { title: 'phone', slector:'phone' , Wid: 200 , customComp:PhoneNumber }, { title: 'email', slector:'email' , Wid: 200 }, { title: 'cost', slector:'cost' , Wid: 200 }, { title: 'status',slector:'status' , Wid: 150 , status: "status" ,}, { title: 'comments', slector:'comments' , Wid: 200 },])
      //const [head, setHead] = useState([{ title: 'Order number', slector: 'PO_NUMBER', Wid: 270, filter: "textFilter", Modal: PurchaseFormModall }, { title: 'Order Date', Wid: 250, slector: 'APPROVED_DATE', date: true }, { title: 'Comp Date', Wid: 250, slector: 'COMPLETED_DATE', date: true  }, { title: 'Vendor', slector: 'SUPPLIER', filter: "checkFilter" , checkFilterOptions:["Nutranex" , "Opening Entry" , "Maria Supplier" , "PAKISTANI SUPPLIERS"] ,  Wid: 250 }, { title: 'Cost', slector: 'TOTAL_COST', Wid: 200  ,customComp:PurchaseGridCost , filter: "NumberFilter" },{ title: 'Status', slector: 'PO_CURRENT_STATUS', Wid: 200 , Status:PurchaseStatus , filter: "checkFilter" , checkFilterOptions:["Completed" , "Issued to Vendor" , "Initiated" , "Void" , "Ready for Receiving"] },{ title: 'Comments', slector: 'REFERENCE_NUMBER', Wid: 200 }, ])

    
//const [subHead, setSubHead] = useState([{ title: 'SubItem', slector:'SubItem' ,Wid: 250 ,  }, { title: 'Part', slector:'Part' , Wid: 120 }, { title: 'Cost', slector:'Cost' , Wid: 100 }, { title: 'LastCost', slector:'LastCost' , Wid: 120 }, { title: 'OhQty', slector:'OhQty' , Wid: 120 }, { title: 'OrderQty', slector:'OrderQty' , Wid: 120 }, { title: 'UOM', slector:'UOM' , Wid: 120 }, { title: 'Conv', slector:'Conv' , Wid: 120 }, { title: 'CaseQty', slector:'CaseQty' , Wid: 120 }, { title: 'Split', slector:'Split' , Wid: 120 }, { title: 'Batch', slector:'Batch' , Wid: 120 }, { title: 'Expiry', slector:'Expiry' , Wid: 120 }])

// const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}Administration/GetDiscountGroupList`

// const [compRow , setCompRow] = useState([])
// console.log('comp Row' , compRow);
// const payload = {
//   data: {
//       ACTIVE_FLAG: "Y",
//       RNUM_FROM: 1,
//       RNUM_TO: 25,
//       SEARCH: "",
//       OFFSET: "",
//       ORDER: ""
//   },
//   action: "Administration",
//   method: "GetDiscountGroupList",
//   username: "testuser",
//   type: "rpc",
//   tid: "144"
// }

// const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdHVzZXIiLCJleHAiOjE3MDk0Njk5NjAsImlzcyI6InByZWNpc2V0ZWMuY2EiLCJhdWQiOiJwcmVjaXNldGVjLmNhIn0.1cyfa1tWz5JdZUJoNVy0kS3pDXEvnwyeUFdvY_0niow"


// function getAllTask(data) {
   
//   setData(data)

  // console.log('data' , data);
//   setErrorMessage(error)
// }

// useEffect(()=>{
//   data?.Result?.forEach((comp)=>{
//     console.log('check========', comp.PO_CURRENT_STATUS );
//   if(comp?.PO_CURRENT_STATUS == "Completed" ){
//     setCompRow((prev) => [...prev, comp]);
//   }
//   }
//   )
// },[data ])

// useEffect(() => {
//   sendRequest(apiUrl, 'POST', payload, getAllTask, accessToken)



// }, []);



  return <div className=' w-full    mt-30  '>
    


  <DashbordNav heading="Discount Group" ptext="Welcome to contacts board! here you can store manage all of your contacts "/>
            
    <div className=' overflow-auto pl-5 h-[75%] w-full  '>
      {/* <GridTabel head={head} row={data?.Result} setHead={setHead} formModal={CustomModal} GridTitle='Active' GridColor="indigo-400" GridColaps={false} /> */}
      {/* <GridTest head={head} row={data?.Result} formModal={CustomModal} GridTitle='Active' GridColor="indigo-400" GridColaps={false} /> */}


      {/* <CustomModal isOpen={openModal}  onClose={()=>setOpenModal(!openModal)} tabs={tabs} heading={"Discount Group"} />
    */}
    <PurchaseBody/>

    </div>
  </div>

}


export default DiscountGroupt;