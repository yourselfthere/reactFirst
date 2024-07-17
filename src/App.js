import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const a = count;
  const handleClickInc = () => {
    setCount(count + 1);
  };
  const handleClickDec = () => {
    setCount(count - 1);
  };
  return (
    <div>
      {a}
      <div>
        <button onClick={handleClickInc}>@+</button>
        <button onClick={handleClickDec}>@-</button>
      </div>
    </div>
  );
};

export default App;
