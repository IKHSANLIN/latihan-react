import { useMemo, useState } from "react";

const expensiveCalculation = (num: number) => {
  console.log("Calculating...", new Date().getTime());
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const WithUsememo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<any[]>([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t: any) => [...t, "New Todo"]);
  };

  return (
    <>
      <div>
        <div>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
      </div>
    </>
  );
};

export default WithUsememo;
