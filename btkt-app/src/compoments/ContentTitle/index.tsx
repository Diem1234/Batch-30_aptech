import React from 'react'
import ElementA from '../ElementA'

const ContentTitle = ({link,lable }:{link : string , lable :string}) => {
  return (
    <h3>
        <a href={link} title={lable}>
                {lable}
        </a>
    </h3>
  )
}

export default ContentTitle