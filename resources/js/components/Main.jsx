import React from "react";
import Login from "./Login";
import App from "./App";
import { Navigate, Routes, Route } from "react-router-dom";


const Logout = () => {

  return <Navigate to="/Merge/public/" />;
};

function Main() {

  return (
    <Routes>

//Login
      <Route path="/Merge/public/" element={<Login />} />
      
//App
      <Route path="/Merge/public/App" element={<App />} >
      </Route >

    </Routes>
  );
}

export default Main;