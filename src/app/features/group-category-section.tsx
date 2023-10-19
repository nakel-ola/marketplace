/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  image: string;
  title: string;
  bgColor: string;
  items: {
    name: string;
    price: string;
    image: string;
  }[];
};
export const GroupCategorySection = (props: Props) => {
  const { image, title, items, bgColor } = props;
  return (
    <section className="bg-white lg:border border-gray-300 lg:shadow-sm my-5 rounded-md  flex flex-col lg:flex-row overflow-hidden lg:h-[236px]">
      <div className="lg:w-[279px] h-[180px] lg:h-full shrink-0 relative">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover relative"
        />

        <div
          className="absolute top-0 left-0 w-full h-full p-6 "
          style={{ backgroundColor: bgColor }}
        >
          <p className="text-xl text-dark font-semibold max-w-[65%]">{title}</p>

          <Button className="bg-white hover:bg-white/90 text-dark mt-5">
            Source now
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-1 divide-y-1 divide-gray-300">
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ name, image, price }: Props["items"][0]) => {
  return (
    <div className="flex w-full p-5 gap-2">
      <div className="">
        <p className="text-dark text-base font-normal whitespace-nowrap">
          {name}
        </p>
        <p className="text-gray-500 text-xs font-normal py-2">
          From <br /> USD {price}
        </p>
      </div>

      <div className="h-[82px] w-[82px] ml-auto mt-auto">
        <img src={image} alt="" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};
