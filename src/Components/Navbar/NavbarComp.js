import React, {} from 'react';
import './NavbarComp.css';
import logout from './logout.png';
import id from './id.png';
import { Navbar, NavbarBrand } from 'reactstrap';

function NavbarComp() {
  return (
    <div>
      <Navbar color="primary" className="me-auto">
        <NavbarBrand href="/" className="me-auto">
        <img src={id} alt="id.png" width="50px" height="50px"/>Contact Form
        </NavbarBrand>
        Hello Sultan Dines <img src={logout} alt="logout.png" width="20px" height="20px"/> Logout
      </Navbar>
    </div>
  );
}
export default NavbarComp;
