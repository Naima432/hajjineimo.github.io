import React from 'react'


function Footer() {
    const currentYear = new Date().getFullYear()
  return (
   <footer>
    <span>
        Neimo Hajji {currentYear}&copy;
    </span>
   </footer>
  )
}

export default Footer
