import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {

  return (

    <nav style={{textDecoration:'none'}}  className="navbar navbar-expand-lg navbar-light bg-light flex-navbar">
      <div className="container"> {}

        <div style={{display:'flex',justifyContent:'space-around',textDecoration:'none'}} className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <img src="https://capp.nicepage.com/images/default-logo.png" alt="" />
            </li>
          </ul>
          <div style={{fontSize:'30px',marginTop:'10px',cursor:'pointer'}} className='navbarburger mt-2 '>
            <GiHamburgerMenu />
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
