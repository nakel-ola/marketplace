/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  image: string;
  name: string;
  price: string;
  isColumn?: boolean;
};
export const ProductCard = (props: Props) => {
  const { image, name, price, isColumn = false } = props;
  return (
    <div className={cn("flex gap-3 py-2", isColumn ? "flex-col" : "")}>
      <div
        className={cn(
          " shrink-0 rounded-md border border-gray-300 overflow-hidden",
          isColumn ? "h-[250px]" : "h-[80px] w-[80px]"
        )}
      >
        <img src={image} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="">
        <p className="text-base font-normal text-dark">{name}</p>
        <p className="text-base font-normal text-gray-500">{price}</p>
      </div>
    </div>
  );
};
