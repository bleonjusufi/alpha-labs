import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import BookUs from "./Components/Pages/BookUs";
import Careers from "./Components/Pages/Careers";
import ScrollToTop from "./Components/Pages/ScrollToTop";
import Team from "./Components/Pages/Team";
import Services from "./Components/Pages/Services";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;