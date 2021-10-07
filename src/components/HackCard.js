import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Card } from 'react-bootstrap'
import '../styles/Card.css'

const HackCard = (props) => {

    const { name, organizer, date, participants, topics, link } = props.hackathon;

    return (
        <Card className="card" style={{ width: '30%', margin: '10px' }}>
            <a href={link} style={{
                textDecoration: 'none'
            }}>
                <Card.Body >
                    <Card.Title style={{ color: 'rgba(255, 100, 255)' }}>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 organizer" >{"By: " + organizer}</Card.Subtitle>
                    <Card.Text> Date:
                        {" " + date}
                    </Card.Text>
                    <Card.Text> Participants registered:
                        {" " + participants}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted" style={{ color: '#00668D !important' }}>{"# " + topics}</Card.Subtitle>
                </Card.Body>
            </a >

        </Card >
    )
}

export default HackCard
