import { useState } from "react";
import "./styles.css";

var headingText = "welcome";
var headingStyle = { color: "red" };

var userName = "Pushpendra";

export default function App() {
  return (
    <div>
      <h1>
        {headingText} <span style={headingStyle}>{userName}</span>
      </h1>
    </div>
  );
}
