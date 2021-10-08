import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.css';
import ContestCard from '../components/ContestCard';
import HackCard from '../components/HackCard';
import { kickstart } from '../data/contests/kickstart'
import { devpost } from '../data/hackathons/devpost'
import '../styles/home.css'

const homePage = () => {
    return (
        <div className="homePage">
            <Navbar />

        </div>
    )
}

export default homePage
