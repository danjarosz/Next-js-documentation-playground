import Link from "next/link";

export const getServerSideProps = async (context) => {
  const {
    params,
    req,
    res,
    query,
    preview,
    previewData,
    resolvedUrl,
    locale,
    locales,
    defaultLocale,
  } = context;
  console.log(context);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};

export default function Posts({ posts }) {
  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
