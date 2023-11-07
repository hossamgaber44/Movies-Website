import React, { useContext, useEffect } from 'react'
import MoviesContent from './MoviesContent/MoviesContent'
import { MoviesContext } from '../../Context/Context'

const AllMovies = (props) => {
  const { movies } = useContext(MoviesContext)
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  return (
    <div  >
      <h1 className='container' style={{ color: 'var(--secondary_color)', padding: '90px 0px 20px' }} >Movies :-</h1>
      <MoviesContent movies={movies} />
    </div>
  )
}

export default AllMovies