import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import User from './features/User';
import './App.css';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/rules' element={<div>this are the rules</div>} />
                    <Route path='/matches' element={<div>this are the matches</div>} />
                    <Route path='/participants' element={<div>this are the partricipants</div>} />
                    <Route path='/user' element={<User />} />
                    <Route path='*' element={<div>nopage</div>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
