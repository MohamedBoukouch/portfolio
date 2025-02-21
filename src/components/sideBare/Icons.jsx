import React from 'react'

const Icons = ({ href, icon: IconComponent }) => {
  return (
    <a 
    href={href}
    >
    <IconComponent className="w-6 h-6 hover:text-teal-500"/>
  </a>
  )
}

export default Icons
