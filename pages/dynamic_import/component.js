import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../../components/hello"));

function Home() {
  return (
    <div>
      <DynamicComponent />
      <p>HOME PAGE is here!</p>
    </div>
  );
}

export default Home;
