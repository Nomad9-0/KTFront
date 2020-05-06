import React from 'react';
import TacticsCard from './TacticsCard';
import './Tactics.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Tactics() {
    return (
      <div className="Tactics">
        <h2>Tactics</h2>
        <Tabs>
          <TabList className='tabNames'>
            <Tab>Core</Tab>
            <Tab>Specialist</Tab>
            <Tab>Faction</Tab>
          </TabList>
      
          <TabPanel className='tabBody' id='coreTactics'>
            <TacticsCard />
          </TabPanel>
          <TabPanel className='tabBody' id='specialistTacttics'>
            <TacticsCard />
            <TacticsCard />
          </TabPanel>
          <TabPanel className='tabBody' id='factionTactics'>
            <TacticsCard />
            <TacticsCard />
            <TacticsCard />
          </TabPanel>
        </Tabs>   
      </div>
    );
}

export default Tactics;
