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
<<<<<<< HEAD
      <div className="container mt-5 pt-5">
<div className="row">
  <div className="col-12 d-flex justify-content-between align-items-center">
    <div className="image-container">
      <img src="my-app/public/Images/2re3.jpg" alt="img1" className="img-fluid" />
      <p className="text-container">यहाँ पर न्यूज़ का विवरण होगा।</p>
    </div>
    <div className="image-container mx-1">
      <img src="my-app/public/Images/12e34.jpg" alt="img2" className="img-fluid" />
      <p className="text-container">यहाँ पर न्यूज़ का विवरण होगा।</p>
    </div>
    <div className="image-container">
      <img src="my-app/public/Images/7126642-untitled-design-34.jpg" alt="img3" className="img-fluid" />
      <p className="text-container">यहाँ पर न्यूज़ का विवरण होगा।</p>
    </div>
  </div>
</div>
<hr className="green-line" />
</div>
=======

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
>>>>>>> f036b79029edcc0ae77610938dab63314601ed90
    </div>
  );
};

export default NavBar;
<<<<<<< HEAD





=======
>>>>>>> f036b79029edcc0ae77610938dab63314601ed90
