import PropTypes from 'prop-types';
import React from 'react'

const Project = ({data, reverse}) => {
  return (

   <article className='project' style={{
    flexDirection: reverse ? 'row-reverse' : 'row',}
   }>
    <div className='image'>
        <img src={data.image} alt={data.title} />
    </div>
    <div className="content">
        <h3>{data.title}</h3>
        <ul>
            { data.tech.map((tech)=>(
                <li key = {tech}>{tech}</li>

            ))}

        </ul>
        <p>{data.description}</p>
        <div>
            
            <a className="btn" href="#"> Github </a>
        </div>

    </div>

   
   </article>
   
   
   

  )
}

export default Project
