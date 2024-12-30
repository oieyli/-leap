import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Routes와 Route 추가
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
