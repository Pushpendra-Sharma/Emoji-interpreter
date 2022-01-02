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

var emojis = Object.keys(emojiDictionary);

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

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>Emoji-interpreter</h1>
      <input placeholder="enter emoji" onChange={emojiInputHandler}></input>
      <p className="emoji-meaning">{meaning}</p>
      <h3>emojis available</h3>
      <div className="emoji-list">
        {emojis.map((emoji) => (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {emoji}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
