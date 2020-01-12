import React from 'react';
import './navbar.css';

class Navbar extends React.Component {
    render(){
        
        return (
            <div className="Nav">
                <div className="topnav" id="navbar">
                    <a href="#home">KT FRONT</a>
                    <a href="#muster">MUSTER</a>
                    <a href="#myKt">MY KILL TEAM</a>
                    <a href="#contact">CONTACT</a>
                    <i id="responsiveToggle " class="fas fa-bars responsive-nav"></i>
                </div>
            </div>
        );
    }
}

export default Navbar;
