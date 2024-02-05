import Dropdown from '@/components/misc/textinput/DropDownInput'
import TextInput from '@/components/misc/textinput/TextInput'
import React,{useState} from 'react'

const PurchaseForm = () => {
  const [selectedValue, setSelectedValue] = useState(''); // You can set a default value here
 const options = [
    {value:'',label:''},
    { value: 'Supplier 1', label: 'Supplier 1' },
    { value: 'Supplier 2', label: 'Supplier 2' },
    { value: 'Supplier 3', label: 'Supplier 3' },
  ];
    const handleDropdownChange = (value) => {
    setSelectedValue(value);
    // Add additional logic based on the selected value if needed
  };
  return (
    <div className=" w-full flex gap-2 ">
      <div className='w-3/4 h-80  bg-gray-50 shadow-sm shadow-gray-400'>
        Grid Section
      </div>

      <div className='w-1/4 h-full p-4 bg-gray-50 shadow-sm shadow-gray-400'>
        <Dropdown options={options} value={selectedValue} onChange={handleDropdownChange}/>
        <TextInput label="Order Date"/>
      </div>
    </div>
  )
}

export default PurchaseForm
