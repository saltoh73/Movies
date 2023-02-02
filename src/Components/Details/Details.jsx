import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'



const Details = () => {



let params= useParams();
    const[detailsItem,setdetailsItem]=useState({})

 let getDetails= async ()=>{
     let {data} = await axios.get(`https://api.themoviedb.org/3/${params.media_type}/${params.id}?api_key=52bbcddeda849047525b51d6f8a12361&language=en-US`)
     setdetailsItem(data)
     console.log(data)
    }


    useEffect(() => {
        getDetails()
    },[])
    


  return (

<>



<div className="row ">



<div className="col-md-3 ">

<img className='w-100 my-5 mx-5' src={'https://image.tmdb.org/t/p/w500//'+detailsItem.poster_path}  alt="" srcset="" />
<img className='w-100 mb-5  mx-5' src={'https://image.tmdb.org/t/p/w500//'+detailsItem.profile_path}  alt="" srcset="" />

</div>




<div className="col-md-9">
  
  
<div><h3 className='mx-5 mt-5'>{detailsItem.title}</h3></div>
<div><h3 className='mx-5 mt-5'>{detailsItem.name}</h3></div>
<div><h6 className='mx-5 my-3'>{detailsItem.tagline}</h6></div>
<div><h6 className='mx-5 my-3'>{detailsItem.place_of_birth}</h6></div>
<button className=' mx-5 btn btn-info'>{detailsItem.status}</button>
<button className=' mx-5 btn btn-info'>{detailsItem.known_for_department}</button>
<h6 className='mx-5 mt-4'>vote:  {detailsItem.vote_average}</h6>
<h6 className='mx-5 mt-4'>vote count:  {detailsItem.vote_count}</h6>
<h6 className='mx-5 mt-4'>popularity:  {detailsItem.popularity}</h6>
<h6 className='mx-5 mt-4'>release date:  {detailsItem.release_date}</h6>
<h6 className='mx-5 mt-5 para'>{detailsItem.overview}</h6>


</div>





</div>







</>


  )
}

export default Details