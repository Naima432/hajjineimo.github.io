import React, { Children } from 'react'

const Link = (href, Children) => {
  return (
  <a href={href} className='btn'>{Children}</a>
  )
}

export default Link
