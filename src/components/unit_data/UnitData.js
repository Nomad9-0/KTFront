import React from 'react';
import UnitInfo from '../data_card/UnitInfo';
import QuickInfo from '../quick_info/QuickInfo';
import WeaponsBox from '../weapons_box/WeaponsBox';
import Abilities from '../abilities/Abilities';
import Tactics from '../tactics/Tactics';
import './UnitData.css';

class UnitData extends React.Component  {
  render(){
    return (
      <div className="UnitData">
        <div className='rosterCards'>
          <div className='rosterCardInfo'>
            <UnitInfo />
            {/* Call the Weapon name from WeaponsInfo */}
          </div>
        </div>
        <div className='rosterCards'>
          <div className='rosterCardInfo'>
            <UnitInfo />
          </div>
        </div>
        <div className='rosterCards'>
          <div className='rosterCardInfo'>
            <UnitInfo />
          </div>
        </div>
        <div className='rosterCards'>
          <div className='rosterCardInfo'>
            <UnitInfo />
          </div>
        </div>
        <div className='rosterCards'>
          <div className='rosterCardInfo'>
            <UnitInfo />
          </div>
        </div>
        <div className='rosterCards'>
          <div className='rosterCardInfo'>
            <UnitInfo />
          </div>
        </div>
        <div className='rosterCards'>
          <div className='rosterCardInfo'>
            <UnitInfo />
          </div>
        </div>
        <div className='rosterCards'>
          <div className='rosterCardInfo'>
            <UnitInfo />
          </div>
        </div>
        <div className='rosterCards'>
          <div className='rosterCardInfo'>
            <UnitInfo />
          </div>
        </div>
        <div className='rosterCards'>
          <div className='rosterCardInfo'>
            <UnitInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default UnitData;
