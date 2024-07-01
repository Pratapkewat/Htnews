import React from 'react';
import { Link } from 'react-router-dom';
import NewsLogo from './NewsLogo.jpg';
import Logos from './Logos.jpg';
import Girl2 from './Girl2.jpg';
import Kids2 from './Kids2.jpg';
import Tops2 from './Tops2.jpg';
import jewallary2 from './jewallary2.jpg';
import Girl3 from './Girl3.jpg';
import Kids3 from './Kids3.jpg';
import Tops3 from './Tops3.jpg';
import jewallary3 from './jewallary3.jpg';
import Girl from './Girl.jpg';
import Kids from './Kids.jpg';
import Tops from './Tops.jpg';
import jewallary from './jewallary.jpg';
import Girl4 from './Girl4.jpg';
import Kids4 from './Kids4.jpg';
import Tops4 from './Tops4.jpg';
import jewallary4 from './jewallary4.jpg';

const NavBar = () => {
  return (
    <div>
      <div className="header">
        <img src={NewsLogo} alt="logo" className="img-thumbnail" style={{ marginLeft: '1in', height: '1.3in', width: '2.3in' }} />
        <img src={Logos} alt="logo" className="img-thumbnail" style={{ marginLeft: '1in', height: '1.3in', width: '2.3in', marginTop: '2px' }} />
        <div className="search-container" style={{ display: 'inline-block', marginLeft: '1in', verticalAlign: 'top' }}>
          <form className="d-flex">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" style={{ width: '2in', borderRadius: '50px', padding: '10px', border: '1px solid #ccc', outline: 'none' }} />
            <button className="btn btn-outline-light" type="submit" style={{ marginLeft: '7px', padding: '10px', borderRadius: '50px', border: 'none', backgroundColor: '#4CAF50', color: 'white' }}>Search</button>
          </form>
        </div>
      </div>

      <nav className="navbar" style={{ backgroundColor: 'yellowgreen', padding: '0 1in' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'row' }}>
          <li style={{ float: 'left' }}>
            <Link className="nav-link active" to="/" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none', backgroundColor: 'green' }}>Home</Link>
          </li>
          <li style={{ float: 'left' }}>
            <Link className="nav-link" to="/Tops" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>Tops</Link>
          </li>
          <li style={{ float: 'left' }}>
            <Link className="nav-link" to="/Girlcloth" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>Girlcloth</Link>
          </li>
          <li style={{ float: 'left' }}>
            <Link className="nav-link" to="/KidsWear" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>KidsWear</Link>
          </li>
          <li style={{ float: 'left' }}>
            <Link className="nav-link" to="/Jawallary" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>Jawallary</Link>
          </li>
          <li style={{ float: 'left' }}>
            <Link className="nav-link" to="/Special" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>Special</Link>
          </li>
        </ul>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{ border: '3px solid #ff0000', padding: '1px', height: '100%' }}>
              <img src={Tops2} alt="image1" className="card-img-top" />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: 'center' }}><span style={{ color: 'red', fontWeight: 'bold' }}>Ethic Tops riwaz</span><br />Price: 500 Rs call-6261441698<br />Cash on delivery in Indore, Bhopal, Gwalior<br />All village In Harda, Hoshangabad (M.P.)</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ border: '3px solid #00ff00', padding: '1px', height: '100%' }}>
              <img src={Kids2} alt="image2" className="card-img-top" />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: 'center' }}><span style={{ color: 'red', fontWeight: 'bold' }}>Surat girl t-shirt Blueray</span><br />Price: 500 Rs Whatsapp/call-6261441698<br />Cash on delivery in Indore, Bhopal, Gwalior<br />All village In Harda, Hoshangabad (M.P.)</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ border: '3px solid #0000ff', padding: '1px', height: '100%' }}>
              <img src={Girl2} alt="image3" className="card-img-top" />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: 'center' }}><span style={{ color: 'red', fontWeight: 'bold' }}>New Launch Boy Jeans Alaxjeans</span><br />Price: 600 Rs Whatsapp/call-6261441698<br />Cash on delivery in Indore, Bhopal, Gwalior<br />All village In Harda, Hoshangabad (M.P.)</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ border: '3px solid #ffff00', padding: '1px', height: '100%' }}>
              <img src={jewallary2} alt="image4" className="card-img-top" />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: 'center' }}><span style={{ color: 'red', fontWeight: 'bold' }}>Jawalery Name: 258 jwl</span><br />Price: 300 Rs Whatsapp/call-6261441698<br />Cash on delivery in Indore, Bhopal, Gwalior<br />All village In Harda, Hoshangabad (M.P.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{ border: '3px solid #ff0000', padding: '1px', height: '100%' }}>
              <img src={Tops} alt="image1" className="card-img-top" />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: 'center' }}><span style={{ color: 'red', fontWeight: 'bold' }}>Ethic Tops riwaz</span><br />Price: 500 Rs call-6261441698<br />Cash on delivery in Indore, Bhopal, Gwalior<br />All village In Harda, Hoshangabad (M.P.)</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ border: '3px solid #00ff00', padding: '1px', height: '100%' }}>
              <img src={Kids} alt="image2" className="card-img-top" />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: 'center' }}><span style={{ color: 'red', fontWeight: 'bold' }}>Surat girl t-shirt Blueray</span><br />Price: 500 Rs Whatsapp/call-6261441698<br />Cash on delivery in Indore, Bhopal, Gwalior<br />All village In Harda, Hoshangabad (M.P.)</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ border: '3px solid #0000ff', padding: '1px', height: '100%' }}>
              <img src={Girl} alt="image3" className="card-img-top" />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: 'center' }}><span style={{ color: 'red', fontWeight: 'bold' }}>New Launch Boy Jeans Alaxjeans</span><br />Price: 600 Rs Whatsapp/call-6261441698<br />Cash on delivery in Indore, Bhopal, Gwalior<br />All village In Harda, Hoshangabad (M.P.)</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ border: '3px solid #ffff00', padding: '1px', height: '100%' }}>
              <img src={jewallary} alt="image4" className="card-img-top" />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: 'center' }}><span style={{ color: 'red', fontWeight: 'bold' }}>Jawalery Name: 258 jwl</span><br />Price: 300 Rs Whatsapp/call-6261441698<br />Cash on delivery in Indore, Bhopal, Gwalior<br />All village In Harda, Hoshangabad (M.P.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{ border: '3px solid #ff0000', padding: '1px', height: '100%' }}>
              <img src={Tops3} alt="image1" className="card-img-top" />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: 'center' }}><span style={{ color: 'red', fontWeight: 'bold' }}>Ethic Tops riwaz</span><br />Price: 500 Rs call-6261441698<br />Cash on delivery in Indore, Bhopal, Gwalior<br />All village In Harda, Hoshangabad (M.P.)</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ border: '3px solid #00ff00', padding: '1px', height: '100%' }}>
              <img src={Kids3} alt="image2" className="card-img-top" />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: 'center' }}><span style={{ color: 'red', fontWeight: 'bold' }}>Surat girl t-shirt Blueray</span><br />Price: 500 Rs Whatsapp/call-6261441698<br />Cash on delivery in Indore, Bhopal, Gwalior<br />All village In Harda, Hoshangabad (M.P.)</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ border: '3px solid #0000ff', padding: '1px', height: '100%' }}>
              <img src={Girl3} alt="image3" className="card-img-top" />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: 'center' }}><span style={{ color: 'red', fontWeight: 'bold' }}>New Launch Boy Jeans Alaxjeans</span><br />Price: 600 Rs Whatsapp/call-6261441698<br />Cash on delivery in Indore, Bhopal, Gwalior<br />All village In Harda, Hoshangabad (M.P.)</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ border: '3px solid #ffff00', padding: '1px', height: '100%' }}>
              <img src={jewallary3} alt="image4" className="card-img-top" />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: 'center' }}><span style={{ color: 'red', fontWeight: 'bold' }}>Jawalery Name: 258 jwl</span><br />Price: 300 Rs Whatsapp/call-6261441698<br />Cash on delivery in Indore, Bhopal, Gwalior<br />All village In Harda, Hoshangabad (M.P.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{ border: '3px solid #ff0000', padding: '1px', height: '100%' }}>
              <img src={Tops4} alt="image1" className="card-img-top" />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: 'center' }}><span style={{ color: 'red', fontWeight: 'bold' }}>Ethic Tops riwaz</span><br />Price: 500 Rs call-6261441698<br />Cash on delivery in Indore, Bhopal, Gwalior<br />All village In Harda, Hoshangabad (M.P.)</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ border: '3px solid #00ff00', padding: '1px', height: '100%' }}>
              <img src={Kids4} alt="image2" className="card-img-top" />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: 'center' }}><span style={{ color: 'red', fontWeight: 'bold' }}>Surat girl t-shirt Blueray</span><br />Price: 500 Rs Whatsapp/call-6261441698<br />Cash on delivery in Indore, Bhopal, Gwalior<br />All village In Harda, Hoshangabad (M.P.)</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ border: '3px solid #0000ff', padding: '1px', height: '100%' }}>
              <img src={Girl4} alt="image3" className="card-img-top" />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: 'center' }}><span style={{ color: 'red', fontWeight: 'bold' }}>New Launch Boy Jeans Alaxjeans</span><br />Price: 600 Rs Whatsapp/call-6261441698<br />Cash on delivery in Indore, Bhopal, Gwalior<br />All village In Harda, Hoshangabad (M.P.)</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ border: '3px solid #ffff00', padding: '1px', height: '100%' }}>
              <img src={jewallary4} alt="image4" className="card-img-top" />
              <div className="card-body">
                <p className="card-text" style={{ textAlign: 'center' }}><span style={{ color: 'red', fontWeight: 'bold' }}>Jawalery Name: 258 jwl</span><br />Price: 300 Rs Whatsapp/call-6261441698<br />Cash on delivery in Indore, Bhopal, Gwalior<br />All village In Harda, Hoshangabad (M.P.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NavBar;
