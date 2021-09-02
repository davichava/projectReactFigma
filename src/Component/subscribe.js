import React, { Component } from 'react';

class Subscribe extends Component {
    render() {
        return (
            <div class="card-body">
                <div className="col-auto p-3 text-center">
                    <h5 className="card-title"><font color="navy">Subscribe to get information, latest news and other interesting offers about Cobham</font></h5>
                    <div className="container">
                        <label for="staticEmail2" class="visually-hidden mb-3">Email</label>
                        <input type="text" readonly placeholder="Your email" />
                        <button type="submit" class="btn btn-danger mb-3">Subscribe</button>
                    </div>

                </div>
            </div>

        );
    }
}

export default Subscribe;