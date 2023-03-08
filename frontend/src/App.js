import Header from "./components/header/Header";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import "./App.css"
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Addmovie from "./pages/Addmovie/Addmovie";
import Aboutpage from "./pages/Aboutpage/Aboutpage";
import Editmovie from "./pages/Editmovie/Editmovie";

const App = () => {
  return (
    <>
    <Header /><br/>
    <Navbar />
    <div className='app'>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/addmovie" element={<Addmovie />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="/update/:id" element={<Editmovie />}></Route>
      </Routes>
    </div>
    
    </>
  );
  
}

export default App
