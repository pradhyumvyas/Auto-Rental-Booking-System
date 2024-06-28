import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = ({ startDate, endDate, setStartDate, setEndDate }) => {
  return (
    <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Date and Time Range
    </label>
    <DatePicker
      selected={startDate}
      onChange={(dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
      }}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      showTimeSelect
      dateFormat="Pp"
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    />
  </div>
  )
}

export default DateRangePicker