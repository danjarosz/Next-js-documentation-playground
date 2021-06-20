import { promises as fs } from "fs";
import path from "path";

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = await fs.readdir(postsDirectory);

  const posts = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = await fs.readFile(filePath, "utf-8");

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
      filename,
      content: fileContents,
    };
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: await Promise.all(posts),
    },
  };
};

// posts will be populated at build time by getStaticProps()
export default function ReadingFiles({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.filename}>
          <h3>{post.filename}</h3>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );
}
