import { useEffect } from 'react';
import { useQuery, gql } from "@apollo/client"

const GET_USER = gql`
{
  usered{
    name,
    id,
    email
    
  }
}
`;

export default function UserList() {
  
  const { error, loading, data } = useQuery(GET_USER);
  useEffect(() => { 
  
    const intervalId =setInterval(() => {
console.log({error, loading, data});
    }, 10000);
    return () => clearInterval(intervalId);
  });
}

