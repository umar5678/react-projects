import { useState } from "react";

const TreeViewMenu = ({ menuItems }) => {
  return (
    <nav className="h-screen flex flex-col text-white text-lg pt-10 pl-10 w-96  bg-slate-700">
      <ul className="">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default TreeViewMenu;

// sub component

const MenuItem = ({ item }) => {
  const [expand, setExpand] = useState(false);

  function handleItemClick() {
    setExpand(!expand);
  }

  return (
    <li>
      <p className="my-2" onClick={handleItemClick}>
        {item.title}
        <span className="pl-4">
          {item && item.subMenu && item.subMenu.length
            ? expand
              ? "--"
              : "+"
            : null}
        </span>
      </p>
      {item.subMenu && expand && (
        <ul className="ml-10">
          {item.subMenu.map((subItem) => (
            <MenuItem key={subItem.id} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};
