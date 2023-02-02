import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {

  let {overview, poster_path ,title , vote_average,media_type,id}=props.data


  return (
    <>
    
    <div className='col-md-2'>


<div>


<Link to={`/details/${id}/${media_type}`} className='nav-link'>

<div className='item position-relative overflow-hidden'>

<img className='w-100' src={'https://image.tmdb.org/t/p/w500//'+poster_path} alt="" srcset="" />

<div className='overlay d-flex align-items-center text-center '>

<p>{overview.split(' ').slice(0, 10).join(' ')}</p>

</div>

<div className='vote p-1'>{vote_average.toFixed(1)}</div>
</div>
</Link>


<div><h6 className='my-3'>{title}</h6></div>

</div>

    </div>
    
    
    </>
  )
}

export default Item