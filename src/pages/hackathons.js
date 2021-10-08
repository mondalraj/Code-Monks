import React from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import HackCard from '../components/HackCard';
import { devfolio } from '../data/hackathons/devfolio'
import { devpost } from '../data/hackathons/devpost'
import { dare2Compete } from '../data/hackathons/dare2Compete'
import { hackerEarth } from '../data/hackathons/hackerEarth'

const hackathonsPage = () => {

    const active = {
        style: {
            backgroundColor: 'rgba(255, 187, 0, 0.801)',
            color: 'black !important'
        }
    }

    return (
        <div>
            <Navbar hackathon={active.style} />
            <div className="container-lg d-flex justify-content-around align-self-stretch flex-wrap cards" style={{ marginTop: '60px' }}>


                {
                    hackerEarth.map((hack) => {
                        return (
                            <HackCard
                                hackathon={hack}
                                key={hack.id}
                            />
                        )
                    })
                }

                {
                    devpost.map((hack) => {
                        return (
                            <HackCard
                                hackathon={hack}
                                key={hack.id}
                            />
                        )
                    })
                }
                {
                    dare2Compete.map((hack) => {
                        return (
                            <HackCard
                                hackathon={hack}
                                key={hack.id}
                            />
                        )
                    })
                }
                {
                    devfolio.map((hack) => {
                        return (
                            <HackCard
                                hackathon={hack}
                                key={hack.id}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}


export default hackathonsPage
