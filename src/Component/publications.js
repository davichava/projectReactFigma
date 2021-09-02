import React, { Component } from 'react';
import jetstart from '../assets/img/jetstart.png';
import expedia from '../assets/img/expedia.png';
import qantas from '../assets/img/qantas.png';
import alitalia from '../assets/img/alitalia.png';
import axon from '../assets/img/axon.jpg';

class Publications extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md">
                    <div className="card-body">
                        <img src={axon} height="60px" width="150px" />
                    </div>
                </div>
                <div className="col-md">
                    <div className="card-body">
                        <img src={jetstart} height="60px" width="150px" />
                    </div>
                </div>
                <div className="col-md">
                    <div className="card-body">
                        <img src={expedia} height=" 40px" width="150px" />
                    </div>
                </div>
                <div className="col-md">
                    <div className="card-body">
                        <img src={qantas} height="60px" width="150px" />
                    </div>
                </div>
                <div className="col-md">
                    <div className="card-body">
                        <img src={alitalia} height="40px" width="120px" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Publications;