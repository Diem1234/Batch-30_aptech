import React from 'react'

const ElementA = ({link,lable,classs="" ,name=''}:{link : string , lable :string,classs ? : string,name ? : string}) => {
  return (
    <a className={classs} href={link} title={lable}>
         {name='' ? lable : name}
    </a>
  )
}

export default ElementA