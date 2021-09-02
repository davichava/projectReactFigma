import React, { Component } from 'react';
import coliseo from '../assets/img/coliseo.jpg'
import london from '../assets/img/london.jpg';
import europa from '../assets/img/europa.jpg';

class Destinations extends Component {

    render() {
        return (
            <div className="row">
                <div className="container">
                    <h6 align="center">Top Selling</h6>
                    <h1 align="center"><b>Top Destinations</b></h1>
                </div>
                <div className="col-md">
                    <div>
                        <div className="card-body">
                            <img src={coliseo} height="130px" width="200px"/>
                            <div >
                                <h5 className="card-title"><small>Rome, Italy <span>$5,2k</span></small></h5>
                                <p className="card-text">10 Days Trip</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card-body">
                        <img src={london} height="130px" width="200px" />
                        <div>
                            <h5 className="card-title">London, UK  <span>$4,2k</span></h5>
                            <p className="card-text">21 days Trip</p>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card-body">
                        <img src={europa} height="130px" width="200px" />
                        <div>
                            <h5 className="card-title">Full Europa <span>$4,2k</span></h5>
                            <p className="card-text">28 Days Trip</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Destinations;