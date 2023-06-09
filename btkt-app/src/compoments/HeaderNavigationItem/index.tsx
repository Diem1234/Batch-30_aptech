import React from 'react'
import { Outlet, Link } from "react-router-dom";

const HeaderNavigationItem = ({link='', label='', target='_self'}: {link: string, label: string, target?: string}) => {
  return (
    <li><Link to={link} target={target !== '' ? target: ''}>{label}</Link>
    </li>
    
  )
}

export default HeaderNavigationItem