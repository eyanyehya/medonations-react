// src/App.js

import React from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import MyNavbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import AddPressRelease from './pages/AddPressRelease';
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import MedicalDrives from "./pages/MedicalDrives";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogDetail from "./pages/BlogDetail";

const Layout = ({children}) => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    return (
        <div style={{paddingTop: isHome ? '0' : '80px'}}>
            {children}
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <MyNavbar/>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="/add-press-release" element={<AddPressRelease/>}/>
                    <Route path="/blogs" element={<Blogs/>}/>
                    <Route path="/medical-drives" element={<MedicalDrives/>}/>
                    <Route path="/contact" element={<ContactUs/>}/>
                    <Route path="/blogs/:id" element={<BlogDetail/>}/>
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
