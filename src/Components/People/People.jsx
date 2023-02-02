import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const People = () => {
  const[people,setPeople]=useState([])

  let getTrending= async ()=>{
    let {data}=  await axios.get("https://api.themoviedb.org/3/trending/person/week?api_key=52bbcddeda849047525b51d6f8a12361")
    setPeople(data.results)
 
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

<h2 className='pt-3'>Trending <br /> People <br /> to watch now</h2>
<p className='my-4 para'> Most watched People by days</p>

</div>

   
   
   </div>


{people.map((hamada,index)=> 
    <div key={index} className='col-md-2'>


<div>
<Link to={`/details/${hamada.id}/${hamada.media_type}`} className='nav-link'>

<div className='item position-relative overflow-hidden'>

<img className='w-100' src={'https://image.tmdb.org/t/p/w500//'+hamada.profile_path} alt="" srcset="" />

{/* <div className='overlay d-flex align-items-center text-center '>

<p>{hamada.overview.split(' ').slice(0, 10).join(' ')}</p>

</div> */}

</div>

</Link>

<div><h6 className='my-3'>{hamada.name}</h6></div>

</div>



    </div>)}

      </div>
     </div>


    </>
  )
}

export default People
