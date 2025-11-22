import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css'; 
import { NavLink } from 'react-router-dom';
const boxVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.2, rotate: 10 },
};
const Navbar = () => {
  return (
    <motion.div
       initial={{ opacity: 0, y: 200 }}      // শুরুতে নিচে ও ফিকে
      animate={{ opacity: 1, y: 0 }}  
      // whileHover={{ scale:1.1 }}     // ওপরে উঠে স্পষ্ট হবে
      transition={{ duration: 0.10 }} 
    
    
    className="">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm fixed-bottom">
      <div className="container">
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </motion.div>
  );
};

export default Navbar;
