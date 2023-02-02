import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from '../Item/Item'
import Tv from '../Tv/Tv'
import People from '../People/People'
import Loading from '../Loading/Loading'
import { Offline } from "react-detect-offline";
import DetectRoute from '../DetectRoute/DetectRoute'


const Home = () => {
 
  const[movies,setMovies]=useState([])

  let getTrending= async ()=>{
    let {data}=  await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=52bbcddeda849047525b51d6f8a12361")
    setMovies(data.results)
  }

  useEffect(()=>{
getTrending()

  },[])



  return (
    <>


<Offline><DetectRoute/></Offline>

      
{movies.length>1? <>


  <div className='container my-5'>
      <div className='row'>

   <div className='col-md-4'>

<div className='mt-5'>

<h2 className='pt-3'>Trending <br /> movies <br /> to watch now</h2>
<p className='my-4 para'> Most watched movies by days</p>

</div>

   </div>
{movies.map((value,index)=> <Item key={index} data={value}/>)}

      </div>
     </div>



<Tv/>
<People/>



</>: <Loading/>}
    </>
  )
}

export default Home
