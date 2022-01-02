import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍋": "lemon",
  "🥭": "mango",
  "🍐": "pear",
  "🍓": "strawberry",
  "🍉": "watermelon",
  "🍌": "banana",
  "🍎": "red apple",
  "🫐": "blueberries",
  "🥝": "kiwi fruit",
  "🍇": "grapes",
  "🍊": "tangerine",
  "🍍": "pineapple",
  "🍏": "green apple",
  "🍒": "cherries",
  "🍈": "melon",
  "🥑": "avacado"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler() {
    var userInput = event.target.value;

    //for variable key in object
    var emojiMeaning = emojiDictionary[userInput];
    //emojiDictionary.key

    if (emojiMeaning === undefined) {
      emojiMeaning = "Unknown";
    }
    setMeaning(emojiMeaning);
  }

  return (
    <div>
      <h1>Emoji-interpreter</h1>
      <input placeholder="enter emoji" onChange={emojiInputHandler}></input>
      <div>{meaning}</div>
    </div>
  );
}
//console.log(event.target.value);
//onChange is event
//target of event is the input tag
//value =value of target
