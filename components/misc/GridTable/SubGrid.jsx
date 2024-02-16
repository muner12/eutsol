"use client"
import React, { useEffect, useState, useRef } from 'react'
import ModalOpen from './ModalOpen'
import StatusCell from './StatusCell'




const SubGrid = ({ dropDown, Subdata, head , setHead }) => {

    const inputRef = useRef(null);

    const [cells, setCells] = useState(0)
    // const [head, setHead] = useState([{ title: 'SubItem', Wid: 250 , customComp: ModalOpen }, { title: 'Part', Wid: 120 }, { title: 'Cost', Wid: 100 }, { title: 'LastCost', Wid: 120 }, { title: 'OhQty', Wid: 120 }, { title: 'OrderQty', Wid: 120 }, { title: 'UOM', Wid: 120 }, { title: 'Conv', Wid: 120 }, { title: 'CaseQty', Wid: 120 }, { title: 'Split', Wid: 120 }, { title: 'Batch', Wid: 120 }, { title: 'Expiry', Wid: 120 }])
    const [row, setRow] = useState()
    const [headTwo, setHeadTwo] = useState()
    const [inputValues, setInputValues] = useState({});
    const [totalWid, setTotalWid] = useState(0)
    const [activeEdit, setActiveEdit] = useState()
    const [draggedIndex, setDraggedIndex] = useState(null);

    // console.log("cells sub", cells);

    useEffect(() => {
        setCells(head?.length)

        setHeadTwo(head)
        const newTotalWid = head?.reduce((acc, data) => {
            // Check if data.Wid is a valid number
            const widValue = Number(data.Wid);
            if (!isNaN(widValue)) {
                return acc + widValue;
            }
            return acc;
        }, 0);

        setTotalWid(newTotalWid);
    }, [dropDown])
    useEffect(() => {

        setRow(Subdata);
    }, [Subdata]);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Do something when Enter key is pressed
            const valuesCopy = { ...inputValues };

            // Push the copy into the 'row' array
            setRow((prevRow) => [...prevRow, valuesCopy]);
            // console.log('Enter key pressed!');
            // console.log('Input value:', row);
        }
    };




    // Function to handle changes in input values
    const handleInputChange = (name, value) => {
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [name]: value,
        }));
    };


    const dragItem = useRef();

  const handleDragStart = (index) => {
    if(index != 0){
        setDraggedIndex(index);
        dragItem.current = index;
    }
    
  };

  const handleDragOver = (index) => {
    if(index != 0){
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



    return (
        <div className='rounded-lg border relative '>


            <div className={`w-full ${cells == 0 ? "hidden" : "block"} overflow-auto`}>
                <div style={{ minWidth: `${totalWid}px`, display: "flex", justifyContent: "start" }} className={` rounded-tl-lg overflow-hidden border-b  `}>
                    <div className='p-[2px]    bg-green-400'></div>
                    <div className='border border-l-0 flex justify-center items-center px-[6px] '><input type="checkbox" /></div>

                    {
                        head?.map((data, i) => (
                            <div 
                            style={{ minWidth: `${data.Wid}px` }} key={i} 
                            className={` group border-x  overflow-hidden py-2 text-[14px] text-gray-500 text-center flex justify-center px-2  items-center  size-full h-auto `}
                            draggable
                                    onDragStart={() => handleDragStart(i)}
                                    onDragOver={() => handleDragOver(i)}
                                    onDragEnd={handleDragEnd}
                            >
                                {data.title}
                            </div>
                        ))
                    }
                </div>
                <div className=''>
                    <div style={{ minWidth: `${totalWid}px`, display: "flex", justifyContent: "start" }} className={`  group hover:bg-gray-50 hover:shadow-lg   `}>
                        {
                            head?.map((data, i) => {
                                return (
                                    <div key={i} className=' flex size-full  '>
                                        {i == 0 && <div className='p-[2px] h-ful group-hover:bg-green-400  bg-green-300 transition-colors '></div>}
                                        {i == 0 && <div className='border border-l-0 flex justify-center items-center px-[6px] '><input type="checkbox" /></div>}

                                        <div style={{ minWidth: `${data.Wid}px` }} className=' flex size-full border px-2  '>
                                            {/* {i == 0 && <div className='p-[4px] h-full -translate-x-1  bg-green-300'></div>}  */}
                                            {
                                                cells == i + 1 ?
                                                    <input onKeyPress={handleKeyPress}
                                                        key={data.title}
                                                        type="text"
                                                        name={data.title}
                                                        value={inputValues[data.title] || ''}
                                                        onChange={(e) => handleInputChange(data.title, e.target.value)}
                                                        className='w-full pl-2 py-1 text-[14px] ' placeholder={`${data.title}...`} />
                                                    :
                                                    <input
                                                        key={data.title}
                                                        type="text"
                                                        name={data.title}
                                                        value={inputValues[data.title] || ''}
                                                        onChange={(e) => handleInputChange(data.title, e.target.value)}
                                                        className='w-full pl-2 py-1 text-[14px]  ' placeholder={`${data.title}...`}
                                                    />


                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    {
                        row?.map((rowData, rowI) => {

                            return (
                                <div key={rowI} className='w-full  border-x border-l-0 hover:bg-gray-50 hover:shadow-lg '>
                                    <div className=' absolute border-b z border-green-400 w-6 p-[1px] translate-y-3 -translate-x-[25px] rounded-bl-lg'></div>

                                    <div style={{ minWidth: `${totalWid}px`, display: "flex", justifyContent: "start" }} className={` `}>
                                        {head?.map((header, headerIndex) => {

                                            const editActive = () => {
                                                const data = { title: header.slector, rowIndex: rowI }

                                                setActiveEdit(data)
                                            }
                                            if (rowI == activeEdit?.rowIndex && activeEdit?.title == header.slector) {
                                                // console.log("good ho gia", header.title, rowI , activeEdit?.rowIndex);

                                            }

                                            return (
                                                <div key={headerIndex} className=' flex size-full h-auto '>
                                                    {headerIndex == 0 && <div className='p-[2px] h-full   bg-green-400'></div>}
                                                    {headerIndex == 0 && <div className='border border-l-0 flex justify-center items-center px-[6px] '><input type="checkbox" /></div>}

                                                    {

                                                        header.status ?
                                                            <div style={{ minWidth: `${header.Wid}px` }} className='flex w-full h-full border'>
                                                                <StatusCell StatusData={rowData[header.slector]} />
                                                            </div>
                                                            : header.customComp && headerIndex != 0 ? <div onDoubleClick={editActive} style={{ minWidth: `${header.Wid}px` }} className='flex w-full  h-full border'> {header.slector === activeEdit?.title && rowI === activeEdit?.rowIndex ? <input placeholder={rowData[header.slector]} className='w-full text-gray-500 text-[14px] ' type="text" /> : <header.customComp data={rowData[header.slector]} />} </div>
                                                                :
                                                                <div onDoubleClick={editActive} style={{ minWidth: `${header.Wid}px` }} className={` px-2 justify-center  w-full flex  text-gray-500 h-full border py-1 `} >
                                                                    {/* {headerIndex == 0 && rowData.childrenData ?
                                                                      <div className=''> {dropDown == rowI ? <RiArrowDropUpLine onClick={() => setDropDown(-1)} className='text-[25px]' /> : <RiArrowDropDownLine onClick={() => setDropDown(rowI)} className='text-[25px]' />}</div> : ""} */}
                                                                    {header.slector === activeEdit?.title && rowI === activeEdit?.rowIndex ? <input placeholder={rowData[header.slector]} className='w-full text-gray-500 text-[14px]' type="text" /> : header.customComp && headerIndex == 0 ? <div className='flex w-full h-full '>  <header.customComp data={rowData[header.slector]} child={true}/> </div> : <p className='text-[14px] py-1'>{rowData[header.slector]}</p>}
                                                                </div>
                                                    }

                                                </div>
                                            )
                                        })}

                                    </div>

                                    {/* <div className={`pl-6 pt-5  w-full ${dropDown == rowI ? "block" : "hidden"}`}>
                                        <SubGrid dropDown={dropDown} Subdata={rowData.childrenData} />
                                    </div> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SubGrid