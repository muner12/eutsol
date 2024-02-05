'use client'
import React ,{useState} from 'react'
import PhoneNumber from '../../../../../../components/misc/GridTable/PhoneNumber'
import ModalOpen from '../../../../../../components/misc/GridTable/ModalOpen'
import GridTable from '../../../../../../components/misc/GridTable/GridTable'


const ReceivingGridView = () => {
    const [head, setHead] = useState([{ title: 'Recieving', Wid: 300, filter: "textFilter" , customComp: ModalOpen }, { title: 'RecievingDate', Wid: 250 }, { title: 'PO', Wid: 250 } ,{ title: 'PODate', Wid: 200 },{ title: 'Inventory', Wid: 250 }, { title: 'status', Wid: 250 , status: "status"}, ])
  const [row, setRow] = useState([
    { Recieving: "Po78234234", RecievingDate: "Jan 10",PO:"12345", PODate: "Jan 20",Inventory:"UnAssigned", status: "Working on it", 
        childrenData: [
            { Lot: "item 1", OhQty: "500", OrderQty: "200", CaseUOM: "EA",  CaseQty: "16.66", Expiry: "Jan 24 , 2026",Mth:"",SKU:"",Description:"",CaseRecieved:"",BO:"",QtyRecived:""},
        { Lot: "item 1", OhQty: "500", OrderQty: "200", CaseUOM: "EA",  CaseQty: "16.66", Expiry: "Jan 24 , 2026",Mth:"",SKU:"",Description:"",CaseRecieved:"",BO:"",QtyRecived:"" },] },
    { Recieving: "Po78234234", RecievingDate: "Jan 10",PO:"12345", PODate: "Jan 20", status: "Done",Inventory:"UnAssigned",            
        childrenData: [{ Lot: "item 1", OhQty: "500", OrderQty: "200", CaseUOM: "EA",  CaseQty: "16.66", Expiry: "Jan 24 , 2026", Mth:"",SKU:"",Description:"",CaseRecieved:"",BO:"",QtyRecived:""},] },
    { Recieving: "Po78234234", RecievingDate: "Jan 10",PO:"12345", PODate: "Jan 20",Inventory:"UnAssigned", status: "issued", },
])
const [subHead, setSubHead] = useState([{ title: 'Lot#', Wid: 250 , customComp: ModalOpen }, { title: 'Expiry', Wid: 120 }, { title: 'Mth', Wid: 120 }, { title: 'SKU', Wid: 100 }, { title: 'Description', Wid: 120 }, { title: 'OhQty', Wid: 120 }, { title: 'OrderQty', Wid: 120 },{ title: 'CaseReceived', Wid: 100 }, { title: 'CaseUOM', Wid: 120 },{ title: 'CaseQty', Wid: 120 }, { title: 'QtyRecieved', Wid: 120 }, { title: 'BO', Wid: 120 } ])

  return (
    <div className='m-auto w-full h-[68vh] overflow-y-auto'>
      <GridTable head={head} row={row} subHead={subHead} />
    </div>
  )
}

export default ReceivingGridView
