import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from './pages/Home';
import Manual from './pages/Manual';
import Dictionary from './pages/Dictionary';
import Memo from './pages/Memo';
import "./font/Font.css";
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manual" element={<Manual />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
