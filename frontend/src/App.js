import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import BookUs from "./Components/Pages/BookUs";
import Careers from "./Components/Pages/Careers";
import ScrollToTop from "./Components/Pages/ScrollToTop";
import Team from "./Components/Pages/Team";
import Services from "./Components/Pages/Services";
import AdminSignUp from "./Components/Admin/AdminSignup";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminDashboard from "./Components/Admin/AdminDashboard";

function App() {
  return (

    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/bookus' element = {<BookUs />} />
          <Route path='/careers' element ={<Careers />} />
          <Route path='/team' element ={<Team />} />
          <Route path='/services' element ={<Services />} />
          <Route path="/admin-signup" element={<AdminSignUp/>} />
          <Route path='/admin-login' element ={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;