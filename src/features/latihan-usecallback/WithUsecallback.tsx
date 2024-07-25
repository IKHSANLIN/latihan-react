import { useCallback, useState } from "react";
import Todos from "./Todos";

const WithUsecallback = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

  const penambahan = () => {
    setCount((cn) => cn + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...todos, "Todo baru"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div className="">
        Count: {count}
        <button onClick={penambahan}>+</button>
      </div>
    </>
  );
};
export default WithUsecallback;
