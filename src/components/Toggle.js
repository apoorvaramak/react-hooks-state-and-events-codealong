import React, { useState } from "react"; 

function Toggle() {
  let [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn((isOn) => !isOn);
  } 
  const color = isOn ? "red" : "white";

  const [isOn, setIsOn] = useState(false);
  return <button style={{ background: color }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
