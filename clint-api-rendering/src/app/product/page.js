"use client"
import ProductList from '@/Components/ProductList';
import React, { useEffect, useState } from 'react'

const Product = () => {
    const [data,setData] = useState([]);

    const getData =async()=>{
        let getData = await fetch("https://fakestoreapi.com/products");
        getData =  await getData.json();
        setData(getData)
    };

 // console.log(data)


    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
        {
           data.map((item)=>(
            <ProductList key={item.id} title={item.title} price={item.price}  category={item.category}/>
           ))
        }
    </div>
  )
}

export default Product