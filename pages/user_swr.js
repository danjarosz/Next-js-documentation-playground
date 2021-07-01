import useSWR from "swr";

const fetcher = async (url) => {
  return fetch(url).then((res) => res.json());
};

export default function UserSWR() {
  const { data, error } = useSWR("/api/user", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <h2>User Page</h2>
      <p>User name: {data.name}</p>
    </div>
  );
}
