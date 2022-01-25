import React from 'react';
import { Link } from 'react-router-dom';

const League = ({league}) => {
    const {idLeague,strLeague,strCountry,strFanart1,strDescriptionEN} = league;
    return (
        <div className="col-md-4">
            <div class="card mt-3">
                <img src={strFanart1} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{strLeague}</h5>
                    <p class="card-text" style={{height: '100px',overflow: 'hidden'}}>{strDescriptionEN}</p>
                    <Link to={`/leagueDetails/${idLeague}`} class="btn btn-primary">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default League;