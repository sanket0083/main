import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import "./App.css";
import About from "./component/About";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import Departments from "./component/Departments";
import Doctors from "./component/Doctors";
import Appointments from "./component/Appointments";
import Layout from "./component/Layout";
import Login from "./component/Login";
import FetchAPI from "./FetchAPI";



const App = () => {
  
  return (
    
    <>
      
      
      <Routes> 
     
        <Route path="/" element={<Layout>  <Home /><FetchAPI /> </Layout>} />
        <Route path="/Departments" element={<Layout> <Departments /> </Layout>} />
        <Route path="/Doctors" element={<Layout> <Doctors /> </Layout>} />
        <Route path="/about" element={<Layout> <About /> </Layout>} />
        <Route path="/contact" element={<Layout> <Contact /> </Layout>} />
        <Route path="/appointments" element={ <Layout> <Appointments /> </Layout>} />
        <Route path="/login" element={  <Login /> } />
      </Routes>
      
        
        
    </>

  );
};


export default App;
