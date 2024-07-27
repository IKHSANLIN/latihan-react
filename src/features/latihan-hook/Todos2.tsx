import useTodos from "../../hooks/useTodos";

const Todo2 = () => {
  const { data } = useTodos();

  return (
    <>
      <h2>Todos 2</h2>
      <ol>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>
    </>
  );
};
export default Todo2;
