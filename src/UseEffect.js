import React, { useEffect, useState } from "react";

const UseEffect = () => {
  //useEffect mein jo render ho rha hai vo hai clicked vala part to tbhi useEffect kaam krega

  const [clicked, setClicked] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("We are using useState and useEffect hooks");
    return () => {
      console.log("return of useState");
    };
  }, [clicked, count]);
  return (
    <div>
      <button onClick={() => setClicked("Subscirbe")}>Subscribe</button>
      <br />
      <hr />
      <button onClick={() => setClicked("To")}>To</button>
      <br />
      <hr />
      <button onClick={() => setClicked("DropXOut")}>DropXOut</button>
      <br />
      <hr />
      <h1>{clicked}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
};

export default UseEffect;
