import React from 'react';
import './FleshWounds.css';

function FleshWounds() {
    return (
      <div className="FleshWounds">
        <h3>Flesh Wounds</h3>
        <input type="checkbox" id='fleshWound1' className='fleshWounds'></input>
        <input type="checkbox" id='fleshWound2' className='fleshWounds'></input>
        <input type="checkbox" id='fleshWound3' className='fleshWounds'></input>
      </div>
    );
}

export default FleshWounds;