import React from 'react'
import ReceivingGridView from './_components/ReceivingGridView'
import DashbordNav from '../../../dashbord/_components/DashbordNav'

export default function Receiving() {
  return (
    <div className='h-[88vh]'>
        <div className='h-[20%]'>
            <DashbordNav heading="Receiving Order" ptext="Welcome to contacts board! here you can store manage all of your contacts "/>
        </div>
        <div className='overflow-auto pl-5 h-[75%] w-full'>
      <ReceivingGridView/>
        </div>
    </div>
  )
}
