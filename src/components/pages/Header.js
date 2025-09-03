import React from 'react';
import Navbar from '../Navbar'; 

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className="nav-wrap">
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} /> 
      </div>
    <div className="header-body" id="header">
  
      
        <h1 className="tag">Full Stack Web Development and Design</h1>
       

    </div>
    </div>
  );
}

export default Header;
