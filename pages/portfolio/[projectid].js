import { useRouter } from "next/router"
export default function PorfolioProjectPage() {

    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query)

    // to send a request to some backend server
    // to fetch the piece of data with an id of router.query.projectid

  return (
    <div>The portfolio project page</div>

  )
}
