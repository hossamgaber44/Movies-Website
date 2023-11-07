import { createContext, useState, useEffect } from "react";
import data from "../data/data.json"
export const MoviesContext = createContext({});

const initialFavourite = localStorage.getItem("Favourites") ? JSON.parse(localStorage.getItem("Favourites")) : [];
const initialMovies = localStorage.getItem("MoviesHome") ? JSON.parse(localStorage.getItem("MoviesHome")) : [];
const initialUsers = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

const ContextProvider = (props) => {
    const [movies, setMovies] = useState(data)

    const getMovies = async (searchvalue) => {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchvalue}&apikey=263d22d8`)
        const responseJson = await response.json()
        if (responseJson && searchvalue !== null && searchvalue !== '' && searchvalue !== ' ') {
            setMovies(responseJson.Search)
        } else { setMovies(data) }
    }

    const [searchvalue, setSearchvalue] = useState('')

    useEffect(() => {
        getMovies(searchvalue)
    }, [searchvalue, movies, data])

    const [favourite, setFavourite] = useState(initialFavourite)
    const [MoviesHome, setMoviesHome] = useState(initialMovies)
    const [users, setUsers] = useState(initialUsers)

    useEffect(() => {
        localStorage.setItem("Favourites", JSON.stringify(favourite))
        localStorage.setItem("MoviesHome", JSON.stringify(MoviesHome))
        localStorage.setItem("users", JSON.stringify(users))
        setMoviesHome(favourite)
    }, [favourite, MoviesHome, users])

    const addToFavouries = (movie) => {
        const newFavouriesList = [...favourite, movie]
        setFavourite(newFavouriesList)
    }

    const removeToFavouries = (movie) => {
        const newFavouriesList = favourite.filter(i => i.imdbID !== movie.imdbID)
        setFavourite(newFavouriesList)
    }


    const addUser = (user) => {
        const newUser = [...users, user]
        setUsers(newUser)
    }


    const valuee = { movies, searchvalue, setSearchvalue, favourite, addToFavouries, removeToFavouries, addUser, users }
    return (
        <MoviesContext.Provider value={valuee} >
            {props.children}
        </MoviesContext.Provider>
    );

};

export default ContextProvider;
