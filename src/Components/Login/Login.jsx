import axios from 'axios';
import Joi, { date } from 'joi';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../images/signin-image.jpg'




const Login = ({saveUser}) => {


    let navigate = useNavigate();
    const [user, setUser] = useState({
        "email":"",
        "password":"",
    })
    const [errorMes, setErrorMes] = useState('')
    const [errorList, seterrorList] = useState([])
    
    
    let getInput=(e)=>{
        let myUser={...user};
      myUser[e.target.name]=e.target.value
      setUser(myUser)
    }
    
    const validationData=()=>{
        const schema = Joi.object({
    
    
         email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
          password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        
       
           }) 
        
        return   schema.validate(user,{abortEarly:false});
    
    }
    
    let goTohome=()=>{
        navigate('/home')
    }
    
    
    
    
    let submitData =async (e)=>{
    e.preventDefault();
    let validationReponse=validationData()
    console.log(validationReponse)
    if(validationReponse.error){
     seterrorList(validationReponse.error.details)
    
    
    }else{
    
        let {data}=await axios.post('https://route-movies-api.vercel.app/signin',user)
    
    if(data.message=='success'){
        localStorage.setItem('token',data.token)
        saveUser()
    goTohome()
    }else{
        setErrorMes(data.message)
    }
    }
    
    
    
    }  
    
    






  return (
    <>
      

<section className="sign-in">
  <div className="sayed pt-5">
  {errorList.map((error,index)=>

<div  key={index} className='alert alert-danger p-3 text-center mt-2 rounded-5 shadow-lg'>{error.message}</div>

)}


{errorMes?    <div className='alert alert-danger p-3 text-center mt-5'>{errorMes}</div>
:''}
    <div className="signin-content">
      <div className="signin-image">
        <figure><img src={image} alt="sing up image" /></figure>
        <a href="#" className="signup-image-link nav-link btn  text-info btn-secondary">Create an account</a>
      </div>
      <div className="signin-form">
        <h2 className="form-title">Sign up</h2>
        <form method="POST" className="register-form" id="login-form" onSubmit={submitData}>
          <div className="form-group">
            <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
            <input type="text" name="email" id="email" placeholder="Your Email" on onChange={getInput} />
          </div>
          <div className="form-group">
            <label htmlFor="your_pass"><i class="fa-solid fa-lock"></i></label>
            <input type="password" name="password" id="your_pass" placeholder="Password" onChange={getInput} />
          </div>
        
          <button className='btn btn-info'>Submit</button>


        </form>
        <div className="social-login">
          <span className="social-label text-black">Or login with</span>
          <ul className="socials">
            <li><a href="#"><i className="display-flex-center fs-3 fa-brands fa-facebook" /></a></li>
            <li><a href="#"><i className="display-flex-center  fs-3 fa-brands fa-twitter" /></a></li>
            <li><a href="#"><i className="display-flex-center fs-3 fa-brands fa-google" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>



    </>
  )
}

export default Login
