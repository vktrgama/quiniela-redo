import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Header />
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/rules" element={<div>this are the rules</div>} />
                <Route path="/matches" element={<div>this are the matches</div>} />
                <Route path="/participants" element={<div>this are the partricipants</div>}/>
                <Route exact path="/signin" render={() => (
                      <h3>This are the signin</h3>
                )} />
                <Route path="*" element={<div>nopage</div>} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
