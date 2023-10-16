/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import {
  Favorite,
  FavoriteFill,
  Message,
  MessageFill,
  Person,
  PersonFill,
  ShoppingCartFill,
} from "./icons";
import { SearchBar } from "./search-bar";

type Props = {};
export const Header = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="w-full page-center px-5  lg:px-10 py-3 flex justify-between items-center">
        <Link href="/" className="w-[150px] h-[46px]">
          <img src="/logo-colored.svg" alt="" className="" />
        </Link>

        <SearchBar />

        <div className="flex gap-5">
          {items.map(({ Icon, label }, index) => (
            <button
              key={index}
              className="text-gray-500 flex items-center justify-center flex-col"
            >
              <Icon className="h-[20px] w-[20px]" />
              <span className="text-xs">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const items = [
  {
    Icon: PersonFill,
    label: "Profile",
  },
  {
    Icon: MessageFill,
    label: "Message",
  },
  {
    Icon: FavoriteFill,
    label: "Orders",
  },
  {
    Icon: ShoppingCartFill,
    label: "My Cart",
  },
];
