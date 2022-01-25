import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { SearchContext } from '../../App';
import League from '../League/League';

const Leagues = () => {
    const [leagues, setLeagues] = React.useState([]);
    const [search] = useContext(SearchContext);
    const [spinner ,setSpinner] = React.useState(true);
    React.useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=England`;
        fetch(url)
        .then(res=> res.json())
        .then(data=>{
            console.log(data.countrys);
            setLeagues(data.countrys);
            setSpinner(false);
        })
    },[])
    return (
        <div className="container">
            {
                        spinner === true ? 
                        <div className="row justify-content-center mt-5">
                            <div class="spinner-border text-danger" role="status">
                                <span class="visually-hidden"></span>
                            </div>
                        </div>
                        :

                        <div className="row">
                            {
                                leagues.filter((league)=>{
                                    if(search === ""){
                                        return league;
                                    }else if(league?.strLeague?.toLowerCase().includes(search?.toLowerCase())){
                                        return league;
                                    }
                                }).map(league => <League key={league.idLeague} league={league}/>)
                            }
                        </div>
            }


        </div>
    );
};

export default Leagues;