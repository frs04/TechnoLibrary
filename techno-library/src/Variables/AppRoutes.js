
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authors from "../Pages/Author/Authors";
import Home from "../Pages/Home";
import Categories from "../Pages/Book/Categories";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Favorite from "../Pages/User/Favorite";
import BookDetails from '../Pages/Book/BookDetails';
import AboutUs from "../Pages/WebsiteInfo/AboutUs";
import ContactUs from "../Pages/WebsiteInfo/ContactUs";
import UploadBook from "../Pages/Book/UploadBook";
import PersonalInfo from "../Pages/User/PersonalInfo";
import AuthorDetails from "../Pages/Author/AuthorDetails";


const AppRoutes = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path='/BookDetails' element={<BookDetails/>} />
          <Route exact path="/Authors" element={<Authors />} />
          <Route exact path="/AuthorDetails" element={<AuthorDetails />} />
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
