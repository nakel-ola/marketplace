/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown } from "lucide-react";
import React from "react";

type Props = {};
export const ProductsCard = (props: Props) => {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-3 space-y-5 divide-y divide-gray-300 flex-1">
      {items.map(({ image, name, details, price, qty }, index) => (
        <div key={index} className="flex gap-3 pt-5">
          <div className="border border-gray-300 rounded-md h-[80px] w-[80px]">
            <img src={image} alt="" className="h-full w-full object-contain" />
          </div>
          <div className="space-y-2">
            <p className="text-dark text-base font-medium">{name}</p>
            <p className="text-gray-500">{details}</p>

            <div className="flex gap-3">
              <Button className="bg-white hover:bg-white/90 text-red">
                Remove
              </Button>
              <Button className="bg-white hover:bg-white/90 text-primary">
                Save for later
              </Button>
            </div>
          </div>

          <div className="ml-auto flex flex-col items-end">
            <p className="text-dark text-base font-medium">{price}</p>

            <button className="px-5 py-2 border border-gray-300 rounded-md flex mt-3">
              Qty: {qty}
              <ChevronDown className="ml-5 text-gray-500" />
            </button>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-between pt-5">
        <Button variant="gradient" className="flex ">
          <ArrowLeft className="mr-3" />
          Back to shop
        </Button>
        <Button className="bg-white hover:bg-white/90 text-primary">
          Remove all
        </Button>
      </div>
    </div>
  );
};

const items = [
  {
    image: "/images/b171e503e38e7b8c0a5fa03996d5d467.png",
    name: "T-shirts with multiple colors, for men and lady",
    details:
      "Size: medium, Color: blue,  Material: Plastic Seller: Artel Market",
    price: "$78.99",
    qty: 9,
  },
  {
    image: "/images/8e68b15c28eb29234224b8b2f71d5eb5.png",
    name: "T-shirts with multiple colors, for men and lady",
    details:
      "Size: medium, Color: blue,  Material: Plastic Seller: Artel Market",
    price: "$39.00",
    qty: 3,
  },
  {
    image: "/images/afe3483e736054358d53f2f8797b4546.png",
    name: "T-shirts with multiple colors, for men and lady",
    details:
      "Size: medium, Color: blue,  Material: Plastic Seller: Artel Market",
    price: "$170.50",
    qty: 1,
  },
];
