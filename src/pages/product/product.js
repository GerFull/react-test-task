import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct, getSizes } from '../../services/api'
import styles from './product.module.scss'

function Product() {

   const { id } = useParams()
   const [product, setProduct] = useState()
   const [sizes, setSizes] = useState([])
   const [color, setColor] = useState()
   const [currentImg, setCurrentImg] = useState()
   const [currentSize, setCurrentSize] = useState()

   useEffect(() => {
      getProduct(id).then(res => {
         setProduct(res)
         setColor(res?.colors[0])
         setCurrentImg(res?.colors[0].images[0])
      })
      getSizes().then(res => setSizes(res))
   }, [])

   const nextImg = (img) => {
      const indexImg = color.images.indexOf(img)
      if (indexImg !== color.images.length - 1) {
         setCurrentImg(color.images[indexImg + 1])
      }

   }


   const prevImg = (img) => {
      const indexImg = color.images.indexOf(img)
      if (indexImg !== 0) {
         setCurrentImg(color.images[indexImg - 1])
      }
   }

   const changeColor = (item) => {
      setColor(item)
      setCurrentImg(item?.images[0])
      setCurrentSize('')
   }
   // color?.sizes?.includes(item.id)
   return (
      

         <div className={styles.product}>

            <div>
               <img className={styles.product__img} src={currentImg} />
               <div className={styles.product__changeImg}>
                  <p onClick={() => prevImg(currentImg)} >🠔</p>
                  <p onClick={() => nextImg(currentImg)}>🠖</p>
               </div>
            </div>

            <div>

               <div className={styles.product__size_container}>
                  {sizes.map(item => {
                     return item === currentSize ?
                        <div className={styles.product__size_active}>{item.label}</div>
                        : color?.sizes?.includes(item.id)
                           ? <div onClick={() => setCurrentSize(item)} className={styles.product__size}>{item.label} </div>
                           : <div className={styles.product__size_disable}>{item.label}</div>
                  }
                  )}
               </div>

               <div className={styles.product__color_container}>
                  {
                     product?.colors.map(item => {
                        return item === color ?
                           <div className={styles.product__color_active}>{item?.name}</div>
                           : <div className={styles.product__color} onClick={() => changeColor(item)}>{item?.name}</div>
                     }
                     )
                  }
               </div>
            </div>
         </div>
   )
}

export default Product
