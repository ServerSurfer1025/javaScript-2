import React from "react";

function FunctionClick() {
  function clickHandler() {
    alert("function button was clicked");
    console.log("Function click was logged");
  }
  return (
    <>
      <h1></h1>
      <button onClick={clickHandler}>Function Click</button>
    </>
  );
}

export default FunctionClick;
