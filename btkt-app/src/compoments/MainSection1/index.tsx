import React from 'react'
import { images } from '../../data/images'
import Images from '../Images'
import Section_desc from '../Section_desc'
import { FaPhoneAlt } from "react-icons/fa";

const MainSection1 = () => {
  return (
    <div className="sections section_one" style={{display : 'flex'}}>
        <div className="section_one_img" style={{display : 'flex-full'}}>
          <Images link='./images/category-img-1.jpg' lable='category img'/>
        </div>
        <div className="section_one_content" style={{display : 'flex-full'}}>
          <div className="section_subtitle">Our Services</div>
          <h2 className="section_title">Responsive & Professional</h2>
          <Section_desc lable='We go the extra mile on every project. The value we provide
              clients comes from our level of skill and performance, as well as
              our knowledge and professionalism. Rest assured, we put the same
              level of energy into every project we take on.'/>
          <div className="section_about_hotline">
              <strong className="hotline_title">Call us today</strong>
              <strong className="hotline_number"><FaPhoneAlt/> 1900-111000</strong>
              <p className="section_desc">We're available 24/7, 365 days a year.</p>
          </div>
        </div>
    </div>
  )
}

export default MainSection1