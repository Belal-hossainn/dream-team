import React from 'react';
import ShowTeamPlayer from '../ShowTeamPlayer/ShowTeamPlayer';

const DreamTeam = (props) => {
    const teamPlayer = props.teamPlayer;
    const totalBudget = teamPlayer.reduce((total, budget)=> total + budget.salary, 0)
    return (
        <div>
            <div>
            <h3>Chittagong Warriors Team</h3>
            <h5>Total Player: {teamPlayer.length}</h5>
            <p>Total Budget: {totalBudget} </p>
            <ul>
                {
                    teamPlayer.map(pl=><li>{pl.name}</li>)
                }
            </ul>
            </div>
            <div>
    
                {
                    teamPlayer.map(pl=> <ShowTeamPlayer teamPlayers={pl}></ShowTeamPlayer>)
                }
            
            </div>
        </div>
    );
};

export default DreamTeam;