import React, { useContext, useState } from 'react'
import './Navbar.css'
import { MoviesContext } from '../../../Context/Context'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const { searchvalue, setSearchvalue } = useContext(MoviesContext)
    const [isOpin, setIsOpin] = useState(false)
    const navigate=useNavigate()
    const useremail= localStorage.getItem('userEmail')
    const removeUserEmail =()=>{
        localStorage.removeItem('userEmail')
        navigate('/signin')
    }

    return (
        <div className='navbar'  >
            <div className='container'>
                <div className='nav-content'>
                    <div className='nav-logo' ><Link to='/'><img src='/img/movie.png' /></Link></div>
                    <span className='search' style={{ top: isOpin && '70px' }}>
                        <input value={searchvalue} onChange={(e) => setSearchvalue(e.target.value)} type="search" placeholder='Type to Search...' />
                    </span>
                    <div className='nav-icon' >
                        <i onClick={() => setIsOpin(!isOpin)} className="fa-solid fa-magnifying-glass"></i>
                        <Link to='/allfavourite' className="fa-solid fa-heart icon" ></Link>
                    </div>
                    <div className='nav-authentication'>
                        <Link to='/userInformation' className="fa-solid fa-caret-down userInformation"></Link>
                        {useremail? <span onClick={removeUserEmail} >Sign Up</span>:
                        <Link to='/Signin' >Sign in</Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar