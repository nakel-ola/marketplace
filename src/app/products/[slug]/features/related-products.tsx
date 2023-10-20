import React from "react";
import { ProductCard } from "./product-card";

type Props = {};
export const RelatedProducts = (props: Props) => {
  return (
    <div className="bg-white border border-gray-300 rounded-md my-2 p-3">
      <p className="text-dark text-xl font-semibold py-2">Related products</p>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} isColumn />
        ))}
      </div>
    </div>
  );
};

const products = [
  {
    image: "/images/895e1e83befccaeafc962783f0de80c5.png",
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
  },
  {
    image: "/images/e4b654e7de1ac596c31da4b9f1994793.png",
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
  },
  {
    image: "/images/db935c4b51e951193ddd1064f61e7b77.png",
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
  },
  {
    image: "/images/fbdc1fec81bd703736016e62fddab16b.png",
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
  },
  {
    image: "/images/b66e289400004efec8d3c212c576efd7.png",
    name: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
  },
];
