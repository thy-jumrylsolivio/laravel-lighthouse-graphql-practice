import React from 'react';
import { useQuery, gql } from "@apollo/client"

const ADD_USER = gql`
mutation{
  createUser(
    name:"Lyrmuj",
    email:"lyr@gmail.com", 
    password:"passwoooord")
  {
    name
    email
  }
}
`

export default function UserAdd(){

    const { error, loading, data } = useQuery(ADD_USER);
    console.log({error, loading, data})


}