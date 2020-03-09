import React from 'react';
import StatContainer from '../data_card/StatContainer';
import './QuickInfo.css';

class QuickInfo extends React.Component  {
  render(){
    return (
      <div className="QuickInfo">
          <StatContainer />
          <StatContainer />
          <StatContainer />
          <StatContainer />
          <StatContainer />
          <StatContainer />
          <StatContainer />
          <StatContainer />
          <StatContainer />
      </div>
    );
  }
}

export default QuickInfo;