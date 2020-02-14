import React from 'react';
import './navbar.css';

class Navbar extends React.Component {
    render(){
        
        return (
            <div className="Nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <a className="navbar-brand" href="#">KT Front</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <div className="line"></div>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Muster</a>
                            </li>
                            <div className="line"></div>
                            <li className="nav-item">
                                <a className="nav-link" href="#">My Kill Teams</a>
                            </li>
                            <div className="line"></div>
                            <li className="nav-item account-link">
                                <a className="nav-link account-link" href="#">My Account</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
