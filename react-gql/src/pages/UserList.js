import React from 'react';
import { useQuery, gql } from "@apollo/client"

const GET_USER = gql`
{
  user(id:1){
    id,
    name
    
  }
}
`;

export default function UserList() {
  
  const { error, loading, data} = useQuery(GET_USER);
  console.log({error, loading, data});

  return (
  <div></div>
  );

}
