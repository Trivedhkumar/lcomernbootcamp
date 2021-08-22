import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/CartHelper";
import StripeCheckoutComponent from "./StripeCheckoutComponent";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);
  const loadAllProducts = (products) => {
    return (
      <div>
        <h2>This section is to load products</h2>
        {products.map((product, i) => (
          <Card
            key={i}
            product={product}
            removeFromCart={true}
            addToCart={false}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };

  const loadCheckout = () => {
    return (
      <div>
        <h2>This section is for checkouts</h2>
      </div>
    );
  };

  return (
    <Base title="Cart Page" description="Welcome to the Cart ">
      <div className="row text-center">
        <div className="col-6">
          {products.length > 0 ? (
            loadAllProducts()
          ) : (
            <h3>No products in cart </h3>
          )}
        </div>
        <div className="col-6">
          <StripeCheckoutComponent products={products} setReload={setReload} />
        </div>
      </div>
    </Base>
  );
}
