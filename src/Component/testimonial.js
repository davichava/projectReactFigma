import React, { Component } from 'react';
import happy from '../assets/img/happy.jpg'

class Testimonials extends Component {

    render() {
        return (
            <div className="row">
                <h6>TESTIMONIALS</h6>
                <div className="col-md-4">
                    <h1><b>What People say About Us.</b></h1>
                    <div >
                        <img></img>
                        <div >
                            <h5 className="card-title"> <h1><b> . . .</b></h1></h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div>
                        <div className="card-body">
                            <img src={happy} class="rounded" height="40px" width="90px" />
                            <p className="card-text">"On the Windows talking painted pasture yet its express parties use. sure last upon he same as knew next. Of beileved or diverted no."</p>
                            <img></img>
                            <div>
                                <h5 class="card-title">Mike taylor</h5>
                                <h6 class="card-subtitle mb-2 text-muted">lahore, Rusia</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Testimonials;