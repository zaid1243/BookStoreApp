import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Freebook from "./components/Freebook";
import Home from "./home/Home";
import { Route, Router, Routes } from "react-router-dom";
import Course from "./components/Course";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
