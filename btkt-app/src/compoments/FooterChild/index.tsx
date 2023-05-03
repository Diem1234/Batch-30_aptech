import React from 'react'


const FooterChild = ({children,customClass='',lable}:{children : React.ReactNode,customClass : string,lable:string}) => {
  return (
    <div className={`${customClass}`}>
        <h3>{lable}</h3>
        <ul>
            {children}
        </ul>
    </div>
  )
}

export default FooterChild