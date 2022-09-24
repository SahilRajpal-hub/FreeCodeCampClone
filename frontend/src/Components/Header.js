import React from 'react';


const Header = () => {

  return (
    <div className="nvb">
        <input className='srch form-control mr-sm-2' type={"search"} placeholder="Search, 8000+ tutorials" aria-label='search' ></input>
        
        <img className='logo' src={'/logo.svg'} /> 
        <div className="lastEle">
            <button  className="menuBtn btn" type="button" >  Menu  </button>
            <a className="signInButton btn btn-primary" type="button" href='/signin'>Sign in</a>
        </div>
    </div>
  )
  
}

export default Header