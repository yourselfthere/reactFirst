import React, { createContext } from "react";
import B from "./B";
const GreetContext = createContext();
// const Greet2Context = createContext();

const A = () => {
  const greet = "hello";
  const greet2 = "hello2";

  return (
    <div>
      <GreetContext.Provider value={{ greet, greet2 }}>
        <B />
      </GreetContext.Provider>
      {/* <B greet={greet} /> */}
    </div>
  );
};

export default A;
export { GreetContext };
