import { useState } from "react";

const expensiveCalculation = (num: number) => {
  console.log("Calculating...", new Date().getTime());
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
const TanpaUsemomo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<any[]>([]);
  const calculation = expensiveCalculation(count);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodos = () => {
    setTodos((t: any) => [...t, "New Todo"]);
  };
  return (
    <div className="">
      <div className="">
        <h2>My Todos</h2>
        {todos.map((todo, i) => {
          return <p key={i}>{todo}</p>;
        })}
        <button onClick={addTodos}>Add Todo</button>
      </div>
      <hr />
      <div className="">
        Count : {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};
export default TanpaUsemomo;
