import Products from "@/components/products/Products";
import React from "react";

const Upvotes = () => {
  return (
    <div className="p-5">
      {true ? (
        <div className="p-4 text-center">No Upvotes yet</div>
      ) : (
        <Products />
      )}
    </div>
  );
};

export default Upvotes;
