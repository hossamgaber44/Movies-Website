import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './MoviesContent.css'
import { MoviesContext } from '../../../Context/Context'
const MoviesContent = ({ movies }) => {
    const { favourite, addToFavouries, removeToFavouries } = useContext(MoviesContext)
    return (
        <div className='container'>
            <div className='MoviesContent'>
                {movies?.map(i => (
                    <div key={i?.imdbID} className='movies-img' >
                        <Link to={`/MonieInformation/${i?.imdbID}`} className='movies-link' >
                            <img src={i?.Poster} />
                            <span className='overlay'></span>
                        </Link>
                        <i style={{ color: favourite.find(j => j?.imdbID === i?.imdbID) ? "red" : "#f1f1f1" }} onClick={() => favourite.find(j => j.imdbID === i.imdbID) ? removeToFavouries(i) : addToFavouries(i)} className="fa-solid fa-heart favourite"></i>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MoviesContent