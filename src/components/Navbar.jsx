import React from 'react';
/* eslint-disable */

import "./Navbar.css";

function Navbar() {

  return (
      <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <div className="logo">
            <img src='https://fiaks.com/wp-content/uploads/2019/03/Final-Fino-Payments-Bank-Logo_White.jpg' className='navbar-brand' href="#" style={{ height: "80px" }} alt='logo' />
          </div>

          <div className="container">
            <p className="d-none d-lg-block">User Name: ABC</p>
            <p className="d-none d-lg-block">Backoffice</p>
          </div>

          <div className="container">
            <span className="d-none d-lg-block">17/02/2024</span>
          </div>

          <div className='container'>
            <button className="btnnav btn-outline-success" type="submit">Log Out</button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
