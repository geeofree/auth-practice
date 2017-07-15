import React from 'react'

export default ({ name, label, type, changeHandler, placeholder }) => (
  <div className="textfield">
    <label>{label}</label>
    <input name={name} type={type} onChange={changeHandler} placeholder={placeholder}/>
  </div>
)
