'use client'
import React ,{useState,useEffect} from 'react'
import PhoneNumber from '../../../../../../components/misc/GridTable/PhoneNumber'
import ModalOpen from '../../../../../../components/misc/GridTable/ModalOpen'
import GridTable from '../../../../../../components/misc/GridTable/GridTable'
import useApiFetch  from '../../../../../../customHook/CustomHook'
import ReceivingStatus from './ReceivingStatus'
import ReceivingPriority from './ReceivingPriority'


const ReceivingGridView = () => {
    const [head, setHead] = useState([
      { title: 'Receiving #',slector:'RECEIVING_NUMBER', Wid: 250, filter: "textFilter" , customComp: ModalOpen }, 
      { title: 'Receiving Date',slector:'REC_DATE', Wid: 150 ,date:true}, 
      { title: 'Priority',slector:'Priority', Wid: 200,customComp: ReceivingPriority },
      { title: 'PO #',slector:'PO_NUMBER', Wid: 150 } ,
      { title: 'PO Date',slector:'PO_DATE', Wid: 150 ,date:true },
      { title: 'Inventory',slector:'INVENTORY', Wid: 150 },
      { title: 'Status',slector:'RECEIVING_STATUS', Wid: 200 ,customComp: ReceivingStatus},
      { title: 'Comments',slector:'Comments', Wid: 200 },
    ])
    const [row, setRow] = useState([])
const [data , setData] = useState()

let [error , sendRequest] =  useApiFetch()

  const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/GetRecievingList`

  const payload = {
    data: {
			"SEARCH"     	: "",
			"VOID_FLAG" 	: "",
			"ORDER"     	: "",
			"LOC_ID"     	: "",
			"OFFSET"        : "",
			"RNUM_FROM"     : "1",
			"RNUM_TO"       : "100",

            "PO_NUMBER"       : "",
            "REC_NUMBER"       : "",
            "REC_DATE_FROM"       : "",
            "REC_DATE_TO"       : "",
            "PART_DETAILS"       : "",
            "LOT_NUMBER"       : "",
            "LOT_EXPIRY_DATE"       : "",
            "VEN_ID"       : "",
            "REC_STATUS"       : "",
            "WAR_ID"       : "",
			"FINZ_FLAG"      : ""
			},
  "action": "InventoryWeb",
  "method": "GetRecievingList",
  "type": "rpc",
  "tid": "144"
}
  
  const accessToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIyNjkzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiZXhwIjoxNzA5NTUxODIyLCJpc3MiOiJwcmVjaXNldGVjLmNhIiwiYXVkIjoicHJlY2lzZXRlYy5jYSJ9.IdBhRM9Zsb4etJu-VN197_iKovHuKIBUaKkWJVamXHU"
  
  function getAllTask(data){
        setRow(data.Result)

    setData(data)
    // console.log('this is api data: ' , data);
    setErrorMessage(error)
        }
  
   useEffect(() => {
    sendRequest(apiUrl , 'POST' , payload , getAllTask , accessToken)
   
  }, []);

  return (
    <div className='m-auto h-full w-full overflow-auto'>
      <GridTable head={head} row={data?.Result} setHead={setHead} />
    </div>
  )
}

export default ReceivingGridView
