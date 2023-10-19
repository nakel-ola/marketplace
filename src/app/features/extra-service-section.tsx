/* eslint-disable @next/next/no-img-element */
import { Inventory, Search, Security, Send } from "@/components/icons";
import React from "react";

type Props = {};
export const ExtraServiceSection = (props: Props) => {
  return (
    <div className="my-5 rounded-md px-5 lg:px-0">
      <p className="text-dark text-2xl font-semibold">Our extra services</p>
      <div className="grid lg:grid-cols-4 gap-5 mt-5">
        {items.map(({ Icon, image, title }, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-md overflow-hidden"
          >
            <div className="h-[120px] relative">
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover relative"
              />

              <div className="absolute right-5 -bottom-6 h-[55px] w-[55px] rounded-full border border-white bg-[#D1E7FF] flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
            </div>
            <div className="w-[70%] p-2">
              <p className="text-dark text-base font-medium">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const items = [
  {
    image: "/images/services-1.jpg",
    title: "Source from Industry Hubs",
    Icon: Search,
  },
  {
    image: "/images/services-2.jpg",
    title: "Customize Your Products",
    Icon: Inventory,
  },
  {
    image: "/images/services-3.jpg",
    title: "Fast, reliable shipping by ocean or air",
    Icon: Send,
  },
  {
    image: "/images/services-4.jpg",
    title: "Product monitoring and inspection",
    Icon: Security,
  },
];
