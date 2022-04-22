import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Authors from '../Pages/Authors';
import Home from '../Pages/Home';
import Categories from '../Pages/Categories';
// import Login from "../Pages/Login";
// import SignUp from "../Pages/SignUp";

const AppRoutes = () => {
  return (
    <>
        <Router>
            <Routes>
            <Route exact path="/" element={<Home />} />
        <Route exact path="/Home" element={<Home />} />
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignUp/>}/> */}
          <Route exact path="/categories" element={<Categories/>}/>
                <Route exact path='/Authors' element={<Authors/>} />
            </Routes>
        </Router>
    </>
  )
}

export default AppRoutes