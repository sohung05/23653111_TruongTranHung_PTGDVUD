import React, { useState, useMemo } from "react";
import products from "../data/products";

function ProductFilter() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  console.time("Render with useMemo");

  const filteredProducts = useMemo(() => {
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        p.price >= minPrice &&
        p.price <= maxPrice
    );
  }, [search, minPrice, maxPrice]);

  const totalPrice = useMemo(() => {
    return filteredProducts.reduce((sum, p) => sum + p.price, 0);
  }, [filteredProducts]);

  console.timeEnd("Render with useMemo");

  return (
    <div>
      <h2>Product Filter</h2>

      <div>
        <input
          placeholder="Search name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>
        <input
          type="number"
          placeholder="Min price"
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
      </div>

      <div>
        <input
          type="number"
          placeholder="Max price"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>

      <ul>
        {filteredProducts.slice(0, 20).map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>

      <p>Total price: {totalPrice}</p>
    </div>

  );
}

export default ProductFilter;
