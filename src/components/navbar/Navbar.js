import React from "react";
import "./Navbar.css";
//import {Navbar,Nav} from "react-bootstrap";




const Navbaar =()=> {
  


    
  return(
   
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <a className="navbar-brand">
        <h5 className="listing">LISTING <a className="ready"> READY</a></h5></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link text-yellow" style={{color:"#414952"}} aria-current="page" href="#">Agents</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ml-5"  style={{color:"#414952"}} href="#">Contactus</a>
          </li>

          <li className="nav-item">
            <a className="nav-link ml-5"  style={{color:"#414952"}} href="#">Homeowners</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ml-5"  style={{color:"#414952"}} href="#">Investors</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ml-5"  style={{color:"#414952"}} href="#">Ourwork</a>
          </li>
         
         
        </ul>
       
      </div>
    </div>
  </nav>



        
           

    )
}
export default Navbaar;