
import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom"
//import Dashboard from './component/pages/Dashboard';
import LoginForm from './component/pages/LoginForm';
import ForgetPassword from './component/pages/ForgetPassword';
import Mainlayout from './component/Mainlayout';
import Dashboard from './component/pages/Dashboard';
import ResetPassword from './component/pages/ResetPassword';
import AddUser from './component/pages/user/AddUser';
import Transactions from './component/pages/Transactions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewUsers from './component/pages/user/ViewUsers';
import EdithUser from './component/pages/EdithUser';



function App() {
  return (
    <div className="App">
      
      <ToastContainer theme='colored' position='top-center'></ToastContainer>

      <HashRouter basename='/'>
        <Routes>

          <Route path="/" element={<LoginForm/>}/>
          <Route path='/forgotpassword' element={<ForgetPassword/>}/>
          <Route path='reset-password' element={<ResetPassword/>}/>
          <Route path="/admin" element={<Mainlayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='add-user' element={<AddUser/>}/>
          <Route path='view-users' element={<ViewUsers/>}/>
        
          <Route path='view-users/update' element={<EdithUser/>}/>

          <Route path='transactions' element={<Transactions/>}/>
          </Route>
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
