import React from 'react'
import { Routes,Route } from "react-router-dom";
import App from './App';
import User from './components/User/User'
import Admin from './components/Admin/Admin'
import Home from './components/Home/Home';
import Dashboard from './components/Admin/content/Dashboard';
import ManageUser from './components/Admin/content/ManageUser';
import Login from './components/Auth/Login';
import { ToastContainer, toast ,Bounce} from 'react-toastify';


const Layout = () => {
  return (
   <>
    <Routes>
      <Route path="/" element={<App />} >
      <Route index element={<Home />} />
      <Route path="users" element={<User />} />
      
    </Route>


      <Route path="/admin" element={<Admin />}>
        <Route index element={<Dashboard />}/>
        <Route path='manage-users' element={<ManageUser />}/>
      
      </Route>


      
      <Route path="/login" element={<Login />}/>

    </Routes>
   
       <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                 theme="light"
                transition={Bounce}
        />
   </>
  )
}

export default Layout
