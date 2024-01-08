import { useRouter } from "next/router"

export default function BlogPostpage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div> BlogPostpage</div>
  )
}
