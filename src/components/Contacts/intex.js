import React from 'react';
import {useState,useEffect} from 'react';
import List from './List';
import Form from './Form';
import './styles.css';
import axios from "axios";


function Contacts() {
    const [contacts,setContacts ] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
        
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res)=> setContacts(res.data))
        .catch((e)=> console.log(e))
        .finally(()=>setIsLoading(false));

    },[])
    

    // const [contacts,setContacts] = useState(getUsers());
    // console.log('contact',contacts);
  return (
    <div id="container">  <h1>Contacts</h1>
    <List contacts={contacts} isLoading={isLoading}/>
    <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;
