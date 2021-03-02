import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">BPL'21</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Teams</a>
                            
                          
                        </div>
                    </div>
                </div>
            </nav>
            <h1 style={{textAlign: 'center',color: 'Blue'}}>BPL 2021 Player Auction</h1>
        </div>
    );
};

export default Header;