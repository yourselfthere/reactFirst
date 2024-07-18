import React, { useContext } from "react";
import { GreetContext } from "./A";
const C = () => {
  const useCon = useContext(GreetContext);
  //   const useCon2 = useContext(Greet2Context);
  console.log(useCon);
  return (
    <h1>
      Greet: {useCon.greet} and {useCon.greet2}
    </h1>
  );
};

export default C;

{
  /* <GreetContext.Consumer>
{(val) => {
  return (
    <Greet2Context.Consumer>
      {(val2) => {
        return (
          <h1>
            Greet: {val} and {val2}
          </h1>
        );
      }}
    </Greet2Context.Consumer>
  );
}}
</GreetContext.Consumer> */
}
