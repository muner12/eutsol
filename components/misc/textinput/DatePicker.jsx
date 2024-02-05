import React, { useState, useEffect } from 'react';

const DateTimePicker = ({ isDisabled, timeEnabled }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(
    new Date().toISOString().slice(0, 16) // Initial value: current date and time
  );

  const handleDateTimeChange = (e) => {
    setSelectedDateTime(e.target.value);
    
  };
  useEffect(() => {
    if (timeEnabled) {
      const currentDateTime = new Date().toISOString().slice(0, 16); // YYYY-MM-DDTHH:mm
      setSelectedDateTime(currentDateTime);
    }
  }, [timeEnabled]);

  return (
    <div className="flex space-x-4">
      {timeEnabled ? (
        <input
          type="datetime-local"
          value={selectedDateTime}
          onChange={handleDateTimeChange}
          className="border p-2 rounded-lg w-80 mb-3  hover:border-gray-400  focus:border-blue-200 focus:outline-none"
          disabled={isDisabled}
        />
      ) : (
        <input
          type="date"
          value={selectedDateTime.slice(0, 10)} // Display only date
          onChange={handleDateTimeChange}
          className="border p-2 rounded-lg w-80 mb-3 focus:border-blue-200 focus:outline-none"
          disabled={isDisabled}
        />
      )}
    </div>
  );
};


export default DateTimePicker;


// ****************Method to call*******************

//  *****Custom Date Time Picker*****
//        <DatePicker isDisabled={true}/>  date only disabled field
//        <DatePicker timeEnabled={true} /> for date and time both
//        <DatePicker/>       for date only
//        <DatePicker isDisabled={true} timeEnabled={true} /> date & time disabled field