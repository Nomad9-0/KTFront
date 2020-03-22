import React from 'react';
import TacticsCard from './TacticsCard';
import './Tactics.css';

class Tactics extends React.Component  {

  render(){
    function openTactic(evt, tacticSection) {
        // Declare all variables
        const tabContent = document.getElementsByClassName("tabContent");
        const tabLink = document.getElementsByClassName("tabLink");
        let i;
      
        // Get all elements with class="tabcontent" and hide them
        for (i = 0; i < tabContent.length; i++) {
          tabContent[i].style.display = "none";
        }
        // Get all elements with class="tablinks" and remove the class "active"
        for (i = 0; i < tabLink.length; i++) {
          tabLink[i].className = tabLink[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tacticSection).style.display = "block";
        evt.currentTarget.className += " active";
    }
    return (
      <div className="Tactics">
        <h2>Tactics</h2>
        <div className='tacticsTab'>
            <button className='core_tactics_tab tabLink' onClick={openTactic}>Core Tactics</button>
            <button className='specialist_tactics_tab tabLink' onClick={openTactic}>Specialist Tactics</button>
            <button className='faction_tactics_tab tabLink' onClick={openTactic}>Faction Tactics</button>
        </div>
         
        <div id="core_tactics" className="tabContent">
            <div id="tacticsDisplay">
                <TacticsCard />
                <TacticsCard />
                <TacticsCard />
            </div>
        </div>
        <div id="specialist_tactics" className="tabContent">
            <div id="tacticsDisplay">
                <TacticsCard />
                <TacticsCard />
            </div>
        </div>
        <div id="faction_tactics" className="tabContent">
            <div id="tacticsDisplay">
                <TacticsCard />
            </div>
        </div>  
        
      </div>
    );
  }
}

export default Tactics;
