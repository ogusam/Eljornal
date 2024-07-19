import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//import Link from 'antd/es/typography/Link';

export const ViewUsers = () => {
  const [userlist, userupdate]=useState([]);
  useEffect(()=>{
    loadusers()
  },[])
  const loadusers=()=>{
  fetch('http://localhost:8000/users').then(res=>{
    if(!res.ok){
      return false
    }
    return res.json();
  }).then(res=>{
    userupdate(res)
  });
}
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
        <h1>Users</h1>

        </div>
        <div className='card-body'>
          <button className='btn btn-success'>Add User</button>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                

              </tr>
            </thead>  
              <tbody>
                {
                  userlist &&
                  userlist.map(item=>(
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.phone}</td>
                  
                </tr>
                  ))
}
              </tbody>
            
          </table>
        </div>
      </div>
    </div>
  )
}


export default ViewUsers;