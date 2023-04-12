import React from 'react'

const Folicy = ({label,text,icon}:{label:string,text:string, icon:React.ReactNode}) => {
  return (
    <div>
        <ul className="policy">
            <div className="policy_1 d-flex">
                <p>{icon}{label}</p>
                <p>{text}</p>
            </div>
        </ul>
    </div>
  )
}

export default Folicy