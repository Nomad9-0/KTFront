import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
    render(){
        
        return (
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className="navbar-brand">KT Front</div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to='/' style={{ textDecoration: 'none' }}>
                            <li className="nav-item">
                                Home
                            </li>
                            </Link>
                            <div className="line"></div>
                            <Link to='/muster' style={{ textDecoration: 'none' }}>
                            <li className="nav-item">
                                Muster
                            </li>
                            </Link>
                            <div className="line"></div>
                            <Link to='my_kt' style={{ textDecoration: 'none' }}>
                            <li className="nav-item">
                                My Kill Teams
                            </li>
                            </Link>
                            <div className="line"></div>
                            <Link to='/account' style={{ textDecoration: 'none' }}>
                            <li className="nav-item account-link">
                                My Account
                            </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
