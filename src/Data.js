import React, { useState } from "react";
import datas from "./datas.json";
const Data = () => {
  const [nData, setnData] = useState(datas);

  const handleClick = () => {
    setnData([]);
  };
  const handleClickOnItem = (itemsId) => {
    setnData(nData.filter((item) => item.id !== itemsId));
  };
  const updateButton = (itemsId) => {
    setnData(
      nData.map((items) => {
        if (items.id === itemsId) {
          return { name: "newName" };
        } else {
          return items;
        }
      })
    );
  };
  return (
    <div>
      <ul>
        {nData.map((items) => {
          return (
            <div>
              <li key={items.id}>{items.name}</li>
              <br />
              <button onClick={() => handleClickOnItem(items.id)}>
                remove
              </button>
              <br />
              <button onClick={() => updateButton(items.id)}>update</button>
            </div>
          );
        })}
      </ul>
      <button onClick={handleClick}>Clear</button>
    </div>
  );
};

export default Data;
