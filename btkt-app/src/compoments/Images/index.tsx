import React from 'react'

const Images = ({link,lable,classs="" }:{link : string , lable :string,classs ? : string}) => {
  return (
    <img className={classs} src={link} alt={lable} />

  )
}

export default Images

