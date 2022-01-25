import React from 'react';
import { useParams } from 'react-router-dom';
import femaleImg from '../../Images/female.png';
import maleImg from '../../Images/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor, faBullseye, faFlag, faMale, faFemale } from '@fortawesome/free-solid-svg-icons';
const LeagueDetails = () => {
    const {idLeague} = useParams();
    const [leagues, setLeagues] = React.useState();
    const [spinner ,setSpinner] = React.useState(true);
    React.useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=England`
        fetch(url)
        .then(response => response.json())
        .then(data=>{
            setLeagues(data.countrys);
            setSpinner(false);
        })
    },[])
    const leagueDetails = leagues?.find(league=> league?.idLeague === idLeague);
    // const {strLeague,strFacebook,strTwitter,strYoutube,strFanart1,strGender,strCountry,intFormedYear,strDescriptionEN} = leagueDetails;
    return (
        
            <div>
                {
                                    spinner === true ? 
                                    <div className="row justify-content-center mt-5">
                                        <div class="spinner-border text-danger" role="status">
                                            <span class="visually-hidden"></span>
                                        </div>
                                    </div>
                                    :
                            <div className="bg-dark text-white">
                                <div className="container">
                                    <div className="row pt-3">
                                        <div class="card mb-3" style={{backgroundColor:'blue'}}>
                                            <div class="row g-0">
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="card-title"><FontAwesomeIcon icon={faAnchor} /> Name : {leagueDetails?.strLeague}</h5>
                                                        <h5><FontAwesomeIcon icon={faBullseye} /> Founded : {leagueDetails?.intFormedYear}</h5>
                                                        <h5><FontAwesomeIcon icon={faFlag} /> Country : {leagueDetails?.strCountry}</h5>
                                                        {
                                                            leagueDetails?.strGender === 'female'?
                                                            <h5><FontAwesomeIcon icon={faFemale} /> Gender : {leagueDetails?.strGender}</h5>
                                                            :
                                                            <h5><FontAwesomeIcon icon={faMale} /> Gender : {leagueDetails?.strGender}</h5>
                                                        }
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
                }
            </div>
            
    );
};

export default LeagueDetails;