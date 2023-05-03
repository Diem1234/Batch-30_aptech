import React from 'react'
import styles from './Button.module.css'

function Button({lable = "Button", customer='', icon } : {lable: string, customer?: string,icon ?: React.ReactNode}){
  //let [color,setColor]= React.useState(false);
    return(
      <button type='button' className={`${styles.button} ${styles[customer]}`}>{icon ? icon : null} {lable}</button>  
    )
}
export default Button