import React from 'react'

function Logo({width, height}) {
  return (
   <img src='src\assets\blog-high-resolution-logo-black-transparent.svg' className={`${width} ${height} h-14`}/>
  )
}

export default Logo;