import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/home.css'

const homePage = () => {
    return (
        <div className="homePage">
            <Navbar />

            <div className="slider"></div>
            <div className="hackathons">
                <div className="text">Hackathons</div>
                <div className="hack-container">
                    <div className="hack-box"></div>
                    <div className="hack-box"></div>
                    <div className="hack-box"></div>
                    <div className="hack-box"></div>
                    <div className="hack-box"></div>
                    <div className="hack-box"></div>
                </div>
                <a href="" className="seeAll">View All Hackathons</a>
            </div>
        </div>
    )
}

export default homePage
