/* eslint-disable @next/next/no-img-element */
import { Checkmark, Favorite, Language, Security } from "@/components/icons";
import { RatingCard } from "@/components/rating-card";
import { Button } from "@/components/ui/button";
import product from "@/data/product.json";
import React from "react";

type Props = {};
export const ProductDetails = (props: Props) => {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-3 flex flex-col lg:flex-row my-5">
      <ImageCard />

      <DetailsCard />

      <SupplierCard />
    </div>
  );
};

const ImageCard = () => {
  return (
    <div className="">
      {/* large image */}

      <div className="h-[380px] lg:w-[380px] shrink-0 border border-gray-300 rounded-md overflow-hidden">
        <img
          src={product.images[0]}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex gap-3 mt-5">
        {product.images.map((image, index) => (
          <div
            key={index}
            className="h-[56px] w-[56px] overflow-hidden rounded-md border border-gray-300 cursor-pointer"
          >
            <img src={image} alt="" className="h-full w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

const DetailsCard = () => {
  const {
    stock,
    name,
    rating,
    type,
    material,
    design,
    customization,
    warranty,
    protection,
  } = product;
  return (
    <div className="mt-5 lg:mt-0 lg:mx-5">
      {stock > 0 ? (
        <div className="flex items-center">
          <Checkmark className="text-green h-5 w-5" />
          <p className="text-green text-base font-normal">In stock</p>
        </div>
      ) : null}

      <p className="text-dark text-xl font-semibold py-1">{name}</p>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <RatingCard className="" active={4} size="sm" />
          <p className="text-orange text-base font-normal">{rating}</p>
        </div>

        <span className="h-2 w-2 rounded-full bg-gray-300"></span>

        <p className="text-gray-500 text-normal font-normal">32 reviews</p>
        <span className="h-2 w-2 rounded-full bg-gray-300"></span>

        <p className="text-gray-500 text-normal font-normal">154 sold</p>
      </div>

      {/* price */}

      <div className="bg-[#FFF0DF] rounded-md w-full h-[70px] my-3 divide-x-2 divide-gray-300 flex items-center justify-evenly">
        <div className="px-2">
          <p className="text-red text-lg font-semibold">$98.00</p>
          <p className="text-gray-800 text-sm font-normal">50-100 pcs</p>
        </div>
        <div className="px-8">
          <p className="text-dark text-lg font-semibold">$90.00</p>
          <p className="text-gray-800 text-sm font-normal">100-700 pcs</p>
        </div>
        <div className="px-8">
          <p className="text-dark text-lg font-semibold">$78.00</p>
          <p className="text-gray-800 text-sm font-normal">700+ pcs</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 py-2">
        <p className="text-base text-gray-500 font-normal">Price:</p>

        <p className="text-base text-gray-600 font-normal">Negotiable</p>
      </div>

      <hr className="my-2 h-[1px] bg-gray-300 w-full" />

      <div className="grid grid-cols-2 lg:grid-cols-3 py-2">
        <p className="text-base text-gray-500 font-normal">Type:</p>

        <p className="text-base text-gray-600 font-normal">{type}</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 py-2">
        <p className="text-base text-gray-500 font-normal">Material:</p>

        <p className="text-base text-gray-600 font-normal">{material}</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 py-2">
        <p className="text-base text-gray-500 font-normal">Design:</p>

        <p className="text-base text-gray-600 font-normal">{design}</p>
      </div>

      <hr className="my-2 h-[1px] bg-gray-300 w-full" />

      <div className="grid grid-cols-2 lg:grid-cols-3 py-2">
        <p className="text-base text-gray-500 font-normal">Customization:</p>

        <p className="text-base text-gray-600 font-normal">{customization}</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 py-2">
        <p className="text-base text-gray-500 font-normal">Protection:</p>

        <p className="text-base text-gray-600 font-normal">{protection}</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 py-2">
        <p className="text-base text-gray-500 font-normal">Warranty:</p>

        <p className="text-base text-gray-600 font-normal">{warranty}</p>
      </div>
    </div>
  );
};

const SupplierCard = () => {
  return (
    <div className="space-y-5">
      <div className="border border-gray-300 rounded-md lg:w-[280px] h-fit p-3 my-2 lg:my-0 shrink-0 flex flex-col">
        <div className="flex gap-3 items-center">
          <div className="bg-[#C6F3F1] w-[48px] h-[48px] rounded-md flex items-center justify-center">
            <p className="text-[rgba(76,_167,_167,_0.60)] font-semibold text-2xl">
              R
            </p>
          </div>

          <div className="">
            <p className="text-base text-dark font-normal">Supplier</p>
            <p className="text-base text-dark font-normal">
              {product.supplier.name}
            </p>
          </div>
        </div>

        <hr className="my-2 h-[1px] bg-gray-300 w-full" />

        <div className="py-1.5 px-2 flex items-center gap-2">
          <img
            src="/images/316e46059ae904e8e3eb3ce29bd44599.png"
            alt=""
            className="w-[21px] h-[15px]"
          />
          <p className="text-gray-500">Germany, Berlin</p>
        </div>
        <div className="py-1.5 px-2 flex items-center gap-2">
          <Security className="text-gray-500 h-5 w-5" />
          <p className="text-gray-500">Verified Seller</p>
        </div>
        <div className="py-1.5 px-2 flex items-center gap-2">
          <Language className="text-gray-500 h-6 w-6" />
          <p className="text-gray-500">Worldwide shipping</p>
        </div>

        <Button variant="gradient" className="mt-5">
          Send inquiry
        </Button>

        <Button className="bg-white hover:bg-white/90 text-primary mt-2">
          Seller’s profile
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 cursor-pointer">
        <Favorite className="text-primary h-6 w-6" />
        <p className="text-primary font-medium">Save for later</p>
      </div>
    </div>
  );
};
