import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../App';

const Header = () => {
    const [setSearch] = useContext(SearchContext);
    return (
        <div>
            <div style={{height: '150px',alignItems: 'center',justifyContent: 'center',display: 'flex'}}>
            <img style={{width: '40%',borderRadius:'10px',height: '100%',margin: 'auto'}} className="img-fluid" src="https://play-lh.googleusercontent.com/DEX2nfpOsE6b8rWD5scwkelM9Cnoapqm-O8L6zb5vr82CgGCFB4kZz-bUbcjZ09HWg=w412-h220-rw" alt="" />
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-2">
            <div className="container-fluid">
            <a className="navbar-brand fw-b" href="#">Sports Mania</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                </ul>
                <form className="d-flex">
                <input className="form-control me-2" onChange={event => setSearch(event.target.value)} type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </div>
        </nav>
        </div>
    );
};

export default Header;