import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({userData, logout}) => {
  return (
    <>
     
     <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#"><h3>Noxi</h3></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     

{userData? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
     <li className="nav-item">
         <Link className="nav-link" to="/home">Home</Link>
       </li>

       <li className="nav-item">
         <Link className="nav-link" to="/movies">Movies</Link>
       </li>

       <li className="nav-item">
         <Link className="nav-link" to="/tv">Tv Shows</Link>
       </li>

       <li className="nav-item">
         <Link className="nav-link" to="/people">People</Link>
       </li>

       <li className="nav-item">
         <Link className="nav-link" to="/about">About</Link>
       </li>

       <li className="nav-item">
         <Link className="nav-link" to="/networks">Networks</Link>
       </li>
  
   
     </ul>:""}







     
           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">





{userData? <>
  
       <li className="nav-item">
         <Link className="nav-link" onClick={logout} to='/login'>Logout</Link>
       </li> 

     
         <li className="nav-item">
         <Link className="nav-link" to="/profile">Profile</Link>
       </li>
       </>:

<>
     <li className="nav-item">
         <Link className="nav-link" to="/">Register</Link>
       </li>
       
       
        <li className="nav-item">
         <Link className="nav-link" to="/login">Login</Link>
       </li>

</>

       
      }
      

 </ul>

      
    
    </div>
  </div>
</nav>


    </>
  )
}

export default Navbar
