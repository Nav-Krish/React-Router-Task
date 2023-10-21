import React from 'react'
import {Link} from 'react-router-dom';
import banner from '../assets/Header-banner.png'

const Header = () => {
  return (
    <div className='header-container'>
        <div className="blog-header">
          <div className="img-div">
            <a className='header-banner' href="https://www.guvi.in" target='_blank'>
              <img src={banner} alt="Blog Header" />
            </a>
          </div>
          <div className="header-navbar">
            <div className='topics'>
              <div className="d-flex justify-content-around" >
                <ul>
                  <li>
                    <Link className='blog-navbar' to='/'>
                      All
                    </Link>
                  </li>
                  <li>
                    <Link className='blog-navbar' to='/full-stack-development'>
                      Full Stack Development
                    </Link>
                  </li>
                  <li>
                    <Link className='blog-navbar' to='/data-science'>
                      Data Science
                    </Link>
                  </li>
                  <li>
                    <Link className='blog-navbar' to='/cyber-security'>
                      Cyber Security
                    </Link>
                  </li>
                  <li>
                    <Link className='blog-navbar' to='/career'>
                      Career
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header