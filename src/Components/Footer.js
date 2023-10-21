import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <footer className="bg-dark text-white p-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <h4 className='footer-about'>About Us</h4>
                        <p>GUVI is an IIT-M & IIM-A incubated Ed-tech company that focuses on providing personalized learning solutions for its learners right from online learning, upskilling & recruitment opportunities in world-class quality. And, bestow tech-skills with the comfort of your native language.</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li>
                                {/* eslint-disable-next-line */}
                                <a href="#">Home</a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a href="#">Courses</a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a href="#">Contact</a>
                                {/* eslint-enable-next-line */}
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Follow Us</h4>
                        <ul className="d-flex list-unstyled">
                            <li className='mx-3 ms-0'>
                                {/* eslint-disable-next-line */}
                                <a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                            </li>
                            <li className='mx-3'>
                                {/* eslint-disable-next-line */}
                                <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            </li>
                            <li className='mx-3'>
                                {/* eslint-disable-next-line */}
                                <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                                {/* eslint-enable-next-line */}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <p>&copy; 2023 Guvi</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;