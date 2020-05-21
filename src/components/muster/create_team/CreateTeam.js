import React from 'react';
import UnitData from '../../unit_data/UnitData';
import "./CreateTeam.css";

function CreateTeam() {
    return (
        <>
        <div className="jumbotron">
          <h2 id='selectedTeam'>Name of KT Selected</h2>
          <p className="description">Build Your Roster</p>
        </div>
        <div className='memberList'>
            <UnitData />
        </div>
        <div className='addRemoveContainer'>
            <button className='btn btn-primary addMember'>Add Member</button>
            <button className='btn btn-warning removeMember'>Remove Member</button>
        </div>
        
        </>
    );
}

export default CreateTeam;