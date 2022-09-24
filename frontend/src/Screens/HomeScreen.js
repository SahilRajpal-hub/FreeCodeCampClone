import React from 'react';

const HomeScreen = () => {
  return (
    <>
        <div className="page">
            <div className="rw">
                <div className="col-lg-8 col-lg-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                    <h1 className="big-heading" data-test-label="landing-header">Learn to code — for free.</h1>
                    <h1 className="big-heading">Build projects.</h1>
                    <h1 className="big-heading">Earn certifications.</h1>
                    <h3 className="">Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</h3>
                    <div className="logos">
                        <img className='apple_logo' src={'/apple_logo.png'} /> 
                        <img className='google_logo' src={'/google_logo.png'} /> 
                        <img className='microsoft_logo' src={'/microsoft_logo.jpg'} /> 
                        <img className='google_logo' src={'/spotify_logo.png'} /> 
                        <img className='google_logo' src={'/amazon_logo.png'} /> 
                    </div>
                </div> 
            </div>   
        </div>
    </>
  )
}

export default HomeScreen