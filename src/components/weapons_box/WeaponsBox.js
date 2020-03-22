import React from 'react';
import WeaponsInfo from '../data_card/WeaponsInfo'
import './WeaponsBox.css';

class WeaponsBox extends React.Component  {
  render(){
    return (
      <div className="WeaponsBox">
        <WeaponsInfo />
      </div>
    );
  }
}

export default WeaponsBox;
