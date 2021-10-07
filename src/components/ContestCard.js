import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Card } from 'react-bootstrap'
import '../styles/Card.css'

const ContestCard = () => {


    return (
        <Card className="card" style={{ width: '30%', margin: '10px' }}>
            <a href="" style={{
                textDecoration: 'none'
            }}>
                <Card.Body >
                    <Card.Title style={{ color: 'rgba(255, 100, 255)' }}>Codechef Long Challenge</Card.Title>
                    <Card.Subtitle className="mb-2 organizer" >By Codechef</Card.Subtitle>
                    <Card.Text> Date/Time: 5 Oct, 2021  5:00PM
                    </Card.Text>
                    <Card.Text> Duration : 90 min
                    </Card.Text>
                </Card.Body>
            </a >

        </Card >
    )
}

export default ContestCard
