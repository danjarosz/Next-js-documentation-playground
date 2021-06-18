import Link from "next/link";

export const getStaticProps = async (context) => {
  const { params, preview, previewData, locale, locales, defaultLocale } =
    context;

  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  if (!todos) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      todos,
    },
    revalidate: 10,
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
