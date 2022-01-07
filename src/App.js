import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Login from "./component/login"
import Admin from "./component/admin"
import Logout from "./component/logout"



function App() {
  return (
    <div style={{margin:'0px',padding:'0px'}} >
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </div>
  
  );
}

export default App;
