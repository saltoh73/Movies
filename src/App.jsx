
import Home from "./Components/Home/Home"
import Movies from "./Components/Movies/Movies"
import Tv from "./Components/Tv/Tv"
import About from "./Components/About/About"
import Networks from "./Components/Networks/Networks"
import People from "./Components/People/People"
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Details from "./Components/Details/Details"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import jwtDecode from "jwt-decode"
import { useState } from "react"
import { useEffect } from "react"
import Profile from "./Components/Profile/Profile"
import ProtectetRoute from "./Components/ProtectetRoute/ProtectetRoute"

function App() {

const [userData, setuserData] = useState(null)

  let saveUser=()=>{
    let encoded = localStorage.getItem('token')
    let decoded =jwtDecode(encoded)
    setuserData(decoded)
  }



useEffect(() => {

if(localStorage.getItem('token')){
  saveUser()
}

}, [])



const router = createBrowserRouter([
  { path: "/", element: <Layout setuserData={setuserData} userData={userData} />, children:[


{path:"home" , element: <ProtectetRoute userData={userData}><Home/></ProtectetRoute > },
{path:"tv" , element: <ProtectetRoute userData={userData}><Tv/></ProtectetRoute >},
{path:"movies" , element:<ProtectetRoute userData={userData}><Movies/></ProtectetRoute> },
{path:"about" , element:<ProtectetRoute userData={userData}><About/></ProtectetRoute > },
{path:"networks" , element:<ProtectetRoute userData={userData}><Networks/></ProtectetRoute >},
{path:"people" , element:<ProtectetRoute userData={userData}><People/></ProtectetRoute > },
{index:true , element: <Register/>},
{path:"login" , element: <Login saveUser={saveUser}/>},
{path:"details/:id/:media_type" , element: <Details/>},
{path:"profile" , element: <Profile userData={userData} />},


  ]}]);

  
  return (

   <>

{/* <Navbar/>
<Home/>
<Movies/>
<Tv/>
<People/>
<About/>
<Networks/> */}



<RouterProvider router={router}/>
   </>
  );
}

export default App;
