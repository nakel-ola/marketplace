/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  name: string;
  image: string;
  discount: string;
};
export const DiscountProductCard = (props: Props) => {
  const { discount, image, name } = props;
  return (
    <div className="flex flex-col gap-2 items-center justify-center px-5">
      <div className="w-[140px] h-[140px] flex items-center justify-center">
        <img src={image} alt="" className="h-full w-full object-contain" />
      </div>

      <p className="text-dark text-base font-normal">{name}</p>
      <div className="p-[3px_13px_4px_13px] bg-red-100 rounded-full ">
        <p className="text-red  text-sm font-medium items-center">{discount}</p>
      </div>
    </div>
  );
};
