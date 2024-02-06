"use client"
import React , {useState , useEffect} from 'react'
import GridTable from '../../../../../../components/misc/GridTable/GridTable'
import ModalOpen from '../../../../../../components/misc/GridTable/ModalOpen'
import PhoneNumber from '../../../../../../components/misc/GridTable/PhoneNumber'
import CustomModal from '../../../../../../components/misc/custommodal/CustomModal'
import useApiFetch from '../../../../../../customHook/CustomHook'
// import PurchaseGridCost from './PurchaseGridCost'
// import PurchaseStatus from './PurchaseStatus'
// PurchaseS
//import PurchaseFormModall from './PurchaseFormModall'
import StatusCell from '../../../../../../components/misc/GridTable/StatusCell'

const PurchaseBody = () => {
  let [error, sendRequest] = useApiFetch()
  const [data, setData] = useState()
      // const [head, setHead] = useState([{ title: 'Contact', slector:'Contact' ,  Wid: 250, filter: "textFilter" , customComp: ModalOpen }, { title: 'Priority', Wid: 100, status: "priority", slector:'Priority' ,  }, { title: 'order Date', Wid: 100 , slector:'orderDate'  ,  date:true }, { title: 'comp Date', Wid: 100 , slector:'compDate'  , date:true }, { title: 'Vander', slector:'Vander' ,  Wid: 100 }, { title: 'phone', slector:'phone' , Wid: 200 , customComp:PhoneNumber }, { title: 'email', slector:'email' , Wid: 200 }, { title: 'cost', slector:'cost' , Wid: 200 }, { title: 'status',slector:'status' , Wid: 150 , status: "status" ,}, { title: 'comments', slector:'comments' , Wid: 200 },])
     // const [head, setHead] = useState([{ title: 'Order number', slector: 'PO_NUMBER', Wid: 270, filter: "textFilter", Modal: PurchaseFormModall }, { title: 'Order Date', Wid: 250, slector: 'APPROVED_DATE', date: true }, { title: 'Comp Date', Wid: 250, slector: 'COMPLETED_DATE', date: true  }, { title: 'Vendor', slector: 'SUPPLIER', filter: "checkFilter" , checkFilterOptions:["Nutranex" , "Opening Entry" , "Maria Supplier" , "PAKISTANI SUPPLIERS"] ,  Wid: 250 }, { title: 'Cost', slector: 'TOTAL_COST', Wid: 200  ,customComp:PurchaseGridCost , filter: "NumberFilter" },{ title: 'Status', slector: 'PO_CURRENT_STATUS', Wid: 200 , Status:PurchaseStatus , filter: "checkFilter" , checkFilterOptions:["Completed" , "Issued to Vendor" , "Initiated" , "Void" , "Ready for Receiving"] },{ title: 'Comments', slector: 'REFERENCE_NUMBER', Wid: 200 }, ])
     const [head, setHead] = useState([{ title: 'CODE', slector: 'CODE', Wid: 270, filter: "textFilter", }, { title: 'Order Date', Wid: 250, slector: 'APPROVED_DATE', date: true }, { title: 'Comp Date', Wid: 250, slector: 'COMPLETED_DATE', date: true  }, { title: 'Vendor', slector: 'SUPPLIER', filter: "checkFilter" , checkFilterOptions:["Nutranex" , "Opening Entry" , "Maria Supplier" , "PAKISTANI SUPPLIERS"] ,  Wid: 250 }, { title: 'Cost', slector: 'TOTAL_COST', Wid: 200   , filter: "NumberFilter" },{ title: 'Status', slector: 'PO_CURRENT_STATUS', Wid: 200  , filter: "checkFilter" , checkFilterOptions:["Completed" , "Issued to Vendor" , "Initiated" , "Void" , "Ready for Receiving"] },{ title: 'Comments', slector: 'REFERENCE_NUMBER', Wid: 200 }, ])

    
const [subHead, setSubHead] = useState([{ title: 'SubItem', slector:'SubItem' ,Wid: 250 ,  }, { title: 'Part', slector:'Part' , Wid: 120 }, { title: 'Cost', slector:'Cost' , Wid: 100 }, { title: 'LastCost', slector:'LastCost' , Wid: 120 }, { title: 'OhQty', slector:'OhQty' , Wid: 120 }, { title: 'OrderQty', slector:'OrderQty' , Wid: 120 }, { title: 'UOM', slector:'UOM' , Wid: 120 }, { title: 'Conv', slector:'Conv' , Wid: 120 }, { title: 'CaseQty', slector:'CaseQty' , Wid: 120 }, { title: 'Split', slector:'Split' , Wid: 120 }, { title: 'Batch', slector:'Batch' , Wid: 120 }, { title: 'Expiry', slector:'Expiry' , Wid: 120 }])

const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}Administration/GetDiscountGroupList`


const [compRow , setCompRow] = useState([])
console.log('comp Row' , compRow);
const payload = {
    data: {
              ACTIVE_FLAG: "Y",
              RNUM_FROM: 1,
              RNUM_TO: 25,
              SEARCH: "",
              OFFSET: "",
              ORDER: ""
          },
          action: "Administration",
          method: "GetDiscountGroupList",
          username: "testuser",
          type: "rpc",
          tid: "144"
}


 const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdHVzZXIiLCJleHAiOjE3MDk0Njk5NjAsImlzcyI6InByZWNpc2V0ZWMuY2EiLCJhdWQiOiJwcmVjaXNldGVjLmNhIn0.1cyfa1tWz5JdZUJoNVy0kS3pDXEvnwyeUFdvY_0niow"


function getAllTask(data) {

  setData(data)

  // console.log('data' , data);
  setErrorMessage(error)
}

useEffect(()=>{
  data?.Result?.forEach((comp)=>{
    console.log('check========', comp.PO_CURRENT_STATUS );
  if(comp?.PO_CURRENT_STATUS == "Completed" ){
    setCompRow((prev) => [...prev, comp]);
  }
  }
  )
},[data ])

useEffect(() => {
  sendRequest(apiUrl, 'POST', payload, getAllTask, accessToken)



}, []);

  return (
    <div className=' w-full    '>
        <div className=' h-full w-full  '>
          <div className=''>
        <GridTable head={head} row={data?.Result} setHead={setHead} setSubHead={setSubHead} subHead={subHead} formModal={CustomModal} GridTitle='Active' GridColor="indigo-400" GridColaps={false} />
        </div>
        <div className='my-5'>
        <GridTable head={head} row={compRow} setHead={setHead} setSubHead={setSubHead} subHead={subHead} formModal={CustomModal} GridTitle='Completed' GridColor="green-400" GridColaps={true} />
        </div>
        </div>
    </div>
  )
}

export default PurchaseBody