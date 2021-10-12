import React from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/home.css'
import { Link } from 'gatsby';

const HomePage = () => {

    

    return (
        <div className="homePage">
            <Navbar />
            <div className="hackSection container-lg" style={{ marginTop: "70px", minHeight: '400px', height: '60vh', maxHeight: '600px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="content" style={{}}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '2rem', fontFamily: "Gemunu Libre", color: 'rgb(255, 74, 255)' }}>Build innovative and win prizes!</h1>
                    <h5>Hackathons are a great place to learn, build, discover new ideas and make new friends. Dive right in!</h5>
                    <button className="btn btn-warning" style={{ fontSize: '1.2rem', marginTop: '2rem' }}><Link style={{ color: 'black !important' }} to="/hackathons">View Hackathons</Link></button>
                </div>
                <img style={{ width: '43%', borderRadius: '20px', marginLeft: '20px' }} src="https://zegal.com/wp-content/uploads/2021/01/alex-kotliarskyi-361099-unsplash-min-1280x853.jpg" alt="" />
            </div>


            <div className="hackSection container-lg mobile-left" style={{ marginTop: "60px", height: '60vh', minHeight: '400px', maxHeight: '600px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{ width: '43%', borderRadius: '20px', marginRight: '20px' }} src="https://jnswire.s3.amazonaws.com/jns-media/e4/fe/465159/shutterstock_Coding_screen.jpg" alt="" />
                <div className="content" style={{ textAlign: 'left' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '2rem', fontFamily: "Gemunu Libre", color: 'rgb(255, 74, 255)' }}>Practice your skills in Competitive Coding</h1>
                    <h5>This is the place to show off your skills . Try your hand at one of the competitions ; solve a problem and write great code . Put yourself up for recognition and win great prizes</h5>
                    <button className="btn btn-warning" style={{ fontSize: '1.2rem', marginTop: '2rem' }}><Link style={{ color: 'black !important' }} to="/contests">View Contests</Link></button>
                </div>
            </div>
            <div className="hackSection container-lg" style={{ marginTop: "60px", minHeight: '400px', height: '60vh', maxHeight: '600px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="content" style={{}}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '2rem', fontFamily: "Gemunu Libre", color: 'rgb(255, 74, 255)' }}>Have a look on some cool internships.</h1>
                    <h5>Bring your insight, imagination, and a healthy disregard for the impossible. Together, we can build for everyone. Here you can taste of the various internships.</h5>
                    <button className="btn btn-warning" style={{ fontSize: '1.2rem', marginTop: '2rem' }}><Link style={{ color: 'black !important' }} to="/internships">View Internships</Link></button>
                </div>
                <img style={{ width: '43%', borderRadius: '20px', marginLeft: '20px' }} src="https://thumbs.dreamstime.com/b/internship-list-pros-written-note-internship-list-pros-written-notepad-122225688.jpg" alt="" />
            </div>
            <div className="hackSection container-lg mobile-left" style={{ marginTop: "60px", minHeight: '400px', height: '60vh', maxHeight: '600px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{ width: '43%', borderRadius: '20px', marginRight: '20px' }} src="https://assets.vice.com/content-images/contentimage/123472/_DSC3283_033.jpg" alt="" />
                <div className="content" style={{ textAlign: 'left' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '2rem', fontFamily: "Gemunu Libre", color: 'rgb(255, 74, 255)' }}>Participate in various coding Events.</h1>
                    <h5>Training and taking part in programming contests make you more a more disciplined, faster and focused coder. dive right in!</h5>
                    <button className="btn btn-warning" style={{ fontSize: '1.2rem', marginTop: '2rem' }}><Link style={{ color: 'black !important' }} to="/events">View Programs and Events</Link></button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
