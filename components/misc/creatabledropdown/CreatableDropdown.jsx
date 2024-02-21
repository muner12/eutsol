
import React ,{useState} from 'react';
import CreatableSelect from 'react-select/creatable';

const CreatableDropdown = ({value , handleCreateOption}) => {


  return (
    <CreatableSelect
      className="w-full min-w-[200px] bg-white border-b border-b-gray-300 text-[14px] outline-none "
      options={value}
      styles={{
        control: (provided, state) => ({
          ...provided,
          borderBottom: state.isFocused ? '1px solid #007bff' : '1px solid #ccc', // Bottom border color
          borderRadius: 0,
          border:'none',
          boxShadow: 'none',
        }),
      }}
      isClearable
      isSearchable
      placeholder="Please Select"
      onCreateOption={handleCreateOption}
    />
  );
};

export default CreatableDropdown;


//method to use

//   const [options,setOptions]= useState([
//   { value: 'Nutraunex', label: 'Nutraunex' },
//   { value: 'Supplier', label: 'Supplier' },
//   { value: 'Getz', label: 'Getz' },
// ])

// const handleCreateOption=(inputValue)=> {
//         const newOption = {
//             value: inputValue,
//             label: inputValue,
//         }
//         setOptions([...options,newOption])
// }

//             <CreatableDropdown value={options} handleCreateOption={handleCreateOption}/>

