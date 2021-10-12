import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();
const time = date.toLocaleTimeString();

let greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

function Heading() {
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
      <br />
      {time}
    </h1>
  );
}

export default Heading;
