import React from 'react'
import Navbar from '../components/Navbar'

const contestsPage = () => {
    const active = {
        style: {
            backgroundColor: 'rgba(253, 200, 48, 0.7)',
            color: 'black'
        }
    }
    return (
        <div>
            <Navbar contest={active.style} />
        </div>
    )
}

export default contestsPage
