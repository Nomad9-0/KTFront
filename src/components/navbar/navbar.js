import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
        return (
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <NavLink to='/' style={{ textDecoration: 'none' }}>
                    <div className="navbar-brand">KT Front</div>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavLink to='/' style={{ textDecoration: 'none' }}>
                            <li className="nav-item">
                                Home
                            </li>
                            </NavLink>
                            <div className="line"></div>
                            <NavLink to='/muster' style={{ textDecoration: 'none' }}>
                            <li className="nav-item">
                                Muster
                            </li>
                            </NavLink>
                            <div className="line"></div>
                            <NavLink to='my_kt' style={{ textDecoration: 'none' }}>
                            <li className="nav-item">
                                My Kill Teams
                            </li>
                            </NavLink>
                            <div className="line"></div>
                            <NavLink to='/account' style={{ textDecoration: 'none' }}>
                            <li className="nav-item account-link">
                                My Account
                            </li>
                            </NavLink>
                        </ul>
                    </div>
                </nav>
            </div>
        );
}

export default Navbar;
