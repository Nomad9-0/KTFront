import React from 'react';
import QuickInfo from '../quick_info/QuickInfo';
import './MyKt.css';

class MyKt extends React.Component  {
  render(){
    return (
      <div className="MyKt">
        <h1>My KT</h1>  
        <QuickInfo />
      </div>
    );
  }
}

export default MyKt;
