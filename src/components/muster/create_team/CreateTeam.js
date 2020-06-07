import React, { useState } from 'react';
import Modal from 'react-modal';
import "./CreateTeam.css";

function CreateTeam() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <>
        <div className="jumbotron">
          <h2 id='selectedTeam'>Name of KT Selected</h2>
          <p className="description">Build Your Roster</p>
        </div>
        <div className='memberList'>
            
        </div>
        <div className='addRemoveContainer'>
            <button className='btn addMember' onClick={() => setModalIsOpen(true)}>Add Member</button>
            <button className='btn btn-warning removeMember'>Remove Member</button>
        </div>
        
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <button className='btn btn-danger addMemberModalClose' onClick={() => setModalIsOpen(false) }>X</button>
            <h3 className='addMemberModalTitle'>Add a Team Member</h3>
            {/* This will be updated dynamicaly */}
            <ul>
                <div>
                    <p>Infantry Squad Guardsmen</p>
                    <li>Sergeant</li>
                    <li>Guardsmen</li>
                    <li>Guardsmen Gunner</li>
                </div>
                <div>
                    <p>Scion</p>
                    <li>Scion</li>
                    <li>Tempestor</li>
                    <li>Scion Gunner</li>
                </div>
            </ul>
        </Modal>
        </>
    );
}

export default CreateTeam;