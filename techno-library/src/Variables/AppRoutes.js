import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Authors from '../Pages/Authors';
import Home from '../Pages/Home';

const AppRoutes = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/Authors' element={<Authors/>} />
            </Routes>
        </Router>
    </>
  )
}

export default AppRoutes