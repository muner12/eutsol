import { useState } from 'react';
import GridFilter from '../../../../../../components/misc/GridTable/GridFilter'
import GridTable from '../../../../../../components/misc/GridTable/GridTable';
import ModalOpen from '../../../../../../components/misc/GridTable/ModalOpen';
import PhoneNumber from '../../../../../../components/misc/GridTable/PhoneNumber';
export const TableData = () => {
    const [head, setHead] = useState([{ title: 'Contact', Wid: 250, filter: "textFilter" , customComp: ModalOpen }, { title: 'Priority', Wid: 100, status: "priority",  }, { title: 'orderDate', Wid: 100 }, { title: 'compDate', Wid: 100 }, { title: 'Vander', Wid: 100 }, { title: 'phone', Wid: 200 , customComp:PhoneNumber }, { title: 'email', Wid: 200 }, { title: 'cost', Wid: 200 }, { title: 'status', Wid: 150 , status: "status" ,}, { title: 'comments', Wid: 200 },])
    const [row, setRow] = useState([
      { Contact: "Po78234234", Priority: "High", orderDate: "Jan 10", compDate: "Jan 20", Vander: "Vandor 1", phone: '+1 325 478 5698', email: "Phonix@gamil.com", cost: "$250.00", status: "Working on it", comments: "Working on its", childrenData: [{ SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" },{ SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" },] },
      { Contact: "Po78234234", Priority: "Medium", orderDate: "Jan 10", compDate: "Jan 20", Vander: "Vandor 1", phone: '+1 325 478 5698', email: "Phonix@gamil.com", cost: "$250.00", status: "Done", comments: "Working on its", childrenData: [{ SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" },] },
      { Contact: "Po78234234", Priority: "Low", orderDate: "Jan 10", compDate: "Jan 20", Vander: "Vandor 1", phone: '+1 325 478 5698', email: "Phonix@gamil.com", cost: "$250.00", status: "issued", comments: "Working on its", },
  ])
  const [subHead, setSubHead] = useState([{ title: 'SubItem', Wid: 250 , customComp: ModalOpen }, { title: 'Part', Wid: 120 }, { title: 'Cost', Wid: 100 }, { title: 'LastCost', Wid: 120 }, { title: 'OhQty', Wid: 120 }, { title: 'OrderQty', Wid: 120 }, { title: 'UOM', Wid: 120 }, { title: 'Conv', Wid: 120 }, { title: 'CaseQty', Wid: 120 }, { title: 'Split', Wid: 120 }, { title: 'Batch', Wid: 120 }, { title: 'Expiry', Wid: 120 }])
  return (
    <div>
        <GridTable head={head} row={row} subHead={subHead} /> 
    </div>
  )
}
