
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authors from "../Pages/Authors";
import Home from "../Pages/Home";
import Categories from "../Pages/Categories";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Favorite from "../Pages/Favorite";
import BookDetails from '../Pages/BookDetails';
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import PersonalInfo from "../Pages/PersonalInfo";
import UploadBook from "../Pages/UploadBook";


const AppRoutes = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path='/BookDetails' element={<BookDetails/>} />
          <Route exact path="/Authors" element={<Authors />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<SignUp />} />
          <Route exact path="/Categories" element={<Categories />} />
          <Route exact path="/Favorite" element={<Favorite />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/PersonalInfo" element={<PersonalInfo />} />
          <Route exact path="/UploadBook" element={<UploadBook />} />
        </Routes>
      </Router>
  );
};

export default AppRoutes;
