import React from 'react';
import './Abilities.css';

class Abilities extends React.Component  {
  render(){
    return (
      <div className="Abilities">
        <h2>Abilities</h2>  
        <div className="abilityContainer">
        {/* Abilities will dynamicaly add  */}
            <div id='ability'>
                <p><strong>Resourceful (Lv 1):</strong> As long as this model is on the battlefield and is not shaken, gain an additional Command Point at the beginning of each battle round.
                </p>
            </div>
            <div id='ability'>
                <p><strong>Inspiring (Lv 2B):</strong> As long as this model is not shaken, other friendly models within 3" of it automatically pass Nerve tests. Now does not affect the Leader itself, so be mindful of that.
                </p>
            </div>
        </div>
      </div>
    );
  }
}

export default Abilities;
