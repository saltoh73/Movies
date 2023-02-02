import axios  from 'axios'
import React, { useEffect, useState } from 'react'
// import { Offline } from "react-detect-offline";
// import DetectRoute from '../DetectRoute/DetectRoute'
import { Link } from 'react-router-dom';

const Movies = () => {
  const[movies,setmovies]=useState([])

  let getTrending= async ()=>{
    let {data}=  await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=52bbcddeda849047525b51d6f8a12361")
    setmovies(data.results)
  }

  useEffect(()=>{
getTrending()

  },[])

  return (
    <>
        
        <div className='container my-5'>
      <div className='row'>

   <div className='col-md-4'>

<div className='mt-5'>

<h2 className='pt-3'>Trending <br /> movies <br /> to watch now</h2>
<p className='my-4 para'> Most watched movies by days</p>

</div>

   </div>
{movies.map((items,index)=> 
    <div key={index} className='col-md-2'>

<Link to={`/details/${items.id}/${items.media_type}`} className='nav-link'>
<div>



<div className='item position-relative overflow-hidden'>

<img className='w-100' src={'https://image.tmdb.org/t/p/w500//'+items.poster_path} alt="" srcset="" />

<div className='overlay d-flex align-items-center text-center '>

<p>{items.overview.split(' ').slice(0, 10).join(' ')}</p>

</div>

<div className='vote p-1'>{items.vote_average.toFixed(1)}</div>
</div>




<div><h6 className='my-3'>{items.title}</h6></div>

</div>

</Link>


    </div>)}

      </div>
     </div>

     
   
    </>
  )
}

export default Movies
