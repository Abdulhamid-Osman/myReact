import React from "react";
import ReactDom from "react-dom";

const customeStyle = {
  color: ""
};

let greetings;
const time = new Date();
const currentTime = time.getHours();

if (currentTime < 12) {
  greetings = "Goodmorning";
  customeStyle.color = "red";
} else if (currentTime < 18) {
  greetings = "good Afternoon";
  customeStyle.color = "green";
} else {
  greetings = "goodnight";
  customeStyle.color = "blue";
}

ReactDom.render(
  <div>
    <h1 className="heading" style={customeStyle}>
      {greetings}
    </h1>
  </div>,
  document.getElementById("root")
);
