"use client";

import { useState } from "react";

const FORTUNES = [
  "Your code will compile on the first try. Today only.",
  "A semicolon you forgot will find its way home.",
  "Great things are coming. Probably a merge conflict.",
  "You will soon read the docs. And they will help.",
  "The bug is not in the library. It is in you. (Lovingly.)",
  "Someone will star your repo this week.",
  "Take a break. The answer comes after the snack.",
  "console.log is a valid debugging strategy. Embrace it.",
  "Your next idea is better than your last one.",
  "It works on your machine, and that's a start.",
];

export default function Home() {

  const [count, setCount] = useState(0);

  function open() {
    setCount((c) => c + 1);
  }

  return (
    <div className="center">
      <h1>Fortune Cookie</h1>
      <button className="cookie" onClick={open} aria-label="open a fortune cookie">
        🥠
      </button>
      <p className="hint">{"Click the cookie"}</p>


      <p className="count">Cookies opened: {count}</p>
    </div>
  );
}
