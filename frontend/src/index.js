import React from "react";
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Body from "./Components/Body";
import Workers from "./Components/Workers";
import Wardens from "./Components/Wardens";
import WardGH2 from "./Components/WardGH2";
import WardGH1 from "./Components/WardGH1";
import WardBH1 from "./Components/WardBH1";
import WardBH2 from "./Components/WardBH2";
// import Register from "./Components/RegisterStudent";
import StudentLogin from "./Components/StudentLogin";
import RegisterStudent from "./Components/RegisterStudent";
import WardenLogin from "./Components/WardenLogin";
import RegisterWarden from "./Components/RegisterWarden";
import Complaint from "./Components/Complaint";
import StudentView from "./Components/StudentView";
import StudComplaintView from "./Components/StudComplaintView";
import WardenPage from "./Components/WardenPage";
import Profile from "./Components/Profile";
import Rules from "./Components/Rules";
import RoomChange from "./Components/RoomChange";
import Maps from "./Components/Maps";
import Tenders from "./Components/Tenders";
import WardenView from "./Components/WardenView";
import ViewComplaints from "./Components/ViewComplaints";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/wardens",
        element: <Wardens />,
      },
      {
        path: "/wardens/bh1",
        element: <WardBH1 />,
      },
      {
        path: "/wardens/bh2",
        element: <WardBH2 />,
      },
      {
        path: "/wardens/gh1",
        element: <WardGH1 />,
      },
      {
        path: "/wardens/gh2",
        element: <WardGH2 />,
      },
      {
        path: "/workers",
        element: <Workers />,
      },
      {
        path: "/rules",
        element: <Rules />,
      },
      {
        path: "/roomchange",
        element: <RoomChange />,
      },
      {
        path: "/maps",
        element: <Maps />,
      },
      {
        path: "/tenders",
        element: <Tenders />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/login/student",
        element: <StudentLogin />,
      },
      {
        path: "/login/warden",
        element: <WardenLogin />,
      },
      {
        path: "/login/student/register",
        element: <RegisterStudent />,
      },
      {
        path: "/student/view",
        element: <StudentView />,
      },
      {
        path: "/student/raisecomplaint",
        element: <Complaint />,
      },
      {
        path: "/student/viewcomplaint",
        element: <StudComplaintView />,
      },
      {
        path: "/login/warden/register",
        element: <RegisterWarden />,
      },
      {
        path: "/warden/view",
        element: <WardenView />,
      },
      {
        path: "/warden/:hostel",
        element: <WardenPage />,
      },
      {
        path:"/warden/:hostel/:category",
        element: <ViewComplaints/>,
      },
      {
        path: "/view/profile",
        element: <Profile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
