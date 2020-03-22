import React from 'react';
import './WeaponsInfo.css';

class WeaponsInfo extends React.Component  {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            weapons: [
                { name: 'Weapon1', range: 21, type: 'Rapid Fire 1', strength: 3, ap: -2, damage: 1, abilities: 'Shoots far' },
                { name: 'Weapon2', range: 12, type: 'Assault 2', strength: 4, ap: 0, damage: 1 },
                { name: 'Weapon3', range: 36, type: 'Heavy 1', strength: 6, ap: -5, damage: 1, abilities: 'Dakka Dakka' },
                { name: 'Weapon4', type: 'Melle', strength: 'x2', ap: -3, damage: 'D3', abilities: 'Makes face into smooosh' },
            ]
        }
    }

    renderTableData() {
        return this.state.weapons.map((weapon, index) => {
           const { name, range, type, strength, ap, damage, abilities } = weapon //destructuring
           return (
              <tr key={name}>
                 <td>{name}</td>
                 <td>{range}</td>
                 <td>{type}</td>
                 <td>{strength}</td>
                 <td>{ap}</td>
                 <td>{damage}</td>
                 <td>{abilities}</td>
              </tr>
           )
        })
    }
    renderTableHeader() {
        let header = Object.keys(this.state.weapons[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render(){
        return (
        <div className="WeaponsInfo">
            <table id='weapons'>
               <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
               </tbody>
            </table>
        </div>
        );
    }
}

export default WeaponsInfo;
