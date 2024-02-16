'use client'
import React , {useState , useRef} from 'react'
import { MdCallSplit } from 'react-icons/md'
import SkuModall from './SkuModall'

const PurchaseSiplitSubgrid = () => {
  const [isOpen, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)
  return (
    <div className=' w-full flex items-center justify-center '>
       <MdCallSplit onClick={()=>setOpen(true)} className='text-green-500 text-[25px]' />
       <SkuModall open={isOpen} setOpen={setOpen} cancelButtonRef={cancelButtonRef} />
        </div>
  )
}

export default PurchaseSiplitSubgrid