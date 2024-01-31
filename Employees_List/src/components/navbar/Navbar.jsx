import './navbar.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg background fixed-top">
        <div className="container">
          <button
            className="navbar-toggler 
        shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ height: '50vh' }}>
            <div className="offcanvas-header">
              <button type="button" className="btn-close shadow-none border-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <a className="logo" href="/home">
                <span className="logo-text">Employee Contact List</span>
                <span className="logo-underline"></span>
              </a>

              <ul className="navbar-nav justify-content-end flex-grow-1">
                <motion.li className="nav-item" whileHover={{ scale: 1.1 }}>
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </motion.li>

                <div className="nav-item">
                  <a className="btn btn-warning create-btn" href="/create">
                    Create <span className="plus">+</span>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
