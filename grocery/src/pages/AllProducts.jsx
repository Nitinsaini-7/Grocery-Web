import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }else{
        setFilteredProducts(products);
    }
  }, [products, searchQuery]);
  return (
    <div className="">
      <div>
        <p className=" text-3xl font-medium">All Products</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 place-items-center">
        {
            filteredProducts.filter((product) => product.inStock).map((product, index) => (
                <div>
                    <ProductCard product={product}/>
                </div>
            ))
        }
      </div>
     
    </div>
  );
};

export default AllProducts;
