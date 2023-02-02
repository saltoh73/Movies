import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


const Layout = ({userData, setuserData}) => {

let navigate =useNavigate()
  let logout =()=>{
    localStorage.removeItem('token')
    setuserData(null)
    navigate('/login')
  }
  return (
    <>
      
<Navbar  logout={logout} userData={userData}/>
<Outlet></Outlet>


    </>
  )
}

export default Layout
