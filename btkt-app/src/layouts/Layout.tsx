import React from 'react'
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'
import { Outlet, Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/index.css";
import "../styles/responsive.css";

const Layout = () => {
  return (
    <>
        <PageHeader />
        <main>
            <Outlet/>
        </main>
        <PageFooter />
    </>
    
  )
}

export default Layout