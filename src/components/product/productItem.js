import React from 'react'
import style from './product.module.scss'

function ProductItem(props) {
   return (
      <div className={style.product}>
         <img className={style.product__img} src={props.image} />
         <p className={style.product__title}>{props.name}</p>
      </div>
   )
}

export default ProductItem
