import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import BookUs from "./Components/Pages/BookUs";
import Careers from "./Components/Pages/Careers";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/bookus' element = {<BookUs />} />
          <Route path='/careers' element ={<Careers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;