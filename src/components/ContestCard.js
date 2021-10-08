import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Card } from 'react-bootstrap'
import '../styles/Card.css'

const ContestCard = (props) => {

    const { name, organizer, date, time, duration, link } = props.contest;

    return (
        <Card className="card" style={{ width: '30%', margin: '10px' }}>
            <a href={link} style={{
                textDecoration: 'none'
            }}>
                <Card.Body >
                    <Card.Title style={{ color: 'rgba(255, 100, 255)' }}>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 organizer" >By: {" " + organizer}</Card.Subtitle>
                    <Card.Text> Date: {" " + date}
                    </Card.Text>
                    <Card.Text> Time: {" " + time}
                    </Card.Text>
                    <Card.Text> Duration : {" " + duration}
                    </Card.Text>
                </Card.Body>
            </a >

        </Card >
    )
}

export default ContestCard
