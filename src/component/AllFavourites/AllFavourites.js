import React, { useContext, useEffect } from 'react'
import MoviesContent from '../AllMovies/MoviesContent/MoviesContent'
import { MoviesContext } from '../../Context/Context'

const AllFavourites = () => {
    const { favourite } = useContext(MoviesContext)
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return (
        <div >
            <h1 className='container' style={{ color: 'var(--secondary_color)', padding: '90px 0px 20px' }} >Favourite:-</h1>
            <MoviesContent movies={favourite} />
        </div>
    )
}

export default AllFavourites