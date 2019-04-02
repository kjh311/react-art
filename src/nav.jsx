import React, { Component } from 'react';
import './nav.scss';
// import './nav.css';

export class Nav extends Component {
	state = {
		title: 'Art Prompt'
	};


	render() {
		return (
			

				<nav className="navbar navbar-expand-lg navbar-light bg-light">
			    <div className="d-flex flex-grow-1">
			        <a className="navbar-brand  " href="#">
			            Art Prompt
			            <img className="brand-logo-icon" src="./assets/art-icon.png" alt="logo" />
			        </a>
			        <div className="w-100 text-right">
			            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
			                <span className="navbar-toggler-icon"></span>
			            </button>
			        </div>
			    </div>
			    <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
			        <ul className="navbar-nav ml-auto flex-nowrap">
			     
			            <li className="nav-item">
			                <a href="#" className="nav-link m-2 menu-item">Login</a>
			            </li>
			            <li className="nav-item">
			                <a href="#" className="nav-link m-2 menu-item">My Prompts</a>
			            </li>
			        </ul>
			    </div>
			</nav>
		);
	}
}

export default Nav;