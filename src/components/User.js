import React from 'react'
import {useParams, Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function User() {
    const [loading, setLoading]= useState(true);
    const [user, setUser]=useState([]);
    const {id}=useParams();
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=> setUser(res.data))
        .then(console.log)
        .finally(() => setLoading(false));
    },[id]);

  return (
    <div>
     <h1>User Detail</h1>
     {
                loading && <div>Loading...</div>
     }
     <code>
        {JSON.stringify(user)}
     </code>
     <br /><br />
    <Link to={`/users/${parseInt(id)+1}`}>Next User</Link>
    </div>
  )
}
