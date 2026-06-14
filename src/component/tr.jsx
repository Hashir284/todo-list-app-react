import React, { useState } from "react";
import "./../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Tr = ({ task, index, del, i, completed }) => {

  const [checked, schecked] = useState("");

  return (
    <tr>
      <td className="td1">
        <input
          type="checkbox"
          name=""
          className="checkbox"
          id={'e'+index}
          onChange={(e) => {
            completed(e.target.checked, index)
            schecked(e.target.checked);
          }}
        />
        <label htmlFor={'e'+index}>{checked ? <s className="c">{task}</s> : task}</label>
      </td>
      <td className="td2">
        <div
          onClick={() => {
            del(i);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </td>
    </tr>
  );
};

export default Tr;
