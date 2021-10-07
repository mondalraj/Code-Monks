import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Card } from 'react-bootstrap'
import '../styles/Card.css'

const InternCard = () => {


    return (
        <Card className="card" style={{ width: '30%', margin: '10px' }}>
            <a href="" style={{
                textDecoration: 'none'
            }}>
                <Card.Body >
                    <Card.Title style={{ color: 'rgba(255, 100, 255)' }}>Goldmann Sachs Summer Intern</Card.Title>
                    <Card.Subtitle className="mb-2 organizer">Goldmann Sachs</Card.Subtitle>
                    <Card.Text> Location: New Delhi
                    </Card.Text>
                    <Card.Text> Duration : 90 min
                    </Card.Text>
                </Card.Body>
            </a >

        </Card >
    )
}

export default InternCard
