import React from 'react';
import League from '../League/League';

const Leagues = () => {
    const [leagues, setLeagues] = React.useState([]);
    React.useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/2/all_leagues.php`;
        fetch(url)
        .then(res=> res.json())
        .then(data=>{
            console.log(data.leagues);
            setLeagues(data.leagues)
        })
    },[])
    return (
        <div className="container">
            <div className="row">
                {
                    leagues.map(league=> <League></League>)
                }
            </div>
        </div>
    );
};

export default Leagues;