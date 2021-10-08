import React from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import EventCard from '../components/EventCard';
import { programs } from '../data/events/programs'
import { gdgCommunity } from '../data/events/gdgCommunity'

const eventsPage = () => {
    const active = {
        style: {
            backgroundColor: 'rgba(255, 187, 0, 0.801)',
            color: 'black !important'
        }
    }
    return (
        <div>
            <Navbar event={active.style} />
            <div className="container-lg d-flex justify-content-around align-self-stretch flex-wrap cards" style={{ marginTop: '60px' }}>
                {
                    programs.map((event) => {
                        return (
                            <EventCard
                                event={event}
                                key={event.id}
                            />
                        )
                    })
                }
                {
                    gdgCommunity.map((event) => {
                        return (
                            <EventCard
                                event={event}
                                key={event.id}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default eventsPage
