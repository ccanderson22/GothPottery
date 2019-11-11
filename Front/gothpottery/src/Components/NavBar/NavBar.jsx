import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">STP</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <Link to='/gallery' className="nav-link">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link">About Me</Link>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}
