import React from "react";
import { API } from "../../backend";

export default function ImageHelper({ product }) {
  let imageUrl = product
    ? `${API}/product/photo/${product._id}`
    : "https://source.unsplash.com/random/800x600";
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageUrl}
        alt="pic of product"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
}
