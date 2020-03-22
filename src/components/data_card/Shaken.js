import React from 'react';
import './Shaken.css';

class Shaken extends React.Component  {
  render(){
    return (
      <div className="Shaken">
        <h3>Shaken</h3>
        <input type="checkbox" id='shaken' className='shaken'></input>
      </div>
    );
  }
}

export default Shaken;