"use client"
import React , {useState , useEffect} from 'react'
import GridTable from '../../../../../../components/misc/GridTable/GridTable'
import ModalOpen from '../../../../../../components/misc/GridTable/ModalOpen'
import PhoneNumber from '../../../../../../components/misc/GridTable/PhoneNumber'
import CustomModal from '../../../../../../components/misc/custommodal/CustomModal'
import useApiFetch from '../../../../../../customHook/CustomHook'
import DiscountGroupModal   from "./DiscountGroupModal";
import StatusCell from '../../../../../../components/misc/GridTable/StatusCell'

import DiscountGroupStatus from "./DiscountGroupStatus";
import DiscountGroupPriority from "./DiscountGroupPriority";
import { useSelector } from 'react-redux'
const DiscountGroupBody = () => {
   let refresh=useSelector(state=>state.discountGroup.data);
  let [error, sendRequest] = useApiFetch()
  const [data, setData] = useState()
  const [head, setHead] = useState([
       { 
        title: 'CODE',
        slector: 'CODE',
        Wid: 250, 
        filter:"textFilter",
        Modal:DiscountGroupModal
      }, 
      { 
          title:  'Name', 
          Wid: 150, 
          slector: 'NAME' 
        },
       
         { title: 'Description', Wid: 200, slector: 'DESCRIPTION'},
          { title: 'Discount Percentage', slector: 'DISCOUNT_PERCENTAGE', filter: "checkFilter" , Wid: 100 }
          , { title: 'Status', slector: 'ACTIVE_FLAG', Wid: 100   ,Status:DiscountGroupStatus  }, ])

    
const [subHead, setSubHead] = useState([
  { title: 'SubItem', slector:'SubItem' ,Wid: 250 ,  },
   { title: 'Part', slector:'Part' , Wid: 120 }, 
   { title: 'Cost', slector:'Cost' , Wid: 100 }, 
   { title: 'LastCost', slector:'LastCost' , Wid: 120 }, { title: 'OhQty', slector:'OhQty' , Wid: 120 }, { title: 'OrderQty', slector:'OrderQty' , Wid: 120 }, { title: 'UOM', slector:'UOM' , Wid: 120 }, { title: 'Conv', slector:'Conv' , Wid: 120 }, { title: 'CaseQty', slector:'CaseQty' , Wid: 120 }, { title: 'Split', slector:'Split' , Wid: 120 }, { title: 'Batch', slector:'Batch' , Wid: 120 }, { title: 'Expiry', slector:'Expiry' , Wid: 120 }])

const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}Administration/GetDiscountGroupList`
//const apiUrl=`http://localhost:8080/Result`

const [compRow , setCompRow] = useState([])
//console.log('comp Row' , compRow);
const payload = {
    data: {
              ACTIVE_FLAG: "N",
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


 const accessToken =localStorage.getItem("tokenSession");


function getAllTask(data) {

  setData(data)

  // console.log('data' , data);
  setErrorMessage(error)
}

useEffect(()=>{
  data?.Result?.forEach((comp)=>{
    //console.log('check========', comp.ACTIVE_FLAG );
  if(comp?.ACTIVE_FLAG == "N" ){
    setCompRow((prev) => [...prev, comp]);
    //console.log('comp Row', compRow);
  }
  }
  )
},[data ])

useEffect(() => {
  sendRequest(apiUrl, 'POST', payload, getAllTask, accessToken)



}, [refresh]);

const [colaps , setColaps] = useState(false)
const [colapsComp , setColapsComp] = useState(false)

const colapsfunc =()=>{
  if(colaps && !colapsComp){
    setColaps(false)
    setColapsComp(true)
  }else{
    setColaps(!colaps)
  }}

const colapsfuncComp =()=>{
  if(!colaps && colapsComp){
    setColaps(true)
    setColapsComp(false)
  }else{
    setColapsComp(!colapsComp)
  }}
console.log(data)
  return (
    <div className="  ">
      <div className="   ">
        <div className="overflow-auto h-fit lgdesktop:max-h-[57vh] desktop:max-h-[43vh] laptop:max-h-[43vh] tablet:max-h-[50vh] max-h-[50vh]">
         
        <GridTable
         
          head={head}
          row={data?.Result}
          setHead={setHead}   
          GridTitle='Active' 
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
        formModal={CustomModal} 
        GridTitle='Inactive' 
        GridColor="red-400" 
        GridColaps={true}
        
        colaps={colaps}
        setColaps={setColaps}
        colapsfunc={colapsfunc}
        />
      
      </div>
      </div>
    </div>
  )
}

export default DiscountGroupBody