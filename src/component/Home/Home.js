import React, { useContext, useEffect } from 'react'
import './Home.css'
import Movies from './Movies/Movies'
import { MoviesContext } from '../../Context/Context'
import Title from './Title/Title'

const Home = () => {
    const { movies, favourite } = useContext(MoviesContext)
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return (
        <>
            <div style={{ paddingTop: '50px' }}>
                <Title title='Movies' link='allMovies' />
            </div>
            <Movies movies={movies} />
            <Title title='Favourite' link='allfavourite' />
            <Movies movies={favourite} />

        </>
    )
}

export default Home