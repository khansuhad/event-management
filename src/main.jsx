import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Contract from './components/Contract/Contract';

import Home from './components/Home/Home';
import ServicesCardDetails from './components/ServicesCardDetails/ServicesCardDetails';

import Carts from './components/Carts/Carts';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ErrorPage from './components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        loader:() => fetch('/services.json'),
        element:<Home></Home>
      },
      {
        path:'/contract',
        element:<PrivateRoute><Contract></Contract></PrivateRoute>
      },
      {
        path:'/cart',
        element:<PrivateRoute><Carts></Carts></PrivateRoute>
      },
      {
        path:'/cartdetails/:paramsId',
        loader:() => fetch('/services.json'),
        element:<PrivateRoute><ServicesCardDetails></ServicesCardDetails></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
 
  </React.StrictMode>,
)
