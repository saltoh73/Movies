import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Tv = () => {
  const[tv,setTv]=useState([])

  let getTrending= async ()=>{
    let {data}=  await axios.get("https://api.themoviedb.org/3/trending/tv/week?api_key=52bbcddeda849047525b51d6f8a12361")
    setTv(data.results)
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

<h2 className='pt-3'>Trending <br /> TV <br /> to watch now</h2>
<p className='my-4 para'> Most watched TV by days</p>

</div>

   </div>
{tv.map((value,index)=> 
    <div key={index} className='col-md-2'>


<Link className='nav-link' to={`/details/${value.id}/${value.media_type}`}>

<div>

<div className='item position-relative overflow-hidden '>

<img className='w-100' src={'https://image.tmdb.org/t/p/w500//'+value.poster_path} alt="" srcset="" />

<div className='overlay d-flex align-items-center text-center '>

<p>{value.overview.split(' ').slice(0, 10).join(' ')}</p>

</div>

<div className='vote p-1'>{value.vote_average.toFixed(1)}</div>
</div>



<div><h6 className='my-3'>{value.name}</h6></div>

</div>

</Link>

    </div>)}

      </div>
     </div>

     
     

    </>
  )
}

export default Tv
