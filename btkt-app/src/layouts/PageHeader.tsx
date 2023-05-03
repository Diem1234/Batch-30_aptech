import React from 'react'
import HeaderLogo from '../compoments/HeaderLogo'
import HeaderNavigation from '../compoments/HeaderNavigation'
import HeaderNavigationItem from '../compoments/HeaderNavigationItem'
import ShoppingCart from '../compoments/ShoppingCart';
import { Outlet, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";


import { navs } from '../data/navigations';
const PageHeader = () => {
  return (
    <header>
      <div className="container">
          <div className="header-main d-flex">
              <HeaderLogo />
              <div className="header-right d-flex">
                <HeaderNavigation>
                  {navs.map(nav=> <HeaderNavigationItem key={nav.id} link={nav.link} label={nav.label} target={nav.target} />)}
                </HeaderNavigation>
               <ShoppingCart />
              <div className="carttwo"><FaBars /></div>
              </div>
          </div>
      </div>
      </header>
  )
}

export default PageHeader