import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '/logo.png'
import { AuthContext } from '../../context/AuthProvider'
import './Header.css'
const Header = () => {
  const { user, logout, isAuthenticated } = React.useContext(AuthContext);
  return (
    <header>
        <nav>
          <Link to="/">
            <img src='/logo.png' className="logo" alt="Vite logo" />
          </Link>
          <ul className='nav-list'>
            <li><Link className='link-nav' to="/">Home</Link></li>
             <li><Link className='link-nav' to="">About us</Link></li>
            <li><Link className='link-nav' to="">Teachers</Link></li>
            <li><Link className='link-nav' to="/courses">Courses</Link></li>
            <li><Link className='link-nav' to="/enrolled">Enrolled Courses</Link></li>
            <li><Link className='link-nav' to="">For Student</Link></li> 
          </ul>
          <div className='auth'>
            {isAuthenticated?(
              <div className='logout-container'>
                <li>Hello  <span>{user.firstName} {user.lastName}</span></li>
                <button className='logout' onClick={logout}>Logout</button>
              </div>
            ):(
              <>
              <Link to="/register" className='register'>Register</Link>
            <Link to="/login" className='login'>Login</Link>
              </>
            )}

          </div>
        </nav>
      </header>
  )
}

export default Header