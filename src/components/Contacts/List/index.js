import React from 'react'
import {useState} from 'react'
import User from '../../User';
import { BrowserRouter as Router,Link, Routes, Route,useLocation  } from 'react-router-dom';

function List({contacts,isLoading}) {
    const[filterText,setFilterText] = useState('');
    const location = useLocation();
    const filtered = contacts.filter((item)=>{
        return Object.keys(item).some((key)=>
            item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLocaleLowerCase())
        )
    })
  return (
    <div>
        <input placeholder='filter contact' value={filterText} onChange={(e)=>setFilterText(e.target.value)}></input>
        {isLoading &&<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> }
        <ul className='list'>
            {
            filtered.map((contact,i)=><li key={i}><Link to={`${location.pathname}/${contact.id}`}><span>{contact.username}</span><span>{contact.email}</span></Link></li>)
            }
        </ul>
        <p style={{color:'gray'}}> Total contact ({filtered.length})</p>
        <Router><Routes>
        {/* <Route exact path={location.pathname}>
          <h3>Please select a user.</h3>
        </Route> */}
        <Route path={`${location.pathname}/:id`} component={User}>
        </Route>
       </Routes> </Router>
    </div>
  )
}

export default List;
