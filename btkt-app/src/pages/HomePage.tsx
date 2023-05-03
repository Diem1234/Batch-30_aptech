import React from 'react'
import "../styles/global.css";
import "../styles/index.css";
import "../styles/responsive.css";
import { FaRegEnvelope } from "react-icons/fa";
import MainSection1 from '../compoments/MainSection1';
import MainSection2 from '../compoments/MainSection2';
import MainSection3 from '../compoments/MainSection3';
import MainSection4 from '../compoments/MainSection4/indext';
import ProductGallery from '../compoments/ProductGallery/ProductGallery';

const HomePage = () => {
  return (
    <main>
      <div className="container">
        <section style={{paddingTop : '20px'}}><ProductGallery /></section>
        <section style={{margin : '10px'}}>
          <MainSection1 />
        </section>
        <section className="section_two_wrapper">
          <MainSection2 />
        </section>
        <section style={{paddingTop : '20px'}}>
          <MainSection4 />
        </section> 
        <section style={{margin : '10px',paddingTop: '10px'}}>
          <MainSection3 />
        </section>
      </div>
    </main>
  )
}

export default HomePage