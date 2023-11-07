import React from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { MoviesContext } from '../../../Context/Context'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [Repassword, setRepassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { users, addUser } = useContext(MoviesContext)


  const handleSubmit = (e) => {
    e.preventDefault();
    const dataPost = { email, password, Repassword };
    setLoading(true)
    setTimeout(() => {
      if (validate()) {
        addUser(dataPost)
        setPassword('')
        setEmail('')
        navigate('/');
        localStorage.setItem('userEmail', email)
        toast.success('Succesfully Registered')
      }
      setLoading(false)
    }, 1000);
  }

  const validate = () => {
    let result = true
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) { } else {
      result = false;
      toast.error('Please Enter valid email')
    }

    users.map(i => {
      if (email === i.email) {
        result = false;
        toast.error('This email is already in use')
      }
    })

    if (password !== Repassword || password.length < 8) {
      result = false;
      toast.error('Please Enter valid Password')
    }
    return result
  }

  return (
    <div className='register'>
      <div className='container'>
        <div className='register-content'>
          <h1 className='register-logo'><i>MOVIES</i></h1>
          <h2 className='register-title'>Sign Up</h2>
          <form onSubmit={handleSubmit} >
            <div className='form-input'>
              <input value={email} required onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Your Email' />
            </div>
            <div className='form-input'>
              <input value={password} required onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Your Password' />
            </div>
            <div className='form-input'>
              <input value={Repassword} required onChange={(e) => setRepassword(e.target.value)} type='password' placeholder='Retype Password' />
            </div>
            {loading ? <button  className='register-submit-wait' >Sign Up</button>
              : <button className='register-submit' >Sign Up</button>}
            <div className='to-signin' >Already a member? <Link to='/signin'> Sign In</Link></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register