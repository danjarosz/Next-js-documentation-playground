export const getServerSideProps = async () => {
  const data = await fetch("http://localhost:3000/api/user");
  const user = await data.json();

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
  };
};

export default function User({ user }) {
  const { name } = user;

  return (
    <div>
      <h2>User Page</h2>
      <p>User name: {name}</p>
    </div>
  );
}
