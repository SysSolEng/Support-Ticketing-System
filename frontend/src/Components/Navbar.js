import React from "react";

import "./Navbar.css";


function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-background">
             <div className="container-fluid">
                 <a className="navbar-brand support-brand">SUPPORT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Tickets</a>
        </li>

         <li className="nav-item">
          <a className="nav-link" href="#">Dashboard</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Logout</a>
        </li>
    
    
    
      </ul>
      
      <form className="d-flex create-ticket-btn">
       <button className="btn btn-dark" type="submit">Create ticket</button>
      </form>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <div className="initials">
        T
      </div>


    </div>
  </div>
            </nav>
        </div>
    )
}

export default Navbar;