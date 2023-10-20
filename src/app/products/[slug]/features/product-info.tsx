/* eslint-disable @next/next/no-img-element */
import { Checkmark } from "@/components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import product from "@/data/product.json";
import React from "react";
import { ProductCard } from "./product-card";

type Props = {};
export const ProductInfo = (props: Props) => {
  return (
    <div className="flex gap-3 my-2 flex-col lg:flex-row">
      <Tabs
        defaultValue="description"
        className="flex-1 bg-white border border-gray-300 rounded-md"
      >
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="about-seller">About seller</TabsTrigger>
        </TabsList>

        <DescriptionCard />
      </Tabs>

      <RelatedCard />
    </div>
  );
};

const DescriptionCard = () => {
  const { description, model, style, certificate, content, size, memory } =
    product;
  return (
    <TabsContent value="description" className="p-5">
      <p className="text-gray-600 text-base font-normal">{description}</p>

      <div className="my-5 border border-gray-300 divide-y-1 divide-gray-300 lg:w-[567px]">
        <RowCard name="Model" value={model} />
        <RowCard name="Style" value={style} />
        <RowCard name="Certificate" value={certificate} />
        <RowCard name="Size" value={size} />
        <RowCard name="Memory" value={memory} />
      </div>

      <div className="space-y-2">
        {content.map((value, index) => (
          <div key={index} className="flex items-center gap-3">
            <Checkmark className="text-gray-300 h-5 w-5" />

            <p className="text-gray-600 text-base font-normal">{value}</p>
          </div>
        ))}
      </div>
    </TabsContent>
  );
};

const RowCard = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="grid grid-cols-3">
      <div className="px-2 py-2 bg-gray-200">
        <p className="text-gray-600 text-base font-normal">{name}</p>
      </div>

      <div className="px-2 py-2 col-span-2">
        <p className="text-gray-600 text-base font-normal">{value}</p>
      </div>
    </div>
  );
};

const RelatedCard = () => {
  return (
    <div className="lg:w-[300px] shrink-0 bg-white border border-gray-300 rounded-md p-3">
      <p className="text-dark font-semibold text-base pb-3">You may like</p>

      {related.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </div>
  );
};

const related = [
  {
    image: "/images/fcc6274edfb7e97f682185ec460b6d4f.png",
    name: "Men Blazers Sets Elegant Formal",
    price: "$7.00 - $99.50",
  },
  {
    image: "/images/b171e503e38e7b8c0a5fa03996d5d467.png",
    name: "Men Shirt Sleeve Polo Contrast",
    price: "$7.00 - $99.50",
  },
  {
    image: "/images/18aa7b0da8ec069e90fab9443221e2f2.jpeg",
    name: "Apple Watch Series Space Gray",
    price: "$7.00 - $99.50",
  },
  {
    image: "/images/2.jpg",
    name: "Men Shirt Sleeve Polo Contrast",
    price: "$7.00 - $99.50",
  },
  {
    image: "/images/8e68b15c28eb29234224b8b2f71d5eb5.png",
    name: "Apple Watch Series Space Gray",
    price: "$7.00 - $99.50",
  },
];
