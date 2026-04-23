function Orders() {
  const orders = [
    { id: 1, product: 'Iphone 15', price: '$999', status: 'Delivered' },
    { id: 2, product: 'Samsung Galaxy', price: '$799', status: 'Shipped' },
    { id: 3, product: 'Laptop Dell', price: '$1299', status: 'Processing' }
  ]

  return (
    <div className="content-section">
      <h2>Orders</h2>
      <p>Your order history</p>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.product}</td>
              <td>{order.price}</td>
              <td className={`status ${order.status.toLowerCase()}`}>
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Orders
