import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Card } from 'react-bootstrap'
import '../styles/Card.css'

const HackCard = () => {
    return (
        <Card className="card" style={{ width: '30%', margin: '10px' }}>
            <a href="/" style={{
                textDecoration: 'none', color: '#111111 !important'
            }}>
                <Card.Body >
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </a >

        </Card >
    )
}

export default HackCard
