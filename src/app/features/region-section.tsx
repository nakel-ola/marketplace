/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};
export const RegionSection = (props: Props) => {
  return (
    <div className="my-5 rounded-md px-5 lg:px-0">
      <p className="text-dark text-2xl font-semibold">Suppliers by region</p>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mt-5">
        {items.map(({ image, title, subtitle }, index) => (
          <div key={index} className="flex items-center">
            <img src={image} alt="" className="w-[28px] h-[20px] shrink-0" />

            <div className="ml-2">
              <p className="text-base text-dark font-normal">{title}</p>
              <p className="text-xs font-normal">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const items = [
  {
    image: "/images/7ed6e6d0ff7b7df11d34540f89efa0eb.png",
    title: "Arabic Emirates",
    subtitle: "shopname.ae",
  },
  {
    image: "/images/79dd259e5237ee572632324634be943a.png",
    title: "Australia",
    subtitle: "shopname.ae",
  },
  {
    image: "/images/972e45d68802086bd84cb513e501f747.png",
    title: "United States",
    subtitle: "shopname.ae",
  },
  {
    image: "/images/1de5cb1fee9e6089b52ad036ebe980b9.png",
    title: "Russia",
    subtitle: "shopname.ae",
  },
  {
    image: "/images/292fe0d58fea5b0a42c117e22f308f6e.png",
    title: "Italy",
    subtitle: "shopname.ae",
  },

  {
    image: "/images/40758d1d058d5256db7f52ea7665f723.png",
    title: "Denmark",
    subtitle: "shopname.ae",
  },
  {
    image: "/images/ec598cc24c50c037a822568c77e6eb7d.png",
    title: "France",
    subtitle: "shopname.ae",
  },
  {
    image: "/images/7ed6e6d0ff7b7df11d34540f89efa0eb.png",
    title: "Arabic Emirates",
    subtitle: "shopname.ae",
  },
  {
    image: "/images/ff3006f5d8cc40c56c9e21eb9661484c.png",
    title: "China",
    subtitle: "shopname.ae",
  },
  {
    image: "/images/0abefaab438bf2b6aab101ac843c25bd.png",
    title: "Great Britain",
    subtitle: "shopname.ae",
  },
];
