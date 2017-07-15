import React from 'react'

export default ({ name, label, value, type, changeHandler, placeholder }) => (
  <div className="textfield">
    <label>{label}</label>
    <input value={value} name={name} type={type} onChange={changeHandler} placeholder={placeholder}/>
  </div>
)
