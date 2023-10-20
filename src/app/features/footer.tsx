/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import {
  Apple,
  ExpandMore,
  Facebook,
  GooglePlayStore,
  Instagram,
  LinkedIn,
  Twitter,
  Youtube,
} from "../../components/icons";
import { Button } from "../../components/ui/button";

type Props = {};
export const Footer = (props: Props) => {
  return (
    <footer className="">
      {/* company */}

      <div className="bg-white">
        <div className="px-5 lg:px-10 page-center py-10 flex flex-col lg:flex-row justify-between gap-10">
          <div className="space-y-4 shrink-0">
            <Link href="/" className="w-[150px] h-[46px]">
              <img src="/logo-colored.svg" alt="" className="" />
            </Link>

            <p className="">
              Best information about the company <br /> gies here but now lorem
              ipsum is
            </p>

            <div className="flex space-x-5">
              {socials.map(({ Icon, href }, index) => (
                <Link key={index} href={href}>
                  <Icon className="text-gray-400 h-8 w-8" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-5 grid-cols-2 lg:grid-cols-5 mt-10 lg:mt-0">
            {navigations.map(({ items, title }, index) => (
              <div key={index} className="flex flex-col">
                <p className="text-base font-medium pb-3">{title}</p>
                {items.map(({ label, href }, i) => (
                  <Link key={i} href={href} className="text-gray-500 py-2">
                    {label}
                  </Link>
                ))}
              </div>
            ))}

            <div className="flex flex-col">
              <p className="text-base font-medium pb-3">Get app</p>

              <DownloadButton
                Icon={Apple}
                title="Download on the"
                storeName="App Store"
              />
              <DownloadButton
                Icon={GooglePlayStore}
                title="GET IT ON"
                storeName="Google Play"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 lg:px-10 page-center flex justify-between py-8">
        <p className="">© 2023 Ecommerce. </p>

        <div className="flex items-center space-x-2">
          <img
            src="/images/972e45d68802086bd84cb513e501f747.png"
            alt=""
            className="w-[22px] h-[16px]"
          />
          <p className="">English</p>
          <ExpandMore className="h-6 w-6 text-gray-500" />
        </div>
      </div>
    </footer>
  );
};

type DownloadButtonProps = {
  Icon: (props: any) => React.JSX.Element;
  title: string;
  storeName: string;
};

const DownloadButton = ({ Icon, storeName, title }: DownloadButtonProps) => {
  return (
    <div className="flex items-center p-1 px-4 gap-3 rounded-lg bg-dark my-2 cursor-pointer">
      <Icon className="text-white h-6 w-6 shrink-0" />
      <div className="flex flex-col items-start">
        <span className="text-white text-[12px] whitespace-nowrap">
          {title}
        </span>
        <span className="text-white font-bold text-sm">{storeName}</span>
      </div>
    </div>
  );
};

const socials = [
  {
    Icon: Facebook,
    href: "https://facebook.com",
  },
  {
    Icon: Twitter,
    href: "https://twitter.com",
  },
  {
    Icon: LinkedIn,
    href: "https://linkedin.com",
  },
  {
    Icon: Instagram,
    href: "https://instagram.com",
  },
  {
    Icon: Youtube,
    href: "https://youtube.com",
  },
];

const navigations = [
  {
    title: "About",
    items: [
      {
        label: "About Us",
        href: "#",
      },
      {
        label: "Find store",
        href: "#",
      },
      {
        label: "Categories",
        href: "#",
      },
      {
        label: "Blogs",
        href: "#",
      },
    ],
  },
  {
    title: "Partnership",
    items: [
      {
        label: "About Us",
        href: "#",
      },
      {
        label: "Find store",
        href: "#",
      },
      {
        label: "Categories",
        href: "#",
      },
      {
        label: "Blogs",
        href: "#",
      },
    ],
  },
  {
    title: "Information",
    items: [
      {
        label: "Help Center",
        href: "#",
      },
      {
        label: "Money Refund",
        href: "#",
      },
      {
        label: "Shipping",
        href: "#",
      },
      {
        label: "Contact us",
        href: "#",
      },
    ],
  },
  {
    title: "For users",
    items: [
      {
        label: "Login",
        href: "#",
      },
      {
        label: "Register",
        href: "#",
      },
      {
        label: "Settings",
        href: "#",
      },
      {
        label: "My Orders",
        href: "#",
      },
    ],
  },
];
