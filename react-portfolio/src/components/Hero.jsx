import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='herodivider' aria-labelledby="hero-heading">
      <div>
        <h3>Hello, I'm</h3>
        <h1 id="hero-heading">Neimo Hajji</h1>
        <p>Software Developer</p>
        
        <a href="#projects" className='btn' id='hero-btn'>Check Out My Work</a>

        {/* Social Media Icons */}
        <div className='social-icons'>
          <a href="https://github.com/Naima432" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/hajjineimo123/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={40} />
          </a>
          <a href="mailto:hajjineimo@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <FaEnvelope size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
