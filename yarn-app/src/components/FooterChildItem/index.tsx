import React from 'react'

export const FooterChildItem = ({lable,value, customclass=''}:{lable: string,value?: string,customclass?: string}) => {
    return (
      <li className={customclass}>
            {value} 
            <p>{lable}</p>
      </li>
    )
  }