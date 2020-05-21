import React from 'react';
import { Link } from "react-router-dom";
import Faction from "../factions/Faction";
import './Muster.css';

function Muster() {
    return (
      <div className="Muster">
        <div className="jumbotron">
          <h1>Muster</h1>
          <p>Pick your faction and build your Kill Team</p>
        </div>
        <div className="container factionSelection">
          <div className="row">
            <div className="col-sm">
              <Link to="/create_team">
                <Faction />
              </Link>
            </div>
            <div className="col-sm">
              <Link to="/create_team">
                <Faction />
              </Link>
            </div>
            <div className="col-sm">
              <Link to="/create_team">
                <Faction />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <Link to="/create_team">
                <Faction />
              </Link>
            </div>
            <div className="col-sm">
              <Link to="/create_team">
                <Faction />
              </Link>
            </div>
            <div className="col-sm">
              <Link to="/create_team">
                <Faction />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Muster;
