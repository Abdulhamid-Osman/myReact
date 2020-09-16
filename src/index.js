import React from "react";
import ReactDom from "react-dom";

const fname = "Abdulhamid";
const lname = "Osman";
const lucky = Math.floor(Math.random() * 100);
ReactDom.render(
  <div>
    <h1 className="heading">Hello {`${fname}  ${lname}`}</h1>
    <div>
      <img
        className="food-img"
        src="https://static.toiimg.com/thumb/69038542.cms?imgsize=563452&width=800&height=800"
        alt="food"
      />
      <img
        className="food-img"
        src="https://static.toiimg.com/thumb/69038542.cms?imgsize=563452&width=800&height=800"
        alt="food"
      />
      <img
        className="food-img"
        src="https://static.toiimg.com/thumb/69038542.cms?imgsize=563452&width=800&height=800"
        alt="food"
      />
    </div>
    <p>And my lucky number is {lucky}</p>
  </div>,
  document.getElementById("root")
);
