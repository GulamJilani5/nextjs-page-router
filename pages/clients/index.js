import Link from "next/link"


export default function ClientPage() {
   const clients = [
         {id:'jil', name: 'Jilani'},
         {id:'max', name: 'Maxmilian'},
      ]

  return (
    <>
    <div>client page </div>
     <ul>
        {clients.map(client =>(
            // <li>
            //     <Link href={`/clients/${client.id}`}>{client.name}</Link>
            // </li>
            <li>
                <Link href={{
                    pathname : '/clients/[id]',
                    query : {id: client.id},
                }}>{client.name}</Link>
            </li>
        ))}
     </ul>
    </>
  )
}
