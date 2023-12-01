import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Nav = () => {
  const {user , logOut} = useContext(AuthContext);
  
  
   const handleSignOut = () => {
    logOut()
    .then(() => {
      console.log('successfully sign out ')
      toast.success("sign out successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    })
    .catch(error => {
      console.log(error.message)
    })
   }
  useEffect(() => {
    console.log(user);
  },[user])
    return (
       <div className="md:px-[10%] py-10">
   
   <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to='/' className="text-black bg-none mx-2 font-semibold">Home</NavLink></li>
        <li><NavLink to='/contract' className="text-black bg-none mx-2 font-semibold">Contract</NavLink></li>
        <li><NavLink to='/cart' className="text-black bg-none mx-2 font-semibold">Cart</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-5xl text-red-600">Svent</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
        <li  ><NavLink to='/' className="text-black bg-none mx-2 font-semibold">Home</NavLink></li>
        <li><NavLink to='/contract' className="text-black bg-none mx-2 font-semibold">Contract</NavLink></li>
        <li><NavLink to='/cart' className="text-black bg-none mx-2 font-semibold">Cart</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  
  {
    user ? <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full border border-blue-900">
    
           <img src={user.photoURL} alt="" />
      
      
      </div>
    </label>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60 overflow-hidden">
     
    
        <li ><a href="">{user.displayName}</a></li>
        <li><Link onClick={handleSignOut}>Sign Out</Link></li>
    
     
    </ul>
  </div> :
  <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full border border-blue-900">
    
        <img src="https://i.ibb.co/qdfWHsw/Whats-App-Image-2023-10-07-at-6-49-13-PM.jpg" />
    
    </div>
  </label>
  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
 
    <li><Link to='/login'>Login</Link></li>
   
  </ul>
</div>
  }
  </div>
</div>
<ToastContainer/>
       </div>
    );
};

export default Nav;