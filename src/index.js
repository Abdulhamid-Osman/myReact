import React from "react";
import ReactDom from "react-dom";

const fname = "Abdulhamid";
const lname = "Osman";
const lucky = Math.floor(Math.random() * 100);
ReactDom.render(
  <div>
    <h1>Hello {`${fname}  ${lname}`}</h1>
    <p>And my lucky number is {lucky}</p>
  </div>,
  document.getElementById("root")
);
