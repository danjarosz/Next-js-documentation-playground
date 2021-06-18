export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  const paths = todos.map((todo) => ({
    params: {
      id: String(todo.id),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const todo = await res.json();

  return {
    props: {
      todo,
    },
  };
};

export default function Todo({ todo }) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>Status: {todo.completed ? "Completed" : "In progress"}</p>
    </div>
  );
}
