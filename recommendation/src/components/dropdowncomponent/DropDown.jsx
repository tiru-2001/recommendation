import React from "react";
import "./dropdown.scss";

const DropDown = ({ setFun, setToggle, data, top }) => {
  const setValuToggle = (val) => {
    setFun(val);
    setToggle((prev) => !prev);
  };
  return (
    <div className="drop_down" style={{ top: `${top}` }}>
      <ul>
        {data.map((item, ind) => (
          <li
            onClick={() => {
              setValuToggle(item);
            }}
            key={ind}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
