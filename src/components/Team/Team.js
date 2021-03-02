import React, { useEffect, useState } from 'react';
import DreamTeam from '../DreamTeam/DreamTeam';
import playerData from '../Fakedata/Fakedata.json';
import Player from '../Player/Player';
import './Team.css'
const Team = () => {
    
    const[players, setPlayer]= useState([]);
    useEffect(()=>{
        setPlayer(playerData);
        console.log(playerData)
     }, []);

     const [teamPlayer, setTeamPlayer] = useState([]);

     const handleAddPlayer= (player)=>{
         const newTeamPlayer = [...teamPlayer, player];
         setTeamPlayer(newTeamPlayer);
     }
    
    
    return (
        <div className="main-container">
            <div className="player-container">
                
                    {
                        players.map(player => <Player 
                            handleAddPlayer={handleAddPlayer}
                            key={player.id}
                            player={player}></Player>)
                    }
                
            </div>
           <div className="team-container">
              <DreamTeam teamPlayer={teamPlayer}></DreamTeam>

           </div>
        </div>
    );
};

export default Team;