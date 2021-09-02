import React, { Component } from 'react';
import satelite from '../assets/img/satelite.jpg';
import avion from '../assets/img/avion.jpg';
import microfono from '../assets/img/microfono.jpg';
import tuerca from '../assets/img/tuerca.jpg';

class Category extends Component {

    render() {
        return (
            <div className="row">
                <div className="container">
                <h6 align="center"> CATEGORY</h6>
                    <h1 align="center"><b> We offer Best Services</b></h1>
                </div>
                <div className="col-md">
                    <div >
                        <img src={satelite} height="130px" width="200px"/>
                        <div >
                            <h5 className="card-title">Calculated Weather</h5>
                            <p className="card-text">Built Wicket longer admiredo barton vanity itself don in it</p>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div>
                        <img src={avion} height="130px" width="200px"/>
                        <div>
                            <h5 className="card-title">Best Flights</h5>
                            <p className="card-text"> Engrossed listening Park gate sell they west hasrd for the</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <img src={microfono} height="130px" width="200px"/>
                        <div>
                            <h5 className="card-title">Local Events</h5>
                            <p className="card-text">Barton vanity itself do in it. Preferd me it engrossed listening</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <img src={tuerca} height="130px" width="200px"/>
                        <div>
                            <h5 className="card-title">Customization</h5>
                            <p className="card-text">Wi deliver outsourced aviation services for military customers</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Category;
