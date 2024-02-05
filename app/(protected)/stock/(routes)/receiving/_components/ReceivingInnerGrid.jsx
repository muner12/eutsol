import React,{useState} from 'react'
import ModalOpen from '../../../../../../components/misc/GridTable/ModalOpen'
import GridTable from '../../../../../../components/misc/GridTable/GridTable'

const ReceivingInnerGrid = () => {
    const [row, setRow] = useState([
            { Lot: "item 1", OhQty: "500", OrderQty: "200", CaseUOM: "EA",  CaseQty: "16.66", Expiry: "Jan 24 , 2026",MTH:"Jan 24 , 2026",SKU:"1245",Description:"This is Description",CaseReceived:"20",BO:"10",QtyReceieved:"20"},
            { Lot: "item 1", OhQty: "500", OrderQty: "200", CaseUOM: "EA",  CaseQty: "16.66", Expiry: "Jan 24 , 2026",MTH:"Jan 24 , 2026",SKU:"1245",Description:"This is Description",CaseReceived:"20",BO:"10",QtyReceieved:"20" },     
            { Lot: "item 1", OhQty: "500", OrderQty: "200", CaseUOM: "EA",  CaseQty: "16.66", Expiry: "Jan 24 , 2026", MTH:"Jan 24 , 2026",SKU:"1245",Description:"This is Description",CaseReceived:"20",BO:"10",QtyReceieved:"20"},
            { Lot: "item 1", OhQty: "500", OrderQty: "200", CaseUOM: "EA",  CaseQty: "16.66", Expiry: "Jan 24 , 2026",MTH:"Jan 24 , 2026",SKU:"1245",Description:"This is Description",CaseReceived:"20",BO:"10",QtyReceieved:"20" },     
            { Lot: "item 1", OhQty: "500", OrderQty: "200", CaseUOM: "EA",  CaseQty: "16.66", Expiry: "Jan 24 , 2026", MTH:"Jan 24 , 2026",SKU:"1245",Description:"This is Description",CaseReceived:"20",BO:"10",QtyReceieved:"20"},
            { Lot: "item 1", OhQty: "500", OrderQty: "200", CaseUOM: "EA",  CaseQty: "16.66", Expiry: "Jan 24 , 2026",MTH:"Jan 24 , 2026",SKU:"1245",Description:"This is Description",CaseReceived:"20",BO:"10",QtyReceieved:"20" },     
            { Lot: "item 1", OhQty: "500", OrderQty: "200", CaseUOM: "EA",  CaseQty: "16.66", Expiry: "Jan 24 , 2026", MTH:"Jan 24 , 2026",SKU:"1245",Description:"This is Description",CaseReceived:"20",BO:"10",QtyReceieved:"20"},
            { Lot: "item 1", OhQty: "500", OrderQty: "200", CaseUOM: "EA",  CaseQty: "16.66", Expiry: "Jan 24 , 2026", MTH:"Jan 24 , 2026",SKU:"1245",Description:"This is Description",CaseReceived:"20",BO:"10",QtyReceieved:"20"}
        
])
const [head, setHead] = useState([{ title: 'Lot', Wid: 250 , customComp: ModalOpen }, { title: 'Expiry', Wid: 120 }, { title: 'MTH', Wid: 120 }, { title: 'SKU', Wid: 100 }, { title: 'Description', Wid: 120 }, { title: 'OhQty', Wid: 120 }, { title: 'OrderQty', Wid: 120 },{ title: 'CaseReceived', Wid: 100 }, { title: 'CaseUOM', Wid: 120 },{ title: 'CaseQty', Wid: 120 }, { title: 'QtyReceieved', Wid: 120 }, { title: 'BO', Wid: 120 } ])
  return (
    <div className=''>
      <GridTable row={row} head={head}/>
    </div>
  )
}

export default ReceivingInnerGrid
