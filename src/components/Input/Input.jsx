import React from 'react'
import * as C from "./styleInput";

const Input = (type, placeholder, value, onChange) => {
  return (
  
        <C.Input 
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}  
        />
  
    )
};

export default Input