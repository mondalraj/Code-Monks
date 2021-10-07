import React from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import InternCard from '../components/InternCard';

const internshipsPage = () => {
    const active = {
        style: {
            backgroundColor: 'rgba(255, 187, 0, 0.801)',
            color: 'black !important'
        }
    }
    return (
        <div>
            <Navbar internship={active.style} />
            <div className="container-lg d-flex justify-content-around align-self-stretch flex-wrap" style={{ marginTop: '60px' }}>
                <InternCard />
            </div>
        </div>
    )
}

export default internshipsPage
