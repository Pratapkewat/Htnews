import React from 'react';
import { Link } from 'react-router-dom';
import NewsLogo from './NewsLogo.jpg';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={NewsLogo} height="40" width="40" alt="logo" className="img-thumbnail" style={{ marginRight: '10px' }} />
          Hindustan DNA
        </Link>  
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports.......................................................................................</Link>
              </li>
              <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            </ul>
            
          </div>
  <iframe title="myhtml" src="/myhtml.html" style={{ width: '100%', height: '500px', border: 'none' }}></iframe>
 
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
 
