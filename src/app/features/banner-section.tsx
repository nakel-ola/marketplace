/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type Props = {};
export const BannerSection = (props: Props) => {
  return (
    <div className=" lg:bg-white lg:border border-gray-300 lg:shadow-sm  lg:my-5 rounded-md lg:py-3 lg:px-5 flex gap-5 lg:h-[433px]">
      <CategoriesCard />

      <div className="flex-1 h-[182.222px] lg:h-full relative">
        <img
          src="/images/b9d77e50133ea130b3270887efd96310.png"
          alt=""
          className="h-full w-full object-cover relative"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-dark/10 px-5 py-5 lg:px-10 lg:py-16">
          <p className="text-3xl text-dark">Latest trending</p>
          <p className="text-3xl text-dark font-bold my-1.5">
            Electronic items
          </p>
          <Button className="bg-white hover:bg-white/90 text-black my-5">
            Learn more
          </Button>
        </div>
      </div>

      <div className="space-y-2 hidden lg:block">
        <UserCard />

        <div className="bg-orange rounded-md h-[95px] w-[230px] p-3">
          <p className="text-white text-base">
            Get US $10 off <br /> with a new <br /> supplier
          </p>
        </div>
        <div className="bg-[#55BDC3] rounded-md h-[95px] w-[230px] p-3">
          <p className="text-white text-base">
            Send quotes with <br /> supplier <br /> preferences
          </p>
        </div>
      </div>
    </div>
  );
};

const CategoriesCard = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="shrink-0 w-[250px] space-y-1.5 hidden lg:block">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "py-2 px-2 rounded-md cursor-pointer",
            index === active ? "bg-primary-50" : ""
          )}
          onClick={() => setActive(index)}
        >
          <p className="text-dark font-medium text-base">{item}</p>
        </div>
      ))}
    </div>
  );
};

const UserCard = () => {
  return (
    <div className="w-[230px] bg-primary-50 rounded-md space-y-3 flex flex-col p-2">
      <div className="flex items-center gap-2">
        <img
          src="/images/Avatar.jpg"
          alt=""
          className="h-11 w-11 rounded-full"
        />

        <div className="">
          <p className="text-dark text-base font-normal">
            Hi, user <br /> let’s get stated
          </p>
        </div>
      </div>

      <Button variant="gradient">Join now</Button>
      <Button className="bg-white hover:bg-white/90 text-primary">
        Log in
      </Button>
    </div>
  );
};

const items = [
  "Automobiles",
  "Clothes and wear",
  "Home interiors",
  "Computer and tech",
  "Tools, equipments",
  "Sports and outdoor",
  "Animal and pets",
  "Machinery tools",
  "More category",
];
