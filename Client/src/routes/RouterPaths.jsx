import React from 'react'
import {Route,Routes} from 'react-router-dom'
import About from '../components/About/About'
import Home from '../components/Home/Home'
import Employee from '../components/Employee/Employee'
import RestaurentOwner from '../components/RestaurentOwner/RestaurentOwner'


const RouterPaths = () =>{
    return(
            <Routes>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/rest' element={<RestaurentOwner />}></Route>
            <Route exact path='/employee' element={<Employee />}></Route>
           
            </Routes>
    )
}
export default RouterPaths