import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div >
                            <h5 className="card-title">Company</h5>
                            <br />
                            <h6 class="card-subtitle mb-2 text-muted">About</h6>
                            <h6 class="card-subtitle mb-2 text-muted">careers</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Mobile</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <h5 className="card-title">Contact</h5>
                            <br />
                            <h6 class="card-subtitle mb-2 text-muted">Help/FAQ</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Press</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Affilates</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <h5 className="card-title">More</h5>
                            <br />
                            <h6 class="card-subtitle mb-2 text-muted">Airlinefees</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Airline</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Low fare tips</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;