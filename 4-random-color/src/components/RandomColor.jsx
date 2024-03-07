import { useState } from "react";

const RandomColor = () => {
  const [bgColor, setBgColor] = useState("#fff");

  function randomHex(length) {
    return Math.floor(Math.random() * length);
  }

  function changeBgColor() {
    let hexStr = "#";
    const combination = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    for (let i = 0; i < 6; i++) {
      hexStr += combination[randomHex(combination.length)];
    }
    console.log(hexStr);
    setBgColor(hexStr);
  }

  return (
    <div
      className="h-screen w-full flex justify-center item-center"
      style={{ backgroundColor: bgColor }}
    >
      <button
        className="p-3 rounded-xl bg-blue-400 h-max my-auto"
        onClick={changeBgColor}
      >
        Change Background color
      </button>
    </div>
  );
};

export default RandomColor;
