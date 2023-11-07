import React from 'react'
import './UserInformation.css'
import { useEffect } from 'react'
import { useState } from 'react'
const UserInformation = () => {
    const [userEmail ,setUserEmail]=useState()
    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail')
        setUserEmail(userEmail)
    }, [userEmail])
    return (
        <div className='userInformation'>
            <h1 style={{ padding: '77px 0px' }}>
                {userEmail}
            </h1>
        </div>
    )
}

export default UserInformation