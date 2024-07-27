import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
}
const useTodos = () => {
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return { data };
};

export default useTodos;
