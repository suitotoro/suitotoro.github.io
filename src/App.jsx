import React from "react";
import "./App.css";

import Navbar from './Navbar'
import SelfIntro from './SelfIntro'
import ContactInfo from'./ContactInfo'
import {HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<SelfIntro />} />
            <Route path='/contact-info' element={<ContactInfo />} />
        </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
