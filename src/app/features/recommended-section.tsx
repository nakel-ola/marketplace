import React from "react";
import { ProductCard } from "./product-card";

type Props = {};
export const RecommendedSection = (props: Props) => {
  return (
    <div className="my-5 rounded-md px-5 lg:px-0">
      <p className="text-dark text-2xl font-semibold">Recommended items</p>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mt-5">
        {items.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const items = [
  {
    image: "/images/b171e503e38e7b8c0a5fa03996d5d467.png",
    name: "T-shirts with multiple colors, for men",
    price: "$10.30",
  },
  {
    image: "/images/18aa7b0da8ec069e90fab9443221e2f2.jpeg",
    name: "Jeans shorts for men blue color",
    price: "$10.30",
  },
  {
    image: "/images/fcc6274edfb7e97f682185ec460b6d4f.png",
    name: "Brown winter coat medium size",
    price: "$12.50",
  },
  {
    image: "/images/895e1e83befccaeafc962783f0de80c5.png",
    name: "Jeans bag for travel for men",
    price: "$34.00",
  },

  {
    image: "/images/fbdc1fec81bd703736016e62fddab16b.png",
    name: "Canon camera black, 100x zoom",
    price: "$9.99",
  },
  {
    image: "/images/db935c4b51e951193ddd1064f61e7b77.png",
    name: "Headset for gaming with mic",
    price: "$8.99",
  },
  {
    image: "/images/8e68b15c28eb29234224b8b2f71d5eb5.png",
    name: "Smartwatch silver color modern",
    price: "$10.30",
  },
  {
    image: "/images/1ebac249f8cba9ff49b0a3c5c89dfbc7.png",
    name: "Blue wallet for men leather metarfial",
    price: "$10.30",
  },
  {
    image: "/images/2.jpg",
    name: "T-shirts with blue color, unisex model",
    price: "$29.90",
  },
  {
    image: "/images/2 (1).jpg",
    name: "Armchair for Home and Office, Yellow color",
    price: "$790.50",
  },
];
