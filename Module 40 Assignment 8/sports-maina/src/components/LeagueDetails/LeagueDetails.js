import React from 'react';
import { useParams } from 'react-router-dom';

const LeagueDetails = () => {
    const {idLeague} = useParams();
    return (
        <div>
            <h1>Legaue details of:{idLeague}</h1>
        </div>
    );
};

export default LeagueDetails;