import React from 'react';

const Leagues = () => {
    const [leagues, setLeagues] = React.useState([]);
    React.useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/2/all_leagues.php`;
        fetch(url)
        .then(res=> res.json())
        .then(data=>setLeagues(data.leagues))
    },[])
    return (
        <div>
            <h1>leagues: {leagues.length}</h1>
        </div>
    );
};

export default Leagues;