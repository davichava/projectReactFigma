import React, { Component } from 'react';
import women from '../assets/img/women.jpg'

class Description extends Component {

    render() {
        return (
            <div class="row">
                <div class="col-md">
                    <h6>Easy and cool</h6>
                    <h1><b>Book Your Next Trip In 3 Easy Steps</b></h1>
                    <div>
                        <h5 class="card-title"><small><font color="navy">Choose Destination</font></small></h5>
                        <p class="card-text"><small><font color="navy">Lorem ipsum dolor sit amet, consectutur adipiscing elit Urna, tortor tempus</font></small></p>
                    
                    
                        <h5 class="card-title"><small><font color="navy">Make Payment</font></small></h5>
                        <p class="card-text"><small><font color="navy">Lorem ipsum dolor sit amet, consectutur adipiscing elit Urna, tortor tempus</font></small></p>
                    
                        <h5 class="card-title"><small><font color="navy">Reach Airport on Selected Date</font></small></h5>
                        <p class="card-text"><small><font color="navy">Lorem ipsum dolor sit amet, consectutur adipiscing elit Urna, tortor tempus</font></small></p>
                    </div>
                </div>

                <div class="col-md">
                    <div >
                        <img src={women} height="100px" width="200px" />
                        <div class="card-body">
                            <h5 class="card-title">Trip To Greece</h5>
                            <h6 class="card-subtitle mb-2 text-muted">14-19 June | by Walter</h6>
                            <p class="card-text">44 people going </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Description;
