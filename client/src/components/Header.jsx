import React from "react";
import logo from "./assests/logo.png";
function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" className="mr-2" />
          <div>ProjectMgmt</div>
        </a>
      </div>
    </nav>
  );
}

export default Header;
