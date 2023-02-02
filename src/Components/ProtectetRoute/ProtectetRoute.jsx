import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectetRoute = (props) => {


      if(!localStorage.getItem('token') ){
        return <Navigate  to='/login'/>
      }else{
return props.children;
      }
  
  
  

}

export default ProtectetRoute
