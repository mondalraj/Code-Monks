import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/hackathon.css'

const hackathonsPage = () => {

    const active = {
        style: {
            backgroundColor: 'rgba(253, 200, 48, 0.7)',
            color: 'black'
        }
    }
    
    return (
        <div>
            <Navbar hackathon={active.style} />
            <div className="bigbox">
                <div className="box">
                    <div>
                        <img src="medium1.png" className="image" onerror="this.style.display='none'" />
                        {/* <img className="image" src="medium1.png" alt=""> */}
                    </div>

                    <div className="info">
                        <h2 className="heading">IGNITION | A Global Solana Hackathon</h2>
                        <div className="organizers">
                            National Institute of Technology
                        </div>
                        <div className="eligibility">
                            2022 batch
                        </div>
                        <div className="days_left">
                            <li>
                                20 days left
                            </li>
                        </div>
                        <div className="start_end">
                            Jun 21- Oct 04, 2021
                        </div>
                    </div>
                </div>
                <div className="container3">
                    <div className="description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, quas?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, quas?
                    </div>
                    <div>
                        <button className="button" href="#"><a>Register</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default hackathonsPage
