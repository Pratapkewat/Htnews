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
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Horizontal line with images and paragraphs */}
      <div style={{ borderTop: '1px solid yellow', margin: '1em 0', padding: '1em 0' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <img src="/path/to/image1.jpg" alt="Image 1" style={{ width: '100%', border: '1px solid black' }} />
              <p style={{ margin: '1em 0', border: '1px solid black' }}>Paragraph 1</p>
            </div>
            <div className="col-md-6">
              <img src="/path/to/image2.jpg" alt="Image 2" style={{ width: '100%', border: '1px solid black' }} />
              <p style={{ margin: '1em 0', border: '1px solid black' }}>Paragraph 2</p>
            </div>
            <div className="col-md-3">
              <img src="/path/to/image3.jpg" alt="Image 3" style={{ width: '100%', border: '1px solid black' }} />
              <p style={{ margin: '1em 0', border: '1px solid black' }}>Paragraph 3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Green line and paragraph */}
      <div style={{ borderTop: '1px solid green', margin: '1em 0', padding: '1em 0' }}>
        <p style={{ lineHeight: '10em' }}>10 inch paragraph content here...</p>
      </div>
    </div>
  );
};

export default NavBar;
