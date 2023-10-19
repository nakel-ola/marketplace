"use client";

import React, { useEffect, useRef, useState } from "react";
import { DiscountProductCard } from "./discount-product-card";

type Props = {};
export const DiscountSection = (props: Props) => {
  return (
    <div className="lg:bg-white lg:border border-gray-300 lg:shadow-sm  my-5 rounded-md lg:py-5 lg:px-8 flex flex-col lg:flex-row gap-5 divide-x-1 divide-gray-300">
      {/* countdown timer */}
      <CountdownCard />

      {/* product list */}

      <div className="flex justify-between divide-x-1 divide-gray-300 h-[235px] overflow-x-scroll lg:overflow-clip">
        {products.map((product, index) => (
          <DiscountProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

const today = new Date();

const nextFourDays = new Date(today.setDate(today.getDate() + 4));

const COUNTDOWN_FROM = nextFourDays.toLocaleDateString();

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const CountdownCard = () => {
  const intervalRef = useRef<any>(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };
  const countDown = {
    Days: remaining.days,
    Hour: remaining.hours,
    Min: remaining.minutes,
    Sec: remaining.seconds,
  };
  return (
    <div className="lg:pr-8 flex lg:flex-col justify-between lg:justify-start px-5 lg:px-0 items-center lg:items-start">
      <div className="">
        <p className="text-xl font-semibold text-dark">Deals and offers</p>
        <p className="text-base text-gray-500">Hygiene equipments</p>
      </div>

      <div className="flex gap-2 mt-4">
        {Object.entries(countDown).map((item, index) => (
          <div
            key={index}
            className="w-[45px] h-[50px] bg-gray-800 rounded flex flex-col items-center justify-center"
          >
            <p className="text-base font-bold text-white">{item[1]}</p>
            <p className="text-white text-xs font-normal">{item[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const products = [
  {
    name: "Smart watches",
    discount: "-25%",
    image: "/images/e4b654e7de1ac596c31da4b9f1994793.png",
  },
  {
    name: "Laptops",
    discount: "-15%",
    image: "/images/67d46067797d63f72c5d238bab2c834f.png",
  },
  {
    name: "GoPro cameras",
    discount: "-40%",
    image: "/images/2c0a4a3071479d3ea04dbef308c19301.png",
  },
  {
    name: "Headphones",
    discount: "-25%",
    image: "/images/7844418a11051c24070081697c1e9a58.png",
  },
  {
    name: "Canon camreras",
    discount: "-25%",
    image: "/images/26e944afe4e9b344a9d08d2cdf13f6ac.png",
  },
];
