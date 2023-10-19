/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  image: string;
  name: string;
  price: string;
};
export const ProductCard = (props: Props) => {
  const { image, name, price } = props;
  return (
    <div className="bg-white border border-gray-300 rounded-md p-3">
      <div className="h-[200px]">
        <img src={image} alt="" className="h-full w-full object-contain" />
      </div>

      <p className="text-base font-medium text-dark">{price}</p>
      <p className="text-base font-normal text-gray-500">{name}</p>
    </div>
  );
};
