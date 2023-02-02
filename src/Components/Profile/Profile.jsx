import React from 'react'

const Profile = ({userData}) => {
let {first_name, last_name,email,age}=userData

  return (
    <>
      
<div className="pro">


<h2>name: {first_name}</h2>
      <h2>name: {last_name}</h2>
      <h2>name: {email}</h2>
      <h2>name: {age}</h2>

</div>

    </>
  )
}

export default Profile
