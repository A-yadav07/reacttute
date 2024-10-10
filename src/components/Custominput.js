import React from "react";

function CustomInput({ value,name, onChange }) {
  return (
    <div className="inputcontainer">
      <label>{value}</label>
      <input className="myinput" name={name} onChange={onChange} placeholder={`Enter your ${value}`} />
    </div>
  );
}

export default CustomInput;
