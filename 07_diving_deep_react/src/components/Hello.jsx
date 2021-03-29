import React from "react";
function Hello(props) {
  function funBtn(arg) {
    alert("functional component clicked");
    console.log(arg);
  }
  return (
    <div>
      <button onClick={funBtn.bind(this, "functional component parameter")}>
        Functional Component
      </button>
      <h3>Hello {props.name}</h3>
    </div>
  );
}
export default Hello;
