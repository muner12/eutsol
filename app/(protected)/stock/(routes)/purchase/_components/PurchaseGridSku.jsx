import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { updatePurchaseSku } from "../redux/Purchase.slice"


const PurchaseGridSku = ({data, rowData, index}) => {
    // console.log('check sku index' , index);

    const dispatch = useDispatch()

    const skuList = useSelector((state) => state.PurchaseSlices.skuList)
    const checkUpdatelist = useSelector((state) => state.PurchaseSlices.postPurchaseDetail)
    const FormStatus = useSelector((state) => state.PurchaseSlices.FormStatus);

    // console.log('checkUpdatelist' , checkUpdatelist);
    const setChange = (e) => {

        const slected = skuList.filter((data) => data.PAR_ID ==  e.target.value) ,

        data = {
            id : slected[0] , 
            indexR : index
        }

        dispatch(updatePurchaseSku(data))
        // console.log('slected sku data' , slected);


    }

    return (
        <div className='w-full h-full flex justify-center items-center pr-2 '>
            {/* <MdOutlineKeyboardArrowDown  className='text-[25px] text-gray-500' /> */}


            <select 
             onChange={setChange}
              className="block w-full mt-1 p-2 pr-8  rounded-md shadow-sm focus:outline-none "
               name=""
                id=""
                disabled={FormStatus == 'Initiated' ? false : true}
                >

                {
                    skuList?.map((data , i) => {
                        return (
                            <option key={i} className='my-4 text-[16px] font-bold' value={data.PAR_ID}>{data.PAR_CODE}</option>

                        )
                    })
                }
            </select>
        </div>
    )
}

export default PurchaseGridSku