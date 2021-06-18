import { useRouter } from "next/router";

export default function SubTest() {
  const router = useRouter();
  const {
    query: { subtest, anothersubtest },
  } = router;
  return (
    <div>
      anothersubtest: {anothersubtest} - it is a subroute of {subtest}
    </div>
  );
}
