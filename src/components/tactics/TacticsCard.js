import React from 'react';
import './TacticsCard.css';

class TacticsCard extends React.Component  {
  render(){
    return (
    // Will pull card data from backend
      <div className="TacticsCard">
          <p id='tacticName'>Name</p>
          <p id='tacticBody'>Body</p>
          <p id='tacticPoint'>2</p>
      </div>
    );
  }
}

export default TacticsCard;
