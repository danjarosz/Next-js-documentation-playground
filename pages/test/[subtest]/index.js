import { useRouter } from "next/router";

export default function SubTest() {
  const router = useRouter();
  const {
    query: { subtest },
  } = router;
  return <div>subtest: {subtest}</div>;
}
