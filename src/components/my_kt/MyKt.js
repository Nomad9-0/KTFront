import React from 'react';
import UnitInfo from '../data_card/UnitInfo';
import QuickInfo from '../quick_info/QuickInfo';
import WeaponsBox from '../weapons_box/WeaponsBox';
import Abilities from '../abilities/Abilities';
import './MyKt.css';

class MyKt extends React.Component  {
  render(){
    return (
      <div className="MyKt">
        <h1>My KT</h1>  
        <UnitInfo />
        <QuickInfo />
        <WeaponsBox />
        <Abilities />
      </div>
    );
  }
}

export default MyKt;
