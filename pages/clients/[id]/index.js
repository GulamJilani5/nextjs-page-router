import { useRouter } from "next/router";

export default function clientProjectPage() {
    const router = useRouter();
 console.log(router.query);

  function ClientProjectHandler(){
        // load data...
        //  router.push('/clients/max/projecta');
         router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query : {id: 'max', clientprojectid: 'projecta'}
         })
  }
  return (
    <>
    <div> The project of a given client</div>
    <button onClick={ClientProjectHandler}> Load Porject A</button>
    </>
  )
}
