/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {};
export const SavedCard = (props: Props) => {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-3 my-5">
      <p className="text-xl text-dark font-semibold">Saved for later</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ name, image, price }, index) => (
          <div key={index} className={cn("flex gap-3 py-2 flex-col")}>
            <div
              className={cn(
                " shrink-0 rounded-md border border-gray-300 overflow-hidden h-[250px]"
              )}
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            <div className="">
              <p className="text-lg text-dark font-semibold">{price}</p>
              <p className="text-base font-normal text-gray-800">{name}</p>
              <Button className="bg-white hover:bg-white/90 text-primary mt-2">
                Move to cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const items = [
  {
    image: "/images/5b845d5b649289426578b53ebaef4c65.png",
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$99.50",
  },
  {
    image: "/images/iphone13.jpg",
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$99.50",
  },
  {
    image: "/images/e4b654e7de1ac596c31da4b9f1994793.png",
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$99.50",
  },
  {
    image: "/images/67d46067797d63f72c5d238bab2c834f.png",
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$99.50",
  },
];
