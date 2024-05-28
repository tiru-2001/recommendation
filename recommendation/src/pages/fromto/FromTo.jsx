import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./fromto.scss";
import DropDown from "../../components/dropdowncomponent/DropDown";
import { data } from "../../utils";

const FromTo = () => {
  const [fromToggle, setFromToggle] = useState(false);
  const [toToggle, settoToggle] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [dropdowndata, setDropdownData] = useState([]);

  const navigate = useNavigate();
  const redirct = () => {
    navigate(`/result/${from}/${to}`);
  };

  const fromFun = (e) => {
    setFrom(e.target.value);

    if (e.target.value.length) {
      const dup = [];
      // const upperCaseData = toString(e.target.value).toUpperCase();
      const result = data
        .filter((item, ind) => item.source.startsWith(e.target.value))
        .map((item, ind) => {
          console.log(item);
          return item.source;
        });
      for (let ele of result) {
        if (!dup.includes(ele)) {
          dup.push(ele);
        }
      }
      setFromToggle((prev) => !prev);
      console.log(result);
      setDropdownData(dup);
    }
  };

  const toFun = (e) => {
    setTo(e.target.value);
    if (e.target.value) {
      const dup = [];

      const result = data
        .filter((item, ind) => item.destination.startsWith(e.target.value))
        .map((item, ind) => item.destination);

      for (let ele of result) {
        console.log(ele);
        if (!dup.includes(ele)) {
          dup.push(ele);
        }
      }
      console.log(dup);
      settoToggle((prev) => !prev);

      setDropdownData(dup);
    }
  };

  return (
    <div className="fromto_container">
      <div className="heading">
        <h1>Enter the from and to location</h1>
      </div>
      <div className="form_container">
        <form action="">
          {fromToggle && (
            <DropDown
              setFun={setFrom}
              setToggle={setFromToggle}
              data={dropdowndata}
              top={"140px"}
            />
          )}
          {toToggle && (
            <DropDown
              setFun={setTo}
              setToggle={settoToggle}
              data={dropdowndata}
              top={"160px"}
            />
          )}

          <div>
            <label>From:</label>
            <input
              type="text"
              onChange={fromFun}
              value={from}
              placeholder="Enter the from location"
            />
          </div>

          <div>
            <label>To:</label>
            <input
              type="text"
              onChange={toFun}
              value={to}
              placeholder="Enter the to location"
            />
          </div>

          <button onClick={redirct}>submit</button>
        </form>
      </div>
    </div>
  );
};

export default FromTo;
