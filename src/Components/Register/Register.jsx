import axios from 'axios'
import Joi from 'joi'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../../images/signup-image.jpg'









const Register = () => {

let navigate = useNavigate();
const [user, setUser] = useState({
    "first_name":"",
    "last_name":"",
    "email":"",
    "password":"",
    "age":""
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


        first_name : Joi.string().alphanum().min(3).max(30).required(),    
      last_name : Joi.string().alphanum().min(3).max(30).required(),
      age:Joi.number().required().min(3).max(30),
     email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
   
       }) 
    
    return   schema.validate(user,{abortEarly:false});

}

let goToLogin=()=>{
    navigate('/login')
}




let submitData =async (e)=>{
e.preventDefault();
let validationReponse=validationData()
console.log(validationReponse)
if(validationReponse.error){
 seterrorList(validationReponse.error.details)


}else{

    let {data}=await axios.post('https://route-movies-api.vercel.app/signup',user)

if(data.message=='success'){
goToLogin()
}else{
    setErrorMes(data.message)
}
}



}  






return (
    





<>





  <section class="signup">
  <div className="sayed pt-4">

{errorList.map((error,index)=>

<div  key={index} className='alert alert-danger p-3 text-center mt-2 rounded-5'>{error.message}</div>

)}

{errorMes?    <div className='alert alert-danger p-3 text-center mt-5'>{errorMes}</div>
:''}
    <div className="signup-content">


      <div className="signup-form">





        <h2 className="form-title">Sign up</h2>
        <form  className="register-form" id="register-form" onSubmit={submitData} >
          <div className="form-group">
            <label htmlFor="first_name"><i class="fa-regular fa-user"></i></label>
            <input type="text" name="first_name" onChange={getInput} id="first_name" placeholder="First Name" />
          </div>

          <div className="form-group">
            <label htmlFor="last_name"><i class="fa-regular fa-user"></i></label>
            <input type="text" name="last_name" onChange={getInput} id="last_name" placeholder="Last Name" />
          </div>

          <div className="form-group">
            <label htmlFor="age"><i class="fa-solid fa-calendar-check"></i></label>
            <input type="number" name="age" id="age" onChange={getInput} placeholder="Age" />
          </div>

          <div className="form-group">
            <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
            <input type="email" name="email" id="email" onChange={getInput} placeholder="Your Email" />
          </div>


          <div className="form-group">
            <label htmlFor="pass"><i class="fa-solid fa-lock"></i></label>
            <input type="password" name="password" id="pass" onChange={getInput} placeholder="Password" />
          </div>
        
<button className='btn btn-info'>Submit</button>
      
        </form>
      </div>
      <div className="signup-image">
        <figure><img src={image} alt="sing up image" /></figure>
        <a  href="#" className="signup-image-link  nav-link  btn btn-info">I am already member</a>
      </div>
    </div>
  </div>
</section>


</>


  )
}

export default Register