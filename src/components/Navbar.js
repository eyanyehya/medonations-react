// Navbar.js
import React, { useEffect, useState } from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'; // Make sure you have the correct path to your CSS file
import logo from '../medonations-logo.png'; // Update the path to where your logo is stored

const MyNavbar = () => {

   const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (location.pathname === '/') {
        setScrolled(window.scrollY > 20);
      }
    };

    // Apply the scroll event listener only on the home page
    if (location.pathname === '/') {
      setScrolled(false);
      window.addEventListener('scroll', onScroll);
    }

    // Always set scrolled state to true on pages other than home
    if (location.pathname !== '/') {
      setScrolled(true);
    }

    // Remove scroll listener when component unmounts or when the location changes
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [location.pathname]); // React to changes in location.pathname

  return (
    <Navbar expand="lg" fixed="top" className={`my-navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="120" height="auto" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className={`nav-link ${scrolled ? 'text-black' : 'text-white'}`} activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about-us" className={`nav-link ${scrolled ? 'text-black' : 'text-white'}`} activeClassName="active">
              About Us
            </NavLink>
            {/*<NavLink to="/add-press-release" className={`nav-link ${scrolled ? 'text-black' : 'text-white'}`} activeClassName="active">*/}
            {/*  Add Press Release*/}
            {/*</NavLink>*/}
            <NavLink to="/blogs" className={`nav-link ${scrolled ? 'text-black' : 'text-white'}`} activeClassName="active">
              Blogs
            </NavLink>
            <NavLink to="/medical-drives" className={`nav-link ${scrolled ? 'text-black' : 'text-white'}`} activeClassName="active">
              Medical Drives
            </NavLink>
            <NavLink to="/donate" className={`nav-link`} activeClassName="active" style={{ color: 'gold' }}>
              ⭐ Donate
            </NavLink>
            <NavLink to="/contact" className={`nav-link ${scrolled ? 'text-black' : 'text-white'}`} activeClassName="active">
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
