import React from 'react'
import Header from '../components/layouts/Header'
import Main from '../components/layouts/Main'
import Footer from '../components/layouts/Footer'
import Parameter from '../components/Parameter'
import PrameterItem from '../components/Parameter/PrameterItem'
import {parmeters} from '../data/parameter';
import ButtonEs6 from '../components/ButtonEs6';
import ProductPrice from '../components/ProductPrice'
import ProductGallery from '../components/ProductGallery'
import AccessoriesRelate from '../components/AccessoriesRelate'
import Attibutes from '../components/Attibutes'
import { FaHeart,FaCalendarCheck } from "react-icons/fa";
import Folicy from '../components/Folicy'
const ProductPage = () => {
  return (
    <>
       <Header />
       <Main>
          <div className="main-wrapper d-flex">
            <div className="main-content">
                <div className='product_info_wrapper d-flex'>
                    <div className="gallery">
                       {/* <ProductGallery /> */}
                    </div>
                    <div className="product_info">
                        <h1 className='section_title'>Samsung Galaxy S21 FE 5G (8GB/128GB)</h1>
                        <ProductPrice price={16990000} salePrice={12490000} />
                        <Attibutes/>
                        <Folicy icon={<FaCalendarCheck/>} label=' Bộ sản phẩm gồm:' text='Hộp, Sách hướng dẫn, Cáp, Cây lấy sim'/>
                        <Folicy icon={<FaCalendarCheck/>} label=' Bộ sản phẩm gồm:' text='Hộp, Sách hướng dẫn, Cáp, Cây lấy sim'/>
                        <Folicy icon={<FaCalendarCheck/>} label=' Bộ sản phẩm gồm:' text='Hộp, Sách hướng dẫn, Cáp, Cây lấy sim'/>
                        <div className="product-actions d-flex">

                        <ButtonEs6  label='Thêm vào giỏ hàng' icon={<FaHeart/>}/>
                        <ButtonEs6 label='Yêu thích' icon={<FaHeart/>} customClass='button-dark' />
                        </div>
                    </div>

                </div>
                <AccessoriesRelate />
            </div>
            <div className="sidebar">
              <Parameter>
                  {parmeters.map(item => <PrameterItem key={item.id} label={item.key} value={item.value} />)}
              </Parameter>
            </div>
          </div>
         
       </Main>
       <Footer />
    </>
  )
}

export default ProductPage