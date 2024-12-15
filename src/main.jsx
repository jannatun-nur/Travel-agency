
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router';
import React from "react";
import LandingPage from "./Compnent/LandingPage/LandingPage.jsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      }
 
     
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)


