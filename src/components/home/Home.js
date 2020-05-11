import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return (
      <div className="Home jumbotron">
        <h1>Welcome to Kill Team Front!</h1>
        <Link to='/muster' className='btn btn-primary'>Create A Kill Team</Link>
        <div className="about">
          <h2>What is KT Front?</h2>
          <p><span>Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    );
}

export default Home;
