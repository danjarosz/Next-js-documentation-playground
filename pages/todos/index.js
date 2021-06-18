import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  return {
    props: {
      todos,
    },
  };
};

export default function Todos({ todos }) {
  return (
    <div>
      <h3>Todos:</h3>
      <ul>
        {todos &&
          todos.map((todo) => (
            <li key={todo.id}>
              <Link href={`/todos/${todo.id}`}>
                <a>{todo.title}</a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
