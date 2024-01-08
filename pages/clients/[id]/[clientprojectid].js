import { useRouter } from "next/router";

export default function SelectedClientProjectPage() {
 const router = useRouter();
 console.log(router.query);

  return (
    <div>Specific project Page for the selected client</div>
  )
}
