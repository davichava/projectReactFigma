import React, { Component } from 'react';
import viaje from '../assets/img/viaje.png';

class Travel extends Component {

    render() {
        return (

            <div class="row">                
                <div class="col-md-4">                
                    <div>                    
                        <div class="card-body">
                        <h6><font color="red">BEST DESTINATION AROUND THE WORLD</font></h6>
                            <h1><b>Travel, enjoy and live a new and full life</b></h1>
                            <p>Built Wicket longer admire do barton vanity itself do in it.
                                Preferred to spotsment it engrossed listening. Park gate sell the hard for the
                            </p>
                            <button type="button" class="btn btn-warning">Find ouy more</button>
                            <a href="#" class="card-link">Demo</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div>
                        <div class="card-body">
                            <img src={viaje} height="350px" width="600px"/>
                        </div>   
                    </div>
                </div>
            </div>
        );
    }
}
export default Travel;
