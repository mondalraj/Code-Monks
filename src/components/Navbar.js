import React from 'react'
import './Navbar.css'
import { Link } from 'gatsby'

const Navbar = (props) => {

    return (
        <>
            <nav>
                <Link to="/home">
                    <span className="logo">&#60; Code</span>
                    <span className="logo logo2">_Monks &#62;</span>
                </Link>
                <div className="nav-items desktop">
                    <Link style={props.hackathon} to="/hackathons" className="nav-item nav-item-1">Hackathons</Link>
                    <Link style={props.contest} to="/contests" className="nav-item nav-item-2">CP contests</Link>
                    <Link style={props.internship} to="/internships" className="nav-item nav-item-3">Internships</Link>
                    <Link style={props.event} to="/events" className="nav-item nav-item-4">Events</Link>
                </div>

            </nav>


            <div className="menu-container">
                <div className="nav-items">
                    <Link style={props.hackathon} to="/hackathons" className="nav-item nav-item-1">Hackathons</Link>
                    <Link style={props.contest} to="/contests" className="nav-item nav-item-2">CP contests</Link>
                    <Link style={props.internship} to="/internships" className="nav-item nav-item-3">Internships</Link>
                    <Link style={props.event} to="/events" className="nav-item nav-item-4">Events</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
