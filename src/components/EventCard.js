import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Card } from 'react-bootstrap'
import '../styles/Card.css'

const EventCard = (props) => {

    const { name, date, organizer, link } = props.event;

    return (
        <Card className="card" style={{ width: '30%', margin: '10px' }}>
            <a href={link} style={{
                textDecoration: 'none'
            }}>
                <Card.Body >
                    <Card.Title style={{ color: 'rgba(255, 100, 255)' }}>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 organizer" >{"By: " + organizer}</Card.Subtitle>
                    <Card.Text> Date: {" " + date}
                    </Card.Text>
                </Card.Body>
            </a >

        </Card >
    )
}

export default EventCard
