"use client"
import React, { useEffect, useState, useRef } from 'react'
import SubGrid from './SubGrid'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import GridFilter from './GridFilter'
import StatusCell from './StatusCell'
import GridDateCell from './GridDateCell'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import ModalOpen from './ModalOpen'
import GridFilterNum from './GridFilterNum'
import GridCheckFilter from './GridCheckFilter'
import { TiArrowUnsorted } from "react-icons/ti";
import GridDateFilter from './GridDateFilter'

const GridTest = ({ head, row, subHead, setHead, setSubHead , GridTitle , GridColor , GridColaps}) => {
    const [dropDown, setDropDown] = useState()
    const [cells, setCells] = useState(0)
    // const [head, setHead] = useState([{ title: 'Contact', Wid: 200, filter: "textFilter" }, { title: 'Priority', Wid: 100, status: "priority", customComp: true }, { title: 'orderDate', Wid: 100 }, { title: 'compDate', Wid: 100 }, { title: 'Vander', Wid: 100 }, { title: 'phone', Wid: 200 }, { title: 'email', Wid: 200 }, { title: 'cost', Wid: 200 }, { title: 'status', Wid: 150 , status: "status" , customComp: true}, { title: 'comments', Wid: 200 },])
    // const [row, setRow] = useState([
    //     { Contact: "Po78234234", Priority: "High", orderDate: "Jan 10", compDate: "Jan 20", Vander: "Vandor 1", phone: '+1 325 478 5698', email: "Phonix@gamil.com", cost: "$250.00", status: "Working on it", comments: "Working on its", childrenData: [{ SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" },] },
    //     { Contact: "Po78234234", Priority: "Medium", orderDate: "Jan 10", compDate: "Jan 20", Vander: "Vandor 1", phone: '+1 325 478 5698', email: "Phonix@gamil.com", cost: "$250.00", status: "Done", comments: "Working on its", childrenData: [{ SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" },] },
    //     { Contact: "Po78234234", Priority: "Low", orderDate: "Jan 10", compDate: "Jan 20", Vander: "Vandor 1", phone: '+1 325 478 5698', email: "Phonix@gamil.com", cost: "$250.00", status: "issued", comments: "Working on its", childrenData: [{ SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" },] },
    // ])
    const [totalWid, setTotalWid] = useState(0)
    const [activeEdit, setActiveEdit] = useState()
    const [rowList, setRowList] = useState(0)

    const [draggedIndex, setDraggedIndex] = useState(null);
    const [rowData, setRowData] = useState()
    const [colaps , setColaps] = useState(false)
    const [tableColor , setTableColor] = useState()
    console.log('table color' , tableColor);
    // console.log("cells" , cells);
    // console.log('check Wid Data===', totalWid);

    // console.log("check this button", activeEdit);


    useEffect(() => {
        setCells(head.length);

        const newTotalWid = head.reduce((acc, data) => {
            // Check if data.Wid is a valid number
            const widValue = Number(data.Wid);
            if (!isNaN(widValue)) {
                return acc + widValue;
            }
            return acc;
        }, 0);

        setTotalWid(newTotalWid);
    }, [head]);


    useEffect(() => {
        // const rowList = row.length
        setRowList(row?.length)
        setRowData(row)
    }, [row])

    useEffect(()=>{
setTableColor(GridColor)

    } , [GridColor])

    useEffect(()=>{
setColaps(GridColaps)
    },[GridColaps])

    // drag drop

    const dragItem = useRef();

    const handleDragStart = (index) => {
        if (index != 0) {
            setDraggedIndex(index);
            dragItem.current = index;
        }

    };

    const handleDragOver = (index) => {
        if (index != 0) {
            if (draggedIndex !== null) {
                const items = [...head];
                const draggedItem = items[draggedIndex];
                items.splice(draggedIndex, 1);
                items.splice(index, 0, draggedItem);
                setHead(items);
                setDraggedIndex(index);
            }
        }
    };

    const handleDragEnd = () => {
        setDraggedIndex(null);
        dragItem.current = null;
    };


    const setSort = () => {
        setRowData([...rowData].reverse());
    };

    return (
        <div>
            <div onClick={()=>setColaps(!colaps)} className={`flex   text-${tableColor} cursor-pointer items-center p-2  group`}>
                <div>
                    <MdOutlineKeyboardArrowDown className=' text-[20px] mr-1' />
                </div>
                <p className=' font-semibold H text-[18px]' >{GridTitle}</p>
                <div><p className='text-[14px] text-gray-400 ml-2 hidden group-hover:block '>{rowList} Products</p></div>
            </div>
            <div className=' rounded-lg border h-fit w-fit    '>

                <div className={`w-full ${cells == 0 ? "hidden" : "block"} h-fit  `}>
                    <div style={{ minWidth: `${totalWid}px`, display: "flex", justifyContent: "start" }} className={` rounded-tl-lg   border-b  `}>
                        <div className={`p-[2px]  rounded-t-lg   bg-${tableColor }`}></div>
                        <div className='border-r flex justify-center items-center px-[6px] '><input type="checkbox" /></div>

                        {
                            head?.map((data, i) => (
                                <div>

                                    <div
                                        style={{ minWidth: `${data.Wid}px` }}
                                        key={i}
                                        className={` group border-x py-1  text-[14px]  text-gray-500 text-center  flex justify-center  items-center  size-full h-auto `}
                                        draggable
                                        onDragStart={() => handleDragStart(i)}
                                        onDragOver={() => handleDragOver(i)}
                                        onDragEnd={handleDragEnd}
                                    >
                                        {/* {i == 0 ? <div className='border-r-2 flex justify-center items-center px-[6px] h-full'><input type="checkbox" /></div> : ""} */}
                                        <p className='w-full py-1 '>  {data.title}</p>
                                        {data.filter && data.filter == "textFilter" ?
                                            <span className=' w-[0px] group-hover:w-[40px] transition-all -translate-x-8 group-hover:translate-x-0 duration-300  '>
                                                <span className='hidden group-hover:block  duration-300'>
                                                    <GridFilter />
                                                </span>
                                            </span>
                                            : data.filter && data.filter == "NumberFilter" ?
                                                <span className='hidden group-hover:block'>
                                                    <GridFilterNum />
                                                </span>
                                                : ""}
                                        {
                                            data.filter && data.filter == 'checkFilter' ?

                                                <span className=' w-[0px] group-hover:w-[40px] transition-all -translate-x-8 group-hover:translate-x-0 duration-300  '>
                                                    <span className='hidden group-hover:block  duration-300'>
                                                        <GridCheckFilter options={data?.checkFilterOptions} />
                                                    </span>
                                                </span>
                                                :
                                                ''
                                        }

                                        {
                                            data.date  ?

                                                <span className=' w-[0px] group-hover:w-[40px] transition-all -translate-x-8 group-hover:translate-x-0 duration-300  '>
                                                    <span className='hidden group-hover:block  duration-300'>
                                                        <GridDateFilter  />
                                                    </span>
                                                </span>
                                                :
                                                ''
                                        }

                                        <div className='w-[0px] group-hover:w-[40px] transition-all -translate-x-3 group-hover:translate-x-0 duration-300 group-hover:px-1'>
                                            <div className=' hidden group-hover:block   '  >
                                                <TiArrowUnsorted onClick={setSort} />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={` ${colaps ? "   h-0" : "  h-fit "} overflow-hidden  `}>
                        {
                            rowData?.map((rowData, rowI) => {

                                const subLentgh = rowData?.childrenData?.length

                                return (
                                    <div className='w-full  hover:bg-gray-50 hover:shadow-lg '>


                                        <div style={{ minWidth: `${totalWid}px`, display: "flex", justifyContent: "start" }} className={` `}>

                                            {head.map((header, headerIndex) => {

                                                const editActive = () => {
                                                    const data = { title: header.slector, rowIndex: rowI }

                                                    setActiveEdit(data)
                                                }
                                                if (rowI == activeEdit?.rowIndex && activeEdit?.slector == header.slector) {
                                                    // console.log("good ho gia", header.title, rowI , activeEdit?.rowIndex);

                                                }


                                                return (
                                                    <div className='bg-red-30 flex size-full  h-auto  '>
                                                        {headerIndex == 0 && <div className={`p-[2px] h-full   bg-${tableColor} `}></div>}
                                                        {headerIndex == 0 && <div className='border border-l-0 flex justify-center items-center px-[6px] '><input type="checkbox" /></div>}

                                                        {

                                                            header.Status ?
                                                                <div style={{ minWidth: `${header.Wid}px` }} className='flex w-full  h-full border'>
                                                                    <header.Status data={rowData[header.slector]} index={rowI}  rowData={rowData} />
                                                                </div>
                                                                : header.date ?
                                                                    <div style={{ minWidth: `${header.Wid}px` }} className='flex w-full  h-full border'>
                                                                        <GridDateCell data={rowData[header.slector]} />
                                                                    </div>
                                                                    :
                                                                    header.customComp && headerIndex != 0 ? <div onDoubleClick={editActive} style={{ minWidth: `${header.Wid}px` }} className='flex w-full  h-full border'> {header.slector === activeEdit?.title && rowI === activeEdit?.rowIndex ? <input placeholder={rowData[header.slector]} className='w-full text-gray-500 text-[14px] ' type="text" /> : <header.customComp data={rowData[header.slector]} index={rowI} rowData={rowData} />} </div>
                                                                        :
                                                                        <div onDoubleClick={editActive} style={{ minWidth: `${header.Wid}px` }} className={` ${headerIndex != 0 ? "px-2 justify-center " : "overflow-hidden"} w-full flex items-center  text-gray-500 h-full border py-1 group `} >
                                                                            {/* {headerIndex == 0 && rowData.childrenData ? */}
                                                                            <div className={` ${headerIndex == 0 ? "flex" : "hidden"}`}>
                                                                                <div className={` ${headerIndex == 0 && rowData.childrenData ? "group-hover:visible" : ""} invisible  text-gray-400`}> {dropDown == rowI ? <RiArrowDropUpLine onClick={() => setDropDown(-1)} className='text-[25px]' /> : <RiArrowDropDownLine onClick={() => setDropDown(rowI)} className='text-[25px]' />}</div>
                                                                            </div>
                                                                            {/* // : ""} */}
                                                                            {header.slector === activeEdit?.title && rowI === activeEdit?.rowIndex ? <input placeholder={rowData[header.slector]} className='w-full text-gray-500 text-[14px]' type="text" /> : headerIndex == 0 ? <div className='flex w-full h-full '>  <ModalOpen data={rowData[header.slector]} rowIndex={rowI} rowData={row} Modall={header.Modal} child={false} length={rowData?.childrenData?.length > 0 ? subLentgh : 0} /> </div> : <p className='text-[14px] py-1 '>{rowData[header.slector]}</p>}
                                                                        </div>
                                                        }

                                                    </div>
                                                )
                                            })}

                                        </div>
                                        {
                                            subHead &&
                                            <div className={`pl-6 py-5 border-l border-l-green-400 bg-white w-full ${dropDown == rowI ? "block" : "hidden"}`}>
                                                <SubGrid dropDown={dropDown} Subdata={rowData.childrenData} setHead={setSubHead} head={subHead}  />
                                            </div>
                                        }

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GridTest