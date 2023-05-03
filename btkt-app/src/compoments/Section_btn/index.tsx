import React from 'react'
import ElementA from '../ElementA'

const Section_btn = ({children} : {children : React.ReactNode}) => {
  return (
    <div className="section_btn">
        {children}
    </div>
  )
}

export default Section_btn