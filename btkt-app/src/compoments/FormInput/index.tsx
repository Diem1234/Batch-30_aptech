import React from 'react'

const FormInput = ({type,placeholder,name,classs}:{type : string,placeholder : string,name : string, classs ?: string}) => {
  return (
    <>
      <input required type={type} placeholder={placeholder} name={name} className={classs}/>
    </>
  )
}

export default FormInput