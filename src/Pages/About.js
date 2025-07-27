import React from 'react';

function About(){
    return(
        <>
      <div className="about-page">
        <h1> About Us</h1>
        <div className="about"> We are Web Developer team</div>
        
        <div className="abt">
            <p>We create websites and web applications that are user-friendly.</p>
            <div><h1>Our Services</h1></div>
            
        </div>
        
      </div>
      <div className="service-card">
        <div className="services">
          <div className="src">
            <h1>Web Design</h1>
          </div>
          <div className="src">
            <h1>Web Development</h1>
          </div>
          <div className="src">
            <h1>Digital Marketing</h1>
          </div>
          
        </div>
       
      </div>
      <div className="button">
         <button className="btn">Contact</button>
      </div>
      </>
      
      
    )
}
export default About;