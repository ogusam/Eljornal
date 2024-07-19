import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddUser = () => {

    const [firstName, firstNamechange] = useState("");
    const [lastName, lastNamechange] = useState("");
    const [password, passwordchange] = useState("");
    const [id, idchange] = useState("");
    const [phone, phonechange] = useState("");
    const [role, rolechange] = useState("");
    
    

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (firstName === null || firstName === '') {
            isproceed = false;
            errormessage += ' Firstname';
        }
        if (lastName === null || lastName === '') {
            isproceed = false;
            errormessage += 'lastname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(id)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
            e.preventDefault();
            let regobj = { firstName, lastName, password, id, phone, role };
            if (IsValidate()) {
            //console.log(regobj);
            fetch("http://localhost:8000/users", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/admin');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    }
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>User Registeration</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>First Name <span className="errmsg">*</span></label>
                                        <input value={firstName} onChange={e => firstNamechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Last Name <span className="errmsg">*</span></label>
                                        <input value={lastName} onChange={e => lastNamechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg"></span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Role <span className="errmsg">*</span></label>
                                        <select value={role} onChange={e => rolechange(e.target.value)} className="form-control">
                                            <option value=""></option>
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                        </select>
                                    </div>
                                </div>
                                

                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register</button> |
                            
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default AddUser;
  