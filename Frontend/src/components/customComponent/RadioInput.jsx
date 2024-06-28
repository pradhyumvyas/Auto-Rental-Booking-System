import React from 'react'

const RadioInput = ({ label, name, options, register, required }) => {
   return (
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2">
         {label}
       </label>
       {options.map((option, index) => (
         <div key={index}>
           <input
             type="radio"
             name={name}
             value={option.value}
             {...register(name, {
               required: "Required",
             })}
             className="mr-2 leading-tight"
           />
           <span className="text-gray-700">{option.label}</span>
         </div>
       ))}
     </div>
   );
 };
 
 export default RadioInput;