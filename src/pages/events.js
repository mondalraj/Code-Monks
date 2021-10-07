import React from 'react'
import Navbar from '../components/Navbar'

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
        </div>
    )
}

export default eventsPage
