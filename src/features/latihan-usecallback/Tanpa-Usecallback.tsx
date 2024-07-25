import { useState } from "react";
import Todos from "./Todos";

const TanpaUsecallback = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

  const penambahan = () => {
    setCount((cn) => cn + 1);
  };
  const addTodos = () => {
    setTodos((t) => [...t, "Todos Baru"]);
  };
  return (
    <>
      <Todos todos={todos} addTodo={addTodos} />
      <hr />
      <div className="">
        Count : {count}
        <button onClick={penambahan}>+</button>
      </div>
    </>
  );
};
export default TanpaUsecallback;
