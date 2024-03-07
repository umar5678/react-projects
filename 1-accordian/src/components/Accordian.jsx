import { useState } from "react";
import { accordionData } from "../data/data";

const Accordian = () => {
  const [selected, setSelected] = useState([]);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);

  function handleSelect(currItemId) {
    if (!enableMultiSelect) {
      setSelected([currItemId]);
      if (selected.includes(currItemId)) {
        setSelected([]);
      }
    } else {
      if (selected.includes(currItemId)) {
        setSelected(selected.filter((id) => id !== currItemId));
      } else {
        setSelected([...selected, currItemId]);
      }
    }
  }

  function handleMultiSelect(currItemId) {
    if (selected.includes(currItemId)) {
      setSelected(selected.filter((id) => id !== currItemId));
    } else {
      setSelected([...selected, currItemId]);
    }
  }

  return (
    <div>
      <div className="flex mx-auto justify-center flex-col gap-2 max-w-2xl">
        <button
          onClick={() => setEnableMultiSelect(!enableMultiSelect)}
          className="px-3 py-2 bg-blue-500 text-xl font-semibold text-white w-max mx-auto rounded-xl"
        >
          {enableMultiSelect
            ? "Disable Multi-Selection"
            : "Enable Multi-Selection"}
        </button>
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((item) => (
            <div key={item.id} className="bg-orange-300 p-3 rounded-lg">
              {/* question */}
              <div
                onClick={() =>
                  enableMultiSelect
                    ? handleMultiSelect(item.id)
                    : handleSelect(item.id)
                }
                className="flex flex-row justify-between text-2xl font-semibold "
              >
                <h3>{item.question}</h3>
                <span>{selected.includes(item.id) ? "---" : "+"}</span>
              </div>
              {/* answer */}
              <div className=" flex items-start text-xl text-start">
                {selected.includes(item.id) ? <p>{item.answer}</p> : null}
              </div>
            </div>
          ))
        ) : (
          <p>No data for accordian available</p>
        )}
      </div>
    </div>
  );
};

export default Accordian;

// Step 2: Import necessary dependencies
// Import the 'useState' hook from React to manage component state.

// Step 3: Define the Accordian component
// Create a functional component named 'Accordian'.

// Step 4: Set up component state
// Initialize state variables using the 'useState' hook:
// - 'selected': to store the ID of the currently selected item(s).
// - 'enableMultiSelect': to toggle between single and multi-selection modes.

// Step 5: Implement selection handling functions
// Create two functions:
// - 'handleSelect': to handle selection in single-selection mode.
// - 'handleMultiSelect': to handle selection in multi-selection mode.

// Step 6: Render the UI
// Render the accordion UI using JSX:
// - Render a button to toggle between single and multi-selection modes.
// - Map through 'accordionData' array to render each accordion item.
// - Display question and answer for each item.
// - Implement click handlers to handle item selection.
