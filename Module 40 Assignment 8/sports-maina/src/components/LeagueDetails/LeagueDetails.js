import React from 'react';
import { useParams } from 'react-router-dom';
import femaleImg from '../../Images/female.png'
import maleImg from '../../Images/male.png'
const LeagueDetails = () => {
    const {idLeague} = useParams();
    const [leagues, setLeagues] = React.useState();
    React.useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=England`
        fetch(url)
        .then(response => response.json())
        .then(data=>{
            setLeagues(data.countrys);
        })
    },[])
    const leagueDetails = leagues?.find(league=> league?.idLeague === idLeague);
    // const {strLeague,strFacebook,strTwitter,strYoutube,strFanart1,strGender,strCountry,intFormedYear,strDescriptionEN} = leagueDetails;
    return (
        <div className="bg-dark text-white">
            <div className="container">
                <div className="row pt-3">
                    <div class="card mb-3" style={{backgroundColor:'blue'}}>
                        <div class="row g-0">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Name: {leagueDetails?.strLeague}</h5>
                                    <h5>Founded: {leagueDetails?.intFormedYear}</h5>
                                    <h5>Country: {leagueDetails?.strCountry}</h5>
                                    <h5>Gender: {leagueDetails?.strGender}</h5>
                                </div>
                            </div>
                            
                            <div class="col-md-4">
                                {
                                    leagueDetails?.strGender === 'female' ?
                                        <img src={femaleImg} class="img-fluid" alt="..."/>
                                        :
                                        <img src={maleImg} class="img-fluid " alt="..."/>

                                }
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p>{leagueDetails?.strDescriptionEN}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetails;