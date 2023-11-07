import React from 'react';
import { Routes, Route,  } from 'react-router-dom'
import ContextProvider from './Context/Context'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './component/Home/Home';
import MoviesInfo from './component/Home/MoviesInfo/MoviesInfo';
import Navbar from './component/Home/Navbar/Navbar';
import AllMovies from './component/AllMovies/AllMovies';
import AllFavourites from './component/AllFavourites/AllFavourites';
import Login from './component/Authentication/Login/Login';
import Register from './component/Authentication/Register/Register';
import UserInformation from './component/Authentication/UserInformation/UserInformation';
const App = () => {
  return (
    <>
      <ContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/MonieInformation/:id' element={<MoviesInfo/>}/>
          <Route path='/allMovies' element={<AllMovies/>}/>
          <Route path='/allfavourite' element={<AllFavourites/>}/>
          <Route path='/Signin' element={<Login/>}/>
          <Route path='/Signup' element={<Register/>}/>
          <Route path='/userInformation' element={<UserInformation/>}/>
        </Routes>
      </ContextProvider>
      <ToastContainer />
    </>
  )
}


export default App;




