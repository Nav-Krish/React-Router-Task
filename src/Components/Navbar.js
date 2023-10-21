import React from 'react';
import './Navbar.css';
import logo from '../assets/Guvi-blog-logo.webp'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Guvi Blog Logo" width="120" height="auto" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto fw-bolder">
                        <li className="nav-item">
                            <a className="nav-link fw-bolder" id="courses" href="https://www.guvi.in/courses">
                                COURSES
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="liveClassesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                LIVE CLASSES
                            </a>
                            <div className="dropdown-menu" aria-labelledby="liveClassesDropdown">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 fw-bolder">
                                            <div className="dropdown-item">
                                                <p className='fw-bolder mb-1'>Zen Class <span className="badge badge-secondary fw-bolder">
                                                    <i className="fa-solid fa-circle " style={{color: "#ff3e3e",}} /> live online classes</span></p>
                                                <span className="small text-muted">LIVE Online Intensive Program + 100% Placement Support</span>
                                            </div>
                                            <a className="dropdown-item" href="https://www.guvi.in/zen-class/full-stack-development-course/">
                                                <p className='fw-bolder mb-1'>Full Stack Development Program (FSD)</p>
                                                <span className="small text-gray text-muted">Learn Javascript, HTML, CSS, Java, MongoDB & more</span>
                                            </a>
                                            <a className="dropdown-item" href="https://www.guvi.in/zen-class/data-science-course/">
                                                <p className='fw-bolder mb-1'>IIT-M Advanced Programming & Data Science Program</p>
                                                <span className="small text-gray text-muted">Learn Python, Machine Learning, NLP, Tableau, PowerBI & more</span>
                                            </a>
                                            <a className="dropdown-item" href="https://www.guvi.in/zen-class/automation-testing-course/">
                                                <p className='fw-bolder mb-1'>Automation & Testing Program</p>
                                                <span className="small text-gray text-muted">Learn Selenium, Python, Java, Jenkins, Jmeter, API Testing & more</span>
                                            </a>
                                        </div>
                                        <div className="col-md-12">
                                            <a className="dropdown-item" href="https://www.guvi.in/zen-class/" style={{color:'green',}}>
                                                Explore More Programs
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            {/* eslint-disable-next-line */}
                            <a className="nav-link dropdown-toggle fw-bolder" href="#" id="practiceDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                PRACTICE
                            </a>
                            {/* eslint-enable-next-line */}
                            <div className="dropdown-menu" aria-labelledby="practiceDropdown">
                                <a className="dropdown-item" href="https://www.guvi.in/code-kata">
                                    <p className='fw-bolder mb-1'>Codekata</p>
                                    <span className="small text-gray text-muted">Sharpen your coding skills, prepare for interviews</span>
                                </a>
                                <a className="dropdown-item" href="https://www.guvi.in/webkata">
                                    <p className='fw-bolder mb-1'>Webkata</p>
                                    <span className="small text-gray text-muted">Build basic Frontend and Backend development skills</span>
                                </a>
                                <a className="dropdown-item" href="https://www.guvi.in/ide">
                                    <p className='fw-bolder mb-1'>IDE - Online Compiler</p>
                                    <span className="small text-gray text-muted">Run & test your code in any programming language</span>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            {/* eslint-disable-next-line */}
                            <a className="nav-link dropdown-toggle fw-bolder" href="#" id="resourcesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                RESOURCES
                            </a>
                            {/* eslint-enable-next-line */}
                            <div className="dropdown-menu" aria-labelledby="resourcesDropdown">
                                <a className="dropdown-item fw-bold" href="https://www.guvi.in/rewards">
                                    REWARDS
                                </a>
                                <a className="dropdown-item fw-bold" href="https://www.guvi.in/referral">
                                    REFERRAL
                                </a>
                                <a className="dropdown-item fw-bold" href="https://forum.guvi.in/">
                                    FORUM SUPPORT
                                </a>
                                <a className="dropdown-item fw-bold" href="https://www.guvi.in/blog/">
                                    BLOGS
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            {/* eslint-disable-next-line */}
                            <a className="nav-link dropdown-toggle fw-bolder" href="#" id="productsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                OUR PRODUCTS
                            </a>
                            {/* eslint-enable-next-line */}
                            <div className="dropdown-menu" aria-labelledby="productsDropdown">
                                <a className="dropdown-item" href="https://www.hackerkid.org/">
                                    <p  className='fw-bolder mb-1'>HackerKid</p>
                                    <span className="small text-gray text-muted">Coding classes platform for K-12 children</span>
                                </a>
                                <a className="dropdown-item" href="https://www.guvi.in/mlp/GUVI-for-corporates">
                                    <p className='fw-bolder mb-1'>Guvi for corporates</p>
                                    <span className="small text-gray text-muted">Meet your hiring needs at ease</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;