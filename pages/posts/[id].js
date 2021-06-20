import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
  const {
    query: { id },
  } = context;
  console.log(context);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  // display 404 page if post not founded
  if (!post.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default function Post({ post }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
