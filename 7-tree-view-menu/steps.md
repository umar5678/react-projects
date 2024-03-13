#### Overview

Create a dynamic tree-view menu for a recursive navigation menu UI.

- Profile
  - Details
    - Location
      - City
      - Address
      - Etc
  - Settings
    - Account
    - Security
      - Login
      - Password
    - Register
      - Email
        - ID
        - Etc

Sample data is provided in the data.js file.

### App.jsx

- import data from data.js
- pass this data to the TreeViewMenu component

### TreeViewMenu.jsx

- This TreeViewMenu.jsx file has two components

  - TreeViewMenu
  - MenuItem

- **TreeViewMenu**

- in a nav element, it renders a ul, and then calls the MenuItem component for each item in the data array. Using map method
- MenuItem component is called with props.item, which is the current item in the data array.

- **MenuItem**

- this is a recursive component. It renders a li element, Displays Title of the component in p tag
- and then calls itself for each item in the item.children array. Using map method

- note **data.js**

- some items are singles
- while some items are nested

- MenuItem render the title of each item, and if there is item with nested children, then it will render the children as a submenu. using recursion

- If there are subItems, then we can expand and close them, For this functionality
- we use state variable, expand , setExpand initially false
- and a handleItemClick method, to toggle this state

- then it comes to the rendering if there is item , there is subItem and expand is true, then it will render the subItems as a submenu.

- we also use expand and subItem availability to show open and close icons
- if expand is true , that mean subItem is opened, se we need to display close icon, otherwise open icon

### Completed
