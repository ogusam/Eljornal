import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const LoginForm = () => {
    const [email, emailupdate] = useState('');
    const [password, passwordupdate] = useState('');
  const usenavigate=useNavigate();
  useEffect(()=>{
sessionStorage.clear();
  },[])
   const ProceedLogin=(e)=>{
    e.preventDefault();
    if (validate()){
      fetch("http://localhost:8000/users/" + email).then((res)=>{
        return res.json();
      }).then((resp)=>{
        console.log(resp)
        if (Object.keys(resp).length===0){
          toast.error('please enter valid email');
        }else{
          if(resp.password === password){
            toast.success('success');
            sessionStorage.setItem('email',email)
            usenavigate('/admin')
          }else{
            toast.error('please enter valid credentials')
          }
        }
      }).catch((err)=>{
        toast.error('login failed due to :' +err.message)
      })
    }

   }
    const validate = () => {
        let result = true;
        if (email === '' || email === null) {
            result = false;
            toast.warning('Please Enter Email');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Email <span className="errmsg">*</span></label>
                                <input value={email} onChange={e => emailupdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Login</button> |
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
