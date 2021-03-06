import React from 'react';

let e = React.createElement;

export default class Navbar extends React.Component {
    render() {

        return(
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <a class="navbar-brand" href="index.html">Kyles Login</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropDown" 
        aria-controls="navbarNavDropDown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropDown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="login.html">Contact</a>
                </li>
                
            </ul>
        </div>

    </nav>
        )
    }
}