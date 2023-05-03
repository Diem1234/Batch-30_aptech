import React from 'react'
//import { Spin } from 'antd';
import { Outlet, Link } from "react-router-dom";

interface ProductType  {
 id: number;
 title: string;
 price: number;
 description: string;
 images: string[];
 creationAt: string;
 updatedAt: string;
 category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
 }
}

const GetProductList = () => {

    let [products, setProducts] = React.useState<[ProductType] | null>(null)
    let [loading, setLoading] =  React.useState(false);
    let [categoryId, setCategoryId] =  React.useState(0);

    React.useEffect(()=>{
        let fetchProduct = async ()=>{
            try {
                setLoading(true);
                let url = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=4' 
                const response = await fetch(url)
                let result = await response.json();

                console.log(result);
                setProducts(result)
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
            
            
        }

        fetchProduct();

    },[]);


  return (
    <div className='productlist'>
        {loading}
        {/* {loading && <Spin />} */}
        {products && products.length > 0 && products.map((item)=> {
            return (
                <li key={item.id} className='productlistitem'>
                   {/* <Link to={`/product/${item.id}`}> */}
                    <div className="photo"><img height={50} src={item.images[0]} alt="" /></div>
                    <div className='content'>
                        <h3>{item.title}</h3>
                        <div style={{color : "red"}}><strong> Price:</strong> {item.price}$</div>
                        <div>Description: {item.description}</div>
                        {/* </Link> */}
                    </div>
                </li>
            )
        })}
    </div>
  )
}

export default GetProductList