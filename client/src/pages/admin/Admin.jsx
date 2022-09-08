import './admin.css'
import React from "react";
import Navbar from "./comps/navigation/Navbar";
import Sidebar from "./comps/sidebar/Sidebar";
import NewHeader from "./pages/Header/Header";
import { useLocation, useMatch, Route, Routes, Outlet } from "react-router-dom";

const Admin = () => {
  //let { url } = useMatch();
  let { pathname } = useLocation();
  return (
    <>
      {/* <BrowserRouter>
       */}
      <div className="flex1">
        <Sidebar pathname={pathname}></Sidebar>
        <Outlet />
      </div>
      {/*</BrowserRouter> */}
    </>
  );
};

export default Admin;
