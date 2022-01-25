import React from 'react';
import League from '../League/League';

const Leagues = () => {
    const [leagues, setLeagues] = React.useState([]);
    React.useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=England`;
        fetch(url)
        .then(res=> res.json())
        .then(data=>{
            console.log(data.countrys);
            setLeagues(data.countrys)
        })
    },[])
    return (
        <div className="container">
            <div className="row">
                {
                    leagues.map(league=> <League key={league.idLeague} league={league}></League>)
                }
            </div>
        </div>
    );
};

export default Leagues;