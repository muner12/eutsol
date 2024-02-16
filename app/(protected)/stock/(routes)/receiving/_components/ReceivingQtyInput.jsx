'use client'
import React , {useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import updateQty from '../redux/receivingSlices'

const ReceivingQtyInput = ({data,index}) => {
  const [changeValue , setChangeValue] = useState()
  const checkUpdateQty = useSelector((state) => state.receivingSlices.postReceivingDetail)
// console.log('checkUpdateQty' , checkUpdateQty);
  const dispatch = useDispatch()

  const setChange = (e) => {
    setChangeValue(e.target.value);
    data = {
      qty: e.target.value,
      indexR: index,
    };
    dispatch(updateQty(data));
  };
  return (
    <div className='w-full flex items-center justify-center '>
        
        <input className='w-full outline-none text-center'
         type="number"
         onChange={setChange}
          value={changeValue} />
    </div>
  )
}

export default ReceivingQtyInput