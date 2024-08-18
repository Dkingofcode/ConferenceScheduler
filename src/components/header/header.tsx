import React from 'react';

const header = () => {
  return (
    <div className='header'>
      
      <div className=''>
        <img  />
        <h3>EventApp</h3>
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Pricing</li>
        <li>Career</li>
        <li>Blog</li>
      </ul>

     <div className='btns'>
       <button className='normal'>Login</button>
       <button className='orange'>Sign Up</button>
     </div>
      

    </div>
  )
}

export default header;
