import React from 'react';
import UnitData from '../unit_data/UnitData';
import './MyKt.css';

class MyKt extends React.Component  {
  render(){
    return (
      <div className="MyKt">
        <h1>My KT</h1>  
        <UnitData />
      </div>
    );
  }
}

export default MyKt;
