### Overview

Implement a recursive tree view navigation menu component using React.

The menu will have a nested structure with parent and child items that can be expanded and collapsed. Sample menu data is provided in `data.js`.

### App.jsx

- Import the sample data from `data.js`.
- Pass the data to the `TreeViewMenu` component as a prop.

### TreeViewMenu.jsx

This file contains two components:

#### TreeViewMenu

- Renders a `<nav>` element.
- Inside it renders a `<ul>`.
- Maps through the data array and renders a `<MenuItem>` component for each item.
- Passes the current item from data as a prop to `MenuItem`.

#### MenuItem (Recursive Component)

- Renders a `<li>`.
- Displays the title of the current item in a `<p>` tag.
- Checks if the item has children:
  - If yes, maps through children and recursively renders a `<MenuItem>` for each child. This is where recursion happens.
- Uses state:
  - `expanded`: boolean, default false.
  - `handleClick`: toggles expanded state.
- If the item has children and expanded is true:
  - Renders the children as a submenu.
  - Conditionally shows open/close icon based on expanded state and if children exist.

### Usage

The `TreeViewMenu` component can be used by passing the nested menu data.
Each `MenuItem` renders the title and recursively renders any children.
Items with children can be expanded/collapsed using state.
The result is a nested tree view menu that can expand and collapse.

This structure clearly explains the key aspects and flow of building the recursive tree view menu component using React.
