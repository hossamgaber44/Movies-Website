import React, { useContext, useEffect, useState } from 'react'
import './Movies.css'
import { MoviesContext } from '../../../Context/Context'
import { Link } from 'react-router-dom'

const Movies = ({ movies }) => {
    const { favourite, addToFavouries, removeToFavouries } = useContext(MoviesContext)

    const [slidIndex, setSlidIndex] = useState(0)
    const handelClick = (direction) => {
        if (direction === "left") {
            setSlidIndex(slidIndex - 1)
        } else {
            setSlidIndex(slidIndex + 1)
        }
    }
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className='Movies'>
            <div className='container'>
                <div className='movies-content'>
                    <button
                        disabled={slidIndex === -1}
                        onClick={() => handelClick("left")} className="fa-solid fa-arrow-left arrow-left">
                    </button>

                    {movies?.map(i => (
                        <div key={i?.imdbID} className='movies-img' style={{ transform: `translate(${slidIndex * -240}px)` }} >
                            <Link to={`/MonieInformation/${i.imdbID}`} className='movies-link' >
                                <img src={i?.Poster} />
                                <span className='overlay'></span>
                            </Link>
                            <i style={{ color: favourite.find(j => j.imdbID === i.imdbID) ? "red" : "#f1f1f1" }} onClick={() => favourite.find(j => j.imdbID === i.imdbID) ? removeToFavouries(i) : addToFavouries(i)} className="fa-solid fa-heart favourite"></i>
                        </div>
                    ))}

                    <button
                        disabled={slidIndex === (movies?.length) - 2}
                        onClick={() => handelClick("right")} className="fa-solid fa-arrow-right arrow-right">
                    </button>

                    {favourite?.length ? <h3></h3> : <h3 className='favourite-length' >no element in the favourite</h3>}
                </div>
            </div>
        </div>
    )
}

export default Movies