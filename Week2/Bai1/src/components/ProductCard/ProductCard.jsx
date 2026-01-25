import "../ProductCard/ProductCard.css";
import imgProduct from "../../assets/product.jpg";

function ProductCard() {
  return (
    <div className="product-card">
      <img
        className="product-image"
        src={imgProduct}
        alt="Product"
      />

      <h3 className="product-name">Tai nghe Bluetooth</h3>

      <p className="product-price">₫599.000</p>

      <button className="add-to-cart">
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
