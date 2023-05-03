// import "./ButtonEs6.css";
import React from 'react'
import styles from "./ButtonEs6.module.css";
//styles.button
// let customClass = 'button-dark';
// console.log(styles[customClass]);

// function ButtonEs6({label = 'Button',icon, customClass=''} : {label?: string, icon?: React.ReactNode, customClass?: string}){
//     return (
//       <button className={`button ${customClass}`} type='button'>{icon ? icon : null} {label}</button>
//     )
// }

function ButtonEs6({label = 'Button',icon, customClass=''} : {label?: string, icon?: React.ReactNode, customClass?: string}){
  let [color,setColor]= React.useState(false);
    return (
    <button className={color ? `${styles[customClass]}` : `${styles.button}` } type='button'onClick={()=>{
        setColor(!color)
      }}>{icon ? icon : null} {label}</button>
    )
}


export default ButtonEs6