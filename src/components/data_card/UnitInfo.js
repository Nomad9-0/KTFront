import React from 'react';
import './UnitInfo.css';

class UnitInfo extends React.Component  {
  render(){
    return (
      <div className="UnitInfo">
        <div id='unitImg'></div>
        <div className="unitDetails">
          <div className="unitName">
              <p id="unitName">Nomad</p>
          </div>
          <div className='unitType'>
              <p id='unitType'>Guardsman</p>
          </div>
          <div className='specialist'>
              <p id='specialist'>Leader</p>
          </div>
        </div>
        <div className='unitPoints'>
          <p id='unitPoint'>5</p>
          <p className='points'>POINTS</p>
        </div>
      </div>
    );
  }
}

export default UnitInfo;