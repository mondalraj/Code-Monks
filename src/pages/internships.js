import React from 'react'
import Navbar from '../components/Navbar'

const internshipsPage = () => {
    const active = {
        style: {
            backgroundColor: 'rgba(253, 200, 48, 0.7)',
            color: 'black'
        }
    }
    return (
        <div>
            <Navbar internship={active.style} />
        </div>
    )
}

export default internshipsPage
