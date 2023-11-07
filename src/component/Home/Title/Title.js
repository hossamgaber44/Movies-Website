import React from 'react'
import './Title.css'
import { Link } from 'react-router-dom'
const Title = ({title,link}) => {
    return (
        <div className='title container' >
            <h1 className='favourite-header' >{title}:-</h1>
            <Link className='title-link' to={`/${link}`}>view more</Link>
        </div>
    )
}

export default Title