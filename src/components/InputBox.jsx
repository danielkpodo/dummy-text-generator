import React from "react";

function InputBox(props) {
  return (
    <div className="input-box">
      <input type="number" min={1} id="input" onChange={props.onHandleInput} placeholder="Type number to generate..."/>
    </div>
  );
}

export default InputBox;