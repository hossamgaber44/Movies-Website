import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../../../Context/Context'
import { useParams } from 'react-router-dom'
import './MoviesInfo.css'
import Movies from '../Movies/Movies'
import Title from '../Title/Title'
const MoviesInfo = () => {
    const { id } = useParams()
    const { movies ,favourite } = useContext(MoviesContext)
    const initialMovies = movies?.filter(m=>m.imdbID !== id)
    return (
        <>
            <div className='container'>
                <span style={{padding:'100px 0px 30px' ,display:'block'}}></span>
                {movies?.map(movie => (
                    <div key={movie?.imdbID}>
                        {movie?.imdbID === id ?
                            <div className='moviesInfo-content'>
                                <div className='movie-post'>
                                    <img src={movie?.Poster} />
                                </div>
                                <div className='movie-details'>
                                    <h3>Title : <span>{movie?.Title}</span></h3>
                                    <h3>Type : <span>{movie?.Type}</span></h3>
                                    <h3>Year : <span>{movie?.Year}</span></h3>
                                </div>
                            </div> : ''}
                    </div>
                ))}
            </div>
            <Title title='Movies' link='allMovies' />
            <Movies movies={initialMovies} />
            <Title title='Favourite' link='allfavourite' />
            <Movies movies={favourite} />
        </>
    )
}

export default MoviesInfo