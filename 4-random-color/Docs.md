### RandomColor.jsx

- The component `RandomColor.jsx` consists of a button positioned at the center of the screen.
- When the button is clicked, the background color of the screen changes.

#### Functionality:

- Implemented a state variable `bgColor` to hold a color value in hex string format.
- Injected this color string value into the `style` attribute's `backgroundColor` property of the main `div` whose color we want to change.
- Listened to the `onClick` event from the button, which calls a function to update the hex color value of the state variable and set a new color value.

**changeBgColor** Functionality:

- Created a function `changeBgColor` that generates a random hex color.
- Initialized a variable `hexStr` with `#` sign to represent the starting of a hex color.
- Defined an array `combination` containing numbers (1-9) and letters (a-f) representing hexadecimal digits.
- Used a `for` loop to iterate 6 times (since a hex color consists of 6 digits).
- Inside the loop, appended a random hexadecimal digit from the `combination` array to the `hexStr`.
- Updated the `bgColor` state variable with the newly generated hex color.

**randomHex** Functionality:

- Created a helper function `randomHex` to generate a random number within a specified range.
- The function takes the `length` of the `combination` array as a parameter.
- Utilized `Math.floor(Math.random() * length)` to generate a random number within the range of the length of the `combination` array.
- Returned the generated random number.

#### Code:

```javascript
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

    setBgColor(hexStr);
  }

  return (
    <div
      className="h-screen w-full flex justify-center items-center"
      style={{ backgroundColor: bgColor }}
    >
      <button
        className="p-3 rounded-xl bg-blue-400 h-max my-auto"
        onClick={changeBgColor}
      >
        Change Background Color
      </button>
    </div>
  );
};

export default RandomColor;
```

The documentation clearly outlines the functionality of the component `RandomColor.jsx`, including the implementation details of the `changeBgColor` function and the `randomHex` helper function. Each step is explained in a structured manner, facilitating understanding of the code's functionality.
