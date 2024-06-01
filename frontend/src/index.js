// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import  ReactDOM  from 'react-dom/client';
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import App from "./App";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Body from "./Components/Body";
import Workers from "./Components/Workers";
import Wardens from "./Components/Wardens";
import Ward_gh2 from "./Components/Ward_gh2";
import Ward_gh1 from "./Components/Ward_gh1";
import { Ward_bh1 } from "./Components/Ward_bh1";
import { Ward_bh2 } from "./Components/Ward_bh2";
import Register from "./Components/RegisterStudent";
import StudentLogin from "./Components/StudentLogin";
import RegisterStudent from "./Components/RegisterStudent";
import WardenLogin from "./Components/WardenLogin";
import RegisterWarden from "./Components/RegisterWarden";
import Complaint from "./Components/Complaint";
import StudentView from "./Components/StudentView";
import StudComplaintView from "./Components/StudComplaintView";
import WardenPage from "./Components/WardenPage";
import Electrical from "./Components/Electrical";
import Carpenter from "./Components/Carpenter";
import Cleaning from "./Components/Cleaning";
import Others from "./Components/Others";
import Profile from "./Components/Profile";
import Rules from "./Components/Rules"
import RoomChange from "./Components/RoomChange";
import  Maps  from "./Components/Maps";
import Tenders from "./Components/Tenders";

const approuter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
      path:"/",
      element:<Body/>,
     },
     {
      path:"/home",
      element:<Body/>,
     },
     {
      path:"/wardens",
      element:<Wardens/>,
     },
     {
      path:"/wardens/bh1",
      element:<Ward_bh1/>,
     },
     {
      path:"/wardens/bh2",
      element:<Ward_bh2/>,
     },
     {
      path:"/wardens/gh1",
      element:<Ward_gh1/>,
     },
     {
      path:"/wardens/gh2",
      element:<Ward_gh2/>,
     },
     {
      path:"/workers",
      element:<Workers/>,
     },
     {
      path:"/rules",
      element:<Rules/>,
     },
     {
      path:"/roomchange",
      element:<RoomChange/>,
     },
     {
      path:"/maps",
      element:<Maps/>,
     },
     {
      path:"/tenders",
      element:<Tenders/>,
     },
     {
      path:"/about",
      element:<About/>
     },
     {
      path:"/contact",
      element:<Contact/>
     },
     {
      path:"/login",
      element:<Login/>
     },
     {
      path:"/login/student",
      element:<StudentLogin/>
     },
     {
      path:"/login/warden",
      element:<WardenLogin/>
     },
     {
      path:"/login/student/register",
      element:<RegisterStudent/>
     },
     {
      path:"/student/view",
      element:<StudentView/>
     },
     {
      path:"/student/raisecomplaint",
      element:<Complaint/>
     },
     {
      path:"/student/viewcomplaint",
      element:<StudComplaintView/>
     },
     {
      path:"/login/warden/register",
      element:<RegisterWarden/>
     },
     {
      path:"/warden/view",
      element:<WardenPage/>
     },
     {
      path:"/warden/view/electrical",
      element:<Electrical/>
     },
     {
      path:"/warden/view/carpenter",
      element:<Carpenter/>
     },
     {
      path:"/warden/view/cleaning",
      element:<Cleaning/>
     },
     {
      path:"/warden/view/others",
      element:<Others/>
     },
     {
      path:"/view/profile",
      element:<Profile/>
     },
  ]
  }
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={approuter}/>
)
