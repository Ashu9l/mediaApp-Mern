import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Verify from '../Pages/verify'
// import MediaDashboard from ''
import MediaUpload from '../Pages/MediaUpload'
import MediaDashboard from '../Pages/MediaDashboard'
// import MediaDashboard from '../Pages/MediaDashboard'


function RouteManager() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/verify' element={<Verify />} />
        <Route path="/dashboard" element={<MediaDashboard />} />
        <Route path="/upload" element={<MediaUpload />} />
      </Routes>
    </Router>
  )
}

export default RouteManager

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "../features/auth/Login";
// import SignUp from "../features/auth/SignUp";
// import Verify from "../features/auth/Verify";
// import MediaPage from "../features/media/MediaPage";

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/verify" element={<Verify />} />
//       <Route path="/dashboard" element={<MediaPage />} />
//     </Routes>
//   </Router>
// );

// export default RouteManager;