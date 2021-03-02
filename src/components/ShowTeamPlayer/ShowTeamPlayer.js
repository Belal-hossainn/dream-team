import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faUserTag } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

const ShowTeamPlayer = (props) => {
    const {image, name, country, category, salary}= props.teamPlayers;
    return (
             <div className="players">
            <div className="player">
            <img src={image} alt=""/>
            <h3>{name}</h3>
            <h5>{category}</h5>
            <p>country: {country}</p> 
            <p>salary: {salary}</p>
            <Button variant="secondary"
           onClick={()=> props.handleAddPlayer(props.player)} > <FontAwesomeIcon icon={faUserTag } /> add player</Button>
            </div>
        </div>
    );
};

export default ShowTeamPlayer;