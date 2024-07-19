import React, { useReducer, useState } from "react";

// const reducer = (state, action) => {
//   console.log(state, action);
//   if (action.type === "incr") {
//     return { count: state.count + 1 };
//   } else if (action.type === "decr") {
//     return { count: state.count - 1 };
//   } else {
//     throw new Error("unsupported action type");
//   }
// };
const initialState = {
  data: [],
  loading: false,
  error: null,
};
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "FETCH_DATA_START":
      return { ...state, loading: true };
    case "FETCH_DATA_SUCCESS":
      return { loading: false, error: null, data: action.payload };
    case "FETCH_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "DELETE_DATA":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    case "ADD_DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
  }
}
const App = () => {
  //   const [count, setCount] = useState(0);

  //   const [state, dispatch] = useReducer(reducer, { count: 0 });
  //   const a = state.count;
  //   const handleClickInc = () => {
  //     dispatch({ type: "incr" });
  //   };
  //   const handleClickDec = () => {
  //     dispatch({ type: "decr" });
  //   };
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    dispatch({ type: "FETCH_DATA_START" });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
      console.log(data);
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
    }
  };
  const addData = (newData) => {
    dispatch({ type: "ADD_DATA", payload: newData });
  };
  const deleteData = (itemId) => {
    dispatch({ type: "DELETE_DATA", payload: itemId });
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error:{state.error}</p>}
      <ul>
        {state.data.map((item) => (
          <li key={item.id}>
            {item.title}{" "}
            <button
              onClick={() => {
                deleteData(item.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {/* {a}
      <div>
        <button onClick={handleClickInc}>@+</button>
        <button onClick={handleClickDec}>@-</button>
      </div> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addData({
            id: Date.now(),
            title: e.target.title.value,
          });
        }}
      >
        <input type="text" name="title" placeholder="Add new item" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
