import React from 'react';
import { useQuery, gql } from "@apollo/client"

const GET_USER = gql`
{
  usered{
    name
    id
    email
    
  }
}
`;

export default function UserList(){
  const { error, data, loading } = useQuery(GET_USER);

  console.log({error, loading, data });

  if (loading) return <div>Spinner ...</div>;

  if (error) return <div>something went wrong</div>;


  return (
    <div className="ListUsers">
      {data.usered.map((userChar) => {
        return (
          <div key={userChar.id}>
            <h2>{userChar.name}</h2>
          </div>
        );
      })}
    </div>
  );

}






// export default function UserList() {
  
//   const { error, loading, data } = useQuery(GET_USER);
//   useEffect(() => { 
  
//     const intervalId =setInterval(() => {
// console.log({error, loading, data});
//     }, 100000);
//     return () => clearInterval(intervalId);
//   });
// }

