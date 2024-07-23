


import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//import Link from 'antd/es/typography/Link';

 const Dashboard = () => {
  const [transactionlist, transactionupdate]=useState([]);
  useEffect(()=>{
    loadusers()
  },[])
  const loadusers=()=>{
  fetch('http://localhost:8000/transaction').then(res=>{
    if(!res.ok){
      return false
    }
    return res.json();
  }).then(res=>{
    transactionupdate(res)
  });
}
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
        <h1>Dashboard</h1>

        </div>
        <div className='card-body'>
          
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>MTI</th>
                <th>Amount</th>
                <th>Terminal Id</th>
                <th>RD</th>
                <th>PAN</th>
                <th>TT</th>
              </tr>
            </thead>  
              <tbody>
                {
                  transactionlist &&
                  transactionlist.map(item=>(
                <tr key={item.id}>
                  <td>{item.MTI}</td>
                  <td>{item.amount}</td>
                  <td>{item.terminalId}</td>
                  <td>{item.responseDescription}</td>
                  <td>{item.PAN}</td>
                  <td>{item.transactionTime}</td>  

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


export default Dashboard;




/*
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <h3 className='mb-4'>Dashboard</h3>
      <div className='d-flex justify-content-between align-itmes-center gap-3'>
        <div className='d-flex bg-white p-3 rounded-3'></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Dashboard
*/