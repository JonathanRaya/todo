import { Link } from 'react-router-dom';
import '../App.css'
import React, { useState } from 'react'

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

return (
    <>
        <div className="header-main">
            <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                <div className='hamburger' onClick={toggleMenu}>
                    &#9776; {/* Hamburger icon */}
                </div>
                <ul className={`links-list ${menuOpen ? 'open' : ''}`}>
                    <li className='header-list'><Link to="/">Home</Link></li>
                    <li className='header-list'><Link to="/legs">Legs</Link></li>
                    <li className='header-list'><Link to="/back">Back</Link></li>
                    <li className='header-list'><Link to="/arms">Arms</Link></li>
                    <li className='header-list'><Link to="/chest">Chest</Link></li>
                    <li className='header-list'><Link to="/shoulders">Shoulders</Link></li>
                </ul>

                </nav>
            </div>
        </>
    )
}

export default Header