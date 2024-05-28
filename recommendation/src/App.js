import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import { Home, Login, Register, Contact, About, FromTo, Result } from "./pages";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/fromto" element={<FromTo />} />
          <Route path="/result/:from/:to" element={<Result />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
