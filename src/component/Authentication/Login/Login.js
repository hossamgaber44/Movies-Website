import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { MoviesContext } from '../../../Context/Context'
import { toast } from 'react-toastify'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { users } = useContext(MoviesContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    setTimeout(() => {
      users.map(i => {
        if (email === i.email) {
          if (password === i.password) {
            localStorage.setItem('userEmail', email)
            setPassword('')
            setEmail('')
            navigate('/');
            toast.success('Succesfully Registered')
          }else{
            toast.error('Please Enter valid Password')
          }
        }
      })
      setLoading(false)
    }, 1000);
  }
  return (
    <div className='login'>
      <div className='container'>
        <div className='login-content'>
          <h1 className='login-logo'><i>MOVIES</i></h1>
          <h2 className='login-title'>Sign in</h2>
          <form onSubmit={handleSubmit} >
            <div className='form-input'>
              <input value={email} onChange={(e) => setEmail(e.target.value)} required type='email' placeholder='Your Email' />
              <i className="fa-solid fa-earth-americas input-icon "></i>
            </div>
            <div className='form-input'>
              <input value={password} onChange={(e) => setPassword(e.target.value)} required type='password' placeholder='Your Password' />
              <i className="fa-solid fa-caret-down input-icon"></i>
            </div>
            {loading?<button className='login-submit-wait' >Sign in</button>
            :<button className='login-submit' >Sign in</button>}
            <div className='to-signup' >Not a member? <Link to='/signup'> Sign Up</Link></div>
          </form>
          <div className='break' >
            <span className='break-line'></span>
            <span className='break-text' >OR</span>
          </div>
          <div className='continue'>
            <h4 className='continue-text'>Continue With</h4>
            <div className='continue-btn'>
              <a className="fa-brands fa-google"></a>
              <a className="fab fa-facebook-f facebook"></a>
              <a className="fa-brands fa-linkedin"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login