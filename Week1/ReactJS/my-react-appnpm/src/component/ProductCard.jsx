import React from 'react'
import "./ProductCard.css";
import productImg from "../assets/product.jfif";


const ProductCard = () => {
  return (
     <div className="product-card">
      <img 
      className="product-image"
        src={productImg}
        alt="Áo thun nam" />


      <h3 className="product-name">Áo thun nam</h3>

      <p className="product-price">250.000đ</p>

      <button className="add-button">Add to cart</button>
    </div>
  )
}

export default ProductCard
