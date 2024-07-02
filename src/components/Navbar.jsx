import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            {/* Creating Navigation links */}
            <nav className='d-flex justify-content-center gap-5 py-3 bg-'>
            <Link to='/' exact className='nav-link'>All</Link>
            <Link to='/fullstack' className='nav-link'>FullStackDevelopment</Link>
            <Link to='/datascience' className='nav-link'>Data Science</Link>
            <Link to='/cybersecurity' className='nav-link'>Cyber Security</Link>
            <Link to='/career' className='nav-link'>Career</Link>
            </nav>
        </div>
    );
};

export default Navbar;