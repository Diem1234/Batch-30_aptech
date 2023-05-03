import React from 'react'
import FooterChild from '../compoments/FooterChild'
import { FooterChildItem } from '../compoments/FooterChildItem'
import Attibutes from '../compoments/Attibutes'
import "../styles/responsive.css";
const PageFooter = () => {
  return (
    <footer>
      <div className="container">
        <div className="f-flex">
          <FooterChild customClass='footer-col' lable='ABOUT US'>
              <FooterChildItem lable='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores hic minus eaque, doloremque facere, dicta placeat nihil ut sint nostrum aperiam iusto recusandae est vel ullam repellendus voluptas molestiae nemo.'/>
          </FooterChild>
          <FooterChild customClass='footer-col' lable='CONTACT INFO'>
              <FooterChildItem customclass='customli' value='Address:' lable='123 Street Name, City, England'/>
              <FooterChildItem customclass='customli' value='Phone:' lable='(123) 456-7890'/>
              <FooterChildItem customclass='customli' value='Email:' lable='mail@example.com'/>
              <FooterChildItem customclass='customli' value='Working Days/Hours:' lable='Mon - Sun / 9:00 AM - 8:00 PM'/>
          </FooterChild>
          <FooterChild customClass='footer-col' lable='CUSTOMER SERVICE'>
              <FooterChildItem lable='Help & FAQs'/>
              <FooterChildItem lable='Order Tracking'/>
              <FooterChildItem lable='Shipping & Delivery'/>
              <FooterChildItem lable='Orders History'/>
              <FooterChildItem lable='Advanced Search'/>
              <FooterChildItem lable='Corporate Sales'/>
              <FooterChildItem lable='Privacy'/>
          </FooterChild>
          <FooterChild customClass='footer-col' lable='POPPULAR TAGS'>
              <Attibutes/>
          </FooterChild>
        </div>
      </div>
    </footer>
  )
}

export default PageFooter