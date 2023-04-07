import React, { useState, useEffect } from 'react'
import style from './home.module.scss'
import { getProducts } from '../../services/api'
import ProductItem from '../../components/product/productItem'
import { Link } from 'react-router-dom'

function Home() {

   const [products, setProducts] = useState([])

   useEffect(() => {
      getProducts().then(res => setProducts(res))
   }, [])

   return (
      <div className={style.home}>
         {
            products.map(item =>
           <Link to={`/${item.id}`}> <ProductItem  image={item.colors[0].images[0]} name={item.name}/></Link>
               
            )
         }

      </div>
   )
}

export default Home
