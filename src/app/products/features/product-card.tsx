/* eslint-disable @next/next/no-img-element */
"use client";
import { Favorite, FavoriteFill, StarFill } from "@/components/icons";
import { RatingCard } from "@/components/rating-card";
import { slugify } from "@/lib/slugify";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { View } from ".";

type Props = {
  view: View;
  image: string;
  name: string;
  price: string;
  discountPrice?: string;
  isShippingFree: boolean;
  description: string;
  totalOrder: number;
  rating: number;
};
export const ProductCard = (props: Props) => {
  const {
    image,
    name,
    price,
    view,
    totalOrder,
    isShippingFree,
    description,
    discountPrice,
    rating,
  } = props;

  const router = useRouter();

  return (
    <div
      className={cn(
        "bg-white border border-gray-300 rounded-md p-3 flex flex-col  gap-3",
        view === "grid-view" ? "flex-col" : "lg:flex-row"
      )}
    >
      <div
        className={cn(
          "h-[200px] shrink-0",
          view === "grid-view" ? "" : "lg:w-[180px]"
        )}
      >
        <img src={image} alt="" className="h-full w-full object-contain" />
      </div>

      {/* list view */}

      <div
        className={cn(
          "flex-1 pr-3 py-3 flex justify-between",
          view === "grid-view" ? "hidden" : ""
        )}
      >
        <div className="">
          <Link href={`/products/${slugify(name)}`}>
            <p className="text-dark text-base font-medium">{name}</p>
          </Link>
          <div className="flex gap-3 items-center">
            <p className="text-dark text-xl font-semibold pt-3">{price}</p>
            {discountPrice ? (
              <del className="text-gray-500 text-base font-semibold pt-3">
                {discountPrice}
              </del>
            ) : null}
          </div>

          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-2">
              <RatingCard className="" active={4} />
              <p className="text-orange text-base font-normal">{rating}</p>
            </div>

            <span className="h-2 w-2 rounded-full bg-gray-300"></span>

            <p className="text-gray-500 text-base font-normal">
              {totalOrder} orders
            </p>

            {isShippingFree ? (
              <>
                <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                <p className="text-green text-base font-normal">
                  Free Shipping
                </p>
              </>
            ) : null}
          </div>

          <p className="text-gray-600 text-base font-normal pt-3">
            {description}
          </p>

          <p className="text-primary text-base font-medium pt-3">
            View details
          </p>
        </div>
        <FavoriteButton />
      </div>

      {/* grid view */}
      <div
        className={cn("gap-3 w-full p-2", view === "list-view" ? "hidden" : "")}
      >
        <div className="flex items-center justify-between w-full">
          <div className="">
            <div className="flex items-center gap-3">
              <p className="text-dark text-xl font-semibold pt-3">{price}</p>
              {discountPrice ? (
                <del className="text-gray-500 text-base font-normal pt-3">
                  {discountPrice}
                </del>
              ) : null}
            </div>

            <div className="flex items-center gap-2 mt-2">
              <RatingCard className="" active={4} size="sm" />
              <p className="text-orange text-base font-normal">{rating}</p>
            </div>
          </div>

          <FavoriteButton />
        </div>
        <p className="text-gray-800 text-base font-normal mt-2">{name}</p>
      </div>
    </div>
  );
};

const FavoriteButton = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsFavourite(!isFavourite)}
      className="h-[40px] w-[40px] rounded-md border border-gray-300 [box-shadow:_0px_1px_2px_0px_rgba(56,_56,_56,_0.08)] flex items-center justify-center shrink-0"
    >
      <FavoriteFill
        className={cn(
          "h-6 w-6",
          isFavourite ? "text-primary" : "text-gray-300"
        )}
      />
    </button>
  );
};
