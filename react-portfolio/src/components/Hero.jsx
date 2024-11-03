import React from 'react'

const Hero = () => {
  return (
    <section className='herodivider'>
      <div className='mypicdiv'>
        <img className='mypic' src="/src/assets/mypic.png" alt="mypictute" />
      </div>
        
        <div>
            <h3 >Hi, I'm</h3>
            <h1>Neimo HaJJi</h1>
            <p>Software Developer</p>
           
            <a href="#projects" className='btn' >Check Out My Work</a>
        </div>
    
    </section>
  );
};

export default Hero
