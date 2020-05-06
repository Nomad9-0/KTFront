import React from 'react';
import StatContainer from '../data_card/StatContainer';
import Shaken from '../data_card/Shaken';
import FleshWounds from '../data_card/FleshWounds';
import './QuickInfo.css';

function QuickInfo() {
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
          <Shaken />
          <FleshWounds />
      </div>
    );
}

export default QuickInfo;