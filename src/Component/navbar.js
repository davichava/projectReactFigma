import React, { Component } from "react";


class NavBar extends Component {

    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-lightb " >
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" >
                            <ul class="navbar-nav navbar-right">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Desitnations</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Hotels</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Flights</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Bookings</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Sign up</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        En
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}


export default NavBar;