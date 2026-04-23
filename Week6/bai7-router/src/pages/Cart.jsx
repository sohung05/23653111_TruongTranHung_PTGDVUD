import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartCount, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  if (cartCount === 0) {
    return (
      <div className="container" style={{ textAlign: 'center' }}>
        <h2>Cart is Empty</h2>
        <Link to="/products" className="btn btn-primary">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginBottom: '1rem' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  style={{ width: '50px' }}
                />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => removeFromCart(item.id)} className="btn btn-outline" style={{ color: 'red' }}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ textAlign: 'right' }}>
        <h2>Total: ${cartTotal.toFixed(2)}</h2>
        <button onClick={() => { alert('Order placed!'); clearCart(); navigate('/'); }} className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
