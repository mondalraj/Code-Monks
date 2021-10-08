import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Card } from 'react-bootstrap'
import '../styles/Card.css'

const InternCard = (props) => {


    const { name, companyName, location, link } = props.intern;

    return (
        <Card className="card" style={{ width: '30%', margin: '10px' }}>
            <a href={link} style={{
                textDecoration: 'none'
            }}>
                <Card.Body >
                    <Card.Title style={{ color: 'rgba(255, 100, 255)' }}>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 organizer"> Company: {" " + companyName}</Card.Subtitle>
                    <Card.Text> Location: {" " + location}
                    </Card.Text>
                </Card.Body>
            </a >

        </Card >
    )
}

export default InternCard
