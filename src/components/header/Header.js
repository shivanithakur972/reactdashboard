import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header(props) {    
    return (
      <div>
        <div className='main_header'>
            <div className='logo_sec'>
                    <div className='logo-header'>
                        <div className='logo-img'>
                        <Link to="/"><img src='../images/kimphat-logo.svg' /></Link>
                        </div>
                            <div className="quicklinks-inner">
                            <nav>
                            <ul>
                            <li>
                                <Link to="/" target="_self">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" target="_self">About</Link>
                            </li>
                            <li>
                                <Link to="/contact" target="_self">Contact</Link>
                            </li>
                        </ul>
                        </nav>
                            </div>
                        </div>
                    </div>
            </div>
           
        </div>
    )
}
